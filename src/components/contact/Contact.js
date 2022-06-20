import './Contact.css'
import emailjs from 'emailjs-com'
import Button from '../utils/button/Button'
function Contact () {
  const sendMail = event => {
    event.preventDefault()
    emailjs
      .sendForm(
        'description_app_service',
        'description_app_template',
        event.target,
        'jK3QHWmbV-GLtAmq3'
      )
      .then(res => {
        event.target.reset()
      })
      .catch(error => error)
  }
  return (
    <div className='Contact'>
      <div className='information'>
        <p>
          <strong>correo</strong>/sebastian.delafuente2000@gmail.com
        </p>

        <p>
          <strong>tel</strong>/+54 9 11 22854549
        </p>
      </div>

      <h2>Contáctame</h2>
      <form onSubmit={sendMail}>
        <div className='name-container'>
          <label htmlFor='name'>Nombre</label>
          <br />
          <input type='text' name='name' />
        </div>
        <div className='email-container'>
          <label htmlFor='email'>Correo</label>
          <br />
          <input type='text' name='email' />
        </div>
        <div className='message-container'>
          <label htmlFor='message'>Mensaje</label>
          <br />
          <textarea rows='15' name='message' />
        </div>
        <Button value='enviar' />
      </form>
    </div>
  )
}

export default Contact
