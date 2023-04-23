import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";
function NotFound() {
  return (
    <>
      {/* <div className={Style.bodyNotFound}>
        <div className={Style.box}>
          <div className={Style.box__ghost}>
            <div className={Style.symbol}></div>
            <div className={Style.symbol}></div>
            <div className={Style.symbol}></div>
            <div className={Style.symbol}></div>
            <div className={Style.symbol}></div>
            <div className={Style.symbol}></div>
            <div className={Style.box__ghost_container}>
              <div className={Style.box__ghost_eyes}>
                <div className={Style.box__eye_left}></div>
                <div className={Style.box__eye_right}></div>
              </div>
              <div className={Style.box__ghost_bottom}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={Style.box__ghost_shadow}></div>
          </div>
          <div className={Style.box__description}>
            <div className={Style.box__description_container}>
              <div className={Style.box__description_title}>Whoops!</div>
              <div className={Style.box__description_text}>
                <p>
                  It seems like we couldn't find the page you were looking for
                </p>
              </div>
            </div>
            <div className="text-center">
              <NavLink to={"/"}>Go back</NavLink>
            </div>
          </div>
        </div>
      </div> */}

      <section className="page_404">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 align-middle">
              <div className="row">
                <div className="col-md-12 col-md-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>
                  <div className="contant_box_404">
                    <h3 className="h2 text-center">Look like you're lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <NavLink to={"/"}>
                      <button type="button" className="btn btn-outline-info">
                        Go to Home
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
