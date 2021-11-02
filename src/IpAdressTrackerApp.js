import React, { useState } from "react";
import Header from "./components/Header";
import { Map } from "./components/Map";

import "../src/styles/IpAdressTrackerApp/IpAdressTrackerApp.css";
export default function IpAdressTrackerApp() {

  const [cords, setcords] = useState({
    lat: 35.63304462061077,
    lng: 139.8803621105462
  })

  return (
    <div className="Ip-adress-app">
      <Header setcords={setcords}/>

      <Map cords = {cords}/>

      <footer>Challenge by Frontend Mentor. Coded by <a href="https://github.com/paulxcz" target="_blank">Paulxcz</a>.</footer>
    </div>
  );
}
