import React from 'react'
import './Reasons.css'
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>ALGUNAS RAZONES</span>
                <div>
                    <span className="stroke-text">¿POR QUÉ </span>
                    <span>ELEGIRNOS? </span>
                </div>

                <div className="details-r">
                    <div>
                       <img src={tick} alt=""/>
                       <span>MÁS DE 50 PLANES DE ENTRENAMIENTO</span>
                    </div>

                    <div>
                       <img src={tick} alt="" />
                       <span>ENTRENA MÁS INTELIGENTE Y RÁPIDO QUE ANTES</span>
                    </div>

                    <div>
                       <img src={tick} alt="" />
                       <span>LOS PLANES DE ENTRAMIENTO VIENEN INCLUIDO CON PLANES DE NUTRICION</span>
                    </div>

                    <div>
                        <img src={tick} alt="" />
                        <span>CONTAMOS CON LICENCIADO EN NUTRICION, EDUCACION FISICA Y ESTUDIANTE DE MEDICINA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reasons;