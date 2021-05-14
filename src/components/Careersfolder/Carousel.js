import React, { Component } from "react";
import { carouselData, listenerCircle } from "./CarouselData";
import styles from "../Careersfolder/Careers.module.css";
import Container from "@material-ui/core/Container";
import LightSpeed from "react-reveal/LightSpeed";
import "./Active.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselitem: carouselData,
      active: 0,
    };
  }

  handleIndexClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
  };
  render() {
    const { carouselitem, active } = this.state;
    return (
      <section className="backg-carousel" style={{ paddingBottom: "6rem" }}>
        <Container>
          <section className={styles.flexcontainercarousel}>
            <div className={styles.carouseltextarea}>
              <LightSpeed right>
                <div className={styles.textareaitems}>
                  {" "}
                  <p
                    className={styles.corevaluetext}
                    style={{ marginBottom: "0", paddingBottom: "0" }}
                  >
                    <span>Colony</span> Members
                  </p>
                  <p className={styles.carouselinnertext}>
                    Don’t just take our word for it, hear what our current staff
                    have to say.
                  </p>
                  <button className={styles.carouselbtn}>Apply Now</button>
                </div>
              </LightSpeed>
            </div>
            <div className={styles.carousel}>
              <div className={styles.carouselflexitem}>
                <LightSpeed right>
                  <img
                    className={styles.imgpaddingright}
                    src={carouselitem[active].img}
                    width="auto"
                    alt="carousel"
                  ></img>
                  <div className="text-container-color">
                    <p className="carousel-text">{carouselitem[active].text}</p>
                    <div className="name-title">
                      <p className="carousel-name">
                        {carouselitem[active].name}
                      </p>
                      <p className="carousel-title-position">
                        {carouselitem[active].title}
                      </p>
                    </div>
                  </div>
                </LightSpeed>
              </div>

              <div className="carousel-listener-flex">
                {" "}
                {listenerCircle.map((cirlce, index) => (
                  <div
                    id="circle-event-space"
                    key={index}
                    data-index={index}
                    onClick={this.handleIndexClick}
                    className={index === active ? "active" : "nonactive"}
                  >
                    {cirlce}
                  </div>
                ))}{" "}
              </div>
            </div>
          </section>
        </Container>
      </section>
    );
  }
}

export default Carousel;
