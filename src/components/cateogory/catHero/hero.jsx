import '../catHero/hero.css';
import playBtn from '../../../assets/play.svg';
import pauseBtn from '../../../assets/pause.svg';

const Hero = ({ heroData, setCount, heroCount }) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1  className='hero-heading'>{heroData[heroCount]?.text1}</h1>
                <p  className='hero-para'>{heroData[heroCount]?.text2}</p>
            </div>
           
        </div>
    );
};

export default Hero;
