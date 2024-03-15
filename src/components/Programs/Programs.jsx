import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import Rightarrow from '../../assets/rightArrow.png';

const Programs = () => {
    const handleJoinNowClick = () => {
        window.location.href = "https://mtor-tienda.vercel.app/";
    };

    return (
        <div className="Programs" id="programs">
            {/* Encabezado */}
            <div className="programs-header">
                <span className='stroke-text'>Explora Nuestros </span>
                <span>Programas </span>
                <span className='stroke-text'>Para moldearte</span>
            </div>
            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category" key={program.id}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now" onClick={handleJoinNowClick}>
                            <span>Únete Ahora</span>
                            <img src={Rightarrow} alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;
