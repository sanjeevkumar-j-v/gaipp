import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="side-nav expand-lg">
      <div className="side-nav-inner">
        <ul className="side-nav-menu">
          <li className="side-nav-header">
            <span>Metadapp</span>
          </li>
          <li className="nav-item dropdown open">
            <a className="dropdown-toggle">
              <span className="icon-holder">
                <i className="lni-dashboard"></i>
              </span>
              <span className="title">Dashboard</span>
              <span className="arrow">
                <i className="lni-chevron-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu sub-down">
              <NavLink to="/" activeClassName="active">
                Overview
              </NavLink>
              <NavLink to="/yield-farming" activeClassName="active">
                Yield Farming
              </NavLink>
              <NavLink to="/liquidity-pool-data" activeClassName="active">
                Liquidity Pool Data
              </NavLink>
              <NavLink to="/dex-analytics" activeClassName="active">
                Dex Analytics
              </NavLink>
              <NavLink to="/nft-analytic-data" activeClassName="active">
                NFT Analytic Data
              </NavLink>
              <NavLink to="/token" activeClassName="active">
                Token
              </NavLink>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="/">
              <span className="icon-holder">
                <i className="lni-user"></i>
              </span>
              <span className="title">Clients</span>
              <span className="arrow">
                <i className="lni-chevron-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu sub-down">
              <li>
                <a href="/">Email</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Calendar</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="chat-/">Chat App</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Contact</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="/">
              <span className="icon-holder">
                <i className="lni-users"></i>
              </span>
              <span className="title">Team</span>
              <span className="arrow">
                <i className="lni-chevron-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu sub-down">
              <li>
                <a href="/">Alert</a>
              </li>
              <li>
                <a href="/">Badge</a>
              </li>
              <li>
                <a href="/">Buttons</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Cards</a>
              </li>

              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Lists</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Typography</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="/">
              <span className="icon-holder">
                <i className="lni-briefcase"></i>
              </span>
              <span className="title">Project</span>
              <span className="arrow">
                <i className="lni-chevron-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu sub-down">
              <li>
                <a href="/">Accordions</a>
              </li>
              <li>
                <a href="/">Carousel</a>
              </li>
              <li>
                <a href="/">Dropdown</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Modals</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Notifications</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Popover</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="slider-/">Progress Bars</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Tabs</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Tooltips</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="/">
              <span className="icon-holder">
                <i className="lni-list"></i>
              </span>
              <span className="title">Task</span>
              <span className="arrow">
                <i className="lni-chevron-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu sub-down">
              <li>
                <a href="line-/">Line Icons</a>
              </li>
              <li>
                <a href="fontawesome-/">Font Awesome</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="material-/">Material Design</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="/">
              <span className="icon-holder">
                <i className="lni-comments"></i>
              </span>
              <span className="title">Chat</span>
              <span className="arrow">
                <i className="lni-chevron-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu sub-down">
              <li>
                <a href="form-/">Form Elements</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="form-/">Form Layouts</a>
              </li>

              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="form-/">Form Validation</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="dropdown-toggle" href="/">
              <span className="icon-holder">
                <i className="lni-control-panel"></i>
              </span>
              <span className="title">Users</span>
              <span className="arrow">
                <i className="lni-chevron-right"></i>
              </span>
            </a>
            <ul className="dropdown-menu sub-down">
              <li>
                <a href="basic-/">Basic Table</a>
              </li>
              <li>
                <span className="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="data-/">Data Table</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
