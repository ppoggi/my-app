import React from 'react';
import ReactDOM from 'react-dom';
//images
import square_image from './extra-images/about-us-thumb.png';

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
//
var FontAwesome = require('react-fontawesome')


class Body extends React.Component {
  render() {
    return (
      <div>
      <div class="careerfy-subheader careerfy-subheader-with-bg">
            <span class="careerfy-banner-transparent"></span>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="careerfy-page-title">
                            <h1>Physical Therapy On Demand</h1>
                            <p>Bring your physical therapist with you wherever you go</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="careerfy-breadcrumb">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
        <div class="careerfy-main-content">
            <div class="careerfy-main-section careerfy-about-text-full">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 careerfy-typo-wrap">
                            <div class="careerfy-about-text">
                                <h2>About Our Company</h2>
                                <span class="careerfy-about-sub">Pellentesque accumsan nisl varius risus mollis varius sed eu neque Cras fringilla sagittis rhoncus.</span>
                                <p>In accumsan pulvinar maximus. Phasellus elementum rutrum dolor id mollis aece et lectus accumsan ipsum facilisis malesuada vel ut diam. Pellentesque vitae tempus sapien, vel aliquam nulla. In in fringilla massa, id consectetur lacus tibul.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a auctor urna, et porttitor lorem. Fusce at neque et orci rhoncus hendrerit. Praesent nec quam ac orci placerat semper.</p>
                                <a href="#" class="careerfy-static-btn careerfy-bgcolor"><span>Search Jobs</span></a>
                            </div>
                        </div>
                        <div class="col-md-6 careerfy-typo-wrap"><div class="careerfy-about-thumb"><img src={square_image} alt=""/></div></div>
                        <div class="col-md-12 careerfy-typo-wrap">
                            <div class="careerfy-modren-counter">
                                <ul class="row">
                                    <li class="col-md-4">
                                        <i class="careerfy-icon careerfy-paper careerfy-color"></i>
                                        <span class="word-counter">123,012</span>
                                        <small>Jobs Addes</small>
                                    </li>
                                    <li class="col-md-4">
                                        <i class="careerfy-icon careerfy-resume-document careerfy-color"></i>
                                        <span class="word-counter">187,432</span>
                                        <small>Active Resumes</small>
                                    </li>
                                    <li class="col-md-4">
                                        <i class="careerfy-icon careerfy-briefcase careerfy-color"></i>
                                        <span class="word-counter">140,312</span>
                                        <small>Positions Matched</small>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="careerfy-main-section careerfy-testimonial-full">
                <div class="container-fluid">
                    <div class="row">

                        <div class="careerfy-typo-wrap">
                            <div class="careerfy-testimonial-section">
                                <div class="row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="careerfy-main-section">
              <div class="container-fluid">
                <div class="row">
                  <div class="careerfy-typo-wrap">
                    <section class="careerfy-fancy-title">
                      <h2>Our Featured Services</h2>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            <span class="slick-arrow-right slick-arrow" ><i class="careerfy-icon careerfy-arrows4"></i></span>

            <div class="careerfy-main-section careerfy-parallex-text-full">
                <div class="container">
                    <div class="row">

                        <aside class="col-md-6 careerfy-typo-wrap">
                            <div class="careerfy-parallex-text careerfy-logo-text">
                                <h2>Millions of jobs. <br/> Find the one that’s right for you.</h2>
                                <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there. Use JobSearch to find it.</p>
                                <a href="#" class="careerfy-static-btn careerfy-bgcolor"><span>Search Jobs</span></a>
                            </div>
                        </aside>
                        <aside class="col-md-6 careerfy-typo-wrap"> <div class="careerfy-logo-thumb"><img src="extra-images/multiple-logos.jpg" alt=""/></div> </aside>

                    </div>
                </div>
            </div>
        </div>
      <div class="col-md-12 careerfy-typo-wrap">
        <section class="careerfy-fancy-title">
            <h2>3 Steps</h2>
        </section>
        <div class="careerfy-services-classic">
            <ul class="row">
                <li class="col-md-4">
                    <span><i class="careerfy-icon careerfy-curriculum"></i></span>
                    <h2>CV Search</h2>
                    <p>Over the coming years Ismail worked with a number of remittance businesses as well as international policy makers.</p>
                </li>
                <li class="col-md-4">
                    <span><i class="careerfy-icon careerfy-building"></i></span>
                    <h2>Recruiter Profiles</h2>
                    <p>And because we understand the importance of staying connected, Nimble enables people to send mobile airtime top-ups.</p>
                </li>
                <li class="col-md-4">
                    <span><i class="careerfy-icon careerfy-briefcase-1"></i></span>
                    <h2>Advertise a Job</h2>
                    <p>Millions of us now rely on Mobile Money services instead of bank accounts, so we offer transfers directly to them.</p>
                </li>
            </ul>
        </div>
    </div>
    </div>
    );
  }
}

export default Body;
