import React from "react";
export default function Promo(props) {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={props.img}
        style={{ width: "100%", height: "auto", position: "relative" }}
      />
      <div className="d-flex align-items-center justify-content-center">
        <p
          style={{
            position: "absolute",
            top: "50%",
            color: "#FFF",
            fontWeight: "bold",
            backgroundColor: "#0a58ca",
          }}
          className="fs-3 p-2"
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
