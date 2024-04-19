import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ProgressCircle, SparkAreaChart, AreaChart } from '@tremor/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "./Overview.css"
import emoji from "../../assets/img/emoji.png"
import battery from "../../assets/img/battery.svg"
import electricTower from "../../assets/img/electric-tower.svg"
import solarPanel from "../../assets/img/solar-panel.svg"


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
            <div className='overview-box1-info'>
                <img src={solarPanel} alt="emoji" className=''></img>
                <p>539 W</p>
            </div>
            <CircularProgressbar
                    value={80}
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
                            stroke: "#FFC000"
                        },
                        text:{
                            fill: "#ddd"
                        }
                    }}
                    strokeWidth={5}
                />
            </div>
            <div className='overview-box'>
                    <ProgressCircle value={75} size="xl" color="blue" showAnimation="true">
                        <div className='progress-circle-div'>
                            <div className='progress-circle-box1'>
                                <img src={battery} alt="battery" className=''></img>
                                <p>Batterie</p>
                            </div>
                            <div className='progress-circle-box2'>
                                <img src={emoji} alt="emoji" className='emoji'></img>
                            </div>
                            <div className='progress-circle-box3'>
                                <p>52,3 V</p>
                                <p>2.7 A</p>
                            </div>

                        </div>
                    </ProgressCircle>
            </div>
            <div className='overview-box overview-box2'>
            <div className='overview-box2-info'>
                <p>1582 W</p>
                <img src={electricTower} alt="emoji" className=''></img>
            </div>  
            <CircularProgressbar
                    value={40}
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
                            stroke: "#DE714C"
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