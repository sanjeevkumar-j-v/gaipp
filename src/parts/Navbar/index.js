import React from "react";

function Navbar(props) {
  return (
    <div class="side-nav expand-lg">
      <div class="side-nav-inner">
        <ul class="side-nav-menu">
          <li class="side-nav-header">
            <span>Metadapp</span>
          </li>
          <li class="nav-item dropdown open">
            <a class="dropdown-toggle">
              <span class="icon-holder">
                <i class="lni-dashboard"></i>
              </span>
              <span class="title">Dashboard</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu sub-down">
              <li class="active">
                <a>Overview</a>
              </li>
              <li>
                <a>Yield Farming</a>
              </li>
              <li>
                <a>Liquidity Pool Data</a>
              </li>
              <li>
                <a>Dex Analytics</a>
              </li>
              <li>
                <a>NFT Analytic Data</a>
              </li>
              <li>
                <a>Token</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="/">
              <span class="icon-holder">
                <i class="lni-user"></i>
              </span>
              <span class="title">Clients</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu sub-down">
              <li>
                <a href="/">Email</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Calendar</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="chat-/">Chat App</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Contact</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="/">
              <span class="icon-holder">
                <i class="lni-users"></i>
              </span>
              <span class="title">Team</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu sub-down">
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
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Cards</a>
              </li>

              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Lists</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Typography</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="/">
              <span class="icon-holder">
                <i class="lni-briefcase"></i>
              </span>
              <span class="title">Project</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu sub-down">
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
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Modals</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Notifications</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Popover</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="slider-/">Progress Bars</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Tabs</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="/">Tooltips</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="/">
              <span class="icon-holder">
                <i class="lni-list"></i>
              </span>
              <span class="title">Task</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu sub-down">
              <li>
                <a href="line-/">Line Icons</a>
              </li>
              <li>
                <a href="fontawesome-/">Font Awesome</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="material-/">Material Design</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="/">
              <span class="icon-holder">
                <i class="lni-comments"></i>
              </span>
              <span class="title">Chat</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu sub-down">
              <li>
                <a href="form-/">Form Elements</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="form-/">Form Layouts</a>
              </li>

              <li>
                <span class="badge badge-primary badge-pro float-right">
                  Pro
                </span>
                <a href="form-/">Form Validation</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="dropdown-toggle" href="/">
              <span class="icon-holder">
                <i class="lni-control-panel"></i>
              </span>
              <span class="title">Users</span>
              <span class="arrow">
                <i class="lni-chevron-right"></i>
              </span>
            </a>
            <ul class="dropdown-menu sub-down">
              <li>
                <a href="basic-/">Basic Table</a>
              </li>
              <li>
                <span class="badge badge-primary badge-pro float-right">
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
