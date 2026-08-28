window.VEILARIUM_DATA = {
  beings: [
    {
      id:"devas", name:"Devas", tradition:"Hindu traditions", region:"South Asia",
      kind:"Divine & celestial beings", image:"assets/art/devas.svg",
      summary:"A broad class of divine or celestial beings whose identities and functions vary across Vedic, epic, Purāṇic and later Hindu traditions.",
      tags:["celestial","divine","ritual","loka"],
      sources:["Ṛgveda","Mahābhārata","Purāṇic literature"],
      note:"Umbrella term; individual devas require separate records."
    },
    {
      id:"fair-folk", name:"Fair Folk", tradition:"Celtic-language traditions", region:"Ireland · Scotland · Britain",
      kind:"Otherworldly & folkloric beings", image:"assets/art/fair-folk.svg",
      summary:"A modern umbrella used here only as a navigation category for culturally specific beings such as the aos sí, daoine sìth and related traditions.",
      tags:["otherworld","landscape","folklore","threshold"],
      sources:["Folklore collections","Medieval Irish literature","Scottish oral tradition"],
      note:"The site avoids treating all European fairy traditions as one people."
    },
    {
      id:"nagas", name:"Nāgas", tradition:"Hindu · Buddhist · Jain traditions", region:"South & Southeast Asia",
      kind:"Serpentine sacred beings", image:"assets/art/naga.svg",
      summary:"Serpent-associated beings with distinct roles across Hindu, Buddhist and Jain textual and artistic traditions, frequently linked with water, protection and subterranean realms.",
      tags:["water","serpent","treasure","pātāla"],
      sources:["Mahābhārata","Purāṇic literature","Buddhist narrative traditions"],
      note:"Cross-tradition presence does not imply identical theology."
    },
    {
      id:"jinn", name:"Jinn", tradition:"Islamic & Arabic traditions", region:"West Asia · North Africa and beyond",
      kind:"Created unseen beings", image:"assets/art/jinn.svg",
      summary:"Beings described in Islamic scripture and a much wider field of Arabic, Persian and regional literature and folklore. Scriptural claims are kept separate from later folklore.",
      tags:["unseen","fire","desert","folklore"],
      sources:["Qurʾān","Hadith corpora","Arabic and Persian literature"],
      note:"Religious doctrine, literature and folklore are clearly labeled."
    },
    {
      id:"kami", name:"Kami", tradition:"Shinto traditions", region:"Japan",
      kind:"Sacred presences & deities", image:"assets/art/kami.svg",
      summary:"A broad and context-dependent category of sacred presences and deities in Shinto traditions, connected with places, forces, ancestors and named divine figures.",
      tags:["sacred-place","nature","ancestral","ritual"],
      sources:["Kojiki","Nihon Shoki","Shrine traditions"],
      note:"Not translated as 'fairy' or 'spirit' without qualification."
    },
    {
      id:"angels", name:"Angelic Beings", tradition:"Jewish · Christian · Islamic traditions", region:"West Asia and global traditions",
      kind:"Celestial messengers & orders", image:"assets/art/angelic.svg",
      summary:"Scriptural and later angelic traditions are separated by religion, text, language and historical period rather than merged into one universal hierarchy.",
      tags:["heaven","messenger","vision","celestial"],
      sources:["Hebrew Bible","New Testament","Qurʾān","Later theological traditions"],
      note:"Hierarchies differ dramatically by tradition and period."
    },
    {
      id:"yokai", name:"Yōkai", tradition:"Japanese folklore & visual culture", region:"Japan",
      kind:"Supernatural phenomena & beings", image:"assets/art/yokai.svg",
      summary:"A broad modern umbrella for many Japanese supernatural beings and phenomena. Individual entries preserve historical names, local traditions and visual histories.",
      tags:["folklore","night","transformation","place"],
      sources:["Edo-period visual culture","Regional folklore collections","Literary sources"],
      note:"The umbrella is navigational, not a claim of a single historical taxonomy."
    }
  ],

  planets: {
    sun: {
      label:"Sun", glyph:"☉", theme:"Radiance · sovereignty · life",
      intro:"These records share a direct solar identity or a historically attested solar association. They are parallels, not equivalents.",
      links:[
        {name:"Sūrya", tradition:"Hindu traditions", relation:"Solar deity / graha", confidence:"Traditional"},
        {name:"Hēlios / Sol", tradition:"Greek & Roman traditions", relation:"Solar deity", confidence:"Traditional"},
        {name:"Šamaš / Utu", tradition:"Mesopotamian traditions", relation:"Solar deity", confidence:"Traditional"},
        {name:"Ra", tradition:"Ancient Egyptian religion", relation:"Solar deity", confidence:"Traditional"},
        {name:"Amaterasu", tradition:"Shinto traditions", relation:"Solar deity", confidence:"Traditional"}
      ]
    },
    moon: {
      label:"Moon", glyph:"☾", theme:"Cycles · night · time",
      intro:"Lunar beings are grouped by explicit lunar identity, not merely by a modern symbolic resemblance.",
      links:[
        {name:"Candra / Soma", tradition:"Hindu traditions", relation:"Lunar deity / graha", confidence:"Traditional"},
        {name:"Selēnē / Luna", tradition:"Greek & Roman traditions", relation:"Lunar deity", confidence:"Traditional"},
        {name:"Sîn / Nanna", tradition:"Mesopotamian traditions", relation:"Lunar deity", confidence:"Traditional"},
        {name:"Khonsu", tradition:"Ancient Egyptian religion", relation:"Lunar deity", confidence:"Traditional"},
        {name:"Tsukuyomi", tradition:"Shinto mythic tradition", relation:"Moon deity", confidence:"Traditional"}
      ]
    },
    mercury: {
      label:"Mercury", glyph:"☿", theme:"Speech · calculation · exchange",
      intro:"This is a strong cross-cultural planetary hub because several astral traditions explicitly associate named deities with Mercury.",
      links:[
        {name:"Budha", tradition:"Jyotiṣa / Hindu astral tradition", relation:"Planetary deity of Mercury", confidence:"Traditional astral"},
        {name:"Hermēs / Mercurius", tradition:"Greek & Roman astral tradition", relation:"Planetary god of Mercury", confidence:"Traditional astral"},
        {name:"Nabû", tradition:"Mesopotamian astral tradition", relation:"Associated with Mercury", confidence:"Traditional astral"}
      ]
    },
    venus: {
      label:"Venus", glyph:"♀", theme:"Attraction · fertility · desire",
      intro:"Venus provides one of the clearest historically attested comparison points across Indian, Greco-Roman and Mesopotamian astral systems.",
      links:[
        {name:"Śukra", tradition:"Jyotiṣa / Hindu astral tradition", relation:"Planetary deity of Venus", confidence:"Traditional astral"},
        {name:"Aphroditē / Venus", tradition:"Greek & Roman astral tradition", relation:"Planetary goddess of Venus", confidence:"Traditional astral"},
        {name:"Inanna / Ištar", tradition:"Mesopotamian astral tradition", relation:"Strongly associated with Venus", confidence:"Traditional astral"}
      ]
    },
    mars: {
      label:"Mars", glyph:"♂", theme:"Force · conflict · heat",
      intro:"The comparison is made through explicit planetary identifications rather than a generic 'war god' category.",
      links:[
        {name:"Maṅgala / Kuja", tradition:"Jyotiṣa / Hindu astral tradition", relation:"Planetary deity of Mars", confidence:"Traditional astral"},
        {name:"Arēs / Mars", tradition:"Greek & Roman astral tradition", relation:"Planetary god of Mars", confidence:"Traditional astral"},
        {name:"Nergal", tradition:"Mesopotamian astral tradition", relation:"Associated with Mars", confidence:"Traditional astral"}
      ]
    },
    jupiter: {
      label:"Jupiter", glyph:"♃", theme:"Authority · wisdom · expansion",
      intro:"Names and meanings remain culture-specific even when the same visible planet becomes a point of comparison.",
      links:[
        {name:"Bṛhaspati / Guru", tradition:"Jyotiṣa / Hindu astral tradition", relation:"Planetary deity of Jupiter", confidence:"Traditional astral"},
        {name:"Zeus / Jupiter", tradition:"Greek & Roman astral tradition", relation:"Planetary god of Jupiter", confidence:"Traditional astral"},
        {name:"Marduk", tradition:"Mesopotamian astral tradition", relation:"Associated with Jupiter", confidence:"Traditional astral"}
      ]
    },
    saturn: {
      label:"Saturn", glyph:"♄", theme:"Time · limits · consequence",
      intro:"This hub compares explicit astral associations and avoids projecting later Western meanings back onto unrelated traditions.",
      links:[
        {name:"Śani", tradition:"Jyotiṣa / Hindu astral tradition", relation:"Planetary deity of Saturn", confidence:"Traditional astral"},
        {name:"Kronos / Saturnus", tradition:"Greek & Roman astral tradition", relation:"Planetary god of Saturn", confidence:"Traditional astral"},
        {name:"Ninurta", tradition:"Mesopotamian astral tradition", relation:"Associated with Saturn", confidence:"Traditional astral"}
      ]
    },
    eclipses: {
      label:"Eclipses & Nodes", glyph:"☊", theme:"Interruption · shadow · celestial crossing",
      intro:"Unlike the seven visible classical planets, eclipse beings and nodes require separate treatment by culture and period.",
      links:[
        {name:"Rāhu", tradition:"Jyotiṣa / Hindu astral tradition", relation:"Ascending lunar node; eclipse mythology", confidence:"Traditional astral"},
        {name:"Ketu", tradition:"Jyotiṣa / Hindu astral tradition", relation:"Descending lunar node", confidence:"Traditional astral"},
        {name:"Tiāngǒu traditions", tradition:"Chinese eclipse folklore", relation:"Celestial dog imagery connected with eclipses in folklore", confidence:"Folkloric parallel"}
      ]
    }
  },

  lokas: [
    {name:"Satyaloka / Brahmaloka", band:"higher", detail:"A highest or extremely elevated realm in several Purāṇic cosmological presentations; descriptions vary by text."},
    {name:"Tapoloka", band:"higher", detail:"An elevated realm associated in some Purāṇic cosmographies with powerful ascetic beings."},
    {name:"Janaloka", band:"higher", detail:"An elevated loka associated in Purāṇic descriptions with spiritually advanced beings or sages."},
    {name:"Maharloka", band:"higher", detail:"A great world placed above Svarga in several later cosmographic schemes."},
    {name:"Svargaloka", band:"celestial", detail:"A celestial/heavenly realm associated with devas in many later Hindu textual traditions; terminology varies."},
    {name:"Bhuvarloka", band:"middle", detail:"An intermediary sphere in several cosmological enumerations; exact meanings differ by source."},
    {name:"Bhūloka", band:"earth", detail:"The terrestrial realm of embodied human life in common cosmographic usage."},
    {name:"Atala", band:"lower", detail:"One of the seven lower regions in several Purāṇic cosmographies."},
    {name:"Vitala", band:"lower", detail:"One of the seven lower regions in several Purāṇic cosmographies."},
    {name:"Sutala", band:"lower", detail:"A lower realm prominently connected with Bali in Purāṇic narratives."},
    {name:"Talātala", band:"lower", detail:"One of the seven lower regions in several Purāṇic cosmographies."},
    {name:"Mahātala", band:"lower", detail:"One of the seven lower regions in several Purāṇic cosmographies."},
    {name:"Rasātala", band:"lower", detail:"One of the seven lower regions in several Purāṇic cosmographies."},
    {name:"Pātāla", band:"lower", detail:"A subterranean or lower region often associated with nāgas in later Hindu cosmography; it should not automatically be translated as 'hell'."}
  ],

  encounterTypes: [
    {title:"Devotional", text:"Prayer, offerings, liturgy, temple or shrine practice recorded within a living religious tradition."},
    {title:"Scriptural / textual", text:"Encounters described in primary religious, epic, mythic or literary texts."},
    {title:"Folkloric", text:"Oral accounts, customary practices and regional traditions documented by collectors or communities."},
    {title:"Visionary / dream", text:"Dreams, visions, revelation narratives and contemplative encounter traditions."},
    {title:"Protective / avoidance", text:"Taboos, apotropaic practices and customary ways of avoiding unwanted encounters."},
    {title:"Later esoteric", text:"Occult, magical or syncretic systems that post-date the core religious or folkloric source tradition."}
  ]
};