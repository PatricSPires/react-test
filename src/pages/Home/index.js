import React from "react";
import Layout from "../../components/Layout";

function Home() {
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
              ></input>
              <button type="submit" className="btn btn-primary">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Home;
