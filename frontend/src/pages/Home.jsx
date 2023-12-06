import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ===============Menu============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Are you passionate about travel and in search of your next
                  exciting adventure? We understand that organizing a journey
                  can be daunting. That's precisely why we've established a
                  comprehensive solution for all your hotel requirements. Look
                  no more – TravelNest is your ultimate travel companion.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box ">
                <video src={heroVideo} alt="" autoPlay loop muted controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box ">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ===============Menu============= */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* =============== featured tour section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured Hotels</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* =============== featured tour section end  ============= */}
      {/* =============== experience section start =============== */}
      <section>
        <Container></Container>
      </section>
      {/* =============== experience section end =============== */}

      {/* =============== gallery section start =============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">Visit our customer tour gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* =============== gallery section end =============== */}
      {/* =============== Testimonial section start =============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What our users say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* =============== Testimonial section end =============== */}
      <Newsletter />
    </>
  );
};

export default Home;
