import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          {t('contact.heading')} <span className="purple">{t('contact.headingHighlight')}</span>
        </h1>
        
        <p style={{ color: "white", fontSize: "1.2em", paddingBottom: "30px" }}>
          {t('contact.description')}
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={3} className="contact-card">
            <a
              href="https://www.linkedin.com/in/juan-jose-quiroz-bolivar-2b594636a/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">
                <FaLinkedinIn />
              </div>
              <h3>{t('contact.linkedin')}</h3>
              <p>juan-jose-quiroz-bolivar</p>
            </a>
          </Col>

          <Col md={3} className="contact-card">
            <a
              href="https://github.com/Quiro66"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">
                <AiFillGithub />
              </div>
              <h3>{t('contact.github')}</h3>
              <p>Quiro66</p>
            </a>
          </Col>

          <Col md={3} className="contact-card">
            <a
              href="tel:+573169077100"
              className="contact-link"
            >
              <div className="contact-icon">
                <AiFillPhone />
              </div>
              <h3>{t('contact.phone')}</h3>
              <p>+57 316 907 7100</p>
            </a>
          </Col>

          <Col md={3} className="contact-card">
            <a
              href="mailto:66quiro@gmail.com"
              className="contact-link"
            >
              <div className="contact-icon">
                <AiFillMail />
              </div>
              <h3>{t('contact.email')}</h3>
              <p>66quiro@gmail.com</p>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;