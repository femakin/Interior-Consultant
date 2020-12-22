import React from "react";
import photo1 from "../Assets/Images/photo1.png";
import { BsArrowRight } from "react-icons/bs";
import photo2 from "../Assets/Images/photo2.png";

export default function Home() {
  return (
    <div className="contain">
      <div className="wrapper">
        <div className="wrapper_left">
          <h2 className="wrapper_left_one">Modern interior</h2>
          <p className="wrapper_left_two">
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
          <h3 className="wrapper_left_three">
            <a href="/">
              Read more{" "}
              <a href="/" className="arrow">
                <BsArrowRight />
              </a>
            </a>
          </h3>
        </div>
        <div className="wrapper_right">
          <img src={photo1} alt="photo1" className="image_one" />
          <div className="wrapper_div">
            <div className="wrapper_inner">
              <img src={photo2} alt="photo2" className="image_two" />
              <div className="wrapper_content">
                <h2 className="wrapper_text">Aliza Webber</h2>
                <p className="wrapper_para">Interior designer</p>
              </div>
            </div>
            <h2 className="last_content">Designed in 2020 by Aliza Webber</h2>
          </div>
         
        </div>
      </div>
      <footer><a href="/">Femi@</a><a href="https://devchallenges.io/mysolutions">DevChallenges.io</a></footer>
    </div>
  );
}
