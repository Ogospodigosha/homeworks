import React, {MouseEvent, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
       clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate

          setDate(new Date())


        }, 1000)
        setTimerId(id)
    }
    let years = date.getFullYear().toString()
    let month = date.getMonth().toString()
    let day = date.getDay().toString()
    let hours = date.getHours()
    let minutes = new Date().getMinutes().toString()
    let seconds = new Date().getSeconds().toString()
    const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        setShow(true)
    }
    const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        setShow(false)
    }

    const stringTime = hours + ":" + minutes + ":" + seconds // fix with date
    const stringDate = years + ":" +"0"+ month + ":" + "0"+day

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
