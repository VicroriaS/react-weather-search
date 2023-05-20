import React from "react";
import "./Weather.css";
export default function Weather()
{
    return (
      <div className="Weather">
        <h1>Odessa</h1>
        <button class="btn btn-primary" type="submit">
          Button
        </button>
        <ul>
          <li>Wednesday 12:00</li>
          <li>Sunny</li>
        </ul>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-6">
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
              />
            </div>
            <div className="col-6">
              {" "}
              <ul>
                <li>Precipitation</li>
                <li>Humidity</li>
                <li>Wind 10 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}