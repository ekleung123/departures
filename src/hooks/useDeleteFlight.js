import { useState } from "react";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { dbError2 } from "../constants/text";

export const useDeleteFlight = () => {
  const [isLoading_Delete, setIsLoading_Delete] = useState(false);  
  const [showNote_Delete, setShowNote_Delete] = useState(false);

  const deleteFlight = async (data) => {
    if (window.confirm(`Are you sure you want to DELETE flight # ${data.flightnum} to ${data.destination} @ ${data.time}?`)) {
      try {
        setIsLoading_Delete(true);
        let ref = doc(db, "flights", data.id);
        let obj = {
          destination: data.destination,
          remarks: data.remarks,
          gate: data.gate,
          airline: data.airline,
          flightnum: data.flightnum,
          time: data.time,
          visible: false,
        };
        await setDoc(ref, obj);
        setIsLoading_Delete(false);
        setShowNote_Delete(true);
      } 
      catch {
        alert(dbError2);
        setIsLoading_Delete(false);
      }
    };
  };
  return {deleteFlight, isLoading_Delete, showNote_Delete, setShowNote_Delete}
};