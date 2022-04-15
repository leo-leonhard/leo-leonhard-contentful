import React from 'react'


const publications = [
    { year: 1967,
      elements: ["Katalog der 15. Jahresausstellung der Neuen Darmstädter Sezession, Darmstadt",
                 "„Deutsche Handzeichnungen und Aquarelle der letzten 20 Jahre“, Hannover"]
    },
    { year: 1968,
      elements: ["„Xylon“, Berlin",
                 "Katalog der Galerie Rothe, Heidelberg",
                 "„Das Kunstwerk“, Juni/Juli"]
    },
    { year:1969,
      elements: ["„Aquarell, Zeichnung, Gegenstand“, Darmstadt",
                 "„20 Jahre Kunstkreis Hameln“, Hameln",
                 "„Internationale Holzschnittausstellung – Xylon“, Genf & Berlin Katalog der 16. Jahresausstellung der Neuen Darmstädter Sezession, Darmstadt"]
    },
    {year: 1970,
     elements: ["Kataloge der Galerie Ostheimer, Frankfubrt/Main",
                "„Große Kunstausstellung München“",
                "„Darmstadt zeigt 100 Werke seiner Künstler“, Graz",
                "„III. Internationale Biennale für Grafik“, Krakau",
                "„III. Internationaleder Zeichnung“, Darmstadt",
                "„Magazin Kunst“, Nr.39",
                "2 Kataloge der Galerie Huber, Offenbach",
                "Katalog der Ausstellungder Neuen Darmstädter Sezession, Duisburg"]
    },
    {year: 1971,
     elements: ["Katalog der 17. Jahresausstellung der Neuen Darmstädter Sezession, Darmstadt",
                "Katalog der „Premio internazionaleper l’incisione“, Biella",]
    },
    {year: 1972,
     elements: ["„5. Internationale Ausstellungder Illustrationund Buchgestaltung“, Brünn",
                "„Nicolaus Copernicusundseine Ideen“, Krakau"]
    },
    {year:1972,
     elements: ["„International Who’s who inart andantiques“, London",
                "„IV. Internationale Biennaleder Grafik“, Krakau",
                "„Schweizer Bücherzeitung“, November",
                "„Zeit-Magazin“, Hefte von Juni bis November"]
    },
    {year: 1973,
     elements: ["Katalog der 18. Jahresausstellung der Neuen Darmstädter Sezession, Darmstadt",
                "„Westermanns Monatshefte“1/1973",
                "„Xylonvi“, Genf",
                "„Druckgrafische Techniken“, Schwetzingen",
                "4. Ausstellungder Galerie der Pfälzischen NervenklinikLandeck",
                "„Handzeichnungen“, Katalog der Galerie Levi, Hamburg",
                "„Schweizer Bücherzeitung“, Juni",
                "„Realeundirreale Räume“, Katalog der Galerie Falazik, Neunkirchen",
                "„Internationale Grafik 1972“, Darmstadt",
                "Katalog der Auswahl für den „Deutschen Jugendbuchpreis“",
                "„Deutsche Bildergeschichten“, Kalender des Moos-Verlags"]
    },
    {year: 1974,
     elements: ["„Neue Sammlung“ – Göttinger Zeitschrift für Erziehungund Gesellschaft Nov./Dez. 1973 (Rezensionvon Prof. Dr. Dieter Baacke)",
                "„Tandem“, Pawel-Pan-Presse",
                "„Struwwelpeter & Krümmelmonster – die Darstellungvon Wirklichkeit",
                "in Kinderbüchernund Kinderfernsehen“, Fischer-Verlag",
                "(Rezension von Christa Hunscha)"]
    },
    {year: 1975,
     elements: ["Katalog der 19. Jahresausstellung der Neuen Darmstäder Sezession, Darmstadt",
                "Editionskatalog der Galerie Huber, Offenbach",
                "„Kunst & Unterricht“ Sonderheft H222F 75",
                "„Graphis – Kinderbuchillustration“, Herdeg-Verlag Zürich",
                "„Die Familie auf dem Schrank“, Anrich-Verlag Neunkirchen"]
    },
    {year: 1976,
     elements: ["Katalog der Ausstellung „Preisträger der Biennalen in Krakau 1972 und 1974“, Leipzig",
                "Kataloge der Ausstellungder Neuen Darmstädter Sezession, Trondheim und Istanbul",
                "„novum – gebrauchsgraphik“, Hefte3und12",
                "»Internationale Grafik76“, Ausstellungskatalog des Laureaten-Clubs, Bremen",
                "„Zeit-Magazin“ Nr. 39, September 1976",
                "„Westermann – Texte DeutschII“, Braunschweig",
                "„Der Traumschrank“, Luchterhand-Verlag, Darmstadt"]
    },
    {year: 1977,
     elements: ["„Westermann – Texte DeutschIII“, Braunschweig",
                "Katalog der 20. Jahresausstellung der Neuen Darmstädter Sezession, Darmstadt",
                "Katalog der 3. Internationalen Grafik-Biennale, Miami",
                "„Projekt Bilderbuch – Unterrichtsskizzen für Kunst/ Visuelle Kommunikation“, München",
                "Lexikonder Kinder-undJugendliteratur, Band2, Weinheim"]
    },
    {year: 1978,
     elements: ["Katalogder Ausstellung der Neuen Darmstädter Sezession und des Vereins Düsseldorfer Künstler, Krakau",
                "„Westermann – Texte DeutschIV“, Braunschweig"]
    },
    {year: 1979,
     elements: ["„Deutsche Grafikder Gegenwart“",
                "Katalogder Ausstellung der Kreisvolkshochschule Darmstadt-Dieburg",
                "„Unheimliche Geschichtenvongestern“ und „Sonderbare Geschichtenvonheute“,dtv junior, München",
                "Katalogder 21. Jahresausstellungder Neuen Darmstädter Sezession, Darmstadt",
                "Katalog der Ausstellung „Der Odenwaldinder Malerei“, Darmstadt",
                "„Kafka in der Kunst“ von Wolfgang Rothe, Belser",
                "„Der Herrder Berge“, Luchterhand, Darmstadt"]
    },
    {year: 1980,
     elements: ["„Who’s who in the arts and literature“, 3. Ausgabe, Wörthsee Katalogzur Ausstellung „Landschaftheute“, Langen",
                "„Druckobjekt auf Naturpapieren“, PWA grafische Papiere AG & Co Katalogdes „Vereins für Originalradierung“, München"]
    },
    { year: 1981,
      elements: ["Editionskatalog des Darmstädter Kunstvereins",
                 "„Who’s who in Europe“, London"]
    },
    {year: 1981,
     elements: ["Katalog der Gemeinschaftsausstellung des Verbands polnischer bildender Künstler Krakau und der Neuen Darmstädter Sezession, Bonn",
                "Katalog der 22. Jahresausstellungder Neuen Darmstädter Sezession, Darmstadt",
                "Katalog der Ausstellung der Neuen Darmstädter Sezession, Rijeka (Jugoslawien)",
                "Neues Handbuch der Literaturwissenschaft, Band22, Akademische Verlagsanstalt, Athenäum, Wiesbaden",
                "Katalogder Ausstellung „Kunst ausdem Besitzder Stadt Darmstadt“, Darmstadt",
                "„Westermann – Texte Deutsch V und VI“, Braunschweig",
                "„Lesebuch2“ Schöningh-Verlag München",
                "„Der Radiertisch“, Saalbau-Galerie Darmstadt)",]
    },
    {year: 1982,
     elements: ["Katalog der 5. Internationalen Grafik-Biennale, Miami (USA)",
                "Katalog der Ausstellung „Deutsche Radiererder Gegenwart“, Darmstadt",
                "„Kunstgegen Startbahn West“, Anabas-Verlag, Roßdorf Katalogder Großen Kunstausstellung, Düsseldorf",
                "„Kunstecho’s actuele internationale informatie overbeeldende Kunst endesign“, Nr. 3, Mai/Juni82"]
    },
    {year: 1983,
     elements: ["Katalog der6. Internationalen Grafik-Biennale für Humor und Satire inder Kunst, Gabrovo (Bulgarien)",
                "Katalog der 23. Jahresausstellung der Neuen Darmstädter Sezession Katalogder Großen Kunstausstellung, Düsseldorf"]
    },
    {year: 1984,
     elements: ["H. P. Willberg „Buchkunst im Wandel“, Stiftung Buchkunst, Frankfurt",
                "„druckfrisch84“, Verein für Originalradierung, München Katalog der Großen Kunstausstellung, Düsseldorf",
                "Katalog der Ausstellung „Weltund Krakau“, Museum Fridericianum, Kassel"]
    },
    {year: 1985,
     elements: ["Katalog der 24. Jahresausstellungder Neuen Darmstädter Sezession",
                "„druckfrisch85“, Verein für Originalradierung, München Katalogder Großen Kunstausstellung, Düsseldorf"]
    },
    {year: 1986,
     elements: ["Katalog der8. Internationalen Grafik-Triennale, Frechen",
                "„Dialog“, Ausstellungskatalog der Neuen Darmstädter Sezessionund des Künstlerbundes Rhein-Neckar, Mannheim",
                "„10 Technikender Originalgrafik“, Katalog des Vereins für Originalradierung, München"]
    },
    {year: 1986,
     elements: ["„Hommage à Eva“ – Künstler aus dem Darmstädter Kreis sehen Eva Franke-Weißberger, Kunsthalle Darmstadt",
                "„Partnerschaft in Sachen Kunst“, Ausstellungskatalog der Neuen Darmstädter Sezessionin Graz (Österreich)"]
    },
    {year: 1987,
     elements: ["„druckfrisch87“, Verein für Originalradierung, München",
                "„Standort 87“, Katalog der 21. Jahresausstellung der Neuen Darmstädter Sezession, Darmstadt"]
    },
    {year: 1988,
     elements: ["„Dialog“, Ausstellungskatalog der Neuen Darmstädter Sezessionund des Künstlerbundes Rhein-Neckar, Darmstadt"]
    },
    {year: 1989,
     elements: ["Hans Helmut Jansen(Hrsg.) „Der Todin Dichtung, Philosophieund Kunst“, Steinkopff-Verlag, Darmstadt",
                "„graphein – Hommage à Otto Coester“, Katalog zur Ausstellung im Bahnhof Eller“, Düsseldorf",
                "„70 Jahre Neue Darmstädter Sezession“, Ausstellungskatalog, Darmstadt Katalog zur Großen Kunstausstellung, Düsseldorf",
                "„Landschaftenvon Leo Leonhard“, EditionE. Merck, Darmstadt",
                "„Illustration62“, Zeitschrift für die Buchillustration, Heft 3 Gesamtverzeichnis der Originalgrafik der Galerie Rothe, Frankfurt Bernhard Rzehak",
                "„Darmstädter Theaterkritiken“, Gesellschaft Hessischer Literaturfreunde, Darmstadt"]
    },
    {year: 1990,
     elements: ["„Flucht – Problemkreis seit Menschengedenken,84 Künstler zum Thema“, Kunsthalle Darmstadt",
                "„Bücher, Bücher – meine Lust, Herbert Heckmannzum Sechzigsten, eine Freundesgabe“, Buchhandlungder Galerie Böhler, Bensheim",
                "Katalog der Großen Kunstausstellung, Düsseldorf"]
    },
    {year: 1991,
     elements: ["„Schwarz-weißin der Fläche – Farbe im Raum“, Katalog zur",
                "27. Jahresausstellung der Neuen Darmstädter Sezession,",
                "Darmstadt Katalog der Großen Kunstausstellung, Düsseldorf"]
    },
    {year: 1992,
     elements: ["„100Jahre Verein für Originalradierung Münchene. V.“, Katalog zur Ausstellung im Rathaus, München",
                "„Deutsche Holzdrucke seit 45“, Grafisches Kabinett im Westend, Frankfurt"]
    },
    {year: 1993,
     elements: ["„großundklein“, Katalog zur 28. Jahresausstellung der Neuen Darmstädter Sezession, Darmstadt",
                "Katalog zur 1. Internationalen Grafik-Biennale, Maastricht (Holland) Katalog zur 10. Internationalen Grafik-Triennale, Frechen",
                "„Bausteine Deutsch“, Lesebuch für das 8. Schuljahr, Verlag Moritz Diesterweg, Frankfurt/Main",
                "„Casadi Goethe“, eine Ausstellung zum Goethe-Museum Rom im Bundeskanzleramt Bonn, Katalog zur Ausstellung des Arbeitskreises",
                "selbständiger Kulturinstitute e. V., Bonn"
               ]
    },
    {year: 1994,
     elements: ["„Weinund Kunst“,das Etikett,das Künstlerund Winzer verbindet.",
                "Herausgegeben von H. Reit und W. Hubert, Nürnberg",
                "„Bausteine Deutsch“, Lesebuchfür das 9. Schuljahr, Verlag Moritz Diesterweg, Frankfurt/Main",
                "„Damedica“, Medizinin Darmstadt – eine Spurensuche, Eduard Roether Verlag, Darmstadt"]
    },
    {year: 1995,
     elements: ["„Kursbuch Religion“, Neuausgabe 5/6, Verlag Moritz Diesterweg, Frankfurt/Main",
                "Illustrationen zu „Dantons Tod“, Zeichnungen, Radierungen, Künstlertagebuch, Gesellschaft Hessischer Literaturfreunde, Darmstadt"]
    }
]


function Verzeichniss() {
    console.log(publications)
    return(
        <div style={{margin: "1em"}}>
          {publications.map(pub => (
              <div className="mb-3 d-flex">
                <div>
                  <p>{pub.year}</p>
                </div>
                <div style={{margin: "auto 1em"}}>
                  {pub.elements.map(element => (
                      <p>{element}</p>
                  ))}
                </div>
              </div>
          ))}
        </div>
    )
}

console.log(Verzeichniss)


export default Verzeichniss
