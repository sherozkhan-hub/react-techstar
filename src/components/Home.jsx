import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving abilty in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            tempore aut aspernatur voluptates tenetur, reiciendis quas
            consequatur perspiciatis recusandae facere dolores eos? Id, aperiam
            non cumque alias rem dicta natus quibusdam labore, eum voluptate
            recusandae architecto earum est. Corporis voluptatum rerum molestiae
            magnam maiores distinctio, facilis quibusdam nobis praesentium
            fugit.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillAmazonCircle />
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
            </div>
            <div style={{ animationDelay: "1.2s" }}>
              <AiFillInstagram />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
