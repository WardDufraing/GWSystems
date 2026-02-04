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
            "Nieuwe installaties, herstellingen en uitbreidingen. Veilig en volgens norm.",
        },
        {
          id: "domotica",
          label: "Domotica",
          shortDesc:
            "Slimme schakelingen, verlichting en automatisaties die het leven makkelijker maken.",
        },
        {
          id: "laadpalen",
          label: "Laadpalen",
          shortDesc:
            "Laadoplossingen voor thuis of je zaak, afgestemd op je wagen en verbruik.",
        },
        {
          id: "thuisbatterijen",
          label: "Thuisbatterijen",
          shortDesc:
            "Meer uit je zonnepanelen halen met slimme energieopslag op maat.",
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
  