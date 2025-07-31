// Firebase security rules allow incoming data to be validated to prevent 
// malicious attacks.  I have indeed set up security rules but I didn't do it 
// to validate the flight number and time as this would be too long to do in 
// the Firebase console.  So with these two functions, if data is tampered, it 
// will default to a selected number.

export function validateFlightNum(val){
  var pattern = /^[0-9]/g;
  var result = val.match(pattern);
  if (result == null || val.length > 4) return "123";
  return val;
};

export function validateTime(val){
  if (isNaN(Number(val))) return "1200";
  if (val.length !== 4) return "1200";
  var time1 = Number(val.substr(0, 2));
  var time2 = Number(val.substr(2, 2));
  if (time1 < 9 || time1 > 22 || time2 > 59) return "1200";
  return val;  
};