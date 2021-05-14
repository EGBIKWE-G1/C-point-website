import React, { useState } from "react";
import { directors } from "./OurPeopleData";
import Container from "@material-ui/core/Container";
import { Modal } from "./Modal";
import "./About.css";
const Director = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Container>
        <section className="ourpeoplestakeholdercontainer">
          {directors.map((director) => {
            const { name, img, id } = director;
            return (
              <article
                key={id}
                id={`${id}`}
                onClick={openModal}
                className="article-width flex-article-ourpeople"
              >
                <div>{img}</div>
                <div>{name}</div>
              </article>
            );
          })}
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </section>
      </Container>
    </div>
  );
};

export default Director;
