import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../Context/userContext'
import { useContext } from 'react'

const PrivateRoutes = () => {

    const token = useContext(UserContext)
    return(
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes