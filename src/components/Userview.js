import React, { useState, useEffect } from "react";
import "./Userview.css";
export default function Userview() {
  const [datass, setData] = useState([]);
  const [photo, setPhoto] = useState(" ");
  async function fetchData() {
    await fetch(
      `https://api.airtable.com/v0/appT04FLIKFeV89dh/Table%201?api_key=keyZjvD5awctdO1Nc`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.records);
        // setPhoto(data.records[0].fields.photo[0].url);
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
            <span>Name:</span>
            <span>{dat.fields.name}</span>
            <span>College:</span>
            <span>{dat.fields.college}</span>
            <span>Description:</span>
            <span>{dat.fields.description}</span>
            <span>Mobile:</span>
            
            <span>{dat.fields.mobile}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
