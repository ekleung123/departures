import { useNavigate } from "react-router-dom";

export default function FlightEntry(props){
  const flightObj = props.flightObj;
  const navigate = useNavigate();

  let editStyle = {};
  if (props.isEditing){
    editStyle = { 
      backgroundColor: "Silver", 
      borderColor: "Silver" 
    };
  };

  // console.log("FlightEntry.js", flightObj);

  if (!props.flightObj.visible) return null;

  return (
    <tr className="flightentry">
      <td>
        <button 
          className="btn btn-primary btn-sm" 
          onClick={() => props.clickEdit(flightObj)}
          style={editStyle}
        >
        Edit
        </button>
        &nbsp;
        <button 
          className="btn btn-danger btn-sm" 
          onClick={props.clickDelete}
          style={editStyle}
        >
        Delete
        </button>
      </td>
      <td>{flightObj.time}</td>
      <td>{flightObj.airline}</td>
      <td>{flightObj.flightnum}</td>
      <td>{flightObj.destination}</td>
      <td>
        <div style={{margin: "auto", textAlign: "center"}}>
          <span style={{marginRight: 8}}>{flightObj.gate}</span>
          <button 
            className="btn btn-secondary btn-sm" 
            onClick={() => navigate("/gate", { state: {flightObj: flightObj}})}
            style={editStyle}
          >
          View
          </button>
        </div>
      </td>
      <td>{flightObj.remarks}</td>
    </tr>
  );
};