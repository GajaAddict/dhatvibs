import React from "react";

function ContactUs() {
    return (
        <div className="container my-5">
            <h2 className="mb-4">Let's Connect!</h2>
            <p>
                We're here to help your business thrive. Whether you have questions
                about our <strong>software solutions</strong>, need support with your{" "}
                <strong>e-Commerce</strong> or <strong>Quick Commerce</strong>{" "}
                platforms, require assistance with <strong>IT operations</strong>, or
                want to learn more about our <strong>voice support services</strong>,
                our team is ready to assist you. Reach out to us through the options
                below, and we'll get back to you as soon as possible.
            </p>

            <div className="row mt-5">
                {/* Contact Info */}
                <div className="col-md-4 mb-4">
                    <h5>Contact</h5>
                    <p>Please feel free to reach out our team.</p>

                    <p>
                        <strong>📞 Phone:</strong> <br />
                        <a href="tel:+914045374487" className="text-decoration-none">
                            +91 40 45374487
                        </a>
                    </p>

                    <p>
                        <strong>📧 Email:</strong> <br />
                        <a href="mailto:info@dhatvibs.com" className="text-decoration-none">
                            info@dhatvibs.com
                        </a>
                    </p>

                    <p>
                        <strong>🏢 Address:</strong> <br />
                        PB House, 1st Floor, HUDA Techno Enclave, Street No.7, Madhapur,
                        Hyderabad, Telangana 500081
                    </p>
                </div>

                {/* Contact Form */}
                <div className="col-md-8">
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="First name *" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="Last name *" required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="email" className="form-control" placeholder="Email *" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input type="tel" className="form-control" placeholder="Phone number *" required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="Job title *" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="Company name *" required />
                            </div>
                        </div>

                        <div className="mb-3">
                            <textarea className="form-control" rows="4" placeholder="How can we help you? *" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-5">
                <h5>Find Us Here:</h5>
                <iframe
                    src="https://maps.app.goo.gl/sYB8Eqo7XYDa7RJc6"
                    title="Google Maps"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactUs;
