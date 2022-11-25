import style from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'alt="" />

            <div className = {style.profile} >
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/82606888?v=4"/>

                <strong>Ivan Filho</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit your Profile
                </a>
            </footer>
        </aside>
    )
}