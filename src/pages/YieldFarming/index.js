import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Farms from "../../components/Farms";
import Table from "../../components/Table";
import YieldList from "../../components/YieldList";
import PieChartWithCustomizedLabel from "../../components/Charts/PieChartWithCustomizedLabel";
import ClientItems from "../../components/ClientItems";
function YieldFarming(props) {
  return (
    <div className="page-container">
      <div className="main-content">
        <Breadcrumb pageName="Yield Farming" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Yield Farming</h1>
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
            <div className="col-lg-2 col-md-12 col-xs-12">
              <div className="card">
                <Farms />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-xs-12">
              <div className="card">
                <YieldList />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">TOP 5 POOL TVL</h4>
                </div>
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div style={{ height: "250px", width: "250px" }}>
                    <PieChartWithCustomizedLabel />
                  </div>
                  <ul className="pie-chart-color-desc">
                    <li>
                      <span></span> 1-Inch Chip
                    </li>
                    <li>
                      <span></span> 1-Inch Chip
                    </li>
                    <li>
                      <span></span> 1-Inch Chip
                    </li>
                    <li>
                      <span></span> 1-Inch Chip
                    </li>
                  </ul>
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

export default YieldFarming;
