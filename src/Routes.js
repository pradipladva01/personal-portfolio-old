import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { retry } from './utils/CommonFunctions'

const Home = lazy(() => retry(() => import('./pages/Home')))
const MoreAboutMe = lazy(() => retry(() => import('./pages/MoreAboutMe')))
const Credentials = lazy(() => retry(() => import('./pages/Credentials')))
const Works = lazy(() => retry(() => import('./pages/Works')))
const Contact = lazy(() => retry(() => import('./pages/Contact')))
const Service = lazy(() => retry(() => import('./pages/Service')))
const WorkDetails = lazy(() => retry(() => import('./pages/WorkDetails')))
const FourOhFour = lazy(() => retry(() => import('./pages/FourOhFour')))
const Routes = () => {


    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
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
            path: '/work-details',
            element: <WorkDetails />
        },
        {
            path: '*',
            element: <FourOhFour />
        }
    ])
    return routes
}

export default Routes