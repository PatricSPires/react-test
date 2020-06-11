import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { BsArrowRight } from "react-icons/bs";
import api from "../../services/api";

function Results({ match }) {
  const [results, setResults] = useState();

  const { cep } = match.params;

  useEffect(() => {
    api
      .get(`searchJSON?name=brasil&username=ptricspires&style=Long`)
      .then((response) => setResults(response.data.geonames));
  }, [cep]);

  return (
    <Layout>
      <h2 className="mb-3">Resultados</h2>

      <ul className="list-group list-group-flush">
        {results &&
          results.map((cep) => (
            <li
              key={cep.countryId}
              className="list-group-item d-flex justify-content-between"
            >
              {cep.name}
              <div className="d-flex justify-content-between align-items-center">
                <span className="mr-2">{cep.countryCode}</span>
                <BsArrowRight />
              </div>
            </li>
          ))}
      </ul>
    </Layout>
  );
}

export default Results;
