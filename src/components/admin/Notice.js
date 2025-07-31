export default function Notice(props){
  let text;

  if (props.showNote_Edit) { 
    text = `Edited ${props.showNote_Edit[1]} flight to ${props.showNote_Edit[0]}`;
  }

  if (props.showNote_Add) { 
    text = `Added ${props.showNote_Add[1]} flight to ${props.showNote_Add[0]}`;
  }

  if (props.showNote_Delete) { 
    text = "Deleted flight";
  }

  return (
    <div className="alert alert-info" role="alert">
      {text}&nbsp; 
      [
        <span 
          onClick={props.closeNotice} 
          style={{color: "blue", cursor: "pointer"}}
        >
        Close
        </span>
      ]
    </div>
  );
};