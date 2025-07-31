import { maxEntry } from "../../constants/text";

export default function AddButton(props){
  return (
    <p>
      <button
        className="btn btn-success" 
        onClick={() => {
          if ((props.flights.length - props.flightsNotVisible.length) > 14) {
            alert(maxEntry);
            return;
          }          
          props.closeNotice();
          props.setShowAddForm(true);
          props.setShowEditForm(false);
          props.setShowAddFlightLink(false);
        }}>
        Add Flight &nbsp;
        <span 
          className="material-symbols-outlined" 
          style={{verticalAlign: "text-top"}}
        >
          travel
        </span>
      </button>
    </p>
  );
};