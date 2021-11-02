import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IpInfo } from "./IpInfo";


import "../styles/Header/Header.css";
export default function Header({setcords}) {

  const [ipToFind, setipToFind] = useState({
    visibility : false,
    ip : "",
  });

  const { visibility, ip } = ipToFind;

  
  return (
    <>
      <header>
        <h1>IP Address Tracker</h1>
        <div className="search-box">
          <input type="text"
            value = {ip}
            onChange = { ({target}) => { setipToFind({
              visibility: false,
              ip: target.value
            }) }}
            maxLength="15"
            placeholder = "Search for any IP adress or domain"
            />
          <button
            onClick={(e) => {
              e.preventDefault();
              setipToFind({
                ...ipToFind,
                visibility: !visibility,
              });
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} className="right-arrow" />
          </button>
        </div>

        {visibility && <IpInfo ipToFind={ip} setcords={setcords}/>}
      </header>
    </>
  );
}
