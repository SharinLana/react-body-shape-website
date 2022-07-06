import PopUpWindow from './PopUpWindow';

function ServicesEach( {eachProcedure, learnMoreBtn, 
    popUpBtn, inputTel, inputName, openPopUpWindow, closePopUpWindow, forbidNumbers, activateTelMask} ) {
    
    return (
        <div className={`${learnMoreBtn ? 'ServicesEach-main-container' : 'ServicesEach-container-hidden'}`}>
            <h2 className="ServicesEach-header">{eachProcedure[0].header}</h2>
            <div className="ServicesEach-container">
                <div className="ServicesEach-innerCont ServicesEach-parCont">
                    <p className="ServicesEach-innerHeader1">{eachProcedure[0].header}</p>
                    <p className="ServicesEach-par1">{eachProcedure[0].learnMoreTxt1}</p>
                    <p className="ServicesEach-innerHeader2">{eachProcedure[0].header2}</p>
                    <ul className="ServicesEach-ul">
                       {eachProcedure[0].ulRecommended.map((item, index) => {
                        return (
                            <div key={index}>
                                <li>{item.li}</li>
                            </div>
                        )
                       })}
                    </ul>
                    <button onClick={openPopUpWindow}
                    className="ServicesEach-popUpBtn">Request a Call Back</button>
                </div>
                <div className="ServicesEach-innerCont">
                    <img src={eachProcedure[0].image1} alt='pic'
                    className="ServicesEach-image"/>
                </div>
            </div>
            <div className="ServicesEach-container">
                <div className="ServicesEach-innerCont">
                    <img src={eachProcedure[0].image2} alt='pic'
                    className="ServicesEach-image"/>
                </div>
                <div className="ServicesEach-innerCont ServicesEach-parCont">
                    <p className="ServicesEach-innerHeader3">{eachProcedure[0].header3}</p>
                    <ul className="ServicesEach-ul">
                       {eachProcedure[0].ulContradications.map((item, index) => {
                        return (
                            <div key={index}>
                                <li>{item.li}</li>
                            </div>
                        )
                       })}
                    </ul>
                </div>
            </div>
            <PopUpWindow 
            popUpBtn={popUpBtn}
            closePopUpWindow={closePopUpWindow}
            inputName={inputName}
            forbidNumbers={forbidNumbers}
            inputTel={inputTel}
            activateTelMask={activateTelMask}/>
        </div>
    )
}

export default ServicesEach;