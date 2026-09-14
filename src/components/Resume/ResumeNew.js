import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiWorkplace } from "react-icons/si";
import { MdSchool } from "react-icons/md";
import { useTranslation } from "react-i18next";

function ResumeNew() {
  const { t } = useTranslation();
  
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            {t('resume.experience')} <span className="purple">{t('resume.experienceHighlight')}</span>
          </h1>
          
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date={t('resume.novacodifyDate')}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<SiWorkplace />}
            >
              <h3 className="vertical-timeline-element-title">{t('resume.novacodifyTitle')}</h3>
              <h4 className="vertical-timeline-element-subtitle">{t('resume.novacodifyCompany')}</h4>
              <p>
                {t('resume.novacodifyDesc')}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date={t('resume.rewiDate')}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">{t('resume.rewiTitle')}</h3>
              <h4 className="vertical-timeline-element-subtitle">{t('resume.rewiCompany')}</h4>
              <p>{t('resume.rewiDesc')}</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date={t('resume.neusSoftDate')}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<SiWorkplace />}
            >
              <h3 className="vertical-timeline-element-title">{t('resume.neusSoftTitle')}</h3>
              <h4 className="vertical-timeline-element-subtitle">{t('resume.neusSoftCompany')}</h4>
              <p>
                {t('resume.neusSoftDesc')}
              </p>
              <p>
                {t('resume.neusSoftStack')}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date={t('resume.senaDate')}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">{t('resume.senaTitle')}</h3>
              <h4 className="vertical-timeline-element-subtitle">{t('resume.senaCompany')}</h4>
              <p>{t('resume.senaDesc')}</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date={t('resume.bachelorDate')}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">{t('resume.bachelorTitle')}</h3>
              <h4 className="vertical-timeline-element-subtitle">{t('resume.bachelorCompany')}</h4>
              <p>{t('resume.bachelorDesc')}</p>
            </VerticalTimelineElement>
          </VerticalTimeline>

          <h1 className="project-heading" style={{ paddingTop: "50px", paddingBottom: "20px" }}>
            {t('resume.skills')} <span className="purple">{t('resume.skillsHighlight')}</span>
          </h1>

          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={6} className="skill-category">
              <h3>{t('resume.frontend')}</h3>
              <p>{t('resume.frontendSkills')}</p>
            </Col>
            <Col md={6} className="skill-category">
              <h3>{t('resume.backend')}</h3>
              <p>{t('resume.backendSkills')}</p>
            </Col>
            <Col md={6} className="skill-category">
              <h3>{t('resume.databases')}</h3>
              <p>{t('resume.databaseSkills')}</p>
            </Col>
            <Col md={6} className="skill-category">
              <h3>{t('resume.toolsQuality')}</h3>
              <p>{t('resume.toolsSkills')}</p>
            </Col>
            <Col md={6} className="skill-category">
              <h3>{t('resume.methodologies')}</h3>
              <p>{t('resume.methodologiesSkills')}</p>
            </Col>
            <Col md={6} className="skill-category">
              <h3>{t('resume.softSkills')}</h3>
              <p>{t('resume.softSkillsList')}</p>
            </Col>
          </Row>

          <h1 className="project-heading" style={{ paddingTop: "50px", paddingBottom: "20px" }}>
            {t('resume.languages')}
          </h1>

          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={6} className="skill-category">
              <p>{t('resume.spanish')}</p>
              <p>{t('resume.english')}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;