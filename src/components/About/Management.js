import React, { useState } from "react";
import { people } from "./OurPeopleData";
import Container from "@material-ui/core/Container";
import { Modal } from "./Modal";
import "./About.css";
const Management = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Container>
        <section className="ourpeoplestakeholdercontainer">
          {people.map((person) => {
            const { name, img, id, title } = person;
            return (
              <article
                key={id}
                id={`${id}`}
                onClick={openModal}
                className="article-width flex-article-ourpeople"
              >
                <img
                  src={img}
                  alt="management-team"
                  className="our-people-img"
                />
                <p className="name-styles-stakeholders">{name}</p>
                <p className="text-center-our-people">{title}</p>
              </article>
            );
          })}
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </section>
      </Container>
    </div>
  );
};

export default Management;
