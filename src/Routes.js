import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { retry } from './utils/CommonFunctions'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Loading from './components/Loading'
import MoreAboutMe from './pages/MoreAboutMe'
import Credentials from './pages/Credentials'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Loading from './components/Loading'
import Cursor from './components/Cursor'

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
            path: '/credentials',
            element: <Credentials />
        },
        {
            path: '/works',
            element: <Works />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/service',
            element: <Service />
        },
        {
            path: '/loading',
            element: <Loading />
        },
        {
            path: '/cursor',
            element: <Cursor />
        },
        {
            path: '*',
            element: <FourOhFour />
        }
    ])
    return routes
}

export default Routes
