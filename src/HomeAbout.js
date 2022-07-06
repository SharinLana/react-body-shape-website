import icon1 from './Vector-1.png';
import icon2 from './Vector-2.png';
import icon3 from './Vector-3.png';
import icon4 from './Vector-4.png';
import icon5 from './Vector-5.png';
import circle from './circle.png';


function HomeAbout() {
    
    return (
        <div className="HomeAbout-main-cont">
            <div className="HomeAbout-container">
            <div className='HomeAbout-icon-container'>
                <img className='HomeAbout-icon' src={icon1} alt='icon'/>
            </div>
                <p className='HomeAbout-par'>Qualified staff</p>
            </div>

            <div className="HomeAbout-container">
            <div className='HomeAbout-icon-container'>
                <img className='HomeAbout-icon' src={icon2} alt='icon'/>
            </div>
                <p className='HomeAbout-par'>Personal approach to clients</p>
            </div>

            <div className="HomeAbout-container">
            <div className='HomeAbout-icon-container'>
                <img className='HomeAbout-icon' src={icon3} alt='icon'/>
            </div>
                <p className='HomeAbout-par'>Satisfaction guaratnee</p>
            </div>

            <div className="HomeAbout-container">
            <div className='HomeAbout-icon-container'>
                <img className='HomeAbout-icon' src={icon4} alt='icon'/>
            </div>
                <p className='HomeAbout-par'>Latest weight loss techniques</p>
            </div>

            <div className="HomeAbout-container">
            <div className='HomeAbout-icon-container'>
                <img className='HomeAbout-icon' src={icon5} alt='icon'/>
                <img className='HomeAbout-icon-circle' src={circle} alt='icon'/>
            </div>
                <p className='HomeAbout-par'>Modern equipment</p>
            </div>
        </div>
    )
}

export default HomeAbout;