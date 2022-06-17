import React from "react";
import "./style.scss";
import { Images } from "../../utils/Images";

import NavbarCompoent from "../../components/User/Navbar/index";
import FooterCompoent from "../../components/User/Footer/index";

const Index = () => {
  return (
    <div className="about">
      <NavbarCompoent />
      {/* Header Banner */}
      <div className="header py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 content d-none d-lg-block">
              <h1>
                About<span>Us</span>
              </h1>
            </div>
            <div className="col-12 col-lg-6 image-column text-center d-none d-lg-block">
              <img src={Images.About} alt="..." />
            </div>
            <div className="col-12 col-lg-6 content d-lg-none text-center">
              <h1>
                About <span>Us</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>We</h3>
              <p>have a doctor app</p>
              <p>this is our app</p>
              <p>Work in progress, our location is Mexico</p>
            </div>
          </div>
        </div>
      </div>
      <FooterCompoent />
    </div>
  );
};

export default Index;

