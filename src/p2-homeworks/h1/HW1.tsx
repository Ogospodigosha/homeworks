import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'bggbgbg fghfgh dfdf dfdvgfdvddgbgdbdf etgegeger ergwfdg fdgggggggggggggggfbfgbdg gfbgggggggggggggggggggggggggfc v bsdbdgb sdgdsf dfsgsdfg dfgsfffffffffffffffffffffffffffffffffffffffffffffffffffffffgd dfg df gdf gdg dsfgh fghfghfg hfjnghgjh ghjgjhghjg ghjgfghjf fhfgfghf ghjgujgm sdcsdca',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
