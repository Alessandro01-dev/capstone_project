import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import BookLessonPage from './pages/bookLessonPage/BookLessonPage';
import FindTutorPage from './pages/findTutorPage/FindTutorPage';
import CommunityPage from './pages/communityPage/CommunityPage';
import MainLayout from './components/mainLayout/MainLayout';
import TeacherDetailsPage from './pages/teacherDetailsPage/TeacherDetailsPage';
import TutorDetailsPage from './pages/tutorDetailsPage/TutorDetailsPage';
import PostDetailsPage from './pages/postDetailsPage/PostDetailsPage';
import SettingsPage from './pages/settingsPage/SettingsPage';
import { LoadScript } from '@react-google-maps/api';
import BecomeTeacherPage from './pages/becomeTeacherPage/BecomeTeacherPage';
import PostArticlePage from './pages/postArticlePage/PostArticlePage';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import 'react-quill-new/dist/quill.snow.css';
import LoginPage from './pages/loginPage/LoginPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
import LandingPage from './pages/landingPage/LandingPage';
import ProtectedRoutes from './middlewares/ProtectedRoutes';

const libraries = ['places'];

const App = () => {

  return (
    <MantineProvider>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={libraries}
        language="en"
        id="google-map-script"
      >
        <Router>
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />

            <Route element={<ProtectedRoutes />}>
              <Route element={<MainLayout />}>
                <Route index path="/" element={<Homepage />} />
                <Route path="/booklesson" element={<BookLessonPage />} />
                <Route path="/teachers/:teacherId" element={<TeacherDetailsPage />} />
                <Route path="/findtutor" element={<FindTutorPage />} />
                <Route path="/tutors/:tutorId" element={<TutorDetailsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/communityPosts/:postId" element={<PostDetailsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/becometeacher" element={<BecomeTeacherPage />} />
                <Route path="/postarticle" element={<PostArticlePage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </LoadScript>
    </MantineProvider>
  )
}

export default App
