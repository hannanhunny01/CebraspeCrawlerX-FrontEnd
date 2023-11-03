import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import LoginPage from '../pages/login/login';
import SignUpPage from '../pages/signup/signup';
import RegisterCoursePage from '../pages/RegisterCourse/registercourse';
import MyCoursePage from '../pages/myCourse/myCourse';
import Profile from '../pages/profile/profile';
import ForgotPassword from '../pages/forgotPassword/forgotPassword';
import ResetPassword from '../pages/resetPassword/resetPassword';
import Status from '../pages/status/status';
import ContactPage from '../pages/contact/contact';
import ProtectedRoute from './protectedRoutes';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status" element={<Status />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:id" element={<ResetPassword />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/items" element={<ProtectedRoute element={RegisterCoursePage} />} />
        <Route path="/myitems" element={<MyCoursePage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
