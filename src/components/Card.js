import React from "react";

export default function Card(props) {
    return(
    <div className="card">
        <img src={`../images/${props.image}`}alt="location-img" className="location-image" />
        <div>
        <div className="card-stats">
            <img src="../images/Location.png" alt="Location-Icon" className="location-icon" />
            <span className="country-name">{props.location}</span>
            <span>
                <a href={props.googleMapsUrl} className="googleMap-link" target="_blank" rel="noreferrer">View on Google Maps</a>
            </span>
        </div>
        <h1 className="location-name">{props.title}</h1>
        <span className="start-date">{props.startDate} -</span>
        <span className="end-date">{props.endDate}</span>
        <p className="locaton-description"> {props.description}</p>
        </div>
    </div>
    );
}


