/* eslint-disable */
import React from "react"
import Navbar from "../partials/navbar"
import Divider from "../images/curvestrawberry.svg"
import RavenLogo from "../images/ravenhack.svg"
import Footer from "../partials/footer"
import { Link } from "gatsby"

export default () => (<div>
  <Navbar pageName="Home" />
      <div style={{background: '#d53032', marginTop:"-1px"}}>
        <img src={RavenLogo} alt="Logo" width="40%" style={{marginLeft: "30%"}}/>
      </div>

  <img src={Divider} width="100%" alt="Divider" style={{
    marginTop :"-1px"
  }}/>
  <div className="container">
    <h1 className="text-light">Hacker</h1>
    <p className="text-light">/ˈhakər/</p>
    <p className="text-light">
    A student at Canyon Crest Academy who is willing to put time and effort into a project that, frankly,
      can do anything they want it to. Like, I mean anything - obviously, it has to be appropriate.
    </p>
    <div className="row animated bounceInUp">
      <div className="col-sm-4" style={{marginBottom: "20px"}}>
        <div className="card">
          <div className="card-body text-light">
            <h5 className="card-title">Do I need to know how to code?</h5>
            <p className="card-text">Of course not! This event's primary goal is to invent an entertaining yet competitive experience for all, with programming simply being the medium.</p>
            <a href="https://ravenresources.herokuapp.com"  className="btn bg-raven text-light">Start Learning</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4" style={{marginBottom: "20px"}}>
        <div className="card">
          <div className="card-body text-light">
            <h5 className="card-title">Who can attend?</h5>
            <p className="card-text">As much as we'd like to include anyone, currently, the event is only going to be open for students at Canyon Crest Academy. Beyond that requirement, anyone at CCA can attend, regardless of grade level.</p>
            <a href="#" className="btn bg-raven text-light">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4" style={{marginBottom: "20px"}}>
        <div className="card">
          <div className="card-body text-light">
            <h5 className="card-title">Where is it?</h5>
            <p className="card-text">The hosting details are still being formalized, but it's looking like it'll be held in CCA's Media Center from 12-6PM.</p>
            <a href="#" className="btn bg-raven text-light">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

  </div>
  <Footer/>
</div>)
