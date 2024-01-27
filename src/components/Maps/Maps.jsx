import { location } from "../Data/Location";
import "./Maps.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Location = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <div>
      <div className="maps-main-div">
        <LoadScript googleMapsApiKey="www.brihaspathi.com">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
