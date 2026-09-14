import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();
  
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('about.hiEveryone')} <span className="purple">{t('about.name')}</span>{" "}
            {t('about.from')} <span className="purple">{t('about.location')}</span>.
            <br />
            {t('about.developer')}
            <br />{t('about.hold')} <span className="purple">{t('about.degree')}</span> {t('about.fromInstitution')}{" "}
            <span className="purple">{t('about.institution')}</span>.
            <br />
            <br />
            {t('about.outsideCoding')}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('about.teamwork')} 🤝
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about.learning')} 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about.problemSolving')} 💡
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t('about.quote')}"{" "}
          </p>
          <footer className="blockquote-footer">{t('about.signature')}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;