import {motion} from "framer-motion";
import './navbar.css';

function Navbar() {

  const navelements = ['Home','About','Works','Contact'];
  const variant = {
    visible : {
      opacity:1,
      x:0,
      transition:{duration:.9},
    },
    hidden:(i) =>({
      x:-200,
      opacity:0,
    })
  }
  const ul_variant = {
    visible : {
      opacity:1,
      x:0,
      transition:{staggerChildren:.3},
    },
    hidden:{
      opacity:0,
    }
  }
  
  return (
    <>
      <nav>
        <motion.h1 initial="hidden" animate="visible" variants={variant}><a href={`#Home`}>sk</a></motion.h1>
        <motion.ul initial="hidden" animate="visible" variants={ul_variant}>
          {navelements.map((value,index)=>{
            return <motion.a href={`#${value}`} className='navigator' key={index} variants={ul_variant}>{value}</motion.a>
          })}
        </motion.ul>
      </nav>
    </>
  )
}

export default Navbar
