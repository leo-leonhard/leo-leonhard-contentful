import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Checkbox from './Checkbox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// TODO:
// * create a hook to handle the logic
// * cookie to not show again the newsleter option once the user has logged

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        // Add email to Mailchimp list
        try {
            const { result, msg } = await addToMailchimp(email)

            // Set status and message
            setStatus(result)
            setMessage(msg)
        } catch (err) {
            console.log('Error', err)

            // Set status and message
            setStatus('error')
            setMessage('An error occurred. Please try again later.')
        } finally {
            setEmail('')
        }
    }

    return (
        <div className="newsletter-grid">
            {!status ? (
                <>
                    <div className="newsletter-grid">
                        <p>
                            Wir informieren Sie über Neuigkeiten, Ausstellungen
                            und Publikationen zu Leo Leonhard.
                        </p>
                        <p>Einfach hier anmelden:</p>
                    </div>
                    <form onSubmit={handleSubmit} className="newsletter-grid">
                        <div className="input-group mb-3">
                            <input
                                className="form-control"
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="Enter your email address"
                            />

                            <button
                                className="btn btn-outline-secondary btn-newsletter "
                                type="submit"
                                id="button-newsletter"
                            >
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    className="icon-newsletter"
                                />
                            </button>
                        </div>

                        <Checkbox />
                    </form>
                </>
            ) : (
                <p>
                    {message} - {status}
                </p>
            )}
        </div>
    )
}
