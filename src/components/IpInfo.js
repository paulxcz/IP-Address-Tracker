import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import "../../src/styles/IpInfor/IpInfo.css";
import { getIpInfo } from "../helpers/getIpInfo";

export const IpInfo = ({ ipToFind, setcords }) => {
  
  const [IpInformation, setIpInformation] = useState({
    ip: "",
    location: {},
    isp: "",
  });

  useEffect(() => {
    getIpInfo(ipToFind)
      .then(({ ip, location, isp }) =>
        setIpInformation({
          ip,
          location,
          isp,
        })
      )
      .catch((err) => {
        console.error("ERROR: ", err.message);
        setIpInformation({
          ip: "-",
          location: {
            city: "-",
            country: "-",
            timezone: "-",
          },
          isp: "-",
        });
        alert("IP INVALID");
      });
  }, [ipToFind]);

  const { ip, location, isp } = IpInformation;
  const { city, lat, lng, country, timezone } = location;
    
  useEffect(() => {
    (lat !== undefined &&  lng !== undefined) && setcords({
      lat,
      lng
    });
  }, [lat, lng])
  
  // console.log(lat, lng);

  return (
    <>
      <div className="ip-info-container" >
        <div className="info">
          <span>IP ADRESS</span>
          {ip === "" ? <FontAwesomeIcon icon={faSpinner} spin /> : <b>{ip}</b>}
        </div>

        <div className="info">
          <span>LOCATION</span>
          {(city && country) === undefined ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : (
            <b>{`${city}, ${country}`}</b>
          )}
        </div>

        <div className="info">
          <span>TIMEZONE</span>
          {timezone === undefined ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : (
            <b>{timezone}</b>
          )}
        </div>

        <div className="info" id = "info-isp">
          <span>ISP</span>
          {isp === "" ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : (
            <b>{isp}</b>
          )}
        </div>
      </div>
    </>
  );
};

