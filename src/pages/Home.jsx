import React from 'react';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const featuredCourses = [
    { id: 1, title: 'React Basics', description: 'Learn the basics of React.' },
    { id: 2, title: 'Advanced CSS', description: 'Master advanced CSS techniques.' },
  ];

  return (
    <div className="home-page fade-in">
      <section className="intro">
        <h1>Welcome to Online Learning Platform</h1>
        <p>Learn from the best instructors from the comfort of your home.</p>
      </section>
      <section className="courses">
        <h2>Featured Courses</h2>
        <div className="course-list">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
