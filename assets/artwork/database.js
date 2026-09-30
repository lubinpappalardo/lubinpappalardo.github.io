// Still have to add
// - the two 
// - from older sketchbook
// - not on the wall charcoal

// For date, use YYYY/MM/DD

const database = [
    {
        name: "Skeleton of a Chibou",
        path: "assets/artwork/img/IMG_2486.JPG",
        date: "2023-05-24",
        medium: ["graphite"],
        tags: ["creature design", "fantasy", "chibou"]
    },
    {
        name: "Portrait of a chibou",
        path: "assets/artwork/img/IMG_2484.JPG",
        date: "2023-05-24",
        medium: ["charcoal"],
        tags: ["creature design", "fantasy", "chibou"]
    },
    {
        name: "Character design - Owlin expressions",
        path: "assets/artwork/img/IMG_2483.JPG",
        date: "2023-07-25",
        medium: ["graphite"],
        tags: ["character design", "fantasy", "chibou", "creature design"]
    },
    {
        name: "Piscoy anatomy",
        path: "assets/artwork/img/IMG_2481.JPG",
        date: "2023-07-25",
        medium: ["graphite"],
        tags: ["creature design", "fantasy", "piscoy", "anatomy"]
    },
    {
        name: "Coneman, the hero we don't need",
        path: "assets/artwork/img/IMG_2480.JPG",
        date: "2023-07-25",
        medium: ["graphite"],
        tags: ["character design", "fantasy", "coneman"]
    },
    // {
    //     name: "Attempt at an autoportrait",
    //     path: "assets/artwork/img/IMG_2418.JPG",
    //     date: "2023-09-14",
    //     medium: ["charcoal"],
    //     tags: ["portrait"]
    // },
    {
        name: "Portrait of an unknown from photography",
        path: "assets/artwork/img/IMG_2419.JPG",
        date: "2023-08-23",
        medium: ["charcoal"],
        tags: ["portrait"]
    },
    // {
    //     name: "Attempt at an autoportrait",
    //     path: "assets/artwork/img/IMG_2420.JPG",
    //     date: "2023-09-14",
    //     medium: ["charcoal"],
    //     tags: ["portrait"]
    // },
    {
        name: "Buffalo of Yellowstone",
        path: "assets/artwork/img/IMG_2421.JPG",
        date: "2023-05-02",
        medium: ["charcoal"],
        tags: ["animal"]
    },
    {
        name: "Portrait of Oli",
        path: "assets/artwork/img/IMG_2422.JPG",
        date: "2023-04-30",
        medium: ["charcoal"],
        tags: ["animal"]
    },
    {
        name: "Deer at Glacier NP",
        path: "assets/artwork/img/IMG_2423.JPG",
        date: "2023-09-03",
        medium: ["charcoal"],
        tags: ["animal"]
    },
    {
        name: "Voilier au large des côtes francaises",
        path: "assets/artwork/img/IMG_2425.JPG",
        date: "2023-09-13",
        medium: ["charcoal"],
        tags: ["landscape"]
    },
    {
        name: "Character design - Piscoy",
        path: "assets/artwork/img/IMG_2427.JPG",
        date: "2023-07-24",
        medium: ["graphite"],
        tags: ["anatomy", "character design", "creature design", "fantasy"]
    },
    {
        name: "Anatomy study - Men",
        path: "assets/artwork/img/IMG_2428.JPG",
        date: "2023-07-26",
        medium: ["graphite"],
        tags: ["anatomy"]
    },
    {
        name: "Anatomy study - Women",
        path: "assets/artwork/img/IMG_2429.JPG",
        date: "2023-07-26",
        medium: ["graphite"],
        tags: ["anatomy"]
    },
    {
        name: "Coneman with conegun",
        path: "assets/artwork/img/IMG_2430.JPG",
        date: "2023-07-26",
        medium: ["graphite", "ink"],
        tags: ["character design", "fantasy", "coneman"]
    },
    {
        name: "Piscoy weapon design - spear",
        path: "assets/artwork/img/IMG_2431.JPG",
        date: "2023-07-29",
        medium: ["graphite", "ink"],
        tags: ["weapon design", "fantasy", "piscoy"]
    },
    {
        name: "Piscoy weapon design - spear",
        path: "assets/artwork/img/IMG_2432.JPG",
        date: "2023-07-29",
        medium: ["graphite", "ink"],
        tags: ["weapon design", "fantasy", "piscoy"]
    },
    {
        name: "Piscoy weapon design - small sword",
        path: "assets/artwork/img/IMG_2433.JPG",
        date: "2023-07-29",
        medium: ["graphite", "ink"],
        tags: ["weapon design", "fantasy", "piscoy"]
    },
    {
        name: "Piscoy weapon design - dagger",
        path: "assets/artwork/img/IMG_2434.JPG",
        date: "2023-07-29",
        medium: ["graphite", "ink"],
        tags: ["weapon design", "fantasy", "piscoy"]
    },
    {
        name: "Piscoy soldier",
        path: "assets/artwork/img/IMG_2435.JPG",
        date: "2023-07-29",
        medium: ["graphite", "ink"],
        tags: ["portrait", "creature design", "character design", "fantasy", "piscoy"]
    },
    {
        name: "Brush pen portraits of various birds",
        path: "assets/artwork/img/IMG_2436.JPG",
        date: "2023-08-01",
        medium: ["ink"],
        tags: ["animal"]
    },
    {
        name: "Afternoon at the pond",
        path: "assets/artwork/img/IMG_2437.JPG",
        date: "2023-08-02",
        medium: ["graphite"],
        tags: ["landscape"]
    },
    {
        name: "Creature/Character design - Piscoy",
        path: "assets/artwork/img/IMG_2438.JPG",
        date: "2023-08-05",
        medium: ["graphite", "ink"],
        tags: ["portrait", "creature design", "character design", "piscoy", "fantasy"]
    },
    {
        name: "Portrait of an unknown from photography",
        path: "assets/artwork/img/IMG_2440.JPG",
        date: "2023-08-16",
        medium: ["graphite"],
        tags: ["portrait"]
    },
    {
        name: "Character design",
        path: "assets/artwork/img/IMG_2444.JPG",
        date: "2023-08-18",
        medium: ["graphite"],
        tags: ["portrait", "fantasy", "piscoy", "character design"]
    },
    {
        name: "Portrait of an unknown from photography",
        path: "assets/artwork/img/IMG_2445.JPG",
        date: "2023-08-16",
        medium: ["graphite"],
        tags: ["portrait"]
    },
    {
        name: "Portrait of an unknown from photography",
        path: "assets/artwork/img/IMG_2446.JPG",
        date: "2023-08-18",
        medium: ["graphite"],
        tags: ["portrait"]
    },
    {
        name: "Skull",
        path: "assets/artwork/img/IMG_2448.JPG",
        date: "2023-08-25",
        medium: ["graphite"],
        tags: ["skull"]
    },
    {
        name: "Angry Gobelin",
        path: "assets/artwork/img/IMG_2449.JPG",
        date: "2023-07-16",
        medium: ["graphite"],
        tags: ["portrait", "fantasy"]
    },
    {
        name: "Old manor on my grandparent's property",
        path: "assets/artwork/img/IMG_2450.JPG",
        date: "2023-09-06",
        medium: ["ink", "watersoluble graphite"],
        tags: ["landscape"]
    },
    {
        name: "Old manor on my grandparent's property",
        path: "assets/artwork/img/IMG_2451.JPG",
        date: "2023-09-06",
        medium: ["ink", "watersoluble graphite"],
        tags: ["landscape"]
    },
    {
        name: "Portrait of lizards",
        path: "assets/artwork/img/IMG_2452.JPG",
        date: "2023-05-26",
        medium: ["graphite"],
        tags: ["portrait", "animal"]
    },
    {
        name: "Portraits of friends",
        path: "assets/artwork/img/IMG_2453.JPG",
        date: "2023-05-28",
        medium: ["graphite"],
        tags: ["portrait", "fantasy", "character design"]
    },
    {
        name: "Coneman, the hero we don't need",
        path: "assets/artwork/img/IMG_2454.JPG",
        date: "2023-05-28",
        medium: ["graphite"],
        tags: ["fantasy", "character design", "coneman"]
    },
    // {
    //     name: "Portrait of a friend - Rafael",
    //     path: "assets/artwork/img/IMG_2455.JPG",
    //     date: "2023-05-29",
    //     medium: ["graphite"],
    //     tags: ["portrait"]
    // },
    {
        name: "Hibou Moyen Duc",
        path: "assets/artwork/img/IMG_2456.JPG",
        date: "2023-05-30",
        medium: ["graphite"],
        tags: ["portrait", "fantasy", "creature design", "character design"]
    },
    // {
    //     name: "Portrait of a friend - Victoria",
    //     path: "assets/artwork/img/IMG_2457.JPG",
    //     date: "2023-06-02",
    //     medium: ["graphite"],
    //     tags: ["portrait"]
    // },
    {
        name: "Creature design - Chibou",
        path: "assets/artwork/img/IMG_2458.JPG",
        date: "2023-06-03",
        medium: ["graphite", "colored pencil"],
        tags: ["creature design", "fantasy", "chibou"]
    },
    {
        name: "Creature design - Chibou",
        path: "assets/artwork/img/IMG_2459.JPG",
        date: "2023-06-03",
        medium: ["graphite", "colored pencil"],
        tags: ["creature design", "fantasy", "chibou"]
    },
    {
        name: "Creature design early stage - Krepler",
        path: "assets/artwork/img/IMG_2460.JPG",
        date: "2023-06-04",
        medium: ["graphite", "colored pencil"],
        tags: ["creature design", "fantasy", "krepler"]
    },
    {
        name: "Portrait of a cat",
        path: "assets/artwork/img/IMG_2461.JPG",
        date: "2023-06-04",
        medium: ["graphite", "colored pencil"],
        tags: ["animal"]
    },
    {
        name: "Creature design - glow shark",
        path: "assets/artwork/img/IMG_2462.JPG",
        date: "2023-06-05",
        medium: ["graphite", "colored pencil"],
        tags: ["creature design", "fantasy", "glow shark"]
    },
    {
        name: "Krepler colony",
        path: "assets/artwork/img/IMG_2463.JPG",
        date: "2023-06-08",
        medium: ["graphite"],
        tags: ["creature design", "fantasy", "krepler"]
    },
    {
        name: "Portraits of friends",
        path: "assets/artwork/img/IMG_2464.JPG",
        date: "2023-06-10",
        medium: ["graphite", "colored pencils"],
        tags: ["portrait"]
    },
    {
        name: "Creature design - Piscoy",
        path: "assets/artwork/img/IMG_2467.JPG",
        date: "2023-06-17",
        medium: ["graphite"],
        tags: ["creature design", "fantasy", "piscoy"]
    },
    {
        name: "Creature design - Anatomy of a Piscoy",
        path: "assets/artwork/img/IMG_2469.JPG",
        date: "2023-06-17",
        medium: ["graphite"],
        tags: ["creature design", "fantasy", "piscoy"]
    },
    {
        name: "Anatomy of a Krepler",
        path: "assets/artwork/img/IMG_2470.JPG",
        date: "2023-06-25",
        medium: ["graphite"],
        tags: ["creature design", "fantasy", "krepler"]
    },
    {
        name: "Ghibli studio style study - Portrait of friends",
        path: "assets/artwork/img/IMG_2471.JPG",
        date: "2023-06-26",
        medium: ["graphite", "colored pencils"],
        tags: ["ghibli", "portrait"]
    },
    {
        name: "Krepler",
        path: "assets/artwork/img/IMG_2472.JPG",
        date: "2023-06-30",
        medium: ["graphite"],
        tags: ["creature design", "fantasy", "krepler"]
    },
    {
        name: "Portrait of my father",
        path: "assets/artwork/img/IMG_2473.JPG",
        date: "2023-07-01",
        medium: ["graphite"],
        tags: ["portrait"]
    },
    {
        name: "Chibou - Cartoon",
        path: "assets/artwork/img/IMG_2474.JPG",
        date: "2023-07-04",
        medium: ["graphite", "colored pencils"],
        tags: ["creature design", "fantasy", "chibou"]
    },
    {
        name: "Sketch from sculpture",
        path: "assets/artwork/img/IMG_2475.JPG",
        date: "2023-07-08",
        medium: ["graphite"],
        tags: ["portrait", "anatomy"]
    },
    {
        name: "Untitled",
        path: "assets/artwork/img/IMG_2476.JPG",
        date: "2023-07-10",
        medium: ["graphite", "colored pencils"],
        tags: ["portrait", "dog"]
    },
    {
        name: "Eye study",
        path: "assets/artwork/img/IMG_2477.JPG",
        date: "2023-07-11",
        medium: ["graphite"],
        tags: ["portrait"]
    },
    {
        name: "Pornic, France",
        path: "assets/artwork/img/IMG_2478.JPG",
        date: "2023-07-14",
        medium: ["graphite"],
        tags: ["landscape"]
    }
]