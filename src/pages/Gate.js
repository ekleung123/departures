import { useLocation } from "react-router-dom";

import styles from "./Gate.module.css";
import PageHeader from "../components/all/PageHeader";
import GateLogo from "../images/gatelogo.png";
import { airlines } from "../components/formfields/FormOptions";

export default function Gate(props){
  const {state} = useLocation();
  const data = state.flightObj;

  const isBlink = (data.remarks === "Boarding" || data.remarks === "Last Call");

  let x = state.flightObj.time.split(""); // add colon to time
  let formattedTime = x[0] + x[1] + ":" + x[2] + x[3];

  let z = state.flightObj.airline; // get airline prefix
  let airline = airlines.filter(val => { return val.name === z });
  let prefix = airline[0].code;

  return (
    <div className={styles.page}>
      <div className="container" style={{marginTop: 10}}>
        <PageHeader type="gate" />   
        <div className={styles.monitor}>
          <div className={styles.header}>
            <img src={GateLogo} alt="gate" className={styles.gatelogo} />
            Gate {data.gate}
          </div>
          <div className={styles.section1}>
            <div className={styles.section1a}>{prefix} {data.flightnum}</div>
            <div className={styles.section1b}>{formattedTime}</div>
          </div> 
          <div className={styles.section2}>
            <p className={styles.section2a}>{data.destination}</p>
            <p className={isBlink ? styles.section2b_blink : styles.section2b}>
              {data.remarks}
            </p>
          </div> 
        </div>     
      </div>
    </div>
  );
};