import { Container, Row, Col } from "react-bootstrap"
import TeachersList from "../../components/teachersList/TeachersList"
import useTutors from "../../hooks/useTutors"
import { useEffect } from "react"

const BookLessonPage = ({ isLoaded }) => {

  const { tutorsData, getTutors, tutorsIsLoading } = useTutors()

  useEffect(() => {
    getTutors()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h3>
            Choose from {tutorsIsLoading && '...'} {tutorsData?.totalTutors} teachers!
          </h3>
          <TeachersList
            isLoaded={isLoaded}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default BookLessonPage