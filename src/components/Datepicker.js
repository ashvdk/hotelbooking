import { useState } from "react";

function Datepicker(){
  console.log("calling date picker ")
    let [date, setdate] = useState("")
    console.log(date)
    function MyDatePicker() {
      const yesterday = new Date();
      const future = new Date();
      yesterday.setDate(yesterday.getDate());
      future.setDate(future.getDate() + 30); // Set yesterday's date
      const minDateString = yesterday.toISOString().split("T")[0]; // Format date as string
      const maxDateString = future.toISOString().split("T")[0]; 
      const inputStyle = {
            width: "200px", // Set the width to 200 pixels
            height: "34px", // Set the height to 30 pixels
            fontSize: "20px" // Set the font size to 16 pixels
        };
      return <input type="date" value={date} onChange={(event) => setdate(event.target.value)} min={minDateString} max={maxDateString} style={inputStyle}/>;
    }
    return MyDatePicker();
}

export default Datepicker;