import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { retry } from './utils/CommonFunctions'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Loading from './components/Loading'
import MoreAboutMe from './pages/MoreAboutMe'

const Home = lazy(() => retry(() => import('./pages/Home')))
const FourOhFour = lazy(() => retry(() => import('./pages/FourOhFour')))
const Routes = () => {


    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/navbar',
            element: <Navbar />
        },
        {
            path: '/footer',
            element: <Footer />
        },
        {
            path: '/about',
            element: <MoreAboutMe />
        },
        {
            path: '*',
            element: <FourOhFour />
        }
    ])
    return routes
}

export default Routes
