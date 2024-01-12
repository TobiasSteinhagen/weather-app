export default function Weather({ weatherData, location }) {
  return (
    <>
      <h1>Wetter in {location}</h1>
      <div>
        <h2>Aktuell: {weatherData.main.temp}°C.</h2>
        <p>Gefühlte Temperatur: {weatherData.main.feels_like}°C</p>
        <p>
          Höchstwert: {weatherData.main.temp_max}°C Tiefstwert:{" "}
          {weatherData.main.temp_min}°C
        </p>
      </div>
    </>
  );
}
