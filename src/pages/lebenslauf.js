import React from 'react'
import {graphql} from 'gatsby'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner'

import portrait from "../images/portrait.jpg"

const LebenslaufPage = ( { data } ) => (
    <>
      <NavBar/>
      <PageBanner image={data.allContentfulPageBanner.nodes}/>
      <div style={{width: "55%", margin: "0 auto"}}>
        <h2>ÜBER LEO LEONHARD</h2>
        <p>„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem-
          por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc-
          tus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr.“</p>

        <p>„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem-
          por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc-
          tus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr „Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadips-
          cing elitr</p>

        <p>„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem-
          por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc-
          tus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr</p>
      </div>

      <br/>

      <div className="pt-5 pb-5 mt-5 mb-5" style={{background: "#F8F3EA"}}>
        <div  style={{width: "55%", margin: "0 auto"}}>
          <div className="mb-5">
            <h2>LEBENSSTATIONEN</h2>
            <h2>LEO LEONHARD</h2>
            <h2>1939 - 2011</h2>
            <hr style={{width: "20%", margin: "5em 0 3em 0"}}/>
          </div>
          <img src={portrait}/>
          <div className="mt-5">
            {data.allContentfulLebenslauf.nodes.map(entry => (
                <div style={{lineHeight: "0.5em"}}>
                  <p><b>{entry.year}</b></p>
                  <p>{entry.event}</p>
                  <br/>
                  <br/>
                </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-5 pb-5 mt-5 mb-5" style={{background: "#F8F3EA"}}>
        <div style={{width: "55%", margin: "0 auto"}}>
          <h2>LEO LEONHARD – EIN NACHRUF</h2>
          <h2>Von Roland Held – 08.08.2011</h2>
          <p>
            In der Kulturgeschichte spricht man vom Poeta doctus, dem Dichter mit Bildung – wie Ezra Pound einer war.
            Leo Leonhard, zu dessen erstem Reifewerk ein Zyklus ebenso großformatiger wie großartiger Radierungen
            zu Ezra Pounds »Cantos« gehört, war ein Pictor doctus, ein Maler mit Bildung. Beim breiten Publikum mögen
            seine Landschaftsaquarelle kraft ihrer Verbindung von akribischer Dingschilderung und schwebend-leichtem

            Kolorit am populärsten gewesen sein. Sein lebhaftes Interesse an Dichtung und Theater, Geschichte und Po-
            litik jedoch spiegelte sich in den Zeichnungen und Radierungen, zuletzt auch in der nach langem Ruhen wie-
            der aufgegriffenen Ölmalerei. Charakteristisch für ihn sind die schöpferischen Methoden der Paraphrase

            und des Palimpsests: dieses in der oft geradezu visionären Verschränkung unterschiedlicher Zeitschichten

            und Wirklichkeitsebenen; jene im Einblenden kunsthistorischer Zitate in einen modernen Kontext – oder um-
            gekehrt. Mit Leo Leonhard, der nach einer Herzoperation im Alter von 72 Jahren verstorben ist, verliert die

            Kunstszene einen »Mann der reflektierenden Phantasie«, wie ihn Heinz Winfried Sabais einmal gelobt hat.
            Vor allem aber einen immens fleißigen, gut informierten, streitbar kritischen Protagonisten.
          </p>
          <p>
            Es steckt ein Körnchen Prophetie im ersten Eindruck, den Leo Leonhard bei Hans-Günter Sperlich, einst Kus-
            tos der Kunsthalle Darmstadt, hinterließ, als er gegen 1970 bei diesem vorstellig wurde: »fast wie die Jün-
            glingsgestalten der historischen Romantik im ersten Drittel des 19. Jahrhunderts oder zumindest wie

            Klischees davon sie uns vorgaukeln«. Sperlich spielte damit gewiss nicht nur an auf die äußere Erscheinung,

            sondern – man denke an den frühverstorbenen Carl Philipp Fohr – auch auf die rare Begabung, die Erschei-
            nungsformen der Welt in Liniengebilde zu bannen, exakt und doch klangvoll. Trotzdem übersah er an dem

            jungen Mann, der einem dreijährigen Germanistikstudium ein ebenso langes Studium an der Düsseldorfer

            Kunstakademie hatte folgen lassen und nun in den Schuldienst getreten war, nicht »den präzise registrieren-
            den Blick, den kritisch abwägenden Verstand«. Hier nämlich ist es, wo jenes Körnchen Prophetie aufgehen

            sollte: In den siebziger Jahren machte Leonhard von sich reden mit detailgenau ausgefeilten, figurenprallen

            Ätzradierungen, die aktuelle Themen wie Umweltzerstörung, Jugendprotest, politische Repression und me-
            diale Zerstreuungsindustrie aufgriffen. Während etwa Hieronymus Boschs Triptychon »Garten der Lüste«

            mit zeitgenössischen Szenen munter ummöbliert wurde, wetzte nebenan, im romantischen Wald- und Wie-
            senidyll, schon der Baubagger seine Zähne. Von solchen Einzelblättern wandte der Künstler sich in den acht-
            ziger Jahren einer gleichfalls oft surreal-mehrdeutigen literarischen Illustration zu. Casanova, Wieland,

            Goethe, Grabbe, und immer wieder Büchner – nicht von ungefähr bewegte sich Leonhard mit Vorliebe in der

            Epoche der Aufklärung und der Revolutionen. Als Ertrag sind uns viele bibliophile Buchausgaben und Map-
            penwerke geblieben.
          </p>
          <p>
            Man muss diesen aufklärerischen Auftrag mitbedenken, wenn Leonhard selbst sich künstlerisch ganz als Re-
            alist sah. Im Sinne eines Realismus wohlgemerkt, der sich – obwohl es ihm technisch ein Leichtes wäre – nicht

            damit zufrieden gibt, Wirklichkeit fotografisch exakt zu reproduzieren. Der stattdessen abzielt auf die

            Durchdringung gesellschaftlicher und existenzieller Verhältnisse. So erklärt sich, weswegen Leonhard als lei-
            denschaftlicher, argumentgewandter Antipode von Personenkult und Mystifizierung im Kunstbetrieb sowie

            besonders aller Aus-dem-Bauch-Maler auftrat. Auch sah er einen »Zusammenhang zwischen der systemati-
            schen Naturzerstörung und der Verachtung des Studiums der Naturerscheinungen« an den Akademien. Die

            so Gescholtenen warfen ihm ihrerseits schulmeisternde Plakativität, Pfriemelei, Rückwärtsgewandtheit vor.
            Und sahen sich vermutlich nur bestätigt, als er 1987 als Professor für Zeichnen an die Fachhochschule Mainz
            berufen wurde.
          </p>
          <p>
            Neben den erwähnten Disziplinen pflegte Leo Leonhard die Kaltnadelradierung und den Holzschnitt. Zur Öl-
            malerei, deren altmeisterliche Lasurtechnik er bereits in der Jugend erlernt hatte, kehrte er erst Mitte der

            neunziger Jahre zurück, in dem Maße, wie er sich von den Lehrverpflichtungen freimachte. Dank des Einsat-
            zes der Farbe wurde seine Basis breiter, sich per Zitat mit dem Erbe der Kunstgeschichte auseinanderzuset-
            zen, bis zurück zu Giotto. Ein Motiv variierte er dabei mehrmals: eine Anstreicher-Kolonne übertüncht ein

            jahrhundertealtes Fresko blank-weiß. »Der Angriff der Gegenwart auf die übrige Zeit« – Leonhard dürfte

            dem Titel des Films von Alexander Kluge vorbehaltlos beigepflichtet haben. Er wollte, dann und wann tat-
            sächlich etwas didaktisch, Zeichen setzen gegen das gedankenlose Zertrennen des Bands zur Vergangen-
            heit, zur kulturellen Tradition.
          </p>
          <p>
            Mitglied der Darmstädter Sezession seit 1969, empfand er sich in der Kunstszene doch als Einzelgänger,
            nicht ohne eine gewisse Bitterkeit. Der Dialog mit den alten Meistern nahm bei ihm mehr Platz ein als der
            mit den lebenden Kollegen. Doch war da ein anderer Dialog, auf den dieser Mann der Linie und Mann mit
            Linie unvermindert baute: die gegenseitige Befragung von Bild und Betrachter. Den nämlich sah Leonhard
            nicht weniger zu aktiver Interpretations-leistung aufgefordert als sich selber, wenn es ums Illustrieren eines

            Büchner-Dramas oder einer Kafka-Erzählung ging. Eine Arbeit, die ihren Lohn – intellektuell, aber auch sinn-
            lich – in sich trägt. Ansonsten hielt Leo Leonhard es mit Hugo von Hofmannsthal, den er gerne zitierte: »Die

            Tiefe muss man verstecken. Wo? An der Oberfläche.«
          </p>
        </div>
      </div>
      <Footer/>
    </>
)

export const query = graphql`
query getLebenslaufContent {
  allContentfulPageBanner(filter: {slug: {eq: "lebenslauf"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
 allContentfulLebenslauf(sort: {fields: year, order: ASC}) {
    nodes {
      year
      event
    }
  }
}
`


export default LebenslaufPage
