import team1 from "../../assets/modal/team1.png";
import team2 from "../../assets/modal/team2.png";
import team3 from "../../assets/modal/team3.png";
import team4 from "../../assets/modal/team4.png";
import team5 from "../../assets/modal/team5.png";
import team6 from "../../assets/modal/team6.png";
import team7 from "../../assets/modal/team7.png";
import team8 from "../../assets/modal/team8.png";
import team9 from "../../assets/modal/team9.png";
import "./About.css";
export const people = [
  {
    img: team1,
    name: (
      <p className="name-styles-stakeholders">
        <span className="name-styles-stakeholders-bolded">Idris</span> Ibrahim
      </p>
    ),
    title: "Group Managing Director",
    id: "idris",
  },
  {
    img: team2,
    name: (
      <p className="name-styles-stakeholders">
        <span className="name-styles-stakeholders-bolded">Tolu</span> Oke
      </p>
    ),
    title: "Chief Operating Officer",
    id: "tolu",
  },
  {
    img: team3,
    name: (
      <p className="name-styles-stakeholders">
        <span className="name-styles-stakeholders-bolded">Deola</span> Ayibiowu
      </p>
    ),
    title: "Chief Commercial Officer",
    id: "deola",
  },
  {
    img: team4,
    name: (
      <p className="name-styles-stakeholders">
        <span className="name-styles-stakeholders-bolded">Joseph</span> Olaoye
      </p>
    ),
    title: "Chief Technical Officer",
    id: "joseph",
  },
  {
    img: team5,
    name: (
      <p className="name-styles-stakeholders-last-four">
        <span className="name-styles-stakeholders-bolded">Opeyemi</span> Adewuyi
      </p>
    ),
    title: "Chief Risk Officer",
    id: "opeyemi",
  },
  {
    img: team6,
    name: (
      <p className="name-styles-stakeholders-last-four">
        <span className="name-styles-stakeholders-bolded">Emmanuel</span> Bassey
      </p>
    ),
    title: <p className="post-text">Head,Strategy &Innovation</p>,
    id: "emmanuel",
  },
  {
    img: team7,
    name: (
      <p className="name-styles-stakeholders-last-four">
        <span className="name-styles-stakeholders-bolded">Emmanuel</span>{" "}
        Ukpebor
      </p>
    ),
    title: "Head, Deposit & Investment",
    id: "ukpebor",
  },
  {
    img: team8,
    name: (
      <p className="name-styles-stakeholders">
        <span className="name-styles-stakeholders-bolded">Temitope</span>{" "}
        Mohmmed
      </p>
    ),
    title: (
      <p>
        Head, Credit & Business<br></br> Dev.
      </p>
    ),
    id: "temitope",
  },
];

export const directors = [
  {
    img: (
      <svg
        width="233"
        height="233"
        viewBox="0 0 233 233"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "80%", marginBottom: "0" }}
      >
        <circle cx="116.5" cy="116.5" r="116.5" fill="#BDEAFF" />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="233"
          height="233"
        >
          <circle cx="116.5" cy="116.5" r="116.5" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="117" cy="92" r="34" fill="#74D7F8" />
          <circle cx="117" cy="199" r="67" fill="#74D7F8" />
        </g>
      </svg>
    ),
    name: (
      <p className="name-styles-stakeholders-for-svg">
        <span className="name-styles-stakeholders-bolded">Julius</span> Owotuga
      </p>
    ),
    id: "julius",
  },
  {
    img: <img src={team1} alt="management-team" className="our-people-img" />,
    name: (
      <p className="name-styles-stakeholders">
        <span className="name-styles-stakeholders-bolded">Idris</span> Ibrahim
      </p>
    ),
    id: "idris",
  },
  {
    img: (
      <svg
        width="233"
        height="233"
        viewBox="0 0 233 233"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "80%" }}
      >
        <circle cx="116.5" cy="116.5" r="116.5" fill="#BDEAFF" />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="233"
          height="233"
        >
          <circle cx="116.5" cy="116.5" r="116.5" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="117" cy="88" r="34" fill="#74D7F8" />
          <circle cx="117" cy="195" r="67" fill="#74D7F8" />
        </g>
      </svg>
    ),
    name: (
      <p className="name-styles-stakeholders-for-svg">
        <span className="name-styles-stakeholders-bolded">Adeniyi</span> Duale
      </p>
    ),

    id: "adeniyi",
  },
  {
    img: (
      <svg
        width="233"
        height="233"
        viewBox="0 0 233 233"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "80%" }}
      >
        <circle cx="116.5" cy="116.5" r="116.5" fill="#BDEAFF" />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="233"
          height="233"
        >
          <circle cx="116.5" cy="116.5" r="116.5" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="117" cy="92" r="34" fill="#74D7F8" />
          <circle cx="117" cy="199" r="67" fill="#74D7F8" />
        </g>
      </svg>
    ),
    name: (
      <p className="name-styles-stakeholders-for-svg">
        <span className="name-styles-stakeholders-bolded">Matthew</span> Coker
      </p>
    ),
    id: "matthew",
  },
  {
    img: (
      <svg
        width="233"
        height="233"
        viewBox="0 0 233 233"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "80%" }}
      >
        <circle cx="116.5" cy="116.5" r="116.5" fill="#BDEAFF" />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="233"
          height="233"
        >
          <circle cx="116.5" cy="116.5" r="116.5" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="117" cy="92" r="34" fill="#74D7F8" />
          <circle cx="117" cy="199" r="67" fill="#74D7F8" />
        </g>
      </svg>
    ),
    name: (
      <p className="name-styles-stakeholders-last-four">
        <span className="name-styles-stakeholders-bolded">Olumide</span> Soyombo
      </p>
    ),

    id: "olumide",
  },
  {
    img: (
      <svg
        width="233"
        height="233"
        viewBox="0 0 233 233"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "80%" }}
      >
        <circle cx="116.5" cy="116.5" r="116.5" fill="#BDEAFF" />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="233"
          height="233"
        >
          <circle cx="116.5" cy="116.5" r="116.5" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="117" cy="92" r="34" fill="#74D7F8" />
          <circle cx="117" cy="199" r="67" fill="#74D7F8" />
        </g>
      </svg>
    ),

    name: (
      <p className="name-styles-stakeholders-last-four">
        <span className="name-styles-stakeholders-bolded">Princess</span>{" "}
        Erediauwa{" "}
        <span className="name-styles-stakeholders-bolded">Abieyuwa</span>
      </p>
    ),

    id: "princess",
  },
  {
    img: <img src={team9} alt="management-team" className="our-people-img" />,
    name: (
      <p className="name-styles-stakeholders">
        <span className="name-styles-stakeholders-bolded">Iyinoluwa</span>{" "}
        Aboyeji
      </p>
    ),
    title: "Head, Deposit & Investment",
    id: "ukpebor",
  },
];
