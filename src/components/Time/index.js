import React, { Component } from 'react';
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Time = ({date}) => formatDistanceToNow(date,  {includeSeconds: true}) 

Time.propTypes = {
    date: PropTypes.string
}

export default Time;
  