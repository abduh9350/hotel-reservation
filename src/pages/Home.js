import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <diV>
           <Hero>
            <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
                <Link to='/rooms' className='btn-primary'>
                    our rooms    
                </Link>    
            </Banner> 
           </Hero>
           <Services />
        </diV> 
        
    )
}

export default Home
