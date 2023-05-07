import '../css/footer.css';
function Footer(){
    return(
        <div className='footer'>
            <h5 className="ms-3 mb-4 pt-2">For inquiries,wholesale ticket purchases,and accessibility arrangements,please reach out to us at : </h5>
            <div className="row">
                <div className="col-lg-4 col-sm-12 mb-3">
                <h5 className="bol">PHONE</h5>
                <h6>+91-7033392927</h6>
                </div>
                <div className="col-lg-4 col-sm-12 mb-3">
                <h5 className="bol">EMAIL</h5>
                <h6>JUNOON_MIT@GMAIL.COM</h6>
                </div>
                <div className="col-lg-4 col-sm-12 mb-3">
                <h5 className="bol">GET SOCIAL</h5>
                <h6><i className="fa-brands fa-facebook-f white ps-0"></i><i className="fa-brands fa-twitter white ms-4"></i><i className="fa-brands fa-instagram white ms-4"></i></h6>
                </div>
                <div><h6>MIT Muzaffarpur,Bihar-842003</h6></div>
            </div>
        </div>
    )
}

export default Footer;