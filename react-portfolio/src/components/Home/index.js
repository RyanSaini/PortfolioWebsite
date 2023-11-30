import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import Logo from './Logo'



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M','e','e','t,']
    const jobArray = ['R', 'y', 'a', 'n', ' ', 'S', 'a', 'i', 'n', 'i','.']
    const desArr = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o','r','l','d!']

    
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return(
        <>
        <div className = "container home-page">
            <div className = "text-zone">
              
                    <h1> 
                      

                    <AnimatedLetters letterClass={letterClass}
                    strArray={desArr}
                    idx={7} />
                    <br />
                    
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                    </h1>

                    <h2>Software Engineer / UXUI Enthusiast / Futurist</h2>
                    
                    <Link to = "/contact" className = 'flat-button'> CONTACT ME</Link>
                </div> 

          <Logo />

        </div>
        <Loader type = "pacman" />
        </>
    )
}

export default Home