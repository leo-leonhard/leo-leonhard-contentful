import React from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'

console.log(Cookies.get('leoLeonhardCookieWebsite'))

const CookieBanner = () => {
    return (
        <>
            <CookieConsent
                location="bottom"
                buttonText="Alle akzeptieren "
                declineButtonText="Alles ablehnen"
                cookieName="leoLeonhardCookieWebsite"
                enableDeclineButton
                expires={150}
                onDecline={() => {
                    alert('Rechazaste las cookies')
                }}
            >
                This website uses cookies to enhance the user experience.{' '}
            </CookieConsent>
        </>
    )
}

export default CookieBanner
