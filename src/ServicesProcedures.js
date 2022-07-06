function ServicesProcedures( {procedures, search, learnMore, learnMoreBtn} ) {
    
    return (
        <div className='Services-normalizing-cont'> 
        {procedures.filter((element) => {
            if (search === '') {
                return element;
            }
            else if (element.header.toLowerCase().includes(search.toLowerCase())) {
                return element;
            }
        }).map((object) => {
            const {id, image, header, line1, line1Crossed,
                line2, line2Crossed, line3, line3Crossed} = object;
            return (
                <div key={id} className={`${learnMoreBtn ? 'Services-eachProcedure-hidden' : 'Services-eachProcedure-cont'}`}>
                    <img className='Services-image' src={image} alt='pic'/>
                    <p className='Services-header'>{header}</p>
                    <div className='Services-par-container'> 
                        <p className='Services-par'>{line1}</p>
                        <p className='Services-crossedPar'>{line1Crossed}</p>
                    </div>
                    <div className='Services-par-container'> 
                        <p className='Services-par'>{line2}</p>
                        <p className='Services-crossedPar'>{line2Crossed}</p>
                    </div>
                    <div className='Services-par-container'> 
                        <p className='Services-par'>{line3}</p>
                        <p className='Services-crossedPar'>{line3Crossed}</p>
                    </div>
                    <button className='Services-LearnMore-Btn' 
                    onClick={() => learnMore(id)}>Learn more</button>
                </div>
            )
        })}
        </div>

    )
}

export default ServicesProcedures;