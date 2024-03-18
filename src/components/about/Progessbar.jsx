import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progressbar.css'

function CircularProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 80) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div className='progressbar-container'>
      <div className='progressbar'>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{
            path: {
                // Path color
                stroke: `#e7c60e`,
            },
            trail: {
                // Trail color
                stroke: '#d6d6d6',
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',
                // Rotate the trail
                transform: 'rotate(0.30turn)',
                transformOrigin: 'center',
              },
              // Customize the text
              text: {
                // Text color
                fill: '#e7c60e',
                // Text size
                fontSize: '24px',
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: '#5266ce',
              },
            }}/>
      </div>
      <h2>Web Development</h2>
    </div>
  );
}

export default CircularProgressBar