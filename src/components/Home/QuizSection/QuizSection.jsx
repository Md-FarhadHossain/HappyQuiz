import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizSection/QuizTopic/QuizTopic";
import "./QuizSection.css";

const QuizSection = () => {
  const loadQuizTopic = useLoaderData();
  const quizTopicData = loadQuizTopic.data;

  return (
    <>
      <div style={{padding: '2rem 0'}}>
        <h1 style={{ textAlign: "center", fontSize: '2rem', padding:'2rem 0' }}>
          Available quiz: {quizTopicData.length}
        </h1>
        <div className="quizes__topic">
          {quizTopicData.map((quizTopic) => (
            <QuizTopic
              key={quizTopic.id}
              name={quizTopic.name}
              logo={quizTopic.logo}
              total={quizTopic.total}
              id={quizTopic.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizSection;
