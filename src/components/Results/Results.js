import React from "react";
import "./Results.css";

function Results() {
  return (
    <div className="results">
      <p>Result page</p>
      {/* <ResultText /> */}
      <p>We found TWICE's concert will happend in 48104 soon...</p>
      {/* <ResultConcert /> */}
      <div>
        <img
          src="https://s1.ticketm.net/dam/a/e5e/24b29770-8572-4c83-b8a9-39a92d4cfe5e_1038911_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=800&height=450&fit=crop&auto=webp"
          alt=""
        />
        <h2>TWICE</h2>
        <div>
          <h3>TWICELIGHTS</h3>
          <p>2019/7/25 19:00</p>
        </div>
        <h3>TWICE</h3>
      </div>
      {/* <ResultSongs /> */}
      <div>
        <h2>Top Songs</h2>
        <div style={{ display: "flex" }}>
          <p>Song</p>
          <p>Artist</p>
          <p>Album</p>
          <p>Release Date</p>
          <p>Length</p>
        </div>
        {/* <Song /> */}
      </div>
    </div>
  );
}

export default Results;
