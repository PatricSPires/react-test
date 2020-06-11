import React, { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import api from "../../services/api";

const Details = memo(({ match }) => {
  const [data, setData] = useState({});
  const [informations, setInformations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`getJSON?geonameId=${id}&username=ptricspires`).then((response) => {
      const {
        data: {
          toponymName,
          countryCode,
          name,
          population,
          lat,
          lng,
          wikipediaURL,
          timezone: { gmtOffset, timeZoneId },
        },
      } = response;

      setData({
        toponymName,
        countryCode,
      });

      setInformations([
        { key: "Name", value: name },
        { key: "Time zone", value: timeZoneId },
        { key: "GMT OFFSET", value: gmtOffset },
        { key: "Population", value: population },
        { key: "Latitude", value: lat },
        { key: "Longitude", value: lng },
        { key: "Wikipedia", value: wikipediaURL },
      ]);
    });
  }, [id]);

  return (
    <Layout>
      {informations && (
        <div className="card">
          <div className="card-header">
            {data.toponymName} - {data.countryCode}
          </div>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>

            {informations
              .filter((info) => info.value)
              .map((info) => {
                if (info.key === "Wikipedia") {
                  return (
                    <a
                      href={`https://${info.value}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-outline-info"
                    >
                      {info.key}
                    </a>
                  );
                }
                return (
                  <p className="card-text">
                    {info.key}: <span className="text-muted">{info.value}</span>
                  </p>
                );
              })}
          </div>
        </div>
      )}
    </Layout>
  );
});

export default Details;
