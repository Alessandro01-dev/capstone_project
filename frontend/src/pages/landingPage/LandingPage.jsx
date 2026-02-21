import { Container, Row, Col } from 'react-bootstrap';
import PublicNavbar from '../../components/publicNavbar/PublicNavbar';
import PublicHero from '../../components/publicHero/PublicHero';
import { useNavigate } from 'react-router-dom';
import PublicServices from '../../components/publicServices/PublicServices';
import PublicSubhero from '../../components/publicSubhero/PublicSubhero';
import PublicTeacherCall from '../../components/publicTeacherCall/PublicTeacherCall';
import PublicCommunityHighlight from '../../components/publicCommunityHighlight/PublicCommunityHighlight';
import PublicLanguagesCarousel from '../../components/publicLanguagesCarousel/PublicLanguagesCarousel';
import PublicFooter from '../../components/publicFooter/PublicFooter';

const LandingPage = () => {

  const navigate = useNavigate();

  const handleLandingPageRedirect = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div
      className='vh-100 overflow-y-auto'
    >

      <PublicNavbar />

      <PublicHero />

      <PublicServices />

      <PublicLanguagesCarousel />

      <PublicSubhero />

      <PublicTeacherCall
        onRedirect={handleLandingPageRedirect}
      />

      <PublicCommunityHighlight
        onRedirect={handleLandingPageRedirect}
      />

      <PublicFooter />

    </div>
  );
};

export default LandingPage;
