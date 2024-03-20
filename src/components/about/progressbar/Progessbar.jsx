import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progressbar.css'
import {motion} from 'framer-motion';

function CircularProgressBar(props) {

  const boxvariant = {
    initial:{
      x:200,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1
      }
    }
  }

  let {name,percentage,pathColor,textColor,textSize,header} = props;
   textColor = textColor?textColor:'ffff';
  const [percentagecount, setPercentagecount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentagecount < percentage) {
        setPercentagecount(percentagecount + 1);
      }
    }, 50);
  }, [percentagecount]);

  return (
    <motion.div className='progressbar-container'
      variants={boxvariant}
      initial='initial'
      whileInView='animate'>
      <div className={`${name}progresscircle`}>
        <CircularProgressbar value={percentagecount} text={`${percentagecount}%`} styles={{
            path: {
                // Path color
                stroke: `#${pathColor}`,
            },
            trail: {
                // Trail color
                stroke: '#d6d6d6',
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                // Rotate the trail
                transform: 'rotate(0.90turn)',
                transformOrigin: 'center',
              },
              // Customize the text
              text: {
                // Text color
                fill: `#${textColor}`,
                // Text size
                fontSize: `#${textSize}`,

                fontWeight:800,
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: '#5266ce',
              },
            }}/>
      </div>
      <h2 className={`${name}-title`}>{header}</h2>
    </motion.div>
  );
}

export default CircularProgressBar