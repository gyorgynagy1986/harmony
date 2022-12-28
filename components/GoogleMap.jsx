import React, { Component } from 'react';
import {MarkerF,  GoogleMap, LoadScript,  } from '@react-google-maps/api';

const mapKey = process.env.NEXT_PUBLIC_SCKEY;
const styleID = process.env.NEXT_PUBLIC_MPKEY

const containerStyle = {

  width:'100%',
  maxWidth: '1320px',
  height:  '636px'
};


const center = [
  {
    lat: 46.216350,
    lng: 19.887050
  },
  
  {
    lat: 46.216350,
    lng: 19.887050
  },
]

const onLoad = (streetViewService) => {
  streetViewService.getPanorama({
    location: center, 
    radius: 50
  }, (data, status) => console.log(
    "StreetViewService results",
    { data, status }
  ))
};


class MyComponents extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey= {mapKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center[0]}
          zoom={15}
          options={{ mapId: styleID}}
        >

        {
       
       <MarkerF 
        position={center[1]}
        icon={"https://devayoga.hu/photos/pin.svg"}
       />
            
        }
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MyComponents


