import React from 'react';
import './possibility.css';
import possibilityimg from '../../assets/possibilityimg.png'

const Possibility = () => {
    return(
        <div className='mehfoozghar__possibility section__padding' id='possibility'>
            <div className='mehfoozghar__possibility-content'>
                <h4>Be the First One to Register!</h4>
                <h1 className='gradient__text1'>The benefits are beyond your imagination</h1>
                <p>Join our services and give your child the opportunity to thrive in a safe, loving, and stimulating environment. Contact us today to schedule a tour and see for yourself why our daycare is the best choice for your child's care and development</p>
                <h4>Be the First One to Register!</h4>
            </div>
            <div className='mehfoozghar__possibility-image'>
                <img src={possibilityimg} alt='possibilityimg' />
            </div>
        </div>
    )
}

export default Possibility