'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Navigation links data structure
const navigationLinks = [
  { title: 'Dashboard', href: '#', category: 'Main', icon: 'ri-apps-2-line' },
  { title: 'Subscribers', href: '#', category: 'Customer', icon: 'ri-user-3-line' },
  { title: 'Async Response', href: '#', category: 'Customer', icon: 'ri-user-3-line' },
  { title: 'Reserve MSISDN Status', href: '#', category: 'Customer', icon: 'ri-user-3-line' },
  { title: 'Orders', href: '#', category: 'Customer > Customer Profile', icon: 'ri-user-3-line' },
  { title: 'Purchase', href: '#', category: 'Customer > Customer Profile', icon: 'ri-user-3-line' },
  { title: 'History', href: '#', category: 'Customer > Customer Profile', icon: 'ri-user-3-line' },
  { title: 'Usage', href: '#', category: 'Customer > Customer Profile', icon: 'ri-user-3-line' },
  { title: 'Adjust Balance', href: '#', category: 'Customer > Customer Profile', icon: 'ri-user-3-line' },
  { title: 'Change Address', href: '#', category: 'Customer > Customer Profile', icon: 'ri-user-3-line' },
  { title: 'Recent Searches', href: '#', category: 'Customer', icon: 'ri-user-3-line' },
  { title: 'Lookup Tariff', href: '#', category: 'Plan', icon: 'ri-calendar-check-line' },
  { title: 'Bulk / Single Upload', href: '#', category: 'Action', icon: 'ri-flashlight-line' },
  { title: 'Report', href: '#', category: 'Action', icon: 'ri-flashlight-line' },
  { title: 'Manage Inventory', href: '#', category: 'Inventory', icon: 'ri-archive-line' },
  { title: 'Add Inventory', href: '#', category: 'Inventory', icon: 'ri-archive-line' },
  { title: 'Search Inventory', href: '#', category: 'Inventory', icon: 'ri-archive-line' },
  { title: 'Total Assigned SIM', href: '#', category: 'Inventory', icon: 'ri-archive-line' },
  { title: 'Assign / Re-assign SIMs', href: '#', category: 'Inventory', icon: 'ri-archive-line' },
  { title: 'Inventory Report', href: '#', category: 'Inventory', icon: 'ri-archive-line' },
  { title: 'eSIM Unlock', href: '#', category: 'Inventory', icon: 'ri-archive-line' },
  { title: 'Create New Order', href: '#', category: 'Portin Order', icon: 'ri-arrow-left-circle-line' },
  { title: 'Pending Portin', href: '#', category: 'Portin Order', icon: 'ri-arrow-left-circle-line' },
  { title: 'Cancel Portin', href: '#', category: 'Portin Order', icon: 'ri-arrow-left-circle-line' },
  { title: 'Completed Ports', href: '#', category: 'Portin Order', icon: 'ri-arrow-left-circle-line' },
  { title: 'Search Ports', href: '#', category: 'Portin Order', icon: 'ri-arrow-left-circle-line' },
  { title: 'Portin Eligibility', href: '#', category: 'Portin Order', icon: 'ri-arrow-left-circle-line' },
  { title: 'MSISDN Snapshot', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'Activation – Billing', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'Deactivation', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'PortOut', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'PortIn', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'Usage Reports', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'Surgepay Usage Reports', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'MRC Subscriber', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'Vendor MRC Subscriber', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'Device Notification', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'PortOut Notification', href: '#', category: 'Report', icon: 'ri-file-chart-line' },
  { title: 'Need Help?', href: '#', category: 'Main', icon: 'ri-headphone-line' },
  { title: 'View Support Inquiry', href: '#', category: 'Inquiry', icon: 'ri-chat-1-line' },
  { title: 'Completed Inquiry', href: '#', category: 'Inquiry', icon: 'ri-chat-1-line' },
  { title: 'Summarize Report', href: '#', category: 'Inquiry', icon: 'ri-chat-1-line' },
  { title: 'Virtual LOC', href: '#', category: 'Main', icon: 'ri-cpu-line' },
  { title: 'Query SIM', href: '#', category: 'Checks', icon: 'ri-checkbox-circle-line' },
  { title: 'Coverage', href: '#', category: 'Checks', icon: 'ri-checkbox-circle-line' },
  { title: 'Validate Device', href: '#', category: 'Checks', icon: 'ri-checkbox-circle-line' },
  { title: 'Get Vendor', href: '#', category: 'Checks', icon: 'ri-checkbox-circle-line' },
];

export default function Header() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isBulkOpen, setIsBulkOpen] = useState(false);
  const [isAdvanceOpen, setIsAdvanceOpen] = useState(false);
  const [isAddReportOpen, setIsAddReportOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModuleDropdownOpen, setIsModuleDropdownOpen] = useState(false);
  const [isModuleDropdown2Open, setIsModuleDropdown2Open] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchDropdownRef = useRef<HTMLDivElement>(null);
  const suggestionRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Helper function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsFilterOpen(false);
    setIsBulkOpen(false);
    setIsAdvanceOpen(false);
    setIsAddReportOpen(false);
    setIsOpen(false);
    setIsModuleDropdownOpen(false);
    setIsModuleDropdown2Open(false);
  };

  // Helper function to close search-related dropdowns (except main search)
  const closeSearchRelatedDropdowns = () => {
    setIsFilterOpen(false);
    setIsBulkOpen(false);
    setIsAdvanceOpen(false);
    setIsAddReportOpen(false);
    setIsModuleDropdownOpen(false);
    setIsModuleDropdown2Open(false);
  };

  // Helper function to close module dropdowns
  const closeModuleDropdowns = () => {
    setIsModuleDropdownOpen(false);
    setIsModuleDropdown2Open(false);
  };

  // Filter navigation links based on search query
  const filteredLinks = searchQuery.trim()
    ? navigationLinks.filter(link =>
        link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Handle click outside to close search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSearchDropdownOpen(false);
      }
    };

    if (isSearchDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchDropdownOpen]);

  // Reset selected index and refs when search query changes
  useEffect(() => {
    setSelectedIndex(-1);
    suggestionRefs.current = [];
  }, [searchQuery]);

  // Open dropdown when user starts typing
  useEffect(() => {
    if (searchQuery.trim() && !isSearchDropdownOpen) {
      closeAllDropdowns();
      setIsSearchDropdownOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isSearchDropdownOpen || filteredLinks.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => {
          const nextIndex = prev < filteredLinks.length - 1 ? prev + 1 : 0;
          // Scroll into view
          setTimeout(() => {
            suggestionRefs.current[nextIndex]?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
            });
          }, 0);
          return nextIndex;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => {
          const nextIndex = prev > 0 ? prev - 1 : filteredLinks.length - 1;
          // Scroll into view
          setTimeout(() => {
            suggestionRefs.current[nextIndex]?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
            });
          }, 0);
          return nextIndex;
        });
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < filteredLinks.length) {
          const selectedLink = filteredLinks[selectedIndex];
          window.location.href = selectedLink.href;
          setSearchQuery('');
          setIsSearchDropdownOpen(false);
          setSelectedIndex(-1);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsSearchDropdownOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div>
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="#" className="logo logo-dark">
              <span className="logo-sm header-logo">BlueConnects</span>
              <span className="logo-lg header-logo">BlueConnects</span>
            </a>
            <a href="#" className="logo logo-light">
              <span className="logo-sm header-logo">BlueConnects</span>
              <span className="logo-lg header-logo">BlueConnects</span>
            </a>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-24 d-lg-none header-item"
            data-bs-toggle="collapse"
            data-bs-target="#topnav-menu-content"
          >
            <i className="ri-menu-2-line align-middle"></i>
          </button>
        </div>
        </div>
        <div>
          <form className="app-search d-none d-lg-block">
            <div className="d-flex align-items-center gap-2">
            <div className="position-relative" ref={searchDropdownRef}>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                id="customSearchInput"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                onClick={() => {
                  if (!isSearchDropdownOpen) {
                    closeAllDropdowns();
                  }
                  setIsSearchDropdownOpen(!isSearchDropdownOpen);
                }}
              />
              <span 
                className="ri-search-line position-absolute cursor-pointer top-search-icons" 
                style={{ left: '10px' }}
                onClick={() => {
                  if (!isSearchDropdownOpen) {
                    closeAllDropdowns();
                  }
                  setIsSearchDropdownOpen(!isSearchDropdownOpen);
                }}
              ></span>
              <div className="shortcut-globally-search-parent">
                <div className="shortcut-globally-search">
                  <span>⌘</span>
                  <span>K</span>
                </div>
              </div>

              <div 
                className="custom-search-dropdown p-2" 
                id="customSearchDropdown"
                style={{ display: isSearchDropdownOpen ? 'block' : 'none' }}
              >
                  <div className="globally-search-filter-all">
                    <div className="globally-search-filter-under-row">
                      {/* Filter Trigger */}
                      <div
                        className={`gf-filter-trigger ${isFilterOpen ? 'active' : ''}`}
                        id="gfFilterToggle"
                        onClick={() => {
                          if (!isFilterOpen) {
                            setIsBulkOpen(false);
                            setIsAdvanceOpen(false);
                            setIsAddReportOpen(false);
                            closeModuleDropdowns();
                          }
                          setIsFilterOpen(!isFilterOpen);
                        }}
                      >
                        <i className="ri-equalizer-line"></i>
                      </div>

                      {/* Overlay */}
                      {isFilterOpen && (
                        <div
                          className="gf-filter-overlay"
                          id="gfFilterOverlay"
                          onClick={() => setIsFilterOpen(false)}
                        ></div>
                      )}

                      {/* Filter Panel */}
                    
                        <div className="gf-filter-panel" id="gfFilterPanel" style={{ display: isFilterOpen ? 'block' : 'none' }}>
                          <div className="gf-filter-panel-overflow">
                            {/* All Module */}
                            <div
                              className={`gf-filter-item gf-module-trigger ${isModuleDropdownOpen ? 'show' : ''}`}
                              id="gfModuleToggle"
                              onClick={() => {
                                if (!isModuleDropdownOpen) {
                                  setIsModuleDropdown2Open(false);
                                }
                                setIsModuleDropdownOpen(!isModuleDropdownOpen);
                              }}
                            >
                              <span className="gf-icon ri-apps-line"></span>
                              <span className="gf-text">Customer module</span>
                              <span className="gf-arrow ri-arrow-down-s-line"></span>
                            </div>

                            {/* Module Dropdown */}
                          
                              <div className="gf-module-dropdown" id="gfModuleDropdown" style={{ display: isModuleDropdownOpen ? 'block' : 'none' }}>
                                <div className="gf-module-search">
                                  <input type="text" placeholder="Find type" />
                                  <i className="ri-search-line"></i>
                                </div>
                                <ul className="gf-module-list">
                                  <li className="active">
                                    <i className="ri-user-3-line"></i> Customer
                                  </li>
                                  <li>
                                    <i className="ri-calendar-check-line"></i> Plan
                                  </li>
                                  <li>
                                    <i className="ri-flashlight-line"></i> Action
                                  </li>
                                  <li>
                                    <i className="ri-archive-line"></i> Inventory
                                  </li>
                                  <li>
                                    <i className="ri-arrow-left-circle-line"></i> Portin Order
                                  </li>
                                  <li>
                                    <i className="ri-file-chart-line"></i> Report
                                  </li>
                                  <li>
                                    <i className="ri-chat-1-line"></i> Inquiry
                                  </li>
                                  <li>
                                    <i className="ri-checkbox-circle-line"></i> Checks
                                  </li>
                                </ul>
                              </div>
                          

                            {/* Other Filters */}
                            <div
                              className={`gf-filter-item gf-module-trigger ${isModuleDropdown2Open ? 'show' : ''}`}
                              id="gfModuleToggle2"
                              onClick={() => {
                                if (!isModuleDropdown2Open) {
                                  setIsModuleDropdownOpen(false);
                                }
                                setIsModuleDropdown2Open(!isModuleDropdown2Open);
                              }}
                            >
                              <span className="gf-icon ri-calendar-line"></span>
                              <span className="gf-text">Subscribers</span>
                              <span className="gf-arrow ri-arrow-down-s-line"></span>
                            </div>

                            {/* Module Dropdown */}
                            
                              <div className="gf-module-dropdown" id="gfModuleDropdown2" style={{ display: isModuleDropdown2Open ? 'block' : 'none' }}>
                                <ul className="gf-module-list">
                                  <li className="active">Subscribers</li>
                                  <li className="">Async Response</li>
                                  <li>Reserve MSISDN Status</li>
                                </ul>
                              </div>
                           
                            <div className="gf-filter-item-input">
                              <input
                                type="text"
                                className="globally-search-inputs"
                                placeholder="Enter MSISDN"
                              />
                            </div>

                            <div className="gf-filter-item-input">
                              <select className="globally-search-inputs" aria-label="Default select example">
                                <option>Select Company</option>
                                <option value="1">ABC Company</option>
                                <option value="2">Admin Com</option>
                                <option value="3">adminQAfinal company</option>
                                <option value="4">Alchemy Test</option>
                                <option value="5">Alpha Tech Demo</option>
                              </select>
                            </div>

                            <div className="gf-filter-item-input">
                              <select className="globally-search-inputs" aria-label="Default select example">
                                <option>Select Vendor / MVNO</option>
                                <option value="1">adminQAfinalvender</option>
                              </select>
                            </div>

                            <div className="gf-filter-item-input">
                              <input
                                type="text"
                                className="globally-search-inputs"
                                placeholder="SIM"
                              />
                            </div>

                            <div className="gf-filter-item-input">
                              <select className="globally-search-inputs" aria-label="Default select example">
                                <option>Select Account Status</option>
                                <option value="1">Active</option>
                                <option value="2">Deactivated</option>
                                <option value="3">Rejected</option>
                                <option value="4">Suspended</option>
                                <option value="5">Reserve</option>
                              </select>
                            </div>

                            <div className="gf-filter-item-input">
                              <select className="globally-search-inputs" aria-label="Default select example">
                                <option>Select Account Type</option>
                                <option value="1">Activation</option>
                                <option value="2">Porting</option>
                              </select>
                            </div>
                          </div>

                          <div className="globally-apply-flter border-0 pt-0">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm waves-effect waves-light me-2"
                            >
                              Reset <i className="ri-restart-line align-middle"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm waves-effect waves-light"
                            >
                              Apply <i className="ri-arrow-right-line align-middle"></i>
                            </button>
                          </div>
                        </div>
                     

                      <div className="globally-sear-drop-btn advance-sarc-input-wi">
                        <div className="" role="group" aria-label="">
                          <div className="btn-group" role="group">
                            <button
                              id="btnGroupVerticalDrop1"
                              type="button"
                              className={`search-cusbtn ${isAdvanceOpen ? 'show' : ''}`}
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              onClick={() => {
                                if (!isAdvanceOpen) {
                                  setIsFilterOpen(false);
                                  setIsBulkOpen(false);
                                  setIsAddReportOpen(false);
                                  closeModuleDropdowns();
                                }
                                setIsAdvanceOpen(!isAdvanceOpen);
                              }}
                            >
                              <i className="ri-search-2-line"></i> Advance Search
                              <i className="ri-arrow-down-s-line font-size-16"></i>
                            </button>

                            <div className={`dropdown-menu p-3 ${isAdvanceOpen ? 'show' : 'd-none'}`}>
                              <div className="row">
                                <div className="col-sm-12 col-md-6 mb-2">
                                  <input className="form-control" type="text" placeholder="MSISDN" />
                                </div>
                                <div className="col-sm-12 col-md-6 mb-2">
                                  <input className="form-control" type="text" placeholder="SIM" />
                                </div>
                                <div className="col-sm-12 col-md-6 mb-2">
                                  <input className="form-control" type="text" placeholder="Customer ID" />
                                </div>
                                <div className="col-sm-12 col-md-6 mb-2">
                                  <input className="form-control" type="text" placeholder="IMEI" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                  <input className="form-control" type="text" placeholder="ZIP" />
                                </div>
                              </div>

                              <div className="globally-apply-flter border-0 pt-0">
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-sm waves-effect waves-light me-2"
                                >
                                  Reset <i className="ri-restart-line align-middle"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-sm waves-effect waves-light"
                                >
                                  Apply <i className="ri-arrow-right-line align-middle"></i>
                                </button>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div className="globally-sear-drop-btn">
                        <div className="" role="group" aria-label="">
                          <div className="btn-group" role="group">
                            <button
                              id="btnGroupVerticalDrop1"
                              type="button"
                              className={`search-cusbtn ${isBulkOpen ? 'show' : ''}`}
                              onClick={() => {
                                if (!isBulkOpen) {
                                  setIsFilterOpen(false);
                                  setIsAdvanceOpen(false);
                                  setIsAddReportOpen(false);
                                  closeModuleDropdowns();
                                }
                                setIsBulkOpen(!isBulkOpen);
                              }}
                            >
                              <i className="ri-file-list-3-line"></i> Bulk Report
                              <i className="ri-arrow-down-s-line font-size-16"></i>
                            </button>
                            <div className={`dropdown-menu ${isBulkOpen ? 'show' : 'd-none'}`}>
                              <div className="globally-sear-drop-listt bulk-upload-filter-sec">
                                <div className="gf-filter-item-input">
                                  <select className="globally-search-inputs" aria-label="Default select example">
                                    
                                    <option value="ESNACT">SIM Activation (PC119)</option>
                                    <option value="PLANCHANGE">Plan Change (PC121)</option>
                                    <option value="MDNDISCON">MSISDN Disconnect (PC123)</option>
                                    <option value="MDNRECON">MSISDN Reconnect (PC125)</option>
                                    <option value="MDNCHANGE">MSISDN Change (PC127)</option>
                                    <option value="ESNCHANGE">SIM Change (PC129)</option>
                                    <option value="HOTLINE">Restore (PC133)</option>
                                    <option value="UNHOTLINE">Suspend (PC131)</option>
                                    <option value="SUSSERVICE">Suspend Service (PC235)</option>
                                    <option value="RESERVICE">Restore Service (PC236)</option>
                                    <option value="TOPPURCH">Purchase/Topup (PC237)</option>
                                  </select>
                                </div>

                                <div className="gf-filter-item-input">
                                  <select
                                    className="globally-search-inputs mb-0"
                                    aria-label="Default select example"
                                  >
                                    <option value="">Upload Type</option>
                                    <option value="1">Single Unit</option>
                                    <option value="2">Bulk Upload</option>
                                  </select>
                                </div>
                              </div>
                              <div className="globally-apply-flter">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-sm waves-effect waves-light"
                                >
                                  View report <i className="ri-file-list-line align-middle"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="globally-sear-drop-btn">
                        <button
                          id="btnGroupVerticalDrop3"
                          type="button"
                          className={`search-cusbtn ${isAddReportOpen ? 'show' : ''}`}
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={() => {
                            if (!isAddReportOpen) {
                              setIsFilterOpen(false);
                              setIsBulkOpen(false);
                              setIsAdvanceOpen(false);
                              closeModuleDropdowns();
                            }
                            setIsAddReportOpen(!isAddReportOpen);
                          }}
                        >
                          <i className="ri-add-line font-size-20"></i>
                        </button>
                        <div className={`dropdown-menu ${isAddReportOpen ? 'show' : 'd-none'}`} aria-labelledby="btnGroupVerticalDrop3" id="btnGroupVerticalDrop3-open">
                          <div className="add-plus-report-inner-content">
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-sim-card-2-line font-size-18"></i>
                              <span>SIM Activation Report</span>
                            </div>
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-calendar-line font-size-18"></i>
                              <span>Plan Change Report</span>
                            </div>
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-delete-back-2-line font-size-18"></i>
                              <span>MSISDN Disconnect Report</span>
                            </div>
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-base-station-line font-size-18"></i>
                              <span>MSISDN Reconnect Report</span>
                            </div>
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-article-line font-size-18"></i>
                              <span>MSISDN Change Report</span>
                            </div>
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-exchange-box-line font-size-18"></i>
                              <span>SIM Change Report</span>
                            </div>
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-article-line font-size-18"></i>
                              <span>Restore Report</span>
                            </div>
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-file-forbid-line font-size-18"></i>
                              <span>Suspended Report</span>
                            </div>
                            <div className="add-plus-report-inner-content-item">
                              <i className="ri-folder-shield-line font-size-18"></i>
                              <span>Purchase Topup Report</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="globally-ser-scrollsec">
                      <div className="globally-ser-scrollsec-inner-content-suggestion">
                      {searchQuery.trim() ? (
                        filteredLinks.length > 0 ? (
                          filteredLinks.map((link, index) => {
                            // Ensure refs array is properly sized
                            if (!suggestionRefs.current[index]) {
                              suggestionRefs.current[index] = null;
                            }
                            return (
                              <a
                                key={index}
                                ref={(el) => {
                                  suggestionRefs.current[index] = el;
                                }}
                                href={link.href}
                                className={`top-search-under-list text-decoration-none ${
                                  selectedIndex === index ? 'active' : ''
                                }`}
                                onClick={() => {
                                  setSearchQuery('');
                                  setIsSearchDropdownOpen(false);
                                  setSelectedIndex(-1);
                                }}
                                onMouseEnter={() => setSelectedIndex(index)}
                              >
                                
                                <div className="d-flex align-items-center">
                                  <div className="ser2-under-glo-icon me-3">
                                    <i className={link.icon}></i>
                                  </div>
                                  <div>
                                    <div className="ser2-under-glo-text">{link.title}</div>
                                    <div className="globaly-his4">
                                      {link.category}
                                    </div>
                                  </div>
                                </div>
                                <div className="ser2-under-glo-sugg">Suggestion</div>
                              </a>
                            );
                          })
                        ) : (
                          <div className="top-search-under-list">
                            <div className="d-flex align-items-center">
                              <div className="ser2-under-glo-icon me-3">
                                <i className="ri-search-line"></i>
                              </div>
                              <div className="ser2-under-glo-text">No results found</div>
                            </div>
                          </div>
                        )
                      ) : (
                        <>
                          <div className="top-search-under-list">
                            <div className="d-flex align-items-center">
                              <div className="ser2-under-glo-icon me-3">
                                <i className="ri-search-line"></i>
                              </div>
                              <div className="ser2-under-glo-text">Show me all customers list</div>
                            </div>
                            <div className="ser2-under-glo-sugg">Suggestion</div>
                          </div>

                          <div className="top-search-under-list">
                            <div className="d-flex align-items-center">
                              <div className="ser2-under-glo-icon me-3">
                                <i className="ri-search-line"></i>
                              </div>
                              <div className="ser2-under-glo-text">Show me all MSISDN list</div>
                            </div>
                            <div className="ser2-under-glo-sugg">Suggestion</div>
                          </div>

                          <div className="top-search-under-list">
                            <div className="d-flex align-items-center">
                              <div className="ser2-under-glo-icon me-3">
                                <i className="ri-time-line"></i>
                              </div>
                              <div className="ser2-under-glo-text">8032370100</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="ser2-under-glo-sugg">Recent search</div>
                              <div className="recent-close-icon ms-2">
                                <i className="ri-close-line"></i>
                              </div>
                            </div>
                          </div>
                        </>
                      )}</div>

                      <div className="globally-recent-down">
                        <p className="globally-sar-heading">RECENT</p>

                        <div className="top-search-under-list">
                          <div className="d-flex align-items-center">
                            <div className="ser2-under-glo-icon me-3">
                              <i className="ri-eye-line"></i>
                            </div>
                            <div>
                              <div className="ser2-under-glo-text">Plan Change (PC121) : Bulk Upload</div>
                              <div className="globaly-his4">
                                Action<i className="ri-arrow-right-line"></i>Bulk/Single Upload
                              </div>
                            </div>
                          </div>
                          <div className="ser2-under-glo-sugg">You viewed 4 hours ago</div>
                        </div>

                        <div className="top-search-under-list">
                          <div className="d-flex align-items-center">
                            <div className="ser2-under-glo-icon me-3">
                              <i className="ri-eye-line"></i>
                            </div>
                            <div>
                              <div className="ser2-under-glo-text">
                                Customer ID 10964 : (SIM-89012802331621200000)
                              </div>
                              <div className="globaly-his4">
                                Customer Profile<i className="ri-arrow-right-line"></i>Customer Information
                              </div>
                            </div>
                          </div>
                          <div className="ser2-under-glo-sugg">You viewed 4 hours ago</div>
                        </div>

                        <div className="top-search-under-list">
                          <div className="d-flex align-items-center">
                            <div className="ser2-under-glo-icon me-3">
                              <i className="ri-eye-line"></i>
                            </div>
                            <div>
                              <div className="ser2-under-glo-text">
                                Asus India Ltd : AsusVen : AsusPlan (AsusPlan1)
                              </div>
                              <div className="globaly-his4">
                                Plan<i className="ri-arrow-right-line"></i>Lookup Tariff
                              </div>
                            </div>
                          </div>
                          <div className="ser2-under-glo-sugg">You viewed 6 hours ago</div>
                        </div>

                        <div className="top-search-under-list">
                          <div className="d-flex align-items-center">
                            <div className="ser2-under-glo-icon me-3">
                              <i className="ri-eye-line"></i>
                            </div>
                            <div>
                              <div className="ser2-under-glo-text">
                                Customer ID 10563 : (SIM-89012002331621216081)
                              </div>
                              <div className="globaly-his4">
                                Customer Profile<i className="ri-arrow-right-line"></i>Order
                              </div>
                            </div>
                          </div>
                          <div className="ser2-under-glo-sugg">You viewed 7 hours ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="ai-mode-button-parent">AI Mode</div>
            </div>
          </form>
          
        </div>
  <div>
        <div className="d-flex">
       

          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon waves-effect" aria-label="Support">
              <i className="ri-settings-2-line"></i>
            </button>
          </div>

          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              data-toggle="fullscreen"
            >
              <i className="ri-fullscreen-line"></i>
            </button>
          </div>

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id=""
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ri-notification-3-line"></i>
              <span className="noti-dot"></span>
            </button>
          </div>

          <div className="dropdown d-inline-block user-dropdown">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {
                if (!isOpen) {
                  closeAllDropdowns();
                }
                setIsOpen(!isOpen);
              }}
            >
              <img
                className="rounded-circle header-profile-user avatar-sm"
                src="../profile.png"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1">BlueConnects</span>
              <i className="ri-arrow-down-s-line d-xl-inline-block"></i>
            </button>
            <div
        className={`dropdown-menu dropdown-menu-end ${
          isOpen ? 'show' : ''
        }`}
      >
               <a href="#" className="dropdown-item"> <i className="ri-headphone-line text-muted font-size-16 align-middle me-1"></i>{' '}
                <span className="align-middle">Need Help</span>
              </a>
              <a href="#" className="dropdown-item"> <i className="ri-mic-line text-muted font-size-16 align-middle me-1"></i>{' '}
                <span className="align-middle">Support</span>
              </a>
              <a href="#" className="dropdown-item"> <i className="ri-logout-box-line text-muted font-size-16 align-middle me-1"></i>{' '}
                <span className="align-middle">Logout</span>
              </a>
            </div>
          </div>
        </div>
        </div>
    </div>
    </header>
  );
}
