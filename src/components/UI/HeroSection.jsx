import { FaLongArrowAltRight } from "react-icons/fa";
import {MainHeading} from '../../animation/MainHeading'

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          {/* <h1 className="heading-xl">
          Uncover the Wonders of the World, Country by Country
          </h1> */}
          <MainHeading />
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button onClick={() => window.location.href = '/country'} className="btn btn-darken btn-inline bg-white-box">
  Start Exploring <FaLongArrowAltRight />
</button>

        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};