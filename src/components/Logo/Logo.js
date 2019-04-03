import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.jpg'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt' options={{max: 60}} style={{height: 150, width: 150}}>
                <div className='Tilt-inner'>
                    <img alt='logo1' src={brain}/>
                </div>
            </Tilt>
        </div>

    );
}

export default Logo;