import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

import './Status.scss';

const Status = ({online}) => {
        return (
            <div className={classNames("status", {"status--online": online})}>{online ? 'online' : 'offline'}</div>
        );
};

Status.propTypes = {
    online: PropTypes.bool
}

export default Status;
