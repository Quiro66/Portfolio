import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reconocimiento from "../../Assets/Projects/reconocimiento.jpeg";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.heading')} <span className="purple">{t('projects.headingHighlight')}</span>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.description')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reconocimiento}
              isBlog={false}
              title={t('projects.mediwaveTitle')}
              description={t('projects.mediwaveDesc')}
              ghLink="https://github.com/Quiro66"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;