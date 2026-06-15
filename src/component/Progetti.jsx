import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import noimg from "../assets/noimg.png";

const Progetti = () => {
  const [Repo, setRepo] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Davide-Mancini/repos?sort=updated&direction=desc",
    )
      .then((r) => r.json())
      .then(setRepo)
      .catch((err) => console.error("Errore nel recupero delle repository:", err));
  }, []);

  return (
    <div className="px-2 px-md-4 py-4 text-light">
      <Row className="align-items-center mb-4">
        <Col xs={2}>
          <Link to="/" className="text-decoration-none text-light">
            <ArrowLeftCircleFill className="fs-3" />
          </Link>
        </Col>
        <Col xs={8} className="text-center">
          <h1 className="mb-0 fw-bolder">Progetti</h1>
        </Col>
        <Col xs={2} />
      </Row>

      <Row className="g-4 pb-4">
        {Repo.slice(0, 10).map((repo, i) => (
          <Col xs={12} md={6} key={i}>
            <div
              className="d-flex p-3 rounded-4 flex-column h-100"
              style={{
                background: "#242323",
                border: "1px solid rgba(192, 176, 176, 0.18)",
              }}
            >
              <div
                className="w-100 mb-3 rounded-3 overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}/preview.png`}
                  alt={`${repo.name} preview`}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src = noimg;
                  }}
                />
              </div>

              <div className="d-flex flex-column flex-grow-1">
                <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                  <h4 className="mb-0">{repo.name}</h4>
                  {repo.language && (
                    <span
                      style={{
                        fontSize: "11px",
                        padding: "2px 9px",
                        borderRadius: "999px",
                        background: "rgba(192, 176, 176, 0.1)",
                        color: "#c0b0b0",
                        border: "1px solid rgba(192, 176, 176, 0.22)",
                        fontWeight: 500,
                      }}
                    >
                      {repo.language}
                    </span>
                  )}
                </div>

                <p className="text-white-50 small flex-grow-1">
                  {repo.description}
                </p>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light w-100 fw-bold p-2 text-dark text-decoration-none mt-2"
                >
                  Vai alla Repository
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Progetti;
