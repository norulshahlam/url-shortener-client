import axios from "axios";
import React, { useEffect } from "react";
import { API_URL } from "../Constants";

const UseShortenedUrl = ({ data, setData, handleDelete }) => {
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/`,
    })
      .then((response) => {
        console.log(response);
        setData({
          ...data,
          error: false,
          loading: false,
          value: response.data,
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [data.loading]);

  return (
    <div className="useUrl">
      {!data.loading ? (
        data.value.length > 0 ? (
          <div>
            <h2>Use your shortened url</h2>
            <table>
              <tr>
                <th>id</th>
                <th>Shortened URL</th>
                <th>Long URL</th>
                <th>delete?</th>
              </tr>

              {data.value.map((v, i) => (
                <tr key={v.id}>
                  <td>{i + 1}</td>
                  <td>
                    {" "}
                    <a
                      href={`${API_URL}/${v.alias}`}
                      target="_blank"
                      rel="noreferrer"
                    >{`${API_URL}/${v.alias}`}</a>{" "}
                  </td>
                  <td>{v.url}</td>
                  <button
                    id={v.id}
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </table>
          </div>
        ) : (
          <h1>No Shortened URL Created!</h1>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UseShortenedUrl;
