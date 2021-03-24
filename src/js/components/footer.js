function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-left">
            Copyright © Your Website 2021
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="col-lg-4 text-lg-right">
            <a className="mr-3" href="#!">
              Privacy Policy
            </a>
            <a href="#!">Terms of Use</a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 justify-content-center mt-3">
                <form
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_blank"
                >
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="K6WB9KZB635T8"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/en_CL/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
