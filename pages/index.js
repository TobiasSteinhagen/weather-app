import Searchbar from "@/components/Searchbar";
import Weather from "@/components/Weather";
import Forecast from "@/components/Forecast";

import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getApiURL(location) {
  if (!location) {
    return null;
  }
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=04d2f3433d4c4c0f64f0aeb781007f95`;
}

export default function HomePage() {
  const [location, setLocation] = useState("");

  const {
    data: weatherData,
    error,
    isLoading,
  } = useSWR(getApiURL(location), fetcher);

  if (error) return <p>Error loading the data</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Searchbar setLocation={setLocation} />
      <Weather weatherData={weatherData} location={location} />
      <Forecast location={location} />
    </>
  );
}
