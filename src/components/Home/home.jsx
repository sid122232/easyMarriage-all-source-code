// home.jsx
import { useState, useEffect } from 'react';
import Hero from './hero/hero.jsx';
import Background from '../background/background.jsx';
import '../Home/home.css';
import Service from './services/service.jsx';
import Title from '../Title/tittle.jsx';

function Home() {
    const heroData = [
        { text1: "Crafting Unforgettable Moments", text2: "Celebrate love, laughter, and happily-ever-after with us" },
        { text1: "Your Love Story, Our Inspiration", text2: "we make your big day magical." },
        { text1: "Where Forever Begins ", text2: "Your special day deserves nothing less than perfection" },
    ];

    const [heroCount, setCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => (count === 2 ? 0 : count + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="home">
    {/* Hero Section */}
    <div className="hero-section">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Hero
            heroData={heroData}
            heroCount={heroCount}
            setCount={setCount}
            playStatus={playStatus}
            setPlayStatus={setPlayStatus}
        />
    </div>

    {/* Services Section */}
    <div className="services-section container">
        <Title subTitle='OUR PROGRAM' title='WHAT WE OFFER'/>
        <Service />
    </div>
</div>

          
        </>
    );
}

export default Home;