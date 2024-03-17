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
      <nav className='flex justify-between m-5'>
        <motion.h1 className='uppercase p-4 text-5xl font-bold cursor-default' initial="hidden" animate="visible" variants={variant}><a href={`#Home`} className="hover:appearance-none active:appearance-none">sk</a></motion.h1>
        <motion.ul className='flex p-4' initial="hidden" animate="visible" variants={ul_variant}>
          {navelements.map((value,index)=>{
            return <motion.a href={`#${value}`} className='mr-10 px-5 py-2 capitalize text-lg font-semibold cursor-pointer hover:text-xl active:text-xl text-center ' key={index} variants={ul_variant}>{value}</motion.a>
          })}
        </motion.ul>
      </nav>
    </>
  )
}

export default Navbar
