import React from 'react';

import loader from '../../../assets/images/loader.svg';

import './style.css';

const Loader = ({ style, height }) => (
  <div style={style} className="loader">
    <img src={loader} alt="Loading" height={height}></img>
  </div>
);

export default Loader;
