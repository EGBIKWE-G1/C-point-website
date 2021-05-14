import Container from "@material-ui/core/Container";
import styles from "../Careersfolder/Careers.module.css";
import LightSpeed from "react-reveal/LightSpeed";

const cartext = [
  "Transperency",
  "Innovation",
  "Technical Depth",
  "Efficiency",
  "Resilience",
  "Integrity",
];
const CultureCoreValue = () => {
  return (
    <>
      <section className={styles.coreValueBk}>
        <Container>
          <div className={styles.coreValue}>
            <div>
              <svg
                width="91"
                height="108"
                viewBox="0 0 91 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5692 62.2808C33.5989 70.4897 44.4545 74.7175 44.9111 74.8933C45.294 75.0356 45.6768 75.0356 46.0598 74.8933C66.8712 66.7652 90.7878 48.9028 91 24.9637C90.8501 0.355165 59.116 -9.31821 45.4855 11.208C39.5324 1.83196 27.1512 -2.41865 16.6197 1.3932C14.7491 2.04841 15.7204 5.04099 17.6764 4.35644C27.7175 0.737146 39.3626 5.45628 44.0686 15.0693C44.6427 16.2037 46.3285 16.2041 46.9026 15.0693C57.4392 -5.25617 87.5956 2.17833 87.829 24.9639C87.5506 47.5277 64.8038 63.7153 45.4857 71.7314C36.5415 68.3342 17.2701 56.9117 9.71214 44.9299C1.76967 33.5458 -0.224353 17.5644 10.9469 8.1928C12.461 6.92218 10.4814 4.4656 8.89829 5.79405C-3.54081 16.1708 -1.79475 34.06 7.10847 46.7245C10.8505 52.1967 16.0523 57.4305 22.5692 62.2808Z"
                  fill="#20B8EB"
                />
                <path
                  d="M60.7779 99.0098L51.9655 103.219C51.9565 103.223 51.9472 103.228 51.9382 103.232C47.8312 105.292 43.038 105.464 38.7871 103.705C38.7712 103.699 38.7552 103.692 38.739 103.686L15.9288 95.1027C15.7485 95.0348 15.5569 95 15.3641 95H1.51259C-0.45899 95 -0.548903 98.0883 1.51259 98.0883H15.0719L37.5859 106.561C39.9182 107.522 42.3853 108 44.8481 108C47.77 108 50.6857 107.327 53.3592 105.989L62.1585 101.786C63.9309 100.939 62.6305 98.1239 60.7779 99.0098Z"
                  fill="#20B8EB"
                />
                <path
                  d="M78.0146 81.3678L58.3583 86.3153C58.2078 83.3605 55.6021 81 52.4204 81H1.52047C-0.461379 81 -0.551761 83.9789 1.52047 83.9789H52.4204C53.952 83.9789 55.1979 85.1482 55.1979 86.5854C55.1979 88.0226 53.952 89.1919 52.4204 89.1919H35.2002C33.2184 89.1919 33.128 92.1707 35.2002 92.1707H52.4204C54.4981 92.1707 56.3292 91.1633 57.3927 89.6419L78.827 84.2468C82.9894 83.2179 84.3928 87.9126 80.7123 89.603L68.5879 95.1599C66.8006 95.9791 68.1269 98.6853 69.9757 97.8375L82.0748 92.2921C89.2893 89.2656 85.7477 79.4564 78.0146 81.3678Z"
                  fill="#20B8EB"
                />
                <path
                  d="M10.3143 17.7371C7.34058 22.6608 7.22745 32.0906 10.0049 37.23C10.8869 38.9469 13.4667 37.5047 12.5476 35.7154C10.2887 31.5407 10.3532 23.3736 12.7798 19.3922C13.2043 18.659 12.9966 17.6941 12.3157 17.2371C11.6348 16.7798 10.7385 17.0041 10.3143 17.7371Z"
                  fill="#20B8EB"
                />
              </svg>
            </div>
            <LightSpeed left>
              <p className={styles.corevaluetext}>
                <span>Our</span> Core Values
              </p>
            </LightSpeed>
            <LightSpeed right>
              <p className={styles.corestatement}>
                We are constantly working towards our best
              </p>
            </LightSpeed>
          </div>
          <div className={styles.cardWhiteDesignContainer}>
            {cartext.map((text, i) => {
              return (
                <div className={styles.cardWhiteDesign} key={i}>
                  {text}{" "}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CultureCoreValue;