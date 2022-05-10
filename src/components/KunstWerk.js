import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import  { Modal, Button, useState } from "react-bootstrap"


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default function Kunstwerk(props) {
    const kunstwerk = props.kunstwerk
    return(
        <div className="d-flex flex-wrap justify-content-between">
        {kunstwerk.map(werk => {
            const image = getImage(werk.image)
            return(
                <div className="d-flex flex-column mb-5">
                  <h3>{werk.title}, {werk.year}</h3>
                  <GatsbyImage image={image}/>
                </div>
            )
        })}
        </div>
    )
}
