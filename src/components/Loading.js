import React, { useState, useEffect } from 'react';
import LoadingBar from './LoadingBar';

const Loading = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, 1000); // 1초 후에 showLoading을 true로 설정

    return () => clearTimeout(timer); 
  }, []);

  if (!showLoading) {
    return null; // 1초가 지나기 전까지는 아무것도 렌더링하지 않음
  }

  return (
    <div style={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/images/loading.gif`} alt="Loading..." style={styles.gif} />
      <LoadingBar />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'white',
  },
  gif: {
    width: '150px',
    height: '150px',
  }
};

export default Loading;
