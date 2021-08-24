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
          message: "Welcome!",
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response?.data);
        setData({ ...data, loading: false, message: "Unable to connect" });
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
                <th>Info</th>
                <th>delete?</th>
              </tr>
              {data.value.map((v, i) => (
                <tr key={v.id}>
                  <td>
                    <div>
                      <b>id:</b> {i + 1}
                    </div>
                    <div>
                      <b>Shortened URL: </b>
                      <a
                        href={`${API_URL}/${v.alias}`}
                        target="_blank"
                        rel="noreferrer"
                      >{`${API_URL}/${v.alias}`}</a>
                    </div>

                    <div>
                      <b>Long URL:</b> {v.url}
                    </div>
                  </td>
                  <td>
                    <button
                      id={v.id}
                      onClick={(e) => {
                        handleDelete(e);
                      }}
                    >
                     <i class="fa fa-trash"></i>
                    </button>
                  </td>
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
