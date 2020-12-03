import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button as BaseButton } from 'antd';
import classNames from "classnames";
import checkedImg from 'assets/img/checked.png'

import { Time, IconReaded } from '../';

import './Message.scss';

const Message = ({avatar, user, text, date, isMe, isReaded, isTyping}) => {
        return (
            <div className={classNames("message", {"message--isme" : isMe, "message--is-typing" : isTyping})}>
                <div className="message__avatar">
                     <img src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>
                
                <div className="message__content">
                {isMe && isReaded && <IconReaded isMe={isMe} isReaded={isReaded} /> }
                    <div className="message__bubble">
                        {isTyping &&
                            <div class="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        }
                        <p className="message__text">{text}</p>
                    </div>

                    {date && <span className="message__date"><Time date={date}/></span>}
                    
                </div>
            </div>
        );
};

Message.defaultProps = {
    user: {} 
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.object,
    isTyping: PropTypes.bool,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
};

export default Message;
