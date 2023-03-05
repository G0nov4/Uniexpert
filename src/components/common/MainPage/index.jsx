import React from 'react'

import Navbar from './NavBar'
import CallToActionWithVideo from './Heroes'
import Home from './Features'
import Milestones from './TimeLine'
import SmallCentered from './Footer'
export default function MainPage() {
    return (
        <>
            <Navbar></Navbar>
            <CallToActionWithVideo></CallToActionWithVideo>
            <Home></Home>
            <Milestones></Milestones>
            <SmallCentered></SmallCentered>
        </>

    )
}
