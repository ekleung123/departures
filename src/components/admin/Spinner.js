import { RotatingLines } from 'react-loader-spinner';
import { useState, useEffect } from "react";

export default function Spinner(props){
  const [waitMsg, setWaitMsg] = useState(false);

  useEffect(() => {
    setTimeout(toggleMsg, 5000);
  },[])

  const toggleMsg = () => setWaitMsg(true);

  return (
    <div>
      <RotatingLines 
        strokeColor="grey" 
        strokeWidth="5" 
        width="45" 
      />
      {waitMsg && <p>Are you online?</p>}
    </div>
  );
};