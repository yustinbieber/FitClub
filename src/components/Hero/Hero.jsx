import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'


const Hero = () => {
    const transition =  {type: 'spring', duration: 3}
    const mobile = window.innerWidth<= 768 ? true:false;

    const handleButtonClick = () => {
        // Redirigir a la página deseada
        window.location.href = "https://mtor-tienda.vercel.app/";
    };

    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur">

            </div>
            <div className="left-h">
                <Header />
                {/* {El Mejor Anuncio} */}
                <div className="the-best-ad">
                    <motion.div 
                    initial={{left: mobile? "165px" : "238px"}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>El Mejor Club de Fitness de la Ciudad</span>
                </div>
                {/* {Encabezado del Héroe} */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Dale Forma </span>
                        <span>A tu</span>
                    </div>
                    <div>
                        <span>Cuerpo Ideal</span>
                    </div>
                    <div>
                        <span>
                            Aquí te ayudaremos a dar forma y construir tu cuerpo ideal y vivir al máximo tu vida.
                        </span>
                    </div>
                </div>
                {/* {Figuras} */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={75} delay ='4' preFix="+"/>
                        </span>
                        <span>Clientes satisfechos</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={15} delay='3' preFix="+" />
                        </span>
                        <span>Planes</span>
                    </div>
                    
                </div>
             {/* {Botones del Héroe} */}
             <div className="hero-buttons">
                <buttons className="btn" onClick={handleButtonClick}>Empezar</buttons>
                <buttons className="btn" onClick={handleButtonClick}>Saber Más</buttons>
             </div>
            </div>

            <div className="right-h">
            <button id='comprar' className="btn" onClick={handleButtonClick}>Únete Ahora</button>


                <motion.div
                initial={{right: "-1rem"}}
                whileInView={{right: "5rem"}}
                transition={transition} className="heart-rate">
                    <img src={Heart} alt='' />
                    <span>Ritmo Cardíaco</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* {Imágenes del Héroe} */}
                <img src={hero_image} alt='' className="hero-image"/>
                <motion.img
                    initial={{ right: "26rem" }}
                    whileInView={{ right: "31.5rem" }}
                    transition={transition}
                
                src={hero_image_back} alt='' className="hero-image-back"/>
                {/* {Calorías} */}
                <motion.div 
                    initial={{ right: "55rem" }}
                    whileInView={{ right: "45rem" }}
                    transition={transition}
                className="calories">
                    <img src={Calories} alt='' />
                    <div>
                        <span>Calorías Quemadas</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;
