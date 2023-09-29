import React from 'react'

import '../style.css'

export default function OelgemaeldeText({ data }) {
    return (
        <>
            {data.map((item) => {
                return (
                    <>
                        <h1>{item.OelgemaeldeHead}</h1>
                    </>
                )
            })}
        </>
    )
}
