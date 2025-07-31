import { remarks, airlines, destinations, gates } from "./FormOptions";
import "./FormFields.css";

const Selects = (props) => {

  let arr = [];
  if (props.name === "Remark") arr = remarks;
  if (props.name === "Airline") arr = airlines.map(val => val.name);
  if (props.name === "Destination") arr = destinations;
  if (props.name === "Gate") arr = gates;

  return (
    <span className="field">
      {props.name}:
      <select value={props.data} onChange={(e) => props.onchg(e.target.value)}>
        <option value="">--Select--</option>
        { arr.map(val => <option>{val}</option>) }
      </select>
    </span> 
  );
};

export default Selects;