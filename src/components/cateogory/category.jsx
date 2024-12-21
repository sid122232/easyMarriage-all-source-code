import '../cateogory/category.css';
import { useState, useEffect } from 'react';
import Hero from '../cateogory/catHero/hero.jsx';
import Background from './catBackground/background';

function Category() {
    const heroData = [
        { text1: "Everything You Need for Your Dream Wedding in One Place", text2: "Discover makeup artists, musicians, venues, and more" },
        { text1: "Find the Perfect Venue for Your Big Day", text2: "Explore stunning locations for your wedding" },
        { text1: "Top Musicians for Your Celebration", text2: "Live bands and DJs to make your day memorable" },
        // { text1: "Expert Makeup Artists at Your Service", text2: "Get the bridal look you've always dreamed of" },
    ];

    const [heroCount, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => (count === 2 ? 0 : count + 1)); // Looping through 4 slides
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="hero-section">
        <Background  heroCount={heroCount} />
        <Hero
            heroData={heroData}
            heroCount={heroCount}
            setCount={setCount}
            
        />
    </div>
    );
}

export default Category;
