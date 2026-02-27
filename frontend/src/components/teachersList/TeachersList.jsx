import { useState, useRef, useEffect, useCallback } from 'react'
import TeacherCard from './teacherCard/TeacherCard'
import NoTeachersFoundIcon from '../../assets/NoTeachersFoundIcon'
import classes from './TeachersList.module.css'
import useTutors from '../../hooks/useTutors'
import { Spinner } from 'react-bootstrap'

const TeachersList = () => {

  const { getTutors, tutorsData, tutorsIsLoading, tutorsError } = useTutors()

  const [activeIndex, setActiveIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)

  const listRef = useRef(null)
  const observer = useRef()

  const lastTutorElementRef = useCallback(node => {
    if (tutorsIsLoading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting && tutorsData?.currentPage < tutorsData?.totalPages) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [tutorsIsLoading, tutorsData?.hasNextPage])


  useEffect(() => {
    getTutors(page, 10)
  }, [page])

  useEffect(() => {
    const firstCard = listRef.current?.querySelector('.teacher-card-wrapper')
    if (firstCard) {
      setOffset(firstCard.offsetTop - listRef.current.offsetTop)
    }
  }, [])

  const handleHover = (index, e) => {
    setActiveIndex(index)
    const cardElement = e.currentTarget
    const parentElement = listRef.current
    if (cardElement && parentElement) {
      setOffset(cardElement.offsetTop - parentElement.offsetTop)
    }
  }

  const tutors = tutorsData?.tutors || []

  return (
    <div className={classes["teachers-page-layout"]}>
      <div
        className={classes["teachers-list-container"]}
        ref={listRef}
      >
        {tutorsError && (
          <div className="alert alert-danger text-center w-100">{tutorsError}</div>
        )}

        {tutors.length === 0 && !tutorsIsLoading && (
          <div
            className='d-flex flex-column align-items-center gap-3 mx-auto'
          >
            <NoTeachersFoundIcon />
            <p className='m-0'>No teachers found</p>
          </div>
        )}
        {tutors.map((tutor, index) => (
          <TeacherCard
            key={tutor._id}
            tutor={tutor}
            isActive={activeIndex === index}
            onHover={(e) => handleHover(index, e)}
          />
        ))}

        <div ref={lastTutorElementRef} style={{ height: '10px' }} />

        {tutorsIsLoading && (
          <div className="d-flex justify-content-center w-100 p-5">
            <Spinner
              className="mx-auto"
            />
          </div>
        )}
      </div>

      {
        tutors?.length > 0 && (
          <div className={classes["teacher-popover-sidebar"]}>
            <div
              className={classes["custom-popover"]}
              style={{ '--popover-offset': `${offset}px` }}
            >
              <h5 className="text-center mb-3">About {tutors[activeIndex]?.user?.name}</h5>
              <p className={classes["popover-description"]}>
                {tutors[activeIndex]?.bio}
              </p>
            </div>
          </div>
        )
      }
    </div >
  )
}

export default TeachersList
