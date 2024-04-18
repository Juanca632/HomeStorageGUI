import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ProgressCircle, SparkAreaChart, AreaChart } from '@tremor/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "./Overview.css"



const Overview = () => {

    const navigate = useNavigate();
  
    const swipeHandlers = useSwipeable({
      onSwipedRight: () => {
        // Navegar a la ruta "/charts" al detectar un gesto de swipe hacia la derecha
        navigate('/');
      },
    });


    return (
        
        <div {...swipeHandlers} className='overview'>

            <div className='overview-box overview-box1'>
            <CircularProgressbar
                    value={50}
                    className='circular-progressbar1'
                    circleRatio={0.4}
                    styles={{
                        trail: {
                            
                            transform: "rotate(-162deg)",
                            transformOrigin: "center center"
                        },
                        path:{
                            
                            transform: "rotate(-162deg)",
                            transformOrigin: "center center",
                            stroke: "#000"
                        },
                        text:{
                            fill: "#ddd"
                        }
                    }}
                    strokeWidth={5}
                />
            </div>
            <div className='overview-box'>
                    <ProgressCircle value={30} size="xl" color="blue" showAnimation="true">
                        <span className="percentage-battery">75%</span>
                    </ProgressCircle>
            </div>
            <div className='overview-box overview-box2'>
            <CircularProgressbar
                    value={30}
                    className={`circular-progressbar2 mirrored-progress`}
                    circleRatio={0.4}
                    styles={{
                        trail: {
                            transform: "rotate(-162deg)", // Mantén la rotación original
                            transformOrigin: "center center"
                        },
                        path: {
                            transform: "rotate(-162deg)", // Mantén la rotación original
                            transformOrigin: "center center",
                            stroke: "#000"
                        },
                        text: {
                            fill: "#ddd"
                        }
                    }}
                    strokeWidth={5}
                />

            </div>
        </div>
    );
}

export { Overview };