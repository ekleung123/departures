import { Link } from "react-router-dom";
import styles from "./PageHeader.module.css";

export default function PageHeader(props){
  let mainText, logo, buttonLink, headerClass, arrowDirection;

  if (props.type === "admin"){
    mainText = "Control Panel - Airport Departure Screen";
    buttonLink = "/public";
    headerClass = "admin";
    arrowDirection = "right";
  } 
  
  if (props.type === "public"){
    mainText = "DEPARTURES";
    buttonLink = "/";
    logo = "travel";
    headerClass = "public";
    arrowDirection = "left";
  };

  if (props.type === "gate"){
    mainText = null;
    buttonLink = "/";
    headerClass = "public";
    arrowDirection = "left";
  };

  let arrow = (
    <span className={`material-symbols-outlined ${styles.toggleButton}`}>
      arrow_{arrowDirection}_alt
    </span>
  );

  let toggleContent = (props.type === "admin")?
    <span>Toggle View {arrow}</span> :
    <span>{arrow} Toggle View</span>;

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles[headerClass]}>
          <span className={`material-symbols-outlined ${styles.logo}`}>
            {logo}
          </span>{mainText}
        </h1>
      </div>
      <div className={styles.pageHeader} style={{float: "right"}}>
        <Link to={buttonLink} state={{flights: props.flights}}>
          <button 
            className="btn btn-primary btn-lg" 
            style={{
              float: "right", 
              visibility: (props.isBtnHidden ? "hidden" : null),
              fontFamily: "Arial",
              fontSize: 20,
            }}
          >
            {toggleContent}
          </button>          
        </Link>
      </div>
    </div>
  );
};