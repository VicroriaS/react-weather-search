import React from "react";
import "./Weather.css";
export default function Weather()
{
    return (
      <div className="Weather">
        <form>
            <div className="row">
          <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
          />
          </div>
        <div className="col-3">
        <input type="submit" value="Search" class="btn btn-primary" />
        </div>
        </div>
        </form>
        <h1>Odessa</h1>
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