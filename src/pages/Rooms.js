import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
function Rooms() {
    return (
        <div>
           <Hero hero='roomsHero'>
            <Banner title='Our Rooms' >
                    <Link to='/' className='btn-primary'>
                        Return Home    
                    </Link>    
            </Banner>
           </Hero> 
        </div>
    )
}

export default Rooms
