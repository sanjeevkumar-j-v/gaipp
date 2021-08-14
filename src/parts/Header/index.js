import React from "react";

function Header(props) {
  return (
    <div className="header navbar">
      <div className="header-container">
        <div className="nav-logo">
          <a>
            <b>
              <img src="assets/img/GAIPP-logo.png" width="100" alt="" />
            </b>
            {/* <span className="logo">METADAPP</span> */}
          </a>
        </div>
        <ul className="nav-left">
          <li>
            <a className="sidenav-fold-toggler">
              <i className="lni-menu"></i>
            </a>
            <a className="sidenav-expand-toggler">
              <i className="lni-menu"></i>
            </a>
          </li>
        </ul>
        <ul className="nav-right">
          <li className="search-box">
            <input
              className="form-control"
              type="text"
              placeholder="Type to search..."
            />
            <i className="lni-search"></i>
          </li>
          <li className="massages dropdown dropdown-animated scale-left">
            <span className="counter">3</span>
            <a className="dropdown-toggle" data-toggle="dropdown">
              <i className="lni-envelope"></i>
            </a>
            <ul className="dropdown-menu dropdown-lg">
              <li>
                <div className="dropdown-item align-self-center">
                  <h5>
                    <span className="badge badge-primary badge-pro float-right">
                      745
                    </span>
                    Messages
                  </h5>
                </div>
              </li>
              <li>
                <ul className="list-media">
                  <li className="list-item">
                    <a className="media-hover">
                      <div className="media-img">
                        <img src="assets/img/users/avatar-1.jpg" alt="" />
                      </div>
                      <div className="info">
                        <span className="title">Amanda Robertson</span>
                        <span className="sub-title">
                          Dummy text of the printing and typesetting industry.
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="media-hover">
                      <div className="media-img">
                        <img src="assets/img/users/avatar-2.jpg" alt="" />
                      </div>
                      <div className="info">
                        <span className="title">Danny Donovan</span>
                        <span className="sub-title">
                          It is a long established fact that a reader will
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="media-hover">
                      <div className="media-img">
                        <img src="assets/img/users/avatar-3.jpg" alt="" />
                      </div>
                      <div className="info">
                        <span className="title">Frank Handrics</span>
                        <span className="sub-title">
                          You have 87 unread messages
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="check-all text-center">
                <span>
                  <a className="text-gray">View All</a>
                </span>
              </li>
            </ul>
          </li>
          <li className="notifications dropdown dropdown-animated scale-left">
            <span className="counter">2</span>
            <a className="dropdown-toggle" data-toggle="dropdown">
              <i className="lni-alarm"></i>
            </a>
            <ul className="dropdown-menu dropdown-lg">
              <li>
                <h5 className="n-title text-center">
                  <i className="lni-alarm"></i>
                  <span>Notifications</span>
                </h5>
              </li>
              <li>
                <ul className="list-media">
                  <li className="list-item">
                    <a className="media-hover">
                      <div className="media-img">
                        <div className="icon-avatar bg-primary">
                          <i className="lni-envelope"></i>
                        </div>
                      </div>
                      <div className="info">
                        <span className="title">5 new messages</span>
                        <span className="sub-title">4 min ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="media-hover">
                      <div className="media-img">
                        <div className="icon-avatar bg-success">
                          <i className="lni-comments-alt"></i>
                        </div>
                      </div>
                      <div className="info">
                        <span className="title">4 new comments</span>
                        <span className="sub-title">12 min ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="media-hover">
                      <div className="media-img">
                        <div className="icon-avatar bg-info">
                          <i className="lni-users"></i>
                        </div>
                      </div>
                      <div className="info">
                        <span className="title">3 Friend Requests</span>
                        <span className="sub-title">a day ago</span>
                      </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="media-hover">
                      <div className="media-img">
                        <div className="icon-avatar bg-purple">
                          <i className="lni-comments-alt"></i>
                        </div>
                      </div>
                      <div className="info">
                        <span className="title">2 new messages</span>
                        <span className="sub-title">12 min ago</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="check-all text-center">
                <span>
                  <a className="text-gray">Check all notifications</a>
                </span>
              </li>
            </ul>
          </li>
          <li className="user-profile dropdown dropdown-animated scale-left">
            <a className="dropdown-toggle" data-toggle="dropdown">
              <img
                className="profile-img img-fluid"
                src="assets/img/avatar/avatar.jpg"
                alt=""
              />
            </a>
            <ul className="dropdown-menu dropdown-md">
              <li>
                <ul className="list-media">
                  <li className="list-item avatar-info">
                    <div className="media-img">
                      <img src="assets/img/avatar/avatar.jpg" alt="" />
                    </div>
                    <div className="info">
                      <span className="title text-semibold">Tomas Murray</span>
                      <span className="sub-title">UI/UX Desinger</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <a>
                  <i className="lni-cog"></i>
                  <span>Setting</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="lni-user"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="lni-envelope"></i>
                  <span>Inbox</span>
                  <span className="badge badge-pill badge-primary badge-pro pull-right">
                    2
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <i className="lni-lock"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
