import style from './Comment.module.css'
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Avatar } from './Avatar';
import { useState } from 'react'


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }:CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
      }

    function handleLikeComment () {
        setLikeCount(likeCount + 1)
    }

    return(
        <div className={style.comment}>
            <Avatar src="https://avatars.githubusercontent.com/u/82606888?v=4" alt='' hasBorder={false} />
        <div className={style.commentBox}>
        <div className={style.commentContent}>
            <header>
                <div className={style.authorAndTime}>
                    <strong>Ivan Filho</strong>
                    <time title='11:10 18-11-2022' dateTime='2022-11-12 11:10'>Cerca uma 1h atrás</time>
                </div>
                <button title='Deletar comentário' onClick={handleDeleteComment}>
                    <Trash size={24}/>
                </button>
            </header>
            <p>{content}</p>
        </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>

    </div>
    )
}