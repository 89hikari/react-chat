import React, { Component } from 'react';
import classNames from 'classnames';
import { Time, IconReaded } from '../';
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";
import { isToday } from 'date-fns';

import './Dialogs.scss';

const Dialogs = ({items, userId}) => {
    return (
        <div className="dialogs">
            {orderBy(items, ["created_at"], ["desc"]).map(item => (
                <DialogItem
                    key={item.user._id}
                    {... item}
                    isMe={item.user._id === userId}/>
            ))}            
        </div>
    );
};

export default Dialogs;
 