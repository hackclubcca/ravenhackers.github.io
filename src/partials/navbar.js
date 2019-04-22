/*
  JS imports
 */
//import "jquery/dist/jquery.min"
//import "bootstrap/dist/js/bootstrap.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "animate.css/animate.min.css"
import "popper.js/dist/popper.min"
//import "wow.js/dist/wow.min"
/*

  Component Imports

 */
import React from "react"
import {Helmet} from "react-helmet";
import Curvy from "../images/curvynavbar.svg"
import RavenLogo from "../images/ravenhackwhite.svg"
import { withPrefix } from "gatsby"

export default() => (

  <div style={{background: "#d53032"}}>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Raven Hack | Home</title>
      <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
              integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
              crossOrigin="anonymous"></script>
      <script src={withPrefix('main.js')} type="text/javascript" />
    </Helmet>
    {/*
    <div className="alert alert-danger" role="alert">
      This site is still under construction, and the developer ain't no Bob the Builder's.
    </div>
    */}
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background: 'black'}}>
      <a className="navbar-brand text-light" href="#">
        <img src={RavenLogo} alt="Logo" width="60"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-light"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-light" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/about/">About</a>
          </li>
        </ul>
      </div>
    </nav>
    <img src={Curvy} width="100%" alt="Tried to look cool" style={{
      marginLeft: "-10px",
      marginTop: "-15px"
    }}/>
  </div>
)
