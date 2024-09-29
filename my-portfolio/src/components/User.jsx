import React from "react";
import profilePicture from "../assets/imgs/user profile 1.jpg";
//import { Link } from "react-router-dom";
import twitter from "../assets/svgs/twitter.svg";
//import facebook from "../assets/svgs/facebook.svg";
import instagram from "../assets/svgs/instagram.svg";
import youtube from "../assets/svgs/youtube.svg";
import github from "../assets/svgs/github.svg";
import linkedin from "../assets/svgs/linkedin.svg";

function User() {
  return (
    <div className="user-comp">
      <img src={profilePicture} className="img" />
      <article>
        <h1 className="text-3xl font-bold underline">GEORGE CHIEMERIE CHIME</h1>
        <h2>Full Stack Web Developer and 3-D Animator</h2>
        <h3>BSc. Medical Radiography and Radiological Sciences.</h3>
      </article>
      <ul className="user-ul">
        <li>
          <a
            href="https://www.linkedin.com/in/george-chime-a927881b0/"
            target="blank"
          >
            <img src={linkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Oranyelu" target="blank">
            <img src={github} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/chime.george/" target="blank">
            <img src={instagram} />
          </a>
        </li>
        <li>
          <a href="https://x.com/oranyelu_" target="blank">
            <img src={twitter} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@chimechiemeriegeorge6044"
            target="blank"
          >
            <img src={youtube} />
          </a>
        </li>
      </ul>
      <button className="get-in-touch">Get in Touch</button>
    </div>
  );
}

export default User;
