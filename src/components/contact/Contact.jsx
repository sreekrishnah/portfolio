import { useEffect, useState } from 'react';
import { animate, motion } from 'framer-motion';
import './contact.css';

function Contact() {
  // State variables for form inputs, success, failure, and loading status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [formFailure, setFormFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  // Framer Motion variants for animations
  const titleVariant = {
    initial: {
      y: 50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
      }
    }
  };

  const formVariant = {
    initial: {
      y: -50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  };

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "fc87f1a0-30e7-42aa-b375-f0640707b98c");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    // Sending form data to API
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json())
    
    setLoading(false);

    try {
      // Handling success or failure response
      if (res.success) {
        setFormSuccess(true);
      } else {
        setFormFailure(true);
      }
    } catch(error) {
      console.log(error);
      setLoading(false);
      setFormFailure(true);
    } finally {
      // Clearing form inputs
      formClear();
    }
  };

  // Function to clear form inputs
  const formClear = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  // Effect to clear success message after a certain duration
  useEffect(() => {
    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  }, [formSuccess]);

  // Effect to clear failure message after a certain duration
  useEffect(() => {
    setTimeout(() => {
      setFormFailure(false);
    }, 5000);
  }, [formFailure]);

  return (
    <section id="Contact">
      <img className="clouds" src="/clouds.svg" alt=""/>
      <img src='/mount.png' alt='' className='mount'/>
      <motion.div className="contact-container" variants={titleVariant} initial='initial' animate='animate'>
        {/* Display success message if form is submitted successfully */}
        {formSuccess && <p className='mail-message mail-message-success'><ion-icon name="checkmark-circle"></ion-icon>Email Sent Successfully!</p>}
        {/* Display failure message if form submission fails */}
        {formFailure && <p className='mail-message mail-message-failure'><ion-icon name="close-circle"></ion-icon>Error! Try Again Later</p>}
        
        {/* Contact details */}
        <div className="contact-details">
          <motion.h1 variants={titleVariant} initial='initial' whileInView='animate'>Let's work together</motion.h1>
          <motion.div variants={titleVariant} initial='initial' whileInView='animate' className="contact-item">
            <p>Feel free to reach out for collaboration opportunities or freelance work. I am open to exciting projects and look forward to hearing from you!</p>
          </motion.div>
          <motion.div variants={titleVariant} initial='initial' whileInView='animate' className="contact-item">
            <h2>Mail me</h2>
            <a href='mailto:sritharkalimuthu@gmail.com'>sritharkalimuthu@gmail.com</a>
          </motion.div>
          {/* <motion.div variants={titleVariant} initial='initial' whileInView='animate' className="contact-item">
            <h2>Call me</h2>
            <a href='tel:+919786348620'>+91 9786348620</a>
          </motion.div> */}
        </div>

        {/* Contact form */}
        <motion.form onSubmit={onSubmit} variants={formVariant} initial='initial' whileInView='animate' className="contact-form">
          <input type="text" name='name' placeholder='Your Name' value={name} required onChange={(e) => setName(e.target.value)} />
          <input type='email' name='email' placeholder='Your Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
          <textarea rows={8} name='message' placeholder='Your Message' value={message} required onChange={(e) => setMessage(e.target.value)} />
          <div className="contact-btn-container">
            {/* Button to submit form */}
            <button type='submit' className='ui-btn send-btn'><span>{loading ? 'Processing...' : 'Send'}</span></button>
            {/* Button to clear form inputs */}
            <button className='ui-btn clear-btn' onClick={formClear}><span>Clear All</span></button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Contact;
