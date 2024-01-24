import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
// Code for slider from https://github.com/briancodex/react-image-slider-carousel/tree/main/src

export default function Project(props) {
  const [current, setCurrent] = useState(0);
  const length = props.project.pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.project.pictures) || props.project.pictures.length <= 0) {
    return null;
  }

  return (
    <div>
      <div className="projectContainer">
        <div className="slider">
          {props.project.pictures.map((picture, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'} key={index} id="slideImg">
                {(index === current && picture.includes('png') && <img className="sliderImg" src={picture} />) ||
                  (index === current && (
                    <video className="sliderImg" autoPlay loop>
                      <source src={picture} type="video/mp4" />
                    </video>
                  ))}
              </div>
            );
          })}
          <div className="arrows">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          </div>
        </div>
        <div className="projectTextContainer">
          <h2 className="projectTitle">{props.project.title}</h2>
          <p className="projectDescription">{props.project.description}</p>
          {props.project.link === false ? (
            <form action={props.project.repository}>
              <input className="repoButton" type="submit" formTarget="_blank" value="Visit repository" />
            </form>
          ) : (
            <form action={props.project.link}>
              <input className="repoButton" type="submit" formTarget="_blank" value="Visit site" />
            </form>
          )}
        </div>
      </div>

      {props.project.index !== 2 ? <hr className="portfolioHr"></hr> : <div></div>}
    </div>
  );
}
