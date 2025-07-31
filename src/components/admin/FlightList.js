import FlightEntry from "../../components/admin/FlightEntry"
import "./FlightList.css";

export default function FlightList(props){

  return (
    <table 
      className={`table table-bordered ${props.grayOut ? "" : "table-striped"}`}     
      style={{color: props.grayOut ? "DarkGray" : ""}}
    >
      <thead>
        <tr className={ props.grayOut ? "tableHeader_editing": "tableHeader" }>
          <th>Action</th>
          <th>Time</th>
          <th>Airline</th>
          <th>Flight #</th>
          <th>Destination</th>
          <th>Gate</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>        
        { props.flights && props.flights.map(data => (
          <FlightEntry 
            flightObj={{
              time: data.time,
              airline: data.airline,
              flightnum: data.flightnum,
              destination: data.destination,
              gate: data.gate,
              remarks: data.remarks,
              id: data.id,
              visible: data.visible,
            }} 
            key={data.id}
            clickDelete={() => props.clickDelete(data)}
            clickEdit={(editData) => props.clickEdit(editData)}
            isEditing={props.grayOut}
          />
        )) }
      </tbody>
    </table>    
  );
};