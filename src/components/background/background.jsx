import './background.css'
import video1 from '../../assets/video1.mp4'
import wedding1 from '../../assets/wedding1.svg'
import wedding2 from '../../assets/wedding2.svg'
import wedding3 from '../../assets/wedding3.svg'
console.log({video1})

    const Background = ({playStatus,heroCount})=>{
        if(playStatus){
            return (
                <video className='background fade-in' autoPlay loop muted>
                    <source src={video1} type='video/mp4'/>     
                </video>
            )
        }
        else if(heroCount===0){
         
             return <img src={wedding1} className='background fade-in' />
            

        }
        else if(heroCount===1){
            
             return <img src={wedding2} className='background fade-in' />
            

        }
        else if(heroCount===2){
            return <img src={wedding3} className='background fade-in' />
            

        }
        return <div>No image available</div>
    }
   

export default Background
