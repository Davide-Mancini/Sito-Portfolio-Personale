import { Col, Container, Row } from "react-bootstrap";
import "../Style/Hero.css";
import { useEffect, useState } from "react";
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import photo from "../assets/photo_2025-12-01_23-01-03-removebg-preview.png";
import noimg from "../assets/noimg.png";

const base = import.meta.env.BASE_URL;

const imageLogos = [
  {
    src: `${base}vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930480.png`,
    alt: "Linkedin",
    href: "https://www.linkedin.com/in/davide-mancini/",
  },
  {
    src: `${base}github-mark.png`,
    alt: "GitHub",
    href: "https://github.com/Davide-Mancini",
  },
  {
    src: `${base}vecteezy_instagram-logo-png-instagram-icon-transparent_18930415.png`,
    alt: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    src: `${base}Gmail_icon_(2020).svg.png`,
    alt: "Gmail",
    href: "mailto:mancinidavide73@gmail.com",
  },
];

const competenze = [
  { nome: "HTML", logo: `${base}HTML5_logo_and_wordmark.svg.png` },
  { nome: "CSS", logo: `${base}CSS3_logo_and_wordmark.svg.png` },
  { nome: "JavaScript", logo: `${base}Unofficial_JavaScript_logo_2.svg.png` },
  { nome: "React", logo: `${base}React-icon.svg.png` },
  { nome: "Bootstrap", logo: `${base}Bootstrap_logo.svg.png` },
  { nome: "Java", logo: `${base}Java_Logo.svg.png` },
  { nome: "Spring Boot", logo: `${base}Spring_Boot.svg.png` },
  { nome: "PostgreSQL", logo: `${base}Postgresql_elephant.svg.png` },
];

const Hero = () => {
  const username = "Davide-Mancini";
  const url = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`;
  const [Repo, setRepo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((repos) => setRepo(repos))
      .catch((error) =>
        console.error("Errore nel recupero delle repository:", error),
      );
  }, []);

  return (
    <Container
      className="rounded-5 mb-4"
      style={{ background: "#242323", border: "1px solid rgba(192, 176, 176, 0.25)" }}
    >
      <Row className="text-light">
        {/* Profilo */}
        <Col
          xs={12}
          className="d-flex flex-column flex-md-row justify-content-center mt-4 align-items-center gap-3"
        >
          <img
            src={photo}
            alt="Davide Mancini"
            className="rounded-circle profile-photo"
            style={{ border: "2px solid #c0b0b0", backgroundColor:"#f0edec"}}
          />
          <div className="text-center text-md-start">
            <h1 className="fw-bolder mb-0">
              {"<"}Ciao, sono Davide Mancini{"/>"}
            </h1>
            <div className=" d-flex justify-content-center">

            <h5 className="text-white-50 mx-auto">
              {"{"}Junior Full Stack Developer{"}"}
            </h5>
            </div>
          </div>
        </Col>

        {/* Chi sono */}
        <Col xs={12} className="px-3 px-md-5 mt-5 d-flex flex-column">
          <p className="fw-bolder">Chi sono?</p>
          <p>
            Sono Davide, un ex pizzaiolo e imprenditore con 6 anni di esperienza
            nella ristorazione, oggi in transizione verso il mondo tech. Dopo
            aver gestito la mia pizzeria per tre anni, ho deciso di trasformare
            la mia passione per l&apos;informatica, e più nello specifico nel
            coding, in un lavoro frequentando il corso 𝙁𝙪𝙡𝙡 𝙎𝙩𝙖𝙘𝙠 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧
            presso 𝙀𝙥𝙞𝙘𝙤𝙙𝙚. Sono una persona curiosa, abituata a lavorare con
            dedizione e sempre pronta ad imparare cose nuove.
          </p>
        </Col>

        {/* Competenze */}
        <Col xs={12} className="px-3 px-md-5 mt-5">
          <p className="fw-bolder">Competenze</p>
          <Row className="g-2">
            {competenze.map((c, i) => (
              <Col xs={3} md={3} lg={true} key={i}>
                <div
                  className="bg-white rounded-4 text-center text-dark d-flex flex-column justify-content-between align-items-center h-100 py-2 skill-card"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={c.logo}
                    alt={c.nome}
                    className="img-fluid p-1 p-md-2"
                    style={{
                      width: "52px",
                      height: "52px",
                      objectFit: "contain",
                    }}
                  />
                  <p
                    className="fw-bold font-monospace mb-0 mt-1"
                    style={{ fontSize: "clamp(0.55rem, 1.6vw, 0.8rem)" }}
                  >
                    {c.nome}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Social */}
        <Col xs={12} className="px-3 px-md-5 mt-5">
          <p className="fw-bolder">Social</p>
          <Row className="g-2">
            {imageLogos.map((logo, i) => (
              <Col xs={6} md={3} key={i}>
                <div
                  className="social bg-white rounded-4 text-center h-100"
                  style={{ cursor: "pointer" }}
                >
                  <a
                    href={logo.href}
                    target={logo.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-decoration-none d-flex flex-column justify-content-between align-items-center h-100 py-3"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="img-fluid p-2"
                      style={{
                        width: "72px",
                        height: "72px",
                        objectFit: "contain",
                      }}
                    />
                    <p className="fw-bold text-center text-dark font-monospace mb-0">
                      {logo.alt}
                    </p>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Progetto più recente */}
        <Col xs={12} className="px-3 px-md-5 mt-5">
          <p className="fw-bolder">Progetto più recente</p>
          <div
            className="p-3 rounded-4"
            style={{ border: "1px solid rgba(192, 176, 176, 0.18)" }}
          >
            <Row className="g-3 align-items-center">
              <Col xs={12} md={6}>
                <img
                  src={
                    Repo[0]
                      ? `https://raw.githubusercontent.com/${Repo[0].owner.login}/${Repo[0].name}/${Repo[0].default_branch}/preview.png`
                      : noimg
                  }
                  alt="Preview progetto"
                  className="rounded-3 border border-light border-2 w-100"
                  style={{ objectFit: "cover", aspectRatio: "16/9" }}
                  onError={(e) => {
                    e.currentTarget.src = noimg;
                  }}
                />
              </Col>
              <Col xs={12} md={6}>
                <h3>{Repo[0]?.name}</h3>
                <p>{Repo[0]?.description}</p>
                <a
                  href={Repo[0]?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light w-100 fw-bold p-3 text-dark text-decoration-none"
                >
                  Vai alla Repository!
                </a>
              </Col>
            </Row>
          </div>
        </Col>

        {/* Curriculum */}
        <Col xs={12} className="px-3 px-md-5 my-5">
          <p className="fw-bolder">Curriculum</p>
          <a
            href={`${base}CV_Davide_Mancini.pdf`}
            download
            className="btn btn-light w-100 fw-bold p-3 text-dark text-decoration-none"
          >
            <ArrowDownCircleFill className="fs-4 me-2" />
            Scarica Curriculum Completo!
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
