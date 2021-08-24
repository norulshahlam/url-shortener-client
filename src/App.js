import "./App.css";
import ShortenUrl from "./Components/ShortenUrl";
import UseShortenedUrl from "./Components/UseShortenedUrl";
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./Constants";
function App() {
  let [data, setData] = useState({
    loading: true,
    value: [],
    error: false,
    message: "",
  });

  const handleDelete = (e) => {
    e.preventDefault();
    axios({
      method: "delete",
      url: `${API_URL}/${e.target.id}`,
    })
      .then((response) => {
        setData({ ...data, loading: true, message: response.data });
      })
      .catch((error) => {
        console.log(error.response?.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    const alias = e.target.alias.value;

    axios({
      method: "post",
      url: `${API_URL}/`,
      header: { "Content-Type": "application/json" },
      data: { url, alias },
    })
      .then((response) => {
        setData({
          ...data,
          loading: true,
          error: false,
          message: response.data,
        });
      })
      .catch((error) => {
        setData({ ...data, error: true, message: error.response?.data });
      });
  };
  return (
    <div className="App">
      <h1>Welcome to URL shortener! Shorten your URL using alias</h1>
      <ShortenUrl
        handleSubmit={handleSubmit}
        error={data.error}
        message={data.message}
      />
      <UseShortenedUrl
        data={data}
        setData={setData}
        handleDelete={handleDelete}
      />
<div>

      By Norulshahlam
</div>
      norulshahlam@gmail.com
    </div>
  );
}

export default App;
