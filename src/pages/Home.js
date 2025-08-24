import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <div>
            <h1 className="mb-4">About Us</h1>
            <p className="lead">
                We're a team of innovators and problem-solvers dedicated to powering
                your business's growth. We understand that in today's fast-paced world,
                technology and customer experience are no longer separate—they're the
                same journey.
            </p>
            <p>
                That's why we built a unique suite of services designed to work together
                seamlessly. From the robust software that manages your operations to the
                dynamic e-commerce and quick commerce platforms that drive sales, we
                provide the digital tools you need to succeed.
            </p>
            <p>
                Our expertise extends beyond the front end, with comprehensive IT
                operations to keep everything running smoothly and professional voice
                support to ensure your customers feel valued.
            </p>

            <h3 className="mt-5">Our Services</h3>
            <Row className="mt-3 g-4">
                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>Software</Card.Title>
                            <Card.Text>
                                Building intuitive, powerful systems to manage your unique
                                business needs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>E-commerce & Quick Commerce</Card.Title>
                            <Card.Text>
                                Creating fast, secure, and user-friendly online storefronts that
                                convert visitors into loyal customers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>IT Operations</Card.Title>
                            <Card.Text>
                                Ensuring your technology infrastructure is always reliable,
                                secure, and ready for growth.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>Voice Support</Card.Title>
                            <Card.Text>
                                Offering professional, friendly, and effective customer service
                                that strengthens your brand reputation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div className="mt-5">
                <p>
                    We're more than just a service provider; <strong>we're your partner in innovation.</strong>
                    We're here to help you not just compete, but lead.
                </p>
            </div>
        </div>
    );
}

export default Home;
