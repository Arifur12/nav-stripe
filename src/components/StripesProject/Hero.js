import React from "react";
import PhoneIcon from "../../assets/PhoneIcon";
import { useGlobalContext } from "../../context/context";

export default function Hero() {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            When life gives you retake
            <br />
            make gpa 4 out of it
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            accusantium excepturi voluptas, dolor nobis accusamus.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <PhoneIcon />
        </article>
      </div>
    </section>
  );
}
