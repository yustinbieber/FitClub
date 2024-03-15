import React from 'react';
import './Join.css';

const Join = () => {
    

    const handleJoinNowClick = () => {
        window.location.href = "https://mtor-tienda.vercel.app/";
    };

    return (
            <div className="right-j">
                {/* Botón "Join Now" que redirige a la página deseada */}
                <button className="btn btn-join-now" onClick={handleJoinNowClick}>COMPRA ACÁ</button>
            </div>
    );
}

export default Join;
