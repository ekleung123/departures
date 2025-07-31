import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { dbError, dbError2 } from "../constants/text";
import { collection, onSnapshot } from "firebase/firestore";
import { validateFlightNum, validateTime } from "./useValidateData"; 

export const useGetFlights = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading_Get, setIsLoading_Get] = useState(false);
  const [flightsNotVisible, setFlightsNotVisible] = useState(0);

  useEffect(() => {
    setIsLoading_Get(true);
    let ref = collection(db, "flights");

    try {
      const unsub = onSnapshot(ref, snapshot => {
        let results = [];
        snapshot.docs.forEach(doc => {
          let originalObj = {id: doc.id, ...doc.data()};
          let verifiedObj = {
            ...originalObj, 
            flightnum: validateFlightNum(originalObj.flightnum),
            time: validateTime(originalObj.time) 
          }
          results.push(verifiedObj);
        });

        if (results.length === 0) alert(dbError);
        let x = results.filter(val => val.visible === false);
        results.sort(function(a, b){return a.time - b.time})
        setFlights(results); 
        setIsLoading_Get(false);
        setFlightsNotVisible(x); 
      });
    }
    catch(e) {
      alert(dbError2);
    }
  }, []);  

  return {flights, isLoading_Get, flightsNotVisible}
};