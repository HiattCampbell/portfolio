import '../../styles/Home.css';
import HomeLinks from './HomeLinks';
import SkillsBanner from './SkillsBanner';

export default function HomeDashboard() {
  return (
    <div className="homeContainer">
      <div className="intro">
        <HomeLinks />
        <h2 className="intro-paragraph">Hiatt Campbell is a software developer in based in Seattle with experience building full-stack applications and creating user-focused solutions.</h2>
      </div>
      <SkillsBanner />
    </div>
  );
}
