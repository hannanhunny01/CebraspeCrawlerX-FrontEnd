import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom';
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
import PrivateRoutes from './protectedRoutes';
import TermAndConditions from '../pages/terms/termsAndCondition';
import { UserContext } from '../Context/userContext';

function MyRoutes() {
  const token = useContext(UserContext);

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
        <Route path="/terms-and-conditions" element={<TermAndConditions />} />
            <Route element={<PrivateRoutes />}>
                <Route element={<RegisterCoursePage/>} path="/items" exact/>
                <Route element={<MyCoursePage/>} path="/myitems"/>
                <Route element={<Profile/>} path="/profile"/>
            </Route>


            <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
