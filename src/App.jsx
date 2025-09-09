import React from 'react';
import 'leaflet/dist/leaflet.css';
import {useState, useEffect} from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup} from 'react-leaflet';
import './index.css';

  //marker styling
const getMarkerProps = (magnitude)=>{
  let color = 'grey';
  let radius = 4;

  if(magnitude>=6.0){
    color='#ff0000';
    radius = 12;
  }
  else if(magnitude>=5.0){
    color='#f15e24';
    radius = 10;
  }
  else if(magnitude>4.0){
    color='#ff8c00'
    radius=8;
  }
  else if(magnitude>=3.0){
    color='#ffd900'
  }

  return{color, radius};
};

function App(){
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetching earthquake data
  //this is data fetching logic
  useEffect(()=>{
    const API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'

    const fetchEarthquakeData = async () =>{
      try {
        const response = await fetch(API_URL)
        if(!response.ok){
          throw new Error('HTTP error! status : ${response.status}');
        }
        const data = await response.json();
        setEarthquakeData(data.features);
      }catch(e){
        setError(e.message);
        console.error("Failed to fetch earthquake data : ",e);
      }finally{
        setLoading(false);
      }
    };
    fetchEarthquakeData();
  },[]);

// this will show a message when its loading
if (loading) {
  return <div className="flex justify-center items-center h-screen text-xl font-semibold">Loading earthquake data...</div>;
}

//this will show a error message when it fails loading or any error occured
if (error) {
  return <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-600">Error: {error}</div>;
}
  return(
    <div className = "relative h-screen w-screen">
      <MapContainer center={[20,0]} zoom={2} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={false}
        />
        {earthquakeData.map((features)=>{
          const {geometry, properties }= features;
          const [longitude,latitude] = geometry.coordinates;
          const {color, radius} = getMarkerProps(properties.mag);
          
          return(
            <CircleMarker
              key={features.id}
              center={[latitude,longitude]}
              pathOptions={{color:color, fillColor:color, fillOpacity: 0.8, weight:1}}
              radius={radius}
            >
              <Popup>
                <div className="p-2 font-sans">
                  <h3 className = "text-lg font-bold">Magnitude: {properties.mag}</h3>
                  <p classNmae = "mt-1">Location: {properties.place}</p>
                  <p className="text-sm text-gray-500">Time:{new Date(properties.time).toLocaleString()}</p>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
        
    </div>
  )
}

export default App; 