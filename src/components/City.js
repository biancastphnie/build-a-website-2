import React from "react";

// props -> cityName, temp, color
function City({ cityName, temp, color }) {
  return (
    <button
      href={"?/city?name" + cityName}
      className={"flex flex-row p-8 justify-between items-center " + color}
    >
      <div className="text-2xl">{cityName}</div>
      <div className="text-4xl">{temp}</div>
    </button>
  );
}

export default City;
