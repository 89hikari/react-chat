import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';
import { Time, IconReaded, Avatar } from '../';
import { generateAvatarFromHash } from '../../utils/helpers';

import './DialogItem.scss';
import { format, isToday } from 'date-fns';

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm');
    } else {
        return format(created_at, 'dd.MM.yyyy')
    }
};

const DialogItem = ({user, created_at, unreaded, isMe, text}) => {
        return (
            <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline})}>
                <div className="dialogs__item-avatar"><Avatar user={user}/></div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{user.fullname}</b>
                        <span>
                            {getMessageTime(created_at)}
                        </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{text}</p>
                        {isMe && <IconReaded isMe={true} isReaded={true} />}
                        {unreaded > 0 && <span className="dialogs__item-info-bottom-counter">{unreaded}</span>}
                    </div>
                </div>
            </div>
        );
};

export default DialogItem;
