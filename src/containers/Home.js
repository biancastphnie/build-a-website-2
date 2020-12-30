import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";

const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    // Container
    <div className="flex flex-col h-screen bg-blue-200 text-4x">
      <City cityName={"Jakarta"} temp={"30°C"} color={"bg-purple-400"} />
      <City cityName={"Seattle"} temp={"5°C"} color={"bg-purple-200"} />
      <City cityName={"Tokyo"} temp={"12°C"} color={"bg-purple-300"} />
      <City cityName={"Seoul"} temp={"-9°C"} color={"bg-purple-100"} />
    </div>
  );
}

export default Home;
