import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const courses = [
    { 
      id: 1, 
      title: 'React Basics', 
      description: 'Learn the basics of React.',
      objectives: 'Understand the core concepts of React.',
      prerequisites: 'Basic knowledge of JavaScript.',
      learn: 'React components, state, props, and hooks.'
    },
    { 
      id: 2, 
      title: 'Advanced CSS', 
      description: 'Master advanced CSS techniques.',
      objectives: 'Enhance your CSS skills.',
      prerequisites: 'Familiarity with basic CSS.',
      learn: 'CSS Grid, Flexbox, Animations, and Responsive Design.'
    },
    { 
      id: 3, 
      title: 'JavaScript Essentials', 
      description: 'Get started with JavaScript.',
      objectives: 'Build a strong foundation in JavaScript.',
      prerequisites: 'No prior programming experience required.',
      learn: 'JavaScript syntax, functions, loops, and DOM manipulation.'
    },
    { 
      id: 4, 
      title: 'Node.js Fundamentals', 
      description: 'Understand server-side development with Node.js.',
      objectives: 'Learn server-side JavaScript development.',
      prerequisites: 'Basic knowledge of JavaScript.',
      learn: 'Node.js basics, Express.js, and API development.'
    },
    { 
      id: 5, 
      title: 'Python for Data Science', 
      description: 'Dive into Python and data analysis techniques.',
      objectives: 'Gain skills in Python programming for data science.',
      prerequisites: 'Basic understanding of programming concepts.',
      learn: 'Python libraries for data analysis, including Pandas and NumPy.'
    },
    { 
      id: 6, 
      title: 'Machine Learning with Python', 
      description: 'Learn machine learning concepts and implementation.',
      objectives: 'Understand and apply machine learning algorithms.',
      prerequisites: 'Basic knowledge of Python and statistics.',
      learn: 'Supervised and unsupervised learning, scikit-learn, and model evaluation.'
    },
    { 
      id: 7, 
      title: 'Introduction to DevOps', 
      description: 'Learn the fundamentals of DevOps practices and tools.',
      objectives: 'Understand DevOps culture and tools.',
      prerequisites: 'Basic knowledge of software development.',
      learn: 'CI/CD pipelines, containerization with Docker, and infrastructure automation.'
    },
    { 
      id: 8, 
      title: 'Full-Stack Web Development', 
      description: 'Build complete web applications using front-end and back-end technologies.',
      objectives: 'Learn end-to-end web development techniques.',
      prerequisites: 'Basic understanding of web technologies.',
      learn: 'HTML, CSS, JavaScript, Node.js, Express.js, and databases.'
    }
  ];

  return (
    <div className="courses-page slide-in">
      <h2>All Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
