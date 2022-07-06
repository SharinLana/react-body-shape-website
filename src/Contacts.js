function Contacts() {

    return (
        <div className="Contacts-main-container">
            <div className="Contacts-container">
            <h1 className='Home-contacts-header'>Contacts</h1>

            <div className="Contacts-data-container">
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header">Working hours</h3>
                    <p className="Contacts-data-par">Mon-Fri: 9 AM - 9 PM</p>
                    <p className="Contacts-data-par">Sat: 10 AM - 8 PM</p>
                    <p className="Contacts-data-par">Sun: Closed</p>
                </div>
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header">Get in touch</h3>
                    <p className="Contacts-data-par">+1.917.345.6731</p>
                    <p className="Contacts-data-par">body.shape.studio@gmail.com</p>
                </div>
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header">Our address</h3>
                    <p className="Contacts-data-par">975 Ocean Parkway, #1234, Brooklyn, NY 11230</p>
                </div>
            </div>

            <div className="Contacts-map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.806620221701!2d-73.9710092490913!3d40.61209005155743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244e8f78caed9%3A0xce16934f919599b2!2s1500%20Ocean%20Pkwy%2C%20Brooklyn%2C%20NY%2011230!5e0!3m2!1sen!2sus!4v1656710826958!5m2!1sen!2sus" 
            className="Contacts-map" title="map" allowFullScreen="" loading="lazy"></iframe>
            </div>

            </div>
        </div>
    )
}

export default Contacts;