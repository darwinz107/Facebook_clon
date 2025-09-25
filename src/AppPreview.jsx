import React from 'react'
import { NavBarNotLogin } from './components/NavBarNotLogin'
import { FeedPreview } from './components/FeedPreview'
import { Footer } from './components/Footer';

export const AppPreview = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
    <NavBarNotLogin/>
    <div className='feedPreview'><FeedPreview/> </div>
     <div className='footer'><Footer></Footer> </div>
    </div>
    </>
  )
}
