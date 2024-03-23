import { useEffect, useState } from 'react';
import {animate, motion} from 'framer-motion';
import './contact.css'


function Contact() {


  const [formsuccess,setFormsuccess] = useState(false);
  const [formfailure,setFormfailure] = useState(false);
  const [loading,setLoading] = useState(false);
  const [loadtext,setLoadtext] = useState();

  const titlevariant = {
    initial :{
      y:50,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:.9,
      }
    }
  }

  const formvariant = {
    initial :{
      y:-50,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
      }
    }
  }

  const messagevariant = {
    initial :{
      x:200,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:.4,
      }
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    mailstatus();
    const formData = new FormData(event.target);

    formData.append("access_key", "fc87f1a0-30e7-42aa-b375-f0640707b98c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json())
    
    setLoading(false);

    if (res.success) {
      setFormsuccess(true)
    }else{
      setFormfailure(true)
    }

  };

  useEffect(()=>{
    setTimeout(()=>{

      setFormsuccess(false);
      
    },5000)
  },[formsuccess])

  useEffect(()=>{
    setTimeout(()=>{

      setFormfailure(false);
      
    },5000)
  },[formfailure])

  const mailstatus =()=>{
    setLoadtext('Processing...');
  }

    return (
      <section id="Contact">
        <img className="clouds" src="/clouds.svg" alt=""/>
        <img src='/mount.png' alt='' className='mount'/>
        <motion.div className="contact-container" variants={messagevariant} initial='initial' animate='animate'>
          { formsuccess? <p className='mail-message-success'><ion-icon name="checkmark-circle"></ion-icon>Email Send Successfully!</p> : null}
          { formfailure? <p className='mail-message-failure'><ion-icon name="close-circle"></ion-icon>Error! Try Again Later</p> : null}

          <div className="contact-details">
              <motion.h1 variants={titlevariant} initial='initial' whileInView='animate'>Let's work together</motion.h1>
              <motion.div variants={titlevariant} initial='initial' whileInView='animate' className="contact-item">
                <h2>Mail me</h2>
                <a href='mailto:sritharkalimuthu@gmail.com'>sritharkalimuthu@gmail.com</a>
              </motion.div>
              <motion.div variants={titlevariant} initial='initial' whileInView='animate' className="contact-item">
                <h2>Call me</h2>
                <a href='tel:+919786348620'>+91 9786348620</a>
              </motion.div>
              <motion.div variants={titlevariant} initial='initial' whileInView='animate' className="contact-item">
                <h2>Address</h2>
                <p>36/10 , 4th Street, L.N.Puram, Aranthangi, Pudukkottai - 614616</p>
              </motion.div>
          </div>
          <motion.form onSubmit={onSubmit} variants={formvariant} initial='initial' whileInView='animate' className="contact-form">
              <input type="text" name='name' placeholder='Your Name' required/>
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea rows={8} name='message' placeholder='Your Message' required/>
              <button type='sumbit'>{loading?loadtext:'send'}</button>
          </motion.form>
        </motion.div>
      </section>
    )
  }
  
  export default Contact
  