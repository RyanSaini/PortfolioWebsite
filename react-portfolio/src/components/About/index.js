import './index.scss'
import { useEffect, useState } from 'react'
import {

    faCss3,
    faCuttlefish,

    faHtml5,
    faJsSquare,
    faReact,
    faSwift,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx= {15}
                    />
                </h1>
                <p> 
                    I'm a very ambitious software engineer looking for a role in a
                    established IT company with the opportuinty to work with the latest 
                    technologies on challenging + innovative projects</p>
                <p>
                    I'm a tactically confident, naturally curious, and most importantly creative Software Engineer.
                </p>
                <p>
                    If I need to define myself in one sentence that would be Apple > everything.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">

                <div className="face1">
                <FontAwesomeIcon icon={faSwift} color="#DD0031" />
                </div>
                <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                <FontAwesomeIcon icon={faCuttlefish}color="#EC4D28" />
                
                </div>
            </div>
        </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About