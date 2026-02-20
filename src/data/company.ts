export const company = {
    name: "GW Systems",
    tagline: "Elektriciteit • Domotica • Laadpalen • Thuisbatterijen",
    serviceArea: "Regio Hasselt & omstreken",
  
    contact: {
      phoneDisplay: "04 12 34 56 78",
      phoneHref: "+32412345678", // for tel:
      email: "info@gwsystems.be",
    },
  
    address: {
      street: "Straatnaam 1",
      zip: "2000",
      city: "Antwerpen",
      country: "België",
    },
  
    vat: "BE0123.456.789",
    services: [
      {
        id: "elektriciteit",
        label: "Elektriciteit",
        shortDesc:
          "Nieuwe installaties, renovaties en herstellingen — veilig, netjes en volgens AREI.",
  
        imageKey: "elektriciteit",
        imageAlt: "Elektricien controleert zekeringkast met meettoestel",
  
        intro: [
          "Van kleine herstellingen tot volledige installaties: GW Systems zorgt voor een veilige en betrouwbare uitvoering. We werken proper, communiceren duidelijk en zorgen dat alles klopt volgens de geldende normen (AREI).",
          "Bij renovaties denken we mee over een logische indeling van kringen, stopcontacten en verlichting. Zo is je installatie niet alleen veilig, maar ook praktisch en klaar voor de toekomst.",
        ],
  
        bullets: [
          "Nieuwe installaties & renovaties",
          "Stopcontacten, schakelaars & verlichting",
          "Zekeringkasten (verdeelborden) en uitbreidingen",
          "Storingen, verliesstroom en herstellingen",
          "Keuring-klaar en volgens AREI",
        ],
  
        faq: [
          {
            q: "Doen jullie ook kleine herstellingen?",
            a: "Zeker. Denk aan uitvallende zekeringen, defecte schakelaars, stopcontacten die niet meer werken of een verliesstroomprobleem. We zoeken het gericht uit en lossen het netjes op.",
          },
          {
            q: "Moet mijn installatie gekeurd worden?",
            a: "Bij nieuwe installaties of ingrijpende wijzigingen is een keuring meestal verplicht. We zorgen dat alles klaar is voor keuring en leggen uit wat je kan verwachten.",
          },
          {
            q: "Kunnen jullie ook uitbreidingen doen bij renovaties?",
            a: "Ja. Extra kringen, stopcontacten, buitenpunten of een uitbreiding van je zekeringkast kan perfect. We bekijken wat technisch nodig is en werken het veilig af.",
          },
        ],
      },
  
      {
        id: "domotica",
        label: "Domotica",
        shortDesc:
          "Slimme sturing voor verlichting, comfort en automatisaties — eenvoudig in gebruik, professioneel geplaatst.",
  
        imageKey: "domotica",
        imageAlt: "Smart home bedieningspaneel aan de muur met smartphone bediening",
  
        intro: [
          "Domotica maakt je woning comfortabeler en slimmer zonder ingewikkelde toestanden. Denk aan slimme verlichting, scènes, tijdschema’s of automatisaties met sensoren.",
          "We vertrekken altijd vanuit wat jij nodig hebt: makkelijk te bedienen, uitbreidbaar en betrouwbaar. Je krijgt duidelijke uitleg en we zorgen dat alles mooi geïntegreerd is in je woning.",
        ],
  
        bullets: [
          "Slimme verlichting & scènes (bv. avondstand, vertrekstand)",
          "Automatisaties met sensoren (aanwezigheid, dag/nacht, beweging)",
          "Slimme schakelaars en centrale bediening",
          "Integratie met bestaande installatie waar mogelijk",
          "Gebruiksvriendelijk uitgelegd + nazorg",
        ],
  
        faq: [
          {
            q: "Kan domotica ook in een bestaande woning?",
            a: "Vaak wel. Afhankelijk van je installatie kiezen we een oplossing die past: van slimme schakelaars tot een meer centrale sturing. We bekijken wat technisch en praktisch het beste is.",
          },
          {
            q: "Is domotica ingewikkeld om te gebruiken?",
            a: "Nee. Het doel is net eenvoud: bediening via schakelaars, een app of een vast scherm. We stellen alles logisch in en geven duidelijke uitleg.",
          },
          {
            q: "Kan ik later uitbreiden?",
            a: "Ja. We houden rekening met toekomstplannen en kiezen bij voorkeur een oplossing die uitbreidbaar is (extra kringen, ruimtes, functies).",
          },
        ],
      },
  
      {
        id: "laadpalen",
        label: "Laadpalen",
        shortDesc:
          "Laadoplossingen voor thuis of je zaak — veilig geplaatst, correct afgestemd en klaar voor de toekomst.",
  
        imageKey: "laadpalen",
        imageAlt: "Elektrische wagen laadt aan een laadpaal op een oprit",
  
        intro: [
          "Een laadpaal is meer dan ‘even aansluiten’. We kijken naar je aansluiting (1-fase/3-fase), je verbruik en het gewenste laadvermogen. Zo krijg je een oplossing die veilig én efficiënt werkt.",
          "We voorzien een nette installatie, correcte beveiliging en (indien gewenst) slimme sturing zoals load balancing zodat je woning niet overbelast raakt wanneer er veel tegelijk verbruikt wordt.",
        ],
  
        bullets: [
          "Advies volgens je aansluiting en wagen",
          "Plaatsing binnen/buiten (oprit, garage, parking)",
          "Slim laden en load balancing (optioneel)",
          "Veilige bekabeling, beveiliging en afwerking",
          "Keuring-klaar waar van toepassing",
        ],
  
        faq: [
          {
            q: "Heb ik een 3-fase aansluiting nodig?",
            a: "Niet altijd. Veel laadpalen werken ook op 1-fase. 3-fase kan sneller laden, maar wat mogelijk is hangt af van je aansluiting en je situatie. We adviseren dit vooraf.",
          },
          {
            q: "Wat is load balancing?",
            a: "Dat is een slimme sturing die het laadvermogen aanpast aan het verbruik in je woning. Zo voorkom je overbelasting wanneer er tegelijk gekookt wordt, warmtepomp draait, enz.",
          },
          {
            q: "Kan de laadpaal buiten geplaatst worden?",
            a: "Ja. We plaatsen de laadpaal geschikt voor buitengebruik en zorgen voor een nette, duurzame afwerking van kabels en bevestiging.",
          },
        ],
      },
  
      {
        id: "thuisbatterijen",
        label: "Thuisbatterijen",
        shortDesc:
          "Meer uit je energie halen met slimme opslag — advies op maat, nette plaatsing en duidelijke uitleg.",
  
        imageKey: "thuisbatterijen",
        imageAlt: "Technieker installeert een thuisbatterij systeem aan de muur",
  
        intro: [
          "Met een thuisbatterij verhoog je je zelfverbruik en benut je je eigen energie beter. We bekijken samen je verbruik en (indien aanwezig) je zonnepanelen/omvormer om de juiste oplossing te bepalen.",
          "Naast de plaatsing zorgen we ook voor correcte configuratie en monitoring. Je krijgt een duidelijke uitleg zodat je weet wat er gebeurt en wat je van de batterij mag verwachten in de praktijk.",
        ],
  
        bullets: [
          "Analyse op basis van verbruik en situatie",
          "Plaatsing en configuratie van het systeem",
          "Monitoring en duidelijke uitleg",
          "Integratie met zonnepanelen/omvormer waar mogelijk",
          "Netjes afgewerkt en veilig aangesloten",
        ],
  
        faq: [
          {
            q: "Is een thuisbatterij interessant zonder zonnepanelen?",
            a: "Dat hangt af van je verbruik en tarieven. Meestal is het het meest interessant in combinatie met zonnepanelen, maar we bekijken eerlijk wat in jouw situatie zinvol is.",
          },
          {
            q: "Hoe groot moet mijn batterij zijn?",
            a: "Dat bepalen we op basis van je verbruik (dag/nacht), opwek (zonnepanelen) en doelen (meer zelfverbruik vs. pieken opvangen). We adviseren een maat die realistisch rendeert.",
          },
          {
            q: "Kan ik later uitbreiden?",
            a: "In veel gevallen wel. Sommige systemen zijn modulair uitbreidbaar. We kunnen hier rekening mee houden bij de keuze van het systeem.",
          },
        ],
      },
    ],
    
    

      cta: {
        primary: {
          label: "Vraag offerte",
          href: "/contact",
        },
        secondary: {
          label: "Bel ons",
          href: "tel:+32412345678",
        },
        strip: {
          title: "Klaar om te starten?",
          subtitle:
            "Vertel ons kort wat je nodig hebt — we antwoorden snel met een duidelijke planning en offerte.",
        },
      },
  } as const;
  
  export const analytics = {
    ga4MeasurementId: "G-6W3K8F7BB1",
    googleAdsId: "AW-XXXXXXXXXX", // TODO: replace
  };