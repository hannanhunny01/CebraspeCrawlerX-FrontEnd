import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'
import LoginPage from '../pages/login/login'
import SignUpPage from '../pages/signup/signup'
import RegisterCoursePage from '../pages/RegisterCourse/registercourse'
import MyCoursePage from '../pages/myCourse/myCourse'
import Profile from '../pages/profile/profile'
import { ItemProvidor } from '../Context/itemContext'
 
function MyRoutes(){


    return (
        <BrowserRouter>
        <Routes>
           <Route exact path="/contact" element={<Home />} />
    
           <Route exact path="/" element={<Home />} />
    
          
    
         
    
          <Route path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
    
          <Route path="/items" element={<RegisterCoursePage />} />
          <Route path="/myitems" element={<MyCoursePage />} />
         <Route path="/profile" element={ <Profile />} />

        </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes