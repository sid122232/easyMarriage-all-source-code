import './hero.css';
import playBtn from '../../../assets/play.svg';
import pauseBtn from '../../../assets/pause.svg';

const Hero = ({ heroData, setCount, heroCount, setPlayStatus, playStatus }) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className='hero-heading'>{heroData[heroCount]?.text1}</h1    >
                <p className='hero-para'>{heroData[heroCount]?.text2}</p>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    {heroData.map((_, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                console.log(`Dot ${index + 1} clicked`);
                                setCount(index);
                            }}
                            className={heroCount === index ? "hero-dot orange" : "hero-dot"}
                        >
                           
                        </li>
                    ))}
                </ul>
                <div className="hero-play">
                    <img
                        onClick={() => setPlayStatus(!playStatus)}
                        src={playStatus ? pauseBtn : playBtn}
                        alt="Play/Pause Button"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
