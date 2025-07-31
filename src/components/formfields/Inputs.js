export default function Inputs(props){
  return (
    <span className="field">
      {props.name}:
      <input 
        value={props.data} 
        onChange={(e) => props.onchg(e.target.value)} 
        size="2" 
      />
    </span>
  );
};