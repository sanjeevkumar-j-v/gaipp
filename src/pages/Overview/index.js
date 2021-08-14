import React from "react";
import SimpleAreaChart from "../../components/Charts/SimpleAreaChart";
import CustomActivePieChart from "../../components/Charts/CustomActivePieChart";
import SimpleBarChart from "../../components/Charts/SimpleBarChart";
import Breadcrumb from "../../components/Breadcrumb";
import Strechcard from "../../components/Strechcard/index.";
import ClientItems from "../../components/ClientItems";
import Table from "../../components/Table";
function Overview(props) {
  return (
    <div className="page-container">
      <div className="main-content">
        <Breadcrumb />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Overview</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <Strechcard />
                <Strechcard />
                <Strechcard />
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Business Overview</h5>
                </div>
                <div className="card-body">
                  <div style={{ height: "372px" }}>
                    <SimpleAreaChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="card">
                <div className="card-body text-center">
                  <h4 className="header-title">Top 5 Market Cap</h4>
                  <p>Top 5 DeFi Projects by Market Capitalisation</p>
                  <div style={{ height: "300px" }}>
                    <CustomActivePieChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div className="card">
                <div className="card-body text-center">
                  <h4 className="header-title">Top 5 Market Cap</h4>
                  <p>
                    Total value locked comparison of the top yield optimiser
                    platforms
                  </p>
                  <div style={{ height: "300px" }}>
                    <SimpleBarChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body text-center">
                  <h4 className="header-title">
                    Top 5 Market Cap by total value locked
                  </h4>
                  <p>
                    Total value locked comparison of the top yield optimiser
                    platforms
                  </p>
                  <div style={{ height: "300px" }}>
                    <SimpleBarChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="text-center">
            <h4 className="header-title">Arrival Time</h4>
            <p>
              Total value locked comparison of the top yield optimiser platforms
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <ClientItems />
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <ClientItems />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Top 10 tokens of the chains</h4>
                </div>
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
