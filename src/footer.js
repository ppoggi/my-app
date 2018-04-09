import React from 'react';
import ReactDOM from 'react-dom';
import './style_template.css';

class Footer extends React.Component {
  render() {
    return (
      <footer id="careerfy-footer" className="careerfy-footer-one">
          <div className="container">

              <div className="careerfy-footer-widget">
                  <div className="row">
                      <aside className="widget col-md-4 widget_contact_info">
                          <div className="widget_contact_wrap">
                              <a className="careerfy-footer-logo" href="index.html"></a>
                              <p>Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper. Sed coquat sapien faucibus quam.</p>

                          </div>
                      </aside>
                      <aside className="widget col-md-3 widget_nav_manu">
                          <div className="footer-widget-title"><h2>Quick Links</h2></div>
                          <ul>
                              <li><a href="#">Dashboard</a></li>
                              <li><a href="#">App Info</a></li>
                          </ul>
                      </aside>
                      <aside className="widget col-md-3 widget_nav_manu">
                          <div className="footer-widget-title"><h2>For Patients</h2></div>
                          <ul>
                              <li><a href="/details">Dashboard</a></li>
                              <li><a href="#">FAQs</a></li>
                          </ul>
                      </aside>
                      <aside className="widget col-md-2 widget_nav_manu">
                          <div className="footer-widget-title"><h2>For Therapists</h2></div>
                          <ul>
                              <li><a href="#">Contact Sales</a></li>
                              <li><a href="#">Testimonials</a></li>
                          </ul>
                      </aside>
                  </div>
              </div>
              <div className="careerfy-copyright">
                  <p>Copyrights © 2018 All Rights Reserved by <a href="#" className="careerfy-color">EyeCix</a></p>
                  <ul className="careerfy-social-network">
                      <li><i class="fab fa-facebook fa-2x"></i></li>
                      <li><i class="fab fa-twitter fa-2x"></i></li>
                      <li><i class="fab fa-linkedin fa-2x"></i></li>
                      <li><i class="fab fa-instagram fa-2x"></i></li>
                  </ul>
              </div>
          </div>
      </footer>
    );
  }
}
export default Footer;
