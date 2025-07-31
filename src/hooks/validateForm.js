export const validateForm = (flightObj) => {

  // Validate Time Length

  if (isNaN(Number(flightObj.time)) || flightObj.time.length !== 4) {
    return "Please provide departure time with 4 digits.";
  };

  // Validate Time Format

  let timeMsg = false;
  let minutes = flightObj.time.substr(2, 2);
  let givenTime = Number(flightObj.time);
  if ((minutes > 59) || (givenTime < 900 || givenTime > 2300)) timeMsg = true;
  if (timeMsg) return "Please provide a properly formatted departure time between 0900 and 2300.  These are the airport operating hours.";

  // Validate Airline, Destination, Gate and Remarks

  if (flightObj.airline === "") return "Please select an airline.";
  if (flightObj.destination === "") return "Please select a destination.";
  if (flightObj.gate === "") return "Please select a gate number.";  
  if (flightObj.remarks === "") return "Please select a remark."; 

  // Validate Flight Number

  if (flightObj.flightnum === "") return "Please provide a flight number.";
  if (flightObj.flightnum.length > 4) return "Please provide a flight number between 1 and 4 digits.";
  if (isNaN(Number(flightObj.flightnum))) return "Please provide only digits for the flight number."
  
};