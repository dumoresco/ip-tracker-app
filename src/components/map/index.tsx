import { MapContainer, Marker, TileLayer } from "react-leaflet";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MapBoxProps {
  latitude: number;
  longitude: number;
  isLoading: boolean;
}
const MapBox: React.FC<MapBoxProps> = ({ latitude, longitude, isLoading }) => {
  return (
    <div className=" absolute bottom-0 h-screen w-screen z-[-99999]">
      {isLoading ? (
        <Skeleton width={"100vw"} height={"100vh"} />
      ) : (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ height: "100vh", width: "100vw", zIndex: -9999 }}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          zoomControl={false}
        >
          {" "}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[latitude, longitude]}></Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MapBox;
