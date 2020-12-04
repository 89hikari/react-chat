import React from 'react';
import PropTypes from 'prop-types'
import {Empty} from 'antd';
import {Message} from '../'

const Messages = ({ items }) => {
        // проверка есть ли сообщения или нет (items должно быть без отрицания)
        return !items ? <div>
            <Message
                avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                date={new Date(2020, 10, 1, 23, 44, 55)}
                isMe={false} />
            <Message
                avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                date={new Date(2020, 10, 1, 23, 52, 55)}
                isMe={true}
                isReaded={false} />
            <Message
                avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                date={new Date(2020, 10, 1, 23, 44, 55)}
                isMe={false} />
            <Message
                avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                date={new Date(2020, 10, 1, 23, 52, 55)}
                isMe={true}
                isReaded={false} />
            <Message
                avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                date={new Date(2020, 10, 1, 23, 44, 55)}
                isMe={false} />
            <Message
                avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                date={new Date(2020, 10, 1, 23, 52, 55)}
                isMe={true}
                isReaded={false} />
            <Message
                avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                date={new Date(2020, 10, 1, 23, 44, 55)}
                isMe={false} />
            <Message
                avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                date={new Date(2020, 10, 1, 23, 52, 55)}
                isMe={true}
                isReaded={false} />
            <Message
                avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                date={new Date(2020, 10, 1, 23, 44, 55)}
                isMe={false} />
            <Message
                avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                date={new Date(2020, 10, 1, 23, 52, 55)}
                isMe={true}
                isReaded={false} />
            <Message
                avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                date={new Date(2020, 10, 1, 23, 44, 55)}
                isMe={false} />
            <Message
                avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                date={new Date(2020, 10, 1, 23, 52, 55)}
                isMe={true}
                isReaded={false} />
            <Message
                avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                isTyping /> 
            </div> 
        : <Empty description="Nothing here" />
};  

Message.propTypes = {
    avatar: PropTypes.string,
};

export default Messages;
