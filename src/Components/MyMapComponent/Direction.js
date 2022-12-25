import React from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import { useState } from "react";

const Direction = () => {
  const [response, setResponse] = useState(null);
  const destination = "Dhaka";
  const origin = "Rajshahi";

  const directionsCallback = (mapResponse) => {
    console.log(mapResponse);

    if (mapResponse !== null) {
      if (mapResponse.status === "OK") {
        setResponse(mapResponse);
      } else {
        console.log("response: ", mapResponse);
      }
    }
  };
  // longitude
  // latitude
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyDw9TWvIDJ5VBc0okmmbfmTBAWeB2GgiaY">
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          // required
          zoom={14}
          // required
          center={{
            lat: 0,
            lng: -180,
          }}
        >
          {destination !== "" && origin !== "" && (
            <DirectionsService
              // required
              options={{
                destination: destination,
                origin: origin,
                travelMode: "DRIVING",
              }}
              // required
              callback={directionsCallback}
            />
          )}

          {response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Direction;
