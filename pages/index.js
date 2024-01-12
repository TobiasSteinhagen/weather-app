import Searchbar from "@/components/Searchbar";

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
  console.log(location);

  const { data, error, isLoading } = useSWR(getApiURL(location), fetcher);
  console.log(data);

  if (error) return <p>Error loading the data</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Searchbar setLocation={setLocation} />
      {!data
        ? `Please search for your city`
        : `The current temperature in ${location} is ${data.main.temp}°C.`}
    </>
  );
}
