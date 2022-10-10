import "./index.css";
import Header from "./components/header";
import DetailBox, { DetailProps } from "./detail-box";
import { useEffect, useState } from "react";
import MapBox from "./components/map";

interface DetailsProps2 {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DetailsProps2>({} as any);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    getInitialData();
  }, []);

  async function handleSearchIp(ip: string) {
    setIsLoading(true);

    try {
      const result = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_monzjQCnv8zWRYpXJzdR6lYzwur75&ipAddress=${ip}`
      );
      const data = await result.json();
      setData(data);
      setLat(data.location.lat);
      setLng(data.location.lng);
    } finally {
      setIsLoading(false);
    }
  }

  async function getInitialData() {
    setIsLoading(true);
    try {
      const result = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_monzjQCnv8zWRYpXJzdR6lYzwur75`
      );
      const data = await result.json();
      setData(data);
      setLat(data.location.lat);
      setLng(data.location.lng);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header handleSearchIp={handleSearchIp} />
      <div className=" flex items-center justify-center p-5 flex-col rounded-md w-5/6  bg-white  m-auto  mt-[-50px] z-100]">
        {data.isp ? (
          <DetailBox
            ip={data.ip}
            isp={data.isp}
            region={data.location?.region}
            country={data.location?.country}
            timezone={data.location?.timezone}
            isLoading={isLoading}
          />
        ) : (
          "Ip details not found"
        )}
      </div>
      <MapBox latitude={lat} longitude={lng} isLoading={isLoading} />
    </>
  );
}

export default App;
