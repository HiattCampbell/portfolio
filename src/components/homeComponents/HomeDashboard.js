import React from 'react';
import '../../styles/Home.css';
import HomeLinks from './HomeLinks';
import SkillsBanner from './SkillsBanner';

export default function HomeDashboard() {
  return (
    <div className="homeContainer">
      <div className="intro">
        <HomeLinks />
        <h2 className="introParagraph">Hiatt Campbell is a web developer in Seattle with experience designing, building, and optimizing websites.</h2>
      </div>
      <SkillsBanner />
    </div>
  );
}
