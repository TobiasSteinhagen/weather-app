import useSWR from "swr"
import {useState} from "react"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const locationData =     [
    { city: "Hamburg", countryCode: "DE"},
    { city: "Los Angeles", countryCode: "US"},
  ]

  function getApiURL(location){
    if(!location){
      return null
    }
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=04d2f3433d4c4c0f64f0aeb781007f95`
  }

  export default function Searchbar(){
    const [location, setLocation] = useState("")
    const [suggestions, setSuggestions] = useState([]);

    const { data, error, isLoading } = useSWR(getApiURL(location), fetcher); 

    if (error) return <p>Error loading the data</p> 
    if (isLoading) return <p>Loading...</p>

    function handleChange(event){
        if(event.target.value.length >= 2) {
          const filteredLocationData = locationData.filter((locationData) => locationData.city.toLowerCase().includes(event.target.value.toLowerCase())
          );
          setSuggestions(filteredLocationData);        
        } else {
          setSuggestions([]);
        }
      }
      
      function handleSubmit(event){
        event.preventDefault()
        setLocation(event.target.search.value)
      }

    return(
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
    )
}