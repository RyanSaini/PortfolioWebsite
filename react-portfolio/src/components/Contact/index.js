import { useEffect, useState } from 'react'
import { useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm= useRef()

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
    const [formValues, setFormValues] = useState({
    from_name: '',
    email: '',
    subject: '',
    message: '',
    });  

    const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_hjsut25', 'template_5q83l5c', refForm.current, 'SgqU2jwwHCro5smRT')
      .then(
        () => {
          alert('Message successfully sent!')

          setFormValues({
            from_name: '',
            email: '',
            subject: '',
            message: '',
          });

        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
      

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in Software Engineering opportunities -
                        especially ambitous and exciting projects. However if you
                        have other projects in mind please do not hesitate to connect with me
                        using the form below!
                    </p>
                    <div className='contact-form'>
                        
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type = "text" name="from_name" placeholder="Name" required value={formValues.from_name}
                                        onChange={(e) => setFormValues({ ...formValues, from_name: e.target.value })}/>
                                </li>

                                <li className='half'>
                                    <input type = "email" name="email" placeholder="Email" required value={formValues.email}
                                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}/>
                                </li>

                                <li>
                                    <input placeholder="Subject" type="text" name="subject"required value={formValues.subject}
                                        onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })} />
                                </li>

                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required

                                        value={formValues.message}
                                        onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}

                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>

                            </ul>
                        </form>
                    </div>
                </div>

                <div className ='info-map'>
                    Ryan Saini
                    <br />
                    United States
                    <br />
                    Turlock, CA.
                    <br />
                    <span>RyanSaini@icloud.com</span>


                </div>

                <div className='map-wrap'>
                <MapContainer center={[37.4946, -120.846596]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[37.4946, -120.846596]}>
                        <Popup>I'm in turlock, you must think I'm crazy if you expected my actual address! </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        
        </>
    )
}

export default Contact

