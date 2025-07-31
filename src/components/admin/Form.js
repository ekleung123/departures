import { useState, useEffect } from "react";
import { validateForm } from "../../hooks/validateForm";

import Inputs from "../formfields/Inputs";
import Selects from "../formfields/Selects";
import styles from "./Form.module.css";

export default function Form(props){
 
  const [time, setTime] = useState("");
  const [airline, setAirline] = useState("");
  const [flightnum, setFlightnum] = useState("");
  const [destination, setDestination] = useState("");
  const [gate, setGate] = useState("");
  const [remarks, setRemarks] = useState("On Time");

  let flightObj = {time, airline, flightnum, destination, gate, remarks};

  if (props.type === "edit" && props.flightObj){
    flightObj = {...flightObj, id: props.flightObj.id}
  };

  useEffect(() => {
    if (props.type === "edit" && props.flightObj) {
      setTime(props.flightObj.time);
      setAirline(props.flightObj.airline);
      setFlightnum(props.flightObj.flightnum);
      setDestination(props.flightObj.destination);
      setGate(props.flightObj.gate);
      setRemarks(props.flightObj.remarks);
    };
  }, [props.flightObj]);

  const submitHandler = () => {  
    const issue = validateForm(flightObj);
    if (issue != null) {
      alert(issue);
    } else {
      setTime("");
      setAirline("");
      setFlightnum("");
      setDestination("");
      setGate(1);
      setRemarks("On Time");
      props.formSubmit(flightObj);
    };
  };

  return (
    <div className={styles.form}>
      <h4>
        { 
          props.type === "add" ? 
          "Add Flight" : `Edit Flight ${flightnum} to ${destination}:`
        }
      </h4>
      <div>
        <Inputs data={time} onchg={val => setTime(val)} name="Time" />
        <Selects data={airline} onchg={val => setAirline(val)} name="Airline" />
        <Inputs data={flightnum} onchg={val => setFlightnum(val)} name="Flight #" />
        <Selects data={destination} onchg={val => setDestination(val)} name={"Destination"} />
        <Selects data={gate} onchg={val => setGate(val)} name="Gate" />
        <Selects data={remarks} onchg={val => setRemarks(val)} name="Remark" />
      </div>        
      <div style={{paddingTop: 8}}>
        <button className="btn btn-primary btn" onClick={submitHandler}>
          Submit
        </button>&nbsp;    
        <button className="btn btn-danger btn" onClick={props.closeSubmit}>
          Cancel
        </button>
      </div>
    </div>
  );
};