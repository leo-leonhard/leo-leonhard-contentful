import React from "react"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import k from "../images/Lebenslauf eines nachdenklichen Künstlers.jpg"

export default function Werke(){
    return(
        <div>
          <NavBar/>
          <div style={{width: "75vw", margin: "0 auto"}}>
            <img
              src={k}
              style={{height: "75vh", width: "75vw", margin: "0 auto"}}
            />
            <div className="mt-4 mb-5">
              <p>
Das Aquarell, eine der ältesten Maltechniken überhaupt, nimmt im Werk von Leo Leonhard einen bedeutenden Platz ein. Die Arbeit mit nicht-deckenden Wasserfarben wurde vor allem durch Albrecht Dürer aufgewertet, doch dienten sie ihm vor allem zu Studienzwecken und zur Vorbereitung von Ölgemälden. Schließlich war es der experimentierfreudige William Turner, der das Aquarell zur eigenständigen Kunstform entwickelte. In der Tradition der Kunst des 19. Jahrhunderts und vieler Künstler der Klassischen Moderne aquarellierte auch Leo Leonhard vor allem auf seinen Reisen, zum Teil auch unter freiem Himmel: Das Aquarellieren war ihm eine lebensbegleitende künstlerische Praxis.
              </p>
            </div>
          </div>
          <Footer/>
        </div>
    )
}
