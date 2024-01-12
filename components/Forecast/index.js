import useSWR from "swr";
import { format } from "date-fns";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function getForecastData(location) {
  if (!location) {
    return null;
  }
  return `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&APPID=04d2f3433d4c4c0f64f0aeb781007f95`;
}

export default function Forecast({ location }) {
  const {
    data: forecastData,
    error,
    isLoading,
  } = useSWR(getForecastData(location), fetcher);

  if (error) return <p>Error loading the data</p>;
  if (isLoading) return <p>Loading...</p>;

  const test = forecastData.list;

  return (
    <ul>
      {test.map(({ dt, dt_txt, main }) => {
        const date = new Date(dt_txt);
        const formattedDateTime = format(date, "dd.MM. HH:mm");

        return (
          <li key={dt}>
            {formattedDateTime} / {main.temp_max}°C / {main.temp_min}°C
          </li>
        );
      })}
    </ul>
  );
}
