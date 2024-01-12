import { useState } from "react";

const locationData = [
  { city: "Hamburg", countryCode: "DE" },
  { city: "Los Angeles", countryCode: "US" },
];
export default function Searchbar({ setLocation }) {
  const [suggestions, setSuggestions] = useState([]);

  function handleChange(event) {
    if (event.target.value.length >= 2) {
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
          type="search"
          list="suggestions"
          placeholder="Search your city..."
          onChange={handleChange}
          name="search"
        />
        <datalist id="suggestions">
          {suggestions.map((suggestion) => (
            <option key={suggestion.city} value={suggestion.city}></option>
          ))}
        </datalist>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
