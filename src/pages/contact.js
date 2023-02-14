import React from 'react'

import Layout from '../components/Layout'

const Contact = () => (
    <Layout>
        <div className="container mt-3 mb-3">
            <form
                target="_blank"
                action="https://formsubmit.co/info@leoleonhard.de"
                method="POST"
            >
                <div className="form-group">
                    <div
                        className="form-row d-flex justify-conent-between mb-3"
                        style={{ gap: '1em' }}
                    >
                        <div className="col">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div className="col">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <textarea
                        placeholder="Your Message"
                        className="form-control"
                        name="message"
                        rows="10"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-lg ">
                    Submit Form
                </button>
            </form>
        </div>
    </Layout>
)

export default Contact
