import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Course = ({courseId, courseName, courseDescription}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <Card.Text>
          {courseDescription}
        </Card.Text>
        <Button variant="primary">Go to Course</Button>
      </Card.Body>
    </Card>
  )
}

export default Course;
