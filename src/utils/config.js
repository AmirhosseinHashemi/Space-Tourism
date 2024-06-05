// DESTINATION
export const PLANETS = [
  {
    id: 0,
    name: "moon",
    description: `See our planet as you’ve never seen it before. A perfect relaxing
    trip away to help regain perspective and come back refreshed. While
    you’re there, take in some history by visiting the Luna 2 and Apollo
    11 landing sites.`,
    distance: "384,400 km",
    duration: "3 days",
    image: "images/destination/image-moon.webp",
  },

  {
    id: 1,
    name: "mars",
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    distance: "225 mil. km",
    duration: "9 months",
    image: "images/destination/image-mars.webp",
  },

  {
    id: 2,
    name: "europa",
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: "625 mil. km",
    duration: "3 years",
    image: "images/destination/image-europa.webp",
  },

  {
    id: 3,
    name: "titan",
    description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 bill. km",
    duration: "7 Years",
    image: "images/destination/image-titan.webp",
  },
];
export const DEFAULT_DISPLAYED_PLANET = "moon";
export const PLANET_LENGTH = PLANETS.length;

// CREW
export const CREW = [
  {
    id: 0,
    fullName: "douglas hurley",
    job: "commander",
    image: "images/crew/image-douglas-hurley.webp",
    alt: "Douglas Hurley as a commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },

  {
    id: 1,
    fullName: "mark shuttleworth",
    job: "mission specialist",
    image: "images/crew/image-mark-shuttleworth.webp",
    alt: "Mark Shuttleworth as a mission specialist ",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },

  {
    id: 2,
    fullName: "victor glover",
    job: "pilot",
    image: "images/crew/image-victor-glover.webp",
    alt: "Victor Glover as a pilot",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },

  {
    id: 3,
    fullName: "anousheh ansary",
    job: "flight engineer",
    image: "images/crew/image-anousheh-ansari.webp",
    alt: "Anousheh Ansary as a flight engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];
export const DEFAULT_DISPLAYED_CREW = CREW[0];
export const CREW_LENGTH = CREW.length;
