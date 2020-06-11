import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <Layout>
      <form action="">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Cidade, Estado ou País"
                onBlur={(e) => setSearch(e.target.value)}
              ></input>
              <Link to={`/results/${search}`} className="btn btn-primary">
                Buscar
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Home;
