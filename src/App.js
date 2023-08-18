import React,{useState} from "react";



const App=()=>{

  let[lat,setLat]=useState("")
  let[long,setLong]=useState("")
  let[hemisphere,setHemisphere]=useState("")

  function findLocation(){
    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(
        (position)=>{
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);

         updateHemisphere(position.coords.latitude)
      
        }
      )
    }


  }
      function updateHemisphere(lat){


        if(lat>0){
          setHemisphere("Northern hemisphere")
        }
        else if(lat<0)
        {
          setHemisphere("Southern hemisphere")
        }
        else{
          setHemisphere("equitor")
        }
      }

  return(


    <div>

      <button onClick={findLocation}>Find MY Location</button>
      <h1>Latitute: {lat}</h1>
      <h1>Longitute: {long}</h1>
      {/* {
        lat && updateHemisphere()
      } */}
      <h1>Hemisphere: {hemisphere}</h1>
    </div>
  )
}
export default App;