import logo from './logo.svg';
import './App.css';
import Hotelcard from './components/Hotelcard';
import { useEffect, useState, useCallback } from "react";
import Datepicker from './components/Datepicker';
import Button from '@mui/material/Button';
import { width } from '@mui/system';

function App() {
  const [hotels, sethotels] = useState([])
  let [min, setmin] = useState(0);
  let [max, setmax] = useState(0);
  let [rating, setRating] = useState(0);
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
      
      //let allhotels = [...hotels];
      sethotels(hotels.filter((hotel) => hotel.tripAdvisorRating >= rating))
    }, [rating])
    // useEffect(() => {
    //   setmin(hotels.reduce((min, curr) => {
    //     if(curr.lowRate < min){
    //       min = curr.lowRate;
    //     }
    //     return min;
    //   }, Infinity))

    //   setmax(hotels.reduce((max, curr) => {
    //     if(curr.lowRate > max){
    //       max = curr.lowRate;
    //     }
    //     return max;
    //   }, -Infinity))
    // }, [hotels])
    let sortByLowesttoHighest = () => {
      console.log("calling sorting 2")
      let sortHotel = [...hotels];
      sortHotel.sort((a, b) => {
        if(a.lowRate > b.lowRate){
          return 1;
        }
        else if (a.lowRate < b.lowRate){
          return -1;
        }
        return 0;
      })
      sethotels([...sortHotel])
    }
    let sortByHighesttoLowest = useCallback(
      () => {
      console.log("calling sorting 1")
      let sortHotel = [...hotels];
      sortHotel.sort((a, b) => {
        if(a.lowRate > b.lowRate){
          return -1;
        }
        else if (a.lowRate < b.lowRate){
          return 1;
        }
        return 0;
      })
      sethotels([...sortHotel])
    },[])
    
    const fetchData = async () => {
        let response = await fetch('https://640f09d6cde47f68db3f7dcd.mockapi.io/api/v1/hotels');
        let result = await response.json();
        console.log(result) 
        sethotels([...result]);
        //setisLoading(false);
    }
    return (
      <div className="App">
        <div style={{marginTop: "20px"}}>
          <Datepicker />
          <Datepicker />
          <Button variant="contained" color="success">
            Search
          </Button>
        </div>
        <div style={{position: "absolute", width: "300px"}}>
          <div style={{display: "flex", marginLeft: "30px"}}>
            {[1, 2, 3, 4, 5].map((val) => <div key={val} onClick={() => setRating(val)} style={{width: "20px",
    height: "25px",
    border: "1px solid", marginRight: "10px", cursor: "pointer"}}>{val}</div>)}
          </div>
        </div>
        <div style={{width: "600px", margin: "auto", position: "relative", top: "20px"}}>
          <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <div onClick={sortByLowesttoHighest} style={{cursor: "pointer"}}>Sort by lowest to highest</div>
            <div onClick={sortByHighesttoLowest} style={{cursor: "pointer"}}>Sort by highest to lowest</div>
          </div>
          {hotels.map((hotel) => <Hotelcard key={hotel.id} hotel={hotel}/>)}
        </div>
      </div>
    );
}

export default App;
