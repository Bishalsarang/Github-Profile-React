import React from 'react';
import loader from '../../../assets/images/loader.svg';
import './style.css';

const Loader = () => (
  <div style={{ textAlign: 'center' }}>
    <img src={loader} alt="Loading"></img>
  </div>
);

export default Loader;
