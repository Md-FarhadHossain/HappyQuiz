import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-description'>
        <h1>Welcome to, HappyQuiz</h1>
        <p>That Quiz is a website featuring multiple-choice, matching, and short-answer tests on a variety of core subjects. Most of its content is math-oriented, with quizzes on arithmetic to calculus, but it also includes tests on science, geography, and four languages</p>

        <button className='btn hero__btn'>Start Now</button>
    </div>
  )
}

export default HeroSection