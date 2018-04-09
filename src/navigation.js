import React from 'react';
import ReactDOM from 'react-dom';
//
import {Confirm} from 'react-cognito/src/Confirm.jsx';
//
import CognitoCongig from './config/cognito_config.js';
//bootstrap components
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

class Navigation extends React.Component {
  render() {
    return (
      <header id="careerfy-header" class="careerfy-header-one">
                  <div class="container">
                      <div class="row">
                          <aside class="col-md-2" style={{marginTop:"15px"}}> <i class="fab fa-hooli fa-4x" ></i></aside>
                          <aside class="col-md-6">
                              <nav class="careerfy-navigation">
                                  <div class="navbar-header">
                                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#careerfy-navbar-collapse-1" aria-expanded="false">
                                          <span class="icon-bar"></span>
                                          <span class="icon-bar"></span>
                                          <span class="icon-bar"></span>
                                      </button>
                                  </div>
                                  <div class="collapse navbar-collapse" id="careerfy-navbar-collapse-1">
                                      <ul class="navbar-nav">
                                          <li class="active submenu-addicon"><a href="index.html">Home</a>
                                              <ul class="sub-menu">
                                                  <li><a href="index-two.html">Home Hireright</a></li>
                                              </ul>
                                          </li>
                                          <li class="submenu-addicon"><a href="#">Pages</a>
                                              <ul class="sub-menu">
                                                  <li><a href="about-us.html">About Us</a></li>
                                                  <li><a href="cv-packages.html">CV Packages</a></li>
                                                  <li><a href="faq.html">Faqs</a></li>
                                                  <li><a href="job-grid-full.html">Job Grid</a></li>
                                                  <li><a href="job-grid-with-filters.html">Job Grid W/filter</a></li>
                                                  <li><a href="job-listings.html">Job Listings</a></li>
                                                  <li><a href="job-detail.html">Job Detail</a></li>
                                                  <li><a href="job-packages.html">Job Packages</a></li>
                                              </ul>
                                          </li>
                                          <li class="submenu-addicon"><a href="#">For Patients</a>
                                              <ul class="sub-menu">
                                                  <li><a href="candidate-dashboard-applied-jobs.html">Applied Jobs</a></li>
                                                  <li><a href="candidate-dashboard-changed-password.html">Changed Password</a></li>
                                                  <li><a href="candidate-dashboard-cv-manager.html">CV Manager</a></li>
                                                  <li><a href="candidate-dashboard-job-alert.html">Job Alert</a></li>
                                                  <li><a href="candidate-dashboard-profile-seting.html">Profile Setting</a></li>
                                                  <li><a href="candidate-dashboard-resume.html">Candidate Resume</a></li>
                                                  <li><a href="candidate-dashboard-saved-jobs.html">Saved Jobs</a></li>
                                                  <li><a href="candidate-listings.html">Candidate Listings</a></li>
                                                  <li><a href="candidate-grid.html">Candidate Grid</a></li>
                                                  <li><a href="candidate-detail.html">Candidate Detail</a></li>
                                              </ul>
                                          </li>
                                          <li class="submenu-addicon"><a href="#">For Therapists</a>
                                              <ul class="sub-menu">
                                                  <li><a href="employer-list.html">Employer List</a></li>
                                                  <li><a href="employer-grid.html">Employer Grid</a></li>
                                                  <li><a href="employer-detail.html">Employer Detail</a></li>
                                                  <li><a href="employer-dashboard-transactions.html">Transactions</a></li>
                                                  <li><a href="employer-dashboard-resumes.html">Employer Resumes</a></li>
                                                  <li><a href="employer-dashboard-profile-seting.html">Profile Setting</a></li>
                                                  <li><a href="employer-dashboard-pkgpayment.html">Package Payment</a></li>
                                                  <li><a href="employer-dashboard-packages.html">Packages</a></li>
                                                  <li><a href="employer-dashboard-newjob.html">Employer New Job</a></li>
                                                  <li><a href="employer-dashboard-manage-jobs.html">Menage Jobs</a></li>
                                                  <li><a href="employer-dashboard-confitmation.html">Employer Confitmation</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="contact-us.html">Contact</a></li>
                                      </ul>
                                  </div>
                            </nav>
                          </aside>
                          <aside class="col-md-4">
                              <div class="careerfy-right">
                                  <ul class="careerfy-user-section">
                                      <li><a class="careerfy-color careerfy-open-signin-tab" href="#">Register</a></li>
                                      <li><a class="careerfy-color careerfy-open-signup-tab" href="#">Sign in</a></li>
                                  </ul>
                                  <a href="#" class="careerfy-simple-btn careerfy-bgcolor"><span> <i class="careerfy-icon careerfy-arrows-2"></i> Post Job</span></a>
                              </div>
                          </aside>
                      </div>
                  </div>
              </header>
    );
  }
}

export default Navigation;
