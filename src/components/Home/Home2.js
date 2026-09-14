import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fotoprofile.jpeg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Home2() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('home.introduce')} <span className="purple">{t('home.introduceHighlight')}</span> {i18n.language === 'en' ? 'MYSELF' : ''}
            </h1>
            <p className="home-about-body">
              {t('home.description')}
              <br />
              <br />
              {t('home.proficient')}
              <i>
                <b className="purple">
                  {" "}
                  {t('home.technologies')}{" "}
                </b>
              </i>
              {t('home.stacks')}
              <br />
              <br />
              {t('home.areas')}
              <i>
                <b className="purple">
                  {" "}
                  {t('home.areasList')}{" "}
                </b>
              </i>
              {t('home.applying')}
              <br />
              <br />
              {t('home.building')}
              <b className="purple"> Next.js </b> {t('home.frameworks')}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Node.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;