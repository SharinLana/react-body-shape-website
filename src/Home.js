import HomeAbout from './HomeAbout';
import HomeHelp from './HomeHelp';
import HomePromo from './HomePromo';
import PopUpWindow from './PopUpWindow';

function Home( {popUpBtn, openPopUpWindow, closePopUpWindow, inputName, forbidNumbers, inputTel, activateTelMask} ) {
    
    return (
        <div className="Home-main-cont">
            <div className="Home-inner-container">
                <div className="Home-picture-container">
                    <div className='Home-picText-container'>
                        <h1 className='Home-header'>Create the perfect body</h1>
                        <hr className='Home-white-hr'/>
                        <p className='Home-studioName'>Body Shape Studio</p>
                        <button className='Home-callBack-btn' onClick={openPopUpWindow}>Request a Call Back</button>
                        <PopUpWindow 
                        popUpBtn={popUpBtn}
                        closePopUpWindow={closePopUpWindow}
                        inputName={inputName}
                        forbidNumbers={forbidNumbers}
                        inputTel={inputTel}
                        activateTelMask={activateTelMask}/>
                    </div>
                </div>
                <h2 className='Home-about-header'>About Us</h2>
                <HomeAbout />
                <h2 className='Home-about-header'>Body Shape Studio will help you:</h2>
                <HomeHelp />
                <div className='Home-promo-container'>
                    <h2 className='Home-about-header'>Promotions</h2>
                    <HomePromo />
                </div>
            </div>
        </div>
    )
}

export default Home;