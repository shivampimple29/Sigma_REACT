import { useState } from "react";
import "./searchBox.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL =import.meta.env.VITE_API_URL;
  const API_KEY =import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const jsonResponse = await response.json();
      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  function handleChange(event) {
    setCity(event.target.value);
  }

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists</p>}
      </form>
    </div>
  );
}

export default SearchBox;
