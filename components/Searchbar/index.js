import { useState } from "react";

const locationData = [
  { index: "0", city: "Hamburg", countryCode: "DE" },
  { index: "1", city: "Los Angeles", countryCode: "US" },
  { index: "2", city: "Hamburg", countryCode: "US" },
];
export default function Searchbar({ setLocation }) {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState();

  function handleChange(event) {
    if (event.target.value.length >= 3) {
      const filteredLocationData = locationData.filter((locationData) =>
        locationData.city
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setSuggestions(filteredLocationData);
    } else {
      setSuggestions([]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLocation(event.target.search.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Search your city..."
          onChange={handleChange}
          name="search"
        />
        <button type="submit">Search</button>
        <div className="dropdown">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.index}
              onClick={() =>
                setValue(`${suggestion.city}, ${suggestion.countryCode}`)
              }
            >
              {suggestion.city}, {suggestion.countryCode}
            </div>
          ))}
        </div>
      </form>
    </>
  );
}
