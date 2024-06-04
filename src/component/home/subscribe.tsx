import React from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton} from '@fluentui/react/lib/Button';
 

export const Subscribe = () => {
  return (
    <>
    <div>
        <div className="course-container">
          <h2 className="subscribe-main-heading">
            GO AT YOUR OWN PACE
          </h2>
          <span className="subscribe-heading-span">
            Subscribe to Our Newsletter
          </span>
          <span className='subscribe-description'>
          Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!
          </span>
          <div className='subscribe-now-btn-div'>
            <TextField className='input-field'/>
             <div className='default-btn-div'><DefaultButton className='subscribe-now-btn'>Subscribe Now</DefaultButton></div>
          </div>
          
        </div>
    </div>
    </>
  )
}


