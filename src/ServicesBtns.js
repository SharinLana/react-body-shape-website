
function ServicesBtns( {filterProcedures} ) {

    return (
        <div className="ServicesBtns-container">
            <button className="ServicesBtns-btn" onClick={() => window.location.reload()}>All services</button>
            <button className="ServicesBtns-btn" onClick={() => filterProcedures('face')}>Face care</button>
            <button className="ServicesBtns-btn" onClick={() => filterProcedures('body', 'hair')}>Body care</button>
            <button className="ServicesBtns-btn" onClick={() => filterProcedures('eyelashes')}>Eyelashes / brows</button>
            <button className="ServicesBtns-btn" onClick={() => filterProcedures('hair')}>Hair removal</button>
        </div>
    )
}

export default ServicesBtns;