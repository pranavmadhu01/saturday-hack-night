import React, { useState, useEffect } from "react";
import "./Userview.css";
export default function Userview() {
  const [datass, setData] = useState([]);
  async function fetchData() {
    await fetch(process.env.REACT_APP_API_KEY)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.records);
      });
  }
  console.log(datass);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="user-view-wrapper">
      {datass.map((dat) => (
        <div className="user-card">
          <img src={dat.fields.photo[0].url} alt="" />
          <div className="card-inner-wrapper">
            <span className="bold">Name</span>
            <span>{dat.fields.name}</span>
            <span className="bold">College</span>
            <span>{dat.fields.college}</span>
            <span className="bold">Description</span>
            <span>{dat.fields.description}</span>
            <span className="bold">Mobile</span>

            <span>{dat.fields.mobile}</span>
          </div>
        </div>
      )).reverse()}
    </div>
  );
}
