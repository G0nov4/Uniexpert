import React from 'react'

import Navbar from './NavBar'
import CallToActionWithVideo from './Heroes'
import Home from './Features'
import Milestones from './TimeLine'
import SmallCentered from './Footer'
import WithSpeechBubbles from './Testimonials'
export default function MainPage() {
    return (
        <>
            <Navbar/>
            <CallToActionWithVideo/>
            <Home/>
            <Milestones/>
            <WithSpeechBubbles/>
            <SmallCentered/>
        </>

    )
}
