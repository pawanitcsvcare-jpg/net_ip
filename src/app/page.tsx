"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Nav from "@/components/Nav";
import ColumnChart from "@/components/ColumnChart";
import DonutChart from "@/components/DonutChart";
import SubscribeChart from "@/components/SubscribeChart";
import UsageChart from "@/components/UsageChart";
import LineColumnChart from "@/components/LineColumnChart";
import BillingChart from "@/components/BillingChart";


export default function Home() {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [hoveredProgressBar, setHoveredProgressBar] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const closeDropdown = (id: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: false
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(openDropdowns).forEach(id => {
        if (openDropdowns[id] && dropdownRefs.current[id]) {
          if (!dropdownRefs.current[id]?.contains(event.target as Node)) {
            closeDropdown(id);
          }
        }
      });
    };

    if (Object.values(openDropdowns).some(isOpen => isOpen)) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdowns]);

  return (
    <div className="">
      <Header />
      <Nav />

      <div className="main-content">

        <div className="page-content">
          <div className="container-fluid">



            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar-md flex-shrink-0">
                        <span className="avatar-title bg-subtle-primary text-primary rounded fs-2">
                          <i className=" ri-sd-card-mini-line"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1 overflow-hidden ms-4">
                        <p className="text-muted text-truncate font-size-15 mb-2"> Activation Status</p>
                        <h3 className="fs-4 flex-grow-1 mb-3">2,760</h3>
                        <p className="text-muted mb-0 text-truncate"><span className="badge bg-subtle-success text-success font-size-12 fw-normal me-1"><i className="ri-arrow-right-up-line"></i> 2.8% Increase</span> vs last month</p>
                      </div>
                      <div className="flex-shrink-0 align-self-start">
                        <div className="dropdown" ref={(el) => { dropdownRefs.current['activation'] = el; }}>
                          <button
                            className="dropdown-toggle btn-icon border rounded-circle"
                            onClick={() => toggleDropdown('activation')}
                            aria-haspopup="true"
                            aria-expanded={openDropdowns['activation']}
                          >
                            <i className="ri-more-2-fill text-muted font-size-16"></i>
                          </button>
                          <div className={`dropdown-menu dropdown-menu-end ${openDropdowns['activation'] ? 'show' : ''}`}>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('activation')}>Yearly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('activation')}>Monthly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('activation')}>Weekly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('activation')}>Today</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar-md flex-shrink-0">
                        <span className="avatar-title bg-subtle-primary text-primary rounded fs-2">
                          <i className="ri-calendar-check-line"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1 overflow-hidden ms-4">
                        <p className="text-muted text-truncate font-size-15 mb-2"> Today's Usage</p>
                        <h3 className="fs-4 flex-grow-1 mb-3">2,657 </h3>
                        <p className="text-muted mb-0 text-truncate"><span className="badge bg-subtle-danger text-danger font-size-12 fw-normal me-1"><i className="ri-arrow-right-down-line"></i> 7.8% Loss</span> vs last month</p>
                      </div>
                      <div className="flex-shrink-0 align-self-start">
                        <div className="dropdown" ref={(el) => { dropdownRefs.current['usage'] = el; }}>
                          <button
                            className="dropdown-toggle btn-icon border rounded-circle"
                            onClick={() => toggleDropdown('usage')}
                            aria-haspopup="true"
                            aria-expanded={openDropdowns['usage']}
                          >
                            <i className="ri-more-2-fill text-muted font-size-16"></i>
                          </button>
                          <div className={`dropdown-menu dropdown-menu-end ${openDropdowns['usage'] ? 'show' : ''}`}>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('usage')}>Yearly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('usage')}>Monthly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('usage')}>Weekly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('usage')}>Today</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar-md flex-shrink-0">
                        <span className="avatar-title bg-subtle-primary text-primary rounded fs-2">
                          <i className=" ri-polaroid-2-line"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1 overflow-hidden ms-4">
                        <p className="text-muted text-truncate font-size-15 mb-2"> MSISDN Snapshot</p>
                        <h3 className="fs-4 flex-grow-1 mb-3">7,657 </h3>
                        <p className="text-muted mb-0 text-truncate"><span className="badge bg-subtle-success text-success font-size-12 fw-normal me-1"><i className="ri-arrow-right-up-line"></i> 4.6% Growth</span> vs last month</p>
                      </div>
                      <div className="flex-shrink-0 align-self-start">
                        <div className="dropdown" ref={(el) => { dropdownRefs.current['msisdn'] = el; }}>
                          <button
                            className="dropdown-toggle btn-icon border rounded-circle"
                            onClick={() => toggleDropdown('msisdn')}
                            aria-haspopup="true"
                            aria-expanded={openDropdowns['msisdn']}
                          >
                            <i className="ri-more-2-fill text-muted font-size-16"></i>
                          </button>
                          <div className={`dropdown-menu dropdown-menu-end ${openDropdowns['msisdn'] ? 'show' : ''}`}>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('msisdn')}>Yearly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('msisdn')}>Monthly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('msisdn')}>Weekly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('msisdn')}>Today</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar-md flex-shrink-0">
                        <span className="avatar-title bg-subtle-primary text-primary rounded fs-2">
                          <i className=" ri-settings-6-line"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1 overflow-hidden ms-4">
                        <p className="text-muted text-truncate font-size-15 mb-2"> Deactivation</p>
                        <h3 className="fs-4 flex-grow-1 mb-3">930 </h3>
                        <p className="text-muted mb-0 text-truncate"><span className="badge bg-subtle-success text-success font-size-12 fw-normal me-1"><i className="ri-arrow-right-up-line"></i> 23% Increase</span> vs last month</p>
                      </div>
                      <div className="flex-shrink-0 align-self-start">
                        <div className="dropdown" ref={(el) => { dropdownRefs.current['deactivation'] = el; }}>
                          <button
                            className="dropdown-toggle btn-icon border rounded-circle"
                            onClick={() => toggleDropdown('deactivation')}
                            aria-haspopup="true"
                            aria-expanded={openDropdowns['deactivation']}
                          >
                            <i className="ri-more-2-fill text-muted font-size-16"></i>
                          </button>
                          <div className={`dropdown-menu dropdown-menu-end ${openDropdowns['deactivation'] ? 'show' : ''}`}>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('deactivation')}>Yearly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('deactivation')}>Monthly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('deactivation')}>Weekly</a>
                            <a className="dropdown-item" href="#" onClick={() => closeDropdown('deactivation')}>Today</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-xl-8 col-md-12">
                <div className="card">
                  <div className="card-header border-0 align-items-center d-flex pb-0">
                    <h4 className="card-title mb-0 flex-grow-1">Activity</h4>
                    <div>
                      <button type="button" className="btn btn-soft-secondary btn-sm me-2">
                        ALL
                      </button>
                      <button type="button" className="btn btn-soft-secondary btn-sm me-2">
                        TODAY
                      </button>
                      <button type="button" className="btn btn-soft-secondary btn-sm me-2">
                        1M
                      </button>
                      <button type="button" className="btn btn-soft-secondary btn-sm me-2">
                        6M
                      </button>
                      <button type="button" className="btn btn-soft-primary btn-sm">
                        1Y
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-xl-8 audiences-border">
                        <ColumnChart />
                      </div>
                      <div className="col-xl-4">
                        <DonutChart />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-xl-4 col-md-12">
                <div className="card">
                  <div className="card-header border-0 align-items-center d-flex pb-0">
                    <h4 className="card-title mb-0 flex-grow-1">Recent Five Support Inquiry</h4>
                  </div>
                  <div className="card-body">
                  <h4 className="mb-0">2,546  <span className="text-muted font-size-12 font-weight-normal"> Total Inquiry </span></h4>
                       

                        <div className="mt-2 mb-2 pt-2 position-relative">
                          <div className="progress progress-lg rounded-pill px-0">
                            <div 
                              className="progress-bar bg-danger" 
                              role="progressbar" 
                              style={{ width: '20%' }} 
                              aria-valuenow={48} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                              onMouseEnter={() => setHoveredProgressBar('danger')}
                              onMouseLeave={() => setHoveredProgressBar(null)}
                            ></div>
                            <div 
                              className="progress-bar bg-secondary" 
                              role="progressbar" 
                              style={{ width: '30%' }} 
                              aria-valuenow={26} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                              onMouseEnter={() => setHoveredProgressBar('secondary')}
                              onMouseLeave={() => setHoveredProgressBar(null)}
                            ></div>
                            <div 
                              className="progress-bar bg-info" 
                              role="progressbar" 
                              style={{ width: '15%' }} 
                              aria-valuenow={48} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                              onMouseEnter={() => setHoveredProgressBar('info')}
                              onMouseLeave={() => setHoveredProgressBar(null)}
                            ></div>
                            <div 
                              className="progress-bar bg-success" 
                              role="progressbar" 
                              style={{ width: '9%' }} 
                              aria-valuenow={26} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                              onMouseEnter={() => setHoveredProgressBar('success')}
                              onMouseLeave={() => setHoveredProgressBar(null)}
                            ></div>         
                          </div>
                          {hoveredProgressBar && (
                            <div 
                              className="position-absolute bg-dark text-white px-2 py-1 rounded font-size-12"
                              style={{
                                bottom: '100%',
                                left: hoveredProgressBar === 'danger' ? '10%' : 
                                      hoveredProgressBar === 'secondary' ? '35%' : 
                                      hoveredProgressBar === 'info' ? '57.5%' : '77%',
                                transform: 'translateX(-50%)',
                                marginBottom: '5px',
                                whiteSpace: 'nowrap',
                                zIndex: 1000,
                                pointerEvents: 'none'
                              }}
                            >
                              {hoveredProgressBar === 'danger' && 'ReOpen: 20% (509 inquiries)'}
                              {hoveredProgressBar === 'secondary' && 'Pending Partner Review: 30% (764 inquiries)'}
                              {hoveredProgressBar === 'info' && 'New: 15% (382 inquiries)'}
                              {hoveredProgressBar === 'success' && 'Resolved: 9% (229 inquiries)'}
                              <div 
                                className="position-absolute"
                                style={{
                                  bottom: '-4px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: 0,
                                  height: 0,
                                  borderLeft: '4px solid transparent',
                                  borderRight: '4px solid transparent',
                                  borderTop: '4px solid #000'
                                }}
                              ></div>
                            </div>
                          )}
                        </div>
                        <div className="table-responsive">
                  <table className="table align-middle table-centered table-nowrap mb-0 top-five-cus-table-dash">
                  <thead>
                    <tr className="font-size-12">
                    <th scope="col">Ref. No</th>
                    <th scope="col">Status</th>
                    <th scope="col">Type</th>
                    <th scope="col">Updated Date</th>
                    </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td><h6 className="font-size-11">REF7964569</h6> </td>
                                <td><span className="badge badge-soft-danger font-size-12">ReOpen</span></td>
                                <td className="font-size-12">Voice</td>
                                <td>
                                <h6 className="font-size-12 mb-0">12-19-2025</h6>
                                <p className="text-muted mb-0 font-size-12">Telgoo5 (SupAdmin)</p>
                                </td>
                            </tr>
                            <tr>
                                <td><h6 className="font-size-11">REF796500</h6> </td>
                                <td><span className="badge badge-soft-secondary font-size-12">Pending Partner Review</span></td>
                                <td className="font-size-12">Voice,SMS</td>
                                <td>
                                <h6 className="font-size-12 mb-0">07-27-2025</h6>
                                <p className="text-muted mb-0 font-size-12">QAAdminuser	</p>
                                </td>
                            </tr>
                            <tr>
                                <td><h6 className="font-size-11">REF756001</h6> </td>
                                <td><span className="badge badge-soft-secondary font-size-12">Pending Partner Review</span></td>
                                <td className="font-size-12">API</td>
                                <td>
                                <h6 className="font-size-12 mb-0">07-27-2025</h6>
                                <p className="text-muted mb-0 font-size-12">BLUECONNECTS</p>
                                </td>
                            </tr>
                            <tr>
                                <td><h6 className="font-size-11">REF1973523</h6> </td>
                                <td><span className="badge badge-soft-info font-size-12">New</span></td>
                                <td className="font-size-12">Voice</td>
                                <td>
                                <h6 className="font-size-12 mb-0">12-19-2025</h6>
                                <p className="text-muted mb-0 font-size-12">Telgoo5 (SupAdmin)</p>
                                </td>
                            </tr>
                            <tr>
                                <td><h6 className="font-size-11">	REF0218435</h6> </td>
                                <td><span className="badge badge-soft-info font-size-12">New</span></td>
                                <td className="font-size-12">Voice,SMS,Data</td>
                                <td>
                                <h6 className="font-size-12 mb-0">07-27-2025</h6>
                                <p className="text-muted mb-0 font-size-12">QAAdminuser	</p>
                                </td>
                            </tr>
                           
                        </tbody>
                      </table>
                      </div>
                 
                  </div>

                </div>
              </div>

            </div>




            <div className="row">
              <div className="col-xl-7">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header border-0 align-items-center d-flex pb-0">
                        <h4 className="card-title mb-0 flex-grow-1">Subscriber's Overview</h4>
                        <div>
                          <div className="dropdown" ref={(el) => { dropdownRefs.current['sort'] = el; }} >
                            <a className="dropdown-toggle text-reset" onClick={() => toggleDropdown('subscribers')}
                              aria-haspopup="true"
                              aria-expanded={openDropdowns['subscribers']}>
                              <span className="fw-semibold">Sort By:</span>
                              <span className="text-muted cursor-pointer"> Monthly<i className="ri-arrow-down-s-line font-size-14 ms-1"></i></span>
                            </a>
                            <div className={`dropdown-menu dropdown-menu-end ${openDropdowns['subscribers'] ? 'show' : ''}`}>
                              <a className="dropdown-item" onClick={() => closeDropdown('subscribers')}>Today</a>
                              <a className="dropdown-item" onClick={() => closeDropdown('subscribers')}>Weekly</a>
                              <a className="dropdown-item" onClick={() => closeDropdown('subscribers')}>Monthly</a>
                              <a className="dropdown-item" onClick={() => closeDropdown('subscribers')}>Yearly</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <SubscribeChart />
                        <div className="social-content text-center">
                          <p className="text-uppercase mb-1">Total Subscriber</p>
                          <h3 className="mb-0">95,685</h3>
                        </div>
                        <p className="text-muted text-center mx-auto mt-4 mb-0">This overview provides a structured view of subscriber
                          distribution across different statuses.</p>
                        <div className="row gx-4 mt-1">
                          <div className="col-md-4">
                            <div className="mt-4">
                              <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={85}>
                                </div>
                              </div>
                              <p className="text-muted mt-2 pt-2 mb-0 text-uppercase font-size-13 text-truncate">Active
                              </p>
                              <h4 className="mt-1 mb-0 font-size-20">32,524</h4>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mt-4">
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={40}>
                                </div>
                              </div>
                              <p className="text-muted mt-2 pt-2 mb-0 text-uppercase font-size-13 text-truncate">Deactivated
                              </p>
                              <h4 className="mt-1 mb-0 font-size-20">12,625</h4>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="mt-4">
                              <div className="progress">
                                <div className="progress-bar badge-soft-info" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={20}>
                                </div>
                              </div>
                              <p className="text-muted mt-2 pt-2 mb-0 text-uppercase font-size-13 text-truncate">Rejected
                              </p>
                              <h4 className="mt-1 mb-0 font-size-20">1,745</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header border-0 align-items-center d-flex pb-0">
                        <h4 className="card-title mb-0 flex-grow-1">Top Five Recent Customer</h4>
                        <div>
                          <button type="button" className="btn btn-soft-primary btn-sm">
                            <i className="ri-download-line"></i> Download
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <h4 className="mb-0">2,625</h4>
                        <p className="mb-0 mt-2 text-muted">
                          <span className="badge badge-soft-success mb-0">
                            <i className="ri-arrow-up-line align-middle"></i>
                            15.72 % </span> vs. previous month</p>

                        <div className="mt-2 pt-1">
                          <div className="progress progress-lg rounded-pill px-0">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '48%' }} aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}></div>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '26%' }} aria-valuenow={26} aria-valuemin={0} aria-valuemax={100}></div>
                          </div>
                        </div>

                        <div className="table-responsive mt-3">
                          <table className="table align-middle table-centered table-nowrap mb-0 top-five-cus-table-dash">
                            <thead>
                              <tr className="font-size-12">
                                <th scope="col">ID</th>
                                <th scope="col">MSISDN</th>
                                <th scope="col">SIM</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="font-size-12">
                                <td><a href="javascript:void(0);" className="text-primary">10933</a></td>
                                <td>8122374107</td>
                                <td>8804300233127784100</td>
                                <td><span className="badge bg-subtle-danger text-danger font-size-11 ms-1">Inactive</span></td>
                              </tr>

                              <tr className="font-size-12">
                                <td><a href="javascript:void(0);" className="text-primary">10211</a></td>
                                <td>9125374603</td>
                                <td>7609300233127760125</td>
                                <td><span className="badge bg-subtle-success text-success font-size-11 ms-1">Active</span></td>
                              </tr>
                              <tr className="font-size-12">
                                <td><a href="javascript:void(0);" className="text-primary">10272</a></td>
                                <td>8023101650</td>
                                <td>8956001265910126589</td>
                                <td><span className="badge bg-subtle-danger text-danger font-size-11 ms-1">Inactive</span></td>
                              </tr>

                              <tr className="font-size-12">
                                <td><a href="javascript:void(0);" className="text-primary">10211</a></td>
                                <td>6780126701</td>
                                <td>8976951230945866012</td>
                                <td><span className="badge bg-subtle-danger text-danger font-size-11 ms-1">Inactive</span></td>
                              </tr>
                              <tr className="font-size-12">
                                <td><a href="javascript:void(0);" className="text-primary">10612</a></td>
                                <td>8691128018</td>
                                <td>76093002331277606580</td>
                                <td><span className="badge bg-subtle-success text-success font-size-11 ms-1">Active</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="text-center mt-3"><a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="ri-arrow-right-line ms-1"></i></a></div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-xl-5">
                                <div className="card">
                                    <div className="card-header border-0 align-items-center d-flex pb-0">
                                        <h4 className="card-title mb-0 flex-grow-1">Usage Overview</h4>
                                        <div>
                          <div className="dropdown" ref={(el) => { dropdownRefs.current['sort'] = el; }} >
                            <a className="dropdown-toggle text-reset" onClick={() => toggleDropdown('usageoverview')}
                              aria-haspopup="true"
                              aria-expanded={openDropdowns['usageoverview']}>
                              <span className="fw-semibold">Sort By:</span>
                              <span className="text-muted cursor-pointer"> Monthly<i className="ri-arrow-down-s-line font-size-14 ms-1"></i></span>
                            </a>
                            <div className={`dropdown-menu dropdown-menu-end ${openDropdowns['usageoverview'] ? 'show' : ''}`}>
                              <a className="dropdown-item" onClick={() => closeDropdown('usageoverview')}>Today</a>
                              <a className="dropdown-item" onClick={() => closeDropdown('usageoverview')}>Weekly</a>
                              <a className="dropdown-item" onClick={() => closeDropdown('usageoverview')}>Monthly</a>
                              <a className="dropdown-item" onClick={() => closeDropdown('usageoverview')}>Yearly</a>
                            </div>
                          </div>
                        </div>
                                    </div>
                                    <div className="card-body pt-2">
                                       <UsageChart />
                                    </div>
                                </div>
                            </div>
            </div>

            <div className="col-xl-12">
                                  <div className="card">
                                    <div className="card-header border-0 align-items-center d-flex pb-0">
                                        <h4 className="card-title mb-0 flex-grow-1">Billing Overview</h4>
                                        <div className="d-flex gap-4 align-items-center">
                                              <div className="dropdown" ref={(el) => { dropdownRefs.current['sort'] = el; }} >
                                                        <a className="dropdown-toggle text-reset" data-bs-toggle="dropdown"
                                                            aria-haspopup="true"  onClick={() => toggleDropdown('billing1')}
                                                            aria-expanded={openDropdowns['billing1']}>
                                                            <span className="text-muted cursor-pointer">Select company<i className="ri-arrow-down-s-line font-size-14 ms-1"></i></span>
                                                        </a>
                                                        <div className={`dropdown-menu dropdown-menu-end ${openDropdowns['billing1'] ? 'show' : ''}`}>
                                                           <a className="dropdown-item" onClick={() => closeDropdown('billing1')}>BLUECONNECTS</a>
                                                           <a className="dropdown-item" onClick={() => closeDropdown('billing1')}>GIANT</a>
                                                           <a className="dropdown-item" onClick={() => closeDropdown('billing1')}>SurgepaysWholesale</a>
                                                           <a className="dropdown-item" onClick={() => closeDropdown('billing1')}>Alpha Tech Demo</a>
                                                           <a className="dropdown-item" onClick={() => closeDropdown('billing1')}>STD Demo Company</a>
                                                        </div>
                                                    </div>
                                            <div className="dropdown"  ref={(el) => { dropdownRefs.current['sort'] = el; }} >
                                            <a className="dropdown-toggle text-reset" data-bs-toggle="dropdown"
                                                            aria-haspopup="true"  onClick={() => toggleDropdown('monthsdropdown')}
                                                            aria-expanded={openDropdowns['monthsdropdown']}>
                                                            <span className="text-muted cursor-pointer">June 2025<i className="ri-arrow-down-s-line font-size-14 ms-1"></i></span>
                                                        </a>
                                                        <div className={`dropdown-menu dropdown-menu-end ${openDropdowns['monthsdropdown'] ? 'show' : ''}`}>
                                                           <a className="dropdown-item" onClick={() => closeDropdown('monthsdropdown')}>June 2025</a>
                                                           <a className="dropdown-item" onClick={() => closeDropdown('monthsdropdown')}>July 2025</a>
                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn btn-soft-primary btn-sm">
                                                <i className="ri-download-line"></i> Download
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body pt-2">
                                       <div className="row">

                                        <div className="col-md-12 col-xl-5 audiences-border">
                                            <div className="billing-heding-das">Company wise MRC</div>
                                            <LineColumnChart />
                                        </div>  

                                        <div className="col-md-12 col-xl-7">
                                            <div className="billing-heding-das">Vendor wise MRC</div>
                                             <BillingChart />
                                        </div>

                                        </div>
                                    </div>
                                </div>

                                
                            </div>



          </div>
        </div>
      </div>
    </div>


  );
}
