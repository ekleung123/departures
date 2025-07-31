import styles from "./BoardEntry.module.css";

export default function BoardEntry(props){
  const flightObj = props.flightObj;
  let x = flightObj.remarks;
  let blinking = (x === "Boarding" || x === "Last Call") ? "blinking" : null;

  if (!flightObj.visible) return null;

    return (
    <tr className={styles.tableText}>
      <td>{flightObj.time}</td>
      <td>{flightObj.airline}</td>
      <td>{flightObj.flightnum}</td>
      <td>{flightObj.destination}</td>
      <td>{flightObj.gate}</td>
      <td>
        <span className={styles[blinking]}>{flightObj.remarks}</span>
      </td>
    </tr>
  );
};