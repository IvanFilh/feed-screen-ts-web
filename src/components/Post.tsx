import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'

interface IAuthor {
    name: string,
    role: string,
    avatarUrl: string,
}

interface IContent {
    type: 'paragraph' | 'link'
    content: string
}

interface IPostProps {
    author: IAuthor,
    publishedAt: Date,
    content: IContent[],

}

export function Post({author, publishedAt, content}: IPostProps) {

    const [comments, setComments] = useState([
        'Post bacana em?'
    ]  )

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR})

    function handleCreateNewComment (event: FormEvent){
        event.preventDefault()

       

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent< HTMLTextAreaElement >) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid (event: InvalidEvent < HTMLTextAreaElement >) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime='2022-11-12 11:10'>
                {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={style.content}>
                    {content.map(line=>{
                        if(line.type ==='paragraph') {
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href="https://github.com/IvanFilh?tab=repositories">{line.content}</a></p>
                        }
                    })}
            </div>
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder='Deixe um comentário'
                name='comment'
                onChange = {handleNewCommentChange}
                value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required
                />

                <footer>
                    <button type="submit" disabled={newCommentText.length== 0}>
                        Publicar</button>
                </footer>
            </form>
            <div className={style.commentList}>
                {comments.map(comment =>{
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}