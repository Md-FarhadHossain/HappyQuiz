import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizSection/QuizTopic/QuizTopic";
import './QuizSection.css'

const QuizSection = () => {
  const loadQuizTopic = useLoaderData();
  const quizTopicData = loadQuizTopic.data;
  console.log(quizTopicData);

  return (
    <div className="quizes__topic">
      <h1>quiz data {quizTopicData.length}</h1>

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
  );
};

export default QuizSection;
