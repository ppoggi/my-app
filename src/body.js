import React from 'react';
import ReactDOM from 'react-dom';
//images
import square_image from './extra-images/about-us-thumb.png';
import background_banner from './extra-images/banner-bg.jpg';
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
//



class Body extends React.Component {
  render() {
    return (
      <div>
      <div className="careerfy-subheader careerfy-subheader-with-bg" style={{backgroundImage: background_banner}}>
            <span className="careerfy-banner-transparent"></span>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="careerfy-page-title">
                            <h1>Physical Therapy On Demand</h1>
                            <p>Bring your physical therapist with you wherever you go</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="careerfy-breadcrumb">
                <ul>
                    <li><i class="fas fa-mobile-alt fa-2x"></i>
                      </li>
                    <li><i class="fas fa-users fa-2x"></i></li>

                    <li><i class="fas fa-user-md fa-2x"></i></li>
                </ul>
            </div>
        </div>
        <div className="careerfy-main-content">
            <div className="careerfy-main-section careerfy-about-text-full">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 careerfy-typo-wrap">
                            <div className="careerfy-about-text">
                                <h2>About Our Company</h2>
                                <span className="careerfy-about-sub">Pellentesque accumsan nisl varius risus mollis varius sed eu neque Cras fringilla sagittis rhoncus.</span>
                                <p>In accumsan pulvinar maximus. Phasellus elementum rutrum dolor id mollis aece et lectus accumsan ipsum facilisis malesuada vel ut diam. Pellentesque vitae tempus sapien, vel aliquam nulla. In in fringilla massa, id consectetur lacus tibul.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a auctor urna, et porttitor lorem. Fusce at neque et orci rhoncus hendrerit. Praesent nec quam ac orci placerat semper.</p>
                                <a href="#" className="careerfy-static-btn careerfy-bgcolor"><span>Get Started</span></a>
                            </div>
                        </div>
                        <div className="col-md-6 careerfy-typo-wrap"><div className="careerfy-about-thumb"><img src={square_image} alt=""/></div></div>
                        <div className="col-md-12 careerfy-typo-wrap">
                            <div className="careerfy-modren-counter">
                                <ul className="row">
                                    <li className="col-md-4">
                                        <i className="careerfy-icon careerfy-paper careerfy-color"></i>
                                        <span className="word-counter">123,012</span>
                                        <small>Numbers</small>
                                    </li>
                                    <li className="col-md-4">
                                        <i className="careerfy-icon careerfy-resume-document careerfy-color"></i>
                                        <span className="word-counter">187,432</span>
                                        <small>More Numbers</small>
                                    </li>
                                    <li className="col-md-4">
                                        <i className="careerfy-icon careerfy-briefcase careerfy-color"></i>
                                        <span className="word-counter">140,312</span>
                                        <small>Even More Numbers</small>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="careerfy-main-section careerfy-testimonial-full">
                <div className="container-fluid">
                    <div className="row">

                        <div className="careerfy-typo-wrap">
                            <div className="careerfy-testimonial-section">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="careerfy-main-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="careerfy-typo-wrap">
                    <section className="careerfy-fancy-title">
                      <h2>Here is a Graphic</h2>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            <span className="slick-arrow-right slick-arrow" ><i className="careerfy-icon careerfy-arrows4"></i></span>

            <div className="careerfy-main-section careerfy-parallex-text-full">
                <div className="container">
                    <div className="row">

                        <aside className="col-md-6 careerfy-typo-wrap">
                            <div className="careerfy-parallex-text careerfy-logo-text">
                                <h2>Millions of jobs. <br/> Find the one that’s right for you.</h2>
                                <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there. Use JobSearch to find it.</p>
                                <a href="#" className="careerfy-static-btn careerfy-bgcolor"><span>Search Jobs</span></a>
                            </div>
                        </aside>
                        <aside className="col-md-6 careerfy-typo-wrap"><i class="fas fa-stethoscope fa-5x"></i></aside>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Body;
