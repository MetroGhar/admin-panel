import React, { Component, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect } from "react";

const MyMapComponent = ({ setLongi, setLangi, longi, lati }) => {
  const containerStyle = {
    width: "100%",
    height: "60vh",
  };
  // console.log(longi, lati);

  // const [latt, setlatt] = useState(0);
  // const [longii, setLongii] = useState(0);

  // useEffect(() => {
  //   console.log(lati, longi);
  // }, [latt, longii]);
  // useEffect(() => {
  //   console.log(lati, longi);
  // }, [lati, longi]);

  const center = {
    lat: 12.9716,
    lng: 77.5946,
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyDw9TWvIDJ5VBc0okmmbfmTBAWeB2GgiaY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={(e) => {
            setLangi(e.latLng.lat());
            setLongi(e.latLng.lng());
          }}
        >
          {longi && lati && <Marker position={{ lat: lati, lng: longi }} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MyMapComponent;
