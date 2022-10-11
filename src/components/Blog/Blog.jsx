import React from "react";
import BlogContent from "./BlogContent/BlogContent";

const Blog = () => {
  return (
    <div>
      <BlogContent
        title="What is the purpose of React Router"
        description="We simply couple a component with a specific route, which makes our root component clear, maintainable and readable. Without router, either the root component or state would be messy and hard to maintainit also gives you tools to update the location using <Link> s and the history API.React router can be an overkill for certain projects where all you need is basic navigation and routing functionalities. In that context, React Router is not necessary at all"
      />

      <BlogContent title='How does context ApI works' description='The Context API is used to share the data with multiple components, without having to pass data through props manually. The React Context API allows us to produce the global data and share it across the application.Context provides meaning and clarity to the intended message. Context clues in a literary work create a relationship between the writer and reader, giving a deeper understanding of the intent and direction of the writing' />

      <BlogContent title='What is useRef' description='The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.' />
    </div>
  );
};

export default Blog;
