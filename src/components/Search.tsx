import React, { useState, FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertActions";
import { getWeather, setLoading } from "../store/actions/weatherActions";

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handelChange = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
    console.log(city);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      return dispatch(setAlert("City is required!"));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="title">{title}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Enter City name"
              value={city}
              onChange={handelChange}
            />
            <button className="search-button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
