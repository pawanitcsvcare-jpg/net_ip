'use client';

export default function Nav() {
  return (
    <div className="topnav">
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
          <div className="collapse navbar-collapse" id="topnav-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="ri-apps-2-line"></i> Dashboard
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button">
                  <i className="ri-user-3-line"></i> Customer <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-apps">
                  <a href="#" className="dropdown-item">
                    Subscribers
                  </a>
                  <a href="#" className="dropdown-item">
                    Async Response
                  </a>
                  <a href="#" className="dropdown-item">
                    Reserve MSISDN Status
                  </a>

                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-email"
                      role="button"
                    >
                      Customer Profile <div className="arrow-down"></div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-email">
                      <a href="#" className="dropdown-item">
                        Orders
                      </a>
                      <a href="#" className="dropdown-item">
                        Purchase
                      </a>
                      <a href="#" className="dropdown-item">
                        History
                      </a>
                      <a href="#" className="dropdown-item">
                        Usage
                      </a>
                      <a href="#" className="dropdown-item">
                        Adjust Balance
                      </a>
                      <a href="#" className="dropdown-item">
                        Change Address
                      </a>
                    </div>
                  </div>
                  <a href="#" className="dropdown-item">
                    Recent Searches
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button">
                  <i className="ri-calendar-check-line"></i> Plan <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-apps">
                  <a href="#" className="dropdown-item">
                    Lookup Tariff
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button">
                  <i className="ri-flashlight-line"></i> Action <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-apps">
                  <a href="#" className="dropdown-item">
                    Bulk / Single Upload
                  </a>
                  <a href="#" className="dropdown-item">
                    Report
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button">
                  <i className="ri-archive-line"></i> Inventory <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-apps">
                  <a href="#" className="dropdown-item">
                    Manage Inventory
                  </a>
                  <a href="#" className="dropdown-item">
                    Add Inventory
                  </a>
                  <a href="#" className="dropdown-item">
                    Search Inventory
                  </a>
                  <a href="#" className="dropdown-item">
                    Total Assigned SIM
                  </a>
                  <a href="#" className="dropdown-item">
                    Assign / Re-assign SIMs
                  </a>
                  <a href="#" className="dropdown-item">
                    Inventory Report
                  </a>
                  <a href="#" className="dropdown-item">
                    eSIM Unlock
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button">
                  <i className="ri-arrow-left-circle-line"></i> Portin Order <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-apps">
                  <a href="#" className="dropdown-item">
                    Create New Order
                  </a>
                  <a href="#" className="dropdown-item">
                    Pending Portin
                  </a>
                  <a href="#" className="dropdown-item">
                    Cancel Portin
                  </a>
                  <a href="#" className="dropdown-item">
                    Completed Ports
                  </a>
                  <a href="#" className="dropdown-item">
                    Search Ports
                  </a>
                  <a href="#" className="dropdown-item">
                    Portin Eligibility
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-uielement"
                  role="button"
                >
                  <i className="ri-file-chart-line"></i> Report <div className="arrow-down"></div>
                </a>

                <div
                  className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                  aria-labelledby="topnav-uielement"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div>
                        <a href="#" className="dropdown-item">
                          MSISDN Snapshot
                        </a>
                        <a href="#" className="dropdown-item">
                          Activation – Billing
                        </a>
                        <a href="#" className="dropdown-item">
                          Deactivation
                        </a>
                        <a href="#" className="dropdown-item">
                          PortOut
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div>
                        <a href="#" className="dropdown-item">
                          PortIn
                        </a>
                        <a href="#" className="dropdown-item">
                          Usage Reports
                        </a>
                        <a href="#" className="dropdown-item">
                          Surgepay Usage Reports
                        </a>
                        <a href="#" className="dropdown-item">
                          MRC Subscriber
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div>
                        <a href="#" className="dropdown-item">
                          Vendor MRC Subscriber
                        </a>
                        <a href="#" className="dropdown-item">
                          Device Notification
                        </a>
                        <a href="#" className="dropdown-item">
                          PortOut Notification
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="ri-headphone-line"></i> Need Help?
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button">
                  <i className="ri-chat-1-line"></i> Inquiry <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-apps">
                  <a href="#" className="dropdown-item">
                    View Support Inquiry
                  </a>
                  <a href="#" className="dropdown-item">
                    Completed Inquiry
                  </a>
                  <a href="#" className="dropdown-item">
                    Summarize Report
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="ri-cpu-line"></i> Virtual LOC
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button">
                  <i className="ri-checkbox-circle-line"></i> Checks <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-apps">
                  <a href="#" className="dropdown-item">
                    Query SIM
                  </a>
                  <a href="#" className="dropdown-item">
                    Coverage
                  </a>
                  <a href="#" className="dropdown-item">
                    Validate Device
                  </a>
                  <a href="#" className="dropdown-item">
                    Get Vendor
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
