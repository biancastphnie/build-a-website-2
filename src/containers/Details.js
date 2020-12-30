import React, { useState, useEffect, useMemo } from "react";
import dinodiscord from "../assets/dinodiscord.png";

function Details() {
  // TODO
  return (
    // Container
    <div className="flex flex-col items-center h-screen bg-blue-200 font">
      <div className="p-8 text-2xl font-semibold font-serif">
        Weather in CityName
      </div>

      <div className="flex flex-col p-8 border-2 rounded-md border-gray-500 items center">
        <div>haze</div>
        <div>current temperature</div>
      </div>

      <div>highest temperature</div>
      <div>cloudiness</div>
      <div>lowest temperature</div>
      <div>humidity</div>
      <div>wind speed</div>
      <div>chance of rain</div>

      <img src={dinodiscord} width="20%" height="20%" />
    </div>
  );
}

export default Details;
