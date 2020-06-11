import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { BsArrowRight } from "react-icons/bs";
import api from "../../services/api";

function Results() {
  const [results, setResults] = useState();
  const { search } = useParams();

  useEffect(() => {
    api
      .get(`searchJSON?name=${search}&username=ptricspires&style=Long`)
      .then((response) => setResults(response.data.geonames));
  }, [search]);

  return (
    <Layout>
      <h2 className="mb-3">Resultados</h2>

      <ul className="list-group list-group-flush">
        {results?.map((cep) => (
          <li
            key={cep.countryId}
            className="list-group-item d-flex justify-content-between"
          >
            {cep.name}
            <div className="d-flex justify-content-between align-items-center">
              <span className="mr-2">{cep.countryCode}</span>
              <Link to={`/details/${cep.geonameId}`} className="text-muted">
                <BsArrowRight />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Results;
