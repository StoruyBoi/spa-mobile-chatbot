import React, { useEffect, useState } from 'react';
import "../App.css"
import { useNavigate } from 'react-router-dom';
function CustoMessages() {
    const history = useNavigate();
    const [countdown, setCountdown] = useState(5);
  
    useEffect(() => {
      const countdownInterval = setInterval(() => {
        if (countdown > 1) {
          setCountdown(countdown - 1);
        } else {
          clearInterval(countdownInterval);
          history('/New'); // Navigate to the welcome page
        }
      }, 1000);
  
      return () => {
        clearInterval(countdownInterval);
      };
    }, [countdown, history]);
  

  return (
    <div className='ending'>
      <p>Thank you. In {countdown} seconds, bot will exit.</p>
    </div>
  );
}

export default CustoMessages;
