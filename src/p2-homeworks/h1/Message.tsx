import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: any
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            <img className={style.avatar} src={props.avatar} alt={"avatar"}/>
            <div className={style.other}>
                <div className={style.name}>{props.name}</div>
                <div className={style.writing}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
