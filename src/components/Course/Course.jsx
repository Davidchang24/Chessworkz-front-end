import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Course = ({courseId, courseName, courseDescription}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png" />
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
