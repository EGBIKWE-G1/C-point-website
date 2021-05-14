import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { people } from "./OurPeopleData";
import { AiOutlineClose } from "react-icons/ai";
import "./About.css";

const Background = styled.body`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 4rem;
  top: 0;
  right: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  max-width: 900px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  border-radius: 10px;
  overflow-y: scroll;
`;

export const Modal = ({ showModal, setShowModal }) => {
  // UseRef Used to reference same node element whenever the it is created and destructured in the dom// {current: null}
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    // Clean up function of Useeffect by removing the keypress event
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <div>
                <img
                  src={people[0].img}
                  alt="Management"
                  className="content-centered-popup"
                />
                <p className="popup-title-text">Group Managing Director</p>
                <p className="popup-main-text-width">
                  Idris is a seasoned professional with experience in
                  Accounting, Financial Auditing, Advisory services, Risk
                  Assessment and Evaluation from the Oil & Gas and the Financial
                  Sectors.He holds a first degree in Accounting and Masters in
                  Professional Accountancy from Louisiana Tech University (USA).
                  He has worked with Ernst and Young (EY) in the US, KPMG and
                  AMCON in Nigeria before venturing out as an Entrepreneur. He
                  is chiefly responsible for the strategic expansion of the
                  organization, which has led to the creation of other
                  successful financial firms under the parent company - Canary
                  Point Corporate Services, where he serves as the Group
                  Managing Director. He is committed to the highest ethical
                  standards and brings a network of skills, contacts and
                  resources to CPCSL.
                </p>
                <span>
                  <AiOutlineClose
                    className="close-btn-position"
                    onClick={() => setShowModal((prev) => !prev)}
                  />
                </span>
              </div>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
