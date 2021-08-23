import React from "react";

const ShortenUrl = ({ handleSubmit, error, message }) => {
  return (
    <div className="shortenUrl">
      <h2>Shorten your url</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        Enter URL: &nbsp;{" "}
        <input
          className="input"
          type="text"
          name="url"
          id="url"
          placeholder="Your URL here"
        />
        <br /> Enter Alias: &nbsp;
        <input
          type="text"
          name="alias"
          id="alias"
          placeholder="Your alias here"
        />
        &nbsp;
        <input type="submit" value="Shorten!" />
      </form>
      <div>{message}</div>
    </div>
  );
};

export default ShortenUrl;
