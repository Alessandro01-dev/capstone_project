import { Container, Row, Col } from 'react-bootstrap';
import classes from './BentoGrid.module.css';
import { useEffect } from 'react';
import useCommunityPosts from '../../hooks/useCommunityPosts'
import MeetingManager from './meetingManager/MeetingManager';
import ProfileHeader from './profileHeader/ProfileHeader';
import ConnectionsOverview from './connectionsOverview/ConnectionsOverview';
import CommunityNews from './communityNews/CommunityNews';
import FindTutorCallToAction from './findTutorCallToAction/FindTutorCallToAction';

const BentoGrid = () => {

  const { getPosts, postsData } = useCommunityPosts()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Container>
      <Row
        className="mb-4"
      >
        <Col
          xs={12}
        >
          <div
            className={classes["custom-bento-container"]}
          >
            <ProfileHeader />
          </div>
        </Col>
      </Row>

      <Row
        className="g-4"
      >
        <Col
          xs={12}
          lg={8}
        >
          <Row
            className="g-4"
          >
            <Col
              xs={12}
              md={6}
            >
              <div
                className={classes["custom-bento-container"]}
              >
                <ConnectionsOverview />
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div
                className={classes["custom-bento-container"]}
              >
                <FindTutorCallToAction />
              </div>
            </Col>

            <Col xs={12}>
              <div className={classes["custom-bento-container"]}>
                <MeetingManager />
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={12} lg={4}>
          <div
            className={`${classes["custom-bento-container"]} bg-danger text-white`}
          >
            <CommunityNews />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BentoGrid;
