import React, { useEffect } from 'react';
import bigdog from '../images/bigdogfull.png';
import '../index.css'

const NotFound = () => {

  // This will run only once after the component is mounted
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div
    className='div404'
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404 Not Found!</h1>
      <img src={bigdog} alt="bigicedoge" />
    </div>
  );
};

export default NotFound;