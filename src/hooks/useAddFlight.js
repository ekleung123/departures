import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { dbError2 } from "../constants/text";

export const useAddFlight = () => {
  const [isLoading_Add, setIsLoading_Add] = useState(false);
  const [showNote_Add, setShowNote_Add] = useState(false);

  // When user "adds" a flight, what actually happens is, this function finds an 
  // existing flight that's marked not visible and uses that slot.  Essentially,
  // it's updating a document and not creating a new one.  Because this
  // app's Firebase database doesn't use App Check, this function's update method
  // prevents possible malicious creation of documents in the Firebase's
  // collection.

  const addFlight = async (data, id) => {
    setIsLoading_Add(true);
    try {
      let ref = doc(db, "flights", id); 
      let update = {...data, visible: true};
      await setDoc(ref, update, {merge: true}); 
      setShowNote_Add([data.destination, data.time]);
      setIsLoading_Add(false);
    }
    catch {
      alert(dbError2);
      setIsLoading_Add(false);
    }
  };
  return {addFlight, isLoading_Add, showNote_Add, setShowNote_Add};
};