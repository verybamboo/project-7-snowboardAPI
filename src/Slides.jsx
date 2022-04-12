import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import evilTwin from './img/bataleon-evil-twin.png'
import goliath from "./img/bataleon-goliath.png"
import stallion from "./img/bataleon-stallion.png"
import storm from "./img/bataleon-storm.png"
import instigator from "./img/burton-instigator.png"
import survival from "./img/capita-indoorsurvival.png"
import surfer from "./img/bataleon-surfer.png"
import custom from "./img/burton-custom.png"
import nameDropper from "./img/burton-namedropper.png"
import process from "./img/burton-process.png"
import kazukoku from "./img/capita-kazukokubopro.png"
import mercury from "./img/capita-mercury.png"
import powderTwin from "./img/capita-powdertwin.png"
import asymulator from "./img/capita-asymulator.png"


//import snowboards from "./snowboards";

function Slides(props) {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={4000}>
        <img
          className="first"
          src={survival}
          alt="First slide"
        />
        <Carousel.Caption>
          {props.snowboards && <h3>Model: {props.snowboards[0].model}</h3>}
          {props.snowboards && <p>Brand: {props.snowboards[0].brand}</p>}
          {props.snowboards && <p>Brand: {props.snowboards[0].year}</p>}
          {props.snowboards && <p>Sizes: {props.snowboards[0].sizes.toString()}</p>}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="second"
          src={powderTwin}
          alt="Second slide"
        />
      <Carousel.Caption>
        {props.snowboards && <h3>Model: {props.snowboards[1].model}</h3>}
        {props.snowboards && <p>Brand: {props.snowboards[1].brand}</p>}
        {props.snowboards && <p>Brand: {props.snowboards[1].year}</p>}
        {props.snowboards && <p>Sizes: {props.snowboards[1].sizes.toString()}</p>}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="third"
        src={asymulator}
        alt="Third slide"
     />
      <Carousel.Caption>
        {props.snowboards && <h3>Model: {props.snowboards[2].model}</h3>}
        {props.snowboards && <p>Brand: {props.snowboards[2].brand}</p>}
        {props.snowboards && <p>Brand: {props.snowboards[2].year}</p>}
        {props.snowboards && <p>Sizes: {props.snowboards[2].sizes.toString()}</p>}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="fourth"
        src={mercury}
        alt="Fourth slide"
     />
      <Carousel.Caption>
        {props.snowboards && <h3>Model: {props.snowboards[3].model}</h3>}
        {props.snowboards && <p>Brand: {props.snowboards[3].brand}</p>}
        {props.snowboards && <p>Brand: {props.snowboards[3].year}</p>}
        {props.snowboards && <p>Sizes: {props.snowboards[3].sizes.toString()}</p>}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="third"
        src={kazukoku}
        alt="Fifth slide"
     />
      <Carousel.Caption>
        {props.snowboards && <h3>Model: {props.snowboards[4].model}</h3>}
        {props.snowboards && <p>Brand: {props.snowboards[4].brand}</p>}
        {props.snowboards && <p>Brand: {props.snowboards[4].year}</p>}
        {props.snowboards && <p>Sizes: {props.snowboards[4].sizes.toString()}</p>}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="fourth"
        src={surfer}
        alt="Sixth slide"
     />
      <Carousel.Caption>
        {props.snowboards && <h3>Model: {props.snowboards[5].model}</h3>}
        {props.snowboards && <p>Brand: {props.snowboards[5].brand}</p>}
        {props.snowboards && <p>Brand: {props.snowboards[5].year}</p>}
        {props.snowboards && <p>Sizes: {props.snowboards[5].sizes.toString()}</p>}
      </Carousel.Caption>
      </Carousel.Item> 
    <Carousel.Item interval={4000}>
      <img
        className="fourth"
        src={stallion}
        alt="Sixth slide"
     />
      <Carousel.Caption>
        {props.snowboards && <h3>Model: {props.snowboards[6].model}</h3>}
        {props.snowboards && <p>Brand: {props.snowboards[6].brand}</p>}
        {props.snowboards && <p>Brand: {props.snowboards[6].year}</p>}
        {props.snowboards && <p>Sizes: {props.snowboards[6].sizes.toString()}</p>}
      </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="fourth"
        src={goliath}
        alt="Sixth slide"
     />
      <Carousel.Caption>
        {props.snowboards && <h3>Model: {props.snowboards[7].model}</h3>}
        {props.snowboards && <p>Brand: {props.snowboards[7].brand}</p>}
        {props.snowboards && <p>Brand: {props.snowboards[7].year}</p>}
        {props.snowboards && <p>Sizes: {props.snowboards[7].sizes.toString()}</p>}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="fourth"
        src={stallion}
        alt="Sixth slide"
     />
      <Carousel.Caption>
        {props.snowboards && <h3>Model: {props.snowboards[8].model}</h3>}
        {props.snowboards && <p>Brand: {props.snowboards[8].brand}</p>}
        {props.snowboards && <p>Brand: {props.snowboards[8].year}</p>}
        {props.snowboards && <p>Sizes: {props.snowboards[8].sizes.toString()}</p>}
      </Carousel.Caption>
    </Carousel.Item>  
  </Carousel>
    )
}
  
export default Slides