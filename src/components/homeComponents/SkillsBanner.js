import React from 'react';
import '../../styles/SkillsBanner.css';

export default function SkillsBanner() {
  const texts = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Liquid',
    'Bootstrap',
    'Node.js',
    'Express.js',
    'MongoDB',
    'NoSQL',
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Liquid',
    'Bootstrap',
    'Node.js',
    'Express.js',
    'MongoDB',
    'NoSQL',
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
