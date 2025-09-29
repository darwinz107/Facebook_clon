
import { FeedPreview } from '../components/FeedPreview.jsx'
import { NavBar } from '../components/NavBar.jsx'

export const Principal =()=>{



    return(
<>
<NavBar></NavBar>
<div className='feedPreview'><FeedPreview/> </div>
     <div className='footer'><Footer></Footer> </div>
    
</>
    )
}