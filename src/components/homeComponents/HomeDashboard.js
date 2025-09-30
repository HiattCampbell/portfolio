import '../../styles/Home.css';
import HomeLinks from './HomeLinks';
import SkillsBanner from './SkillsBanner';

export default function HomeDashboard() {
  return (
    <div className="homeContainer">
      <div className="intro">
        <HomeLinks />
        <h2 className="intro-paragraph">Hiatt Campbell is a software developer based in Seattle with experience building full-stack applications, designing database-backed APIs, and working with relational databases.</h2>
      </div>
      <SkillsBanner />
    </div>
  );
}
