import "../styles/about.css";
import Member1 from "../assets/images/Member1.png";
import Member2 from "../assets/images/Member2.jpg";
import Member3 from "../assets/images/Member3.jpg";
import Member4 from "../assets/images/Member4.jpg";

import { Row, Col } from "reactstrap";
import Newsletter from "../shared/Newsletter";

export default function About() {
  window.scrollTo(0, 0);
  return (
    <>
      <section className="heroSection"></section>
      <section className="aboutTravelNest">
        <div className="container">
          <h1>
            <span className=" small">
              We are <span className="abrilFont">TravelNest</span>
            </span>
          </h1>
          <p>
            TravelNest is a leading website dedicated to hotel booking around
            India, offering travelers a seamless and convenient experience when
            planning their accommodation. With the motto "Stay with Us,"
            TravelNest aims to provide a comfortable and memorable stay for all
            its customers.
            <br />
            <br />
            With an extensive network of hotels and resorts across the country,
            TravelNest ensures that travelers have access to a wide range of
            options that suit their preferences and budget. From luxurious
            five-star hotels to cozy budget accommodations, TravelNest caters to
            every traveler's needs. The website features a user-friendly
            interface that allows users to easily search, compare, and book
            their desired accommodations within a few clicks.
            <br />
            <br />
            TravelNest goes the extra mile to ensure customer satisfaction by
            offering detailed descriptions, high-quality images, and honest
            reviews of each hotel. This empowers travelers to make informed
            decisions and choose the perfect place to stay. Additionally, the
            website provides personalized recommendations based on user
            preferences, making the booking process even more tailored to
            individual needs.
            <br />
            <br />
            Whether travelers are exploring the vibrant streets of Delhi, the
            serene backwaters of Kerala, or the majestic landscapes of
            Rajasthan, TravelNest is their go-to platform for finding the ideal
            accommodation. The website also offers competitive prices and
            exclusive deals, ensuring that travelers get the best value for
            their money.
            <br />
            <br />
            With TravelNest, travelers can book their stay in India with
            confidence, knowing that they will be welcomed with warm hospitality
            and exceptional service. Experience the beauty of India and create
            unforgettable memories by staying with TravelNest.
          </p>
        </div>
      </section>

      <h1 className="model-title">
        Our <h1 className="Team">Team</h1>
      </h1>
      <section>
        <div className="container">
          <p>

          Welcome, where you can get to know the members of our exceptional leadership team. 
          With their deep insights and decades of unparalleled market expertise, they set us apart from the 
          competition and help us provide our customers with super-smooth travel booking experiences.
          </p>
          <ul className="leadership">
            <li>
              <div className="imgWrap ">
                <img src={Member1} alt="Avatar" />
              </div>
              <h4>Siddhartha Sunkara</h4>
            </li>
            <li>
              <div className="imgWrap demo2">
                <img src={Member3} alt="Avatar" />
              </div>
              <h4>Shivansh Mital</h4>
            </li>
            <li>
              <div className="imgWrap demo3">
                <img src={Member2} alt="Avatar" />
              </div>
              <h4>Shivank Goel</h4>
            </li>
            <li>
              <div className="imgWrap demo4">
                <img src={Member4} alt="Avatar" />
              </div>
              <h4>Adarsh Mishra</h4>
            </li>
          </ul>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
