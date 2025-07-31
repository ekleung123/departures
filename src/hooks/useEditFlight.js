import { useState } from "react";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { dbError2 } from "../constants/text";

export const useEditFlight = () => {
  const [isLoading_Edit, setIsLoading_Edit] = useState(false);
  const [showNote_Edit, setShowNote_Edit] = useState(false);

  const editFlight = async (data) => {
    setIsLoading_Edit(true);
    let id = data.id;
    delete data.id;
    data.visible = true;

    console.log("useEditFlight.js", data);

    try {
      let ref = doc(db, "flights", id);
      await setDoc(ref, data);
      setIsLoading_Edit(false);
      setShowNote_Edit([data.destination, data.time]);
    }
    catch {
      alert(dbError2);
      setIsLoading_Edit(false);
    }
  };
  return {editFlight, isLoading_Edit, showNote_Edit, setShowNote_Edit}
};