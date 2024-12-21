import React from 'react';
import '../../background/background.css';
import priests from '../../../assets/priests.svg';
import makeup from '../../../assets/makeup.svg';
import musicBand from '../../../assets/musicBand.svg';
import venue from '../../../assets/venue.svg';

const Background = ({ heroCount }) => {
    const images = [priests, venue, musicBand, makeup]; // Array of images

    return (
        <>
        <img
            src={images[heroCount]}
            className="background fade-in"
            alt={`Slide ${heroCount + 1}`}
        />
        <div className="background-overlay">
            </div>
        </>
    );
};

export default Background;
