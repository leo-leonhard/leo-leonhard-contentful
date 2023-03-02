import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

function PageBanner({ image }) {
    console.log(image)
    return (
        <div>
            {image.map((img) => {
                const image = getImage(img.image)
                return (
                    <div key={img.slug}>
                        <GatsbyImage
                            className="mb-5"
                            image={image}
                            style={{
                                float: 'left',
                                width: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default PageBanner
