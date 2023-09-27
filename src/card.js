import React from "react";
import Check from "./check";
import Times from "./times";

function Card(props) {
  return (
    <div className="col-lg-4" key={props.title}>
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.title}
          </h5>
          <h6 className="card-price text-center">
            {props.cost}
            <span className="period">{props.per}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              <strong>{props.user}</strong>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.storage}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.publicProjects}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.access}
            </li>
            <li>
              <span className="fa-li">
                <Check title={props.title} />
              </span>
              {props.privateProjects}
            </li>
            <li>
              <span className="fa-li">
                <Check title={props.title} />
              </span>
              {props.support}
            </li>
            <li>
              <span className="fa-li">
                <Check title={props.title} />
              </span>
              {props.subdomain}
            </li>
            <li>
              <span className="fa-li">
                <Times title={props.title} />
              </span>
              {props.reportStatus}
            </li>
          </ul>
          <div className="d-grid">
            <button
              href="/"
              className="btn btn-primary text-uppercase text-center">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
