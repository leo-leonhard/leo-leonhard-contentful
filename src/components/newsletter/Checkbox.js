import React from 'react'
import { Link } from 'gatsby'

export default function Checkbox() {
    return (
        <div>
            <label style={{ maxWidth: '50ch', textAlign: 'center' }}>
                <input
                    type="checkbox"
                    required="required"
                    style={{ marginRight: '0.4em' }}
                />

                <span style={{ fontSize: '0.8em' }}>
                    Mit dem Absenden dieser Anmeldung, bestätigst Du, unsere{' '}
                    <Link
                        style={{ textDecoration: 'none', color: '#589AAD' }}
                        to="/impressum/#datenschutzerklaerung"
                    >
                        Datenschutzhinweise
                    </Link>{' '}
                    gelesen zu haben.
                </span>
            </label>
        </div>
    )
}
