import { useLocation } from "react-router-dom";

import PageHeader from "../components/all/PageHeader";
import styles from "./Public.module.css";
import BoardEntry from "../components/public/BoardEntry";

export default function Public() {
  const { state } = useLocation();
  const flights = state.flights;

  return (
    <div style={{backgroundColor: "#0126B2", display: "flex"}}>
      <div className="container" style={{marginTop: 10}}>
        <PageHeader type="public" />
        <table className={`table ${styles.eric} ${styles.tablestriped_pub}`}>
          <thead>
            <tr className={styles.tableHeader_pub}>
              <th>Time</th>
              <th>Airline</th>
              <th>Flight #</th>
              <th>Destination</th>
              <th>Gate</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            { flights && flights.map(data => (
              <BoardEntry
                flightObj={{
                  time: data.time,
                  airline: data.airline,
                  flightnum: data.flightnum,
                  destination: data.destination,
                  gate: data.gate,
                  remarks: data.remarks,
                  visible: data.visible,
                }} 
                key={data.id}
              />
            )) }
          </tbody>
        </table>
      </div>
    </div>
  )
};