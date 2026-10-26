import '../../styles/SkillsBanner.css';

export default function SkillsBanner() {
  const texts = [
    'C++',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'SQL',
    'MongoDB',
    'NoSQL',
    'C++',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'SQL',
    'MongoDB',
    'NoSQL'
  ];
  return (
    <div className="banner">
      <div className="banner-text">
        {texts.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  );
}
