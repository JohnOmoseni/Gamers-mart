import Img1 from "./Assets/lego.jpg";
import Img2 from "./Assets/gow.jpg";
import Img3 from "./Assets/tomclancy2.jpg";
import Img4 from "./Assets/horiflat.jpg";
import Img5 from "./Assets/elden.jpg";
import Img6 from "./Assets/mk11.jpg";
import Img7 from "./Assets/borderlands3.jpg";
import Img8 from "./Assets/ghostwire.jpg";
import Img9 from "./Assets/forspoken.jpeg";
import Img10 from "./Assets/EvilDead.jpg";
import Img11 from "./Assets/forza.jpg";
import Img12 from "./Assets/gran-turismo.jpg";
import Img13 from "./Assets/steelrising.jpg";
import Img14 from "./Assets/homeworld.jpg";
import Img15 from "./Assets/ps4.png";
import Img16 from "./Assets/Nintendo.png";
import Img17 from "./Assets/amd.png";
import Img18 from "./Assets/ps4pad.png";
import Img19 from "./Assets/xboxone.png";
import Img20 from "./Assets/keyboardandmouse.png";
import Img21 from "./Assets/spidey.png";
import Img22 from "./Assets/ps5.png";
import Img23 from "./Assets/TinaTiny.jpg";
import Img24 from "./Assets/farcry.jpg";
import Img25 from "./Assets/Halo.jpg";
import Img26 from "./Assets/miles.jpg";
import Img27 from "./Assets/forza.jpg";
import Img28 from "./Assets/cod1.jpg";
import Img29 from "./Assets/apexlegends.jpeg";
import Img30 from "./Assets/dyinglight.jpg";
import Img31 from "./Assets/cod1.jpg";
import Img32 from "./Assets/forspoken1.jpg";
import Img33 from "./Assets/starfield.jpg";
import Img34 from "./Assets/homeworld.jpg";
import Img35 from "./Assets/grand-theft-auto.jpg";
import Img36 from "./Assets/gow2.jpg";
import Img37 from "./Assets/hori.jpg";
import Img38 from "./Assets/steelrising.jpg";
import Img39 from "./Assets/TinaTiny.jpg";
import Img40 from "./Assets/mk11.jpg";
import Img41 from "./Assets/farcry.jpg";
import Img42 from "./Assets/vampire.jpg";

const Products = [
  {
    id: 1,
    title: "LEGO star Wars: The Skywalker Saga",
    genre: "Action-adventure",
    price: 60.99,
    info: "Top",
    img: Img1,
    category: "Upcoming",
  },

  {
    id: 2,
    title: "God of War Ragnarok",
    genre: "Action-Adventure",
    price: 47.99,
    info: "New",
    img: Img2,
    category: "Trending",
  },
  {
    id: 3,
    title: "Tom Clancy's Rainbow Six Extraction",
    genre: "Tactical Shooter",
    price: 10.55,
    info: "Top",
    img: Img3,
    category: "Upcoming",
  },
  {
    id: 4,
    title: "Horizon Forbidden West",
    genre: "Action-Adventure",
    price: 50.99,
    info: "New",
    img: Img4,
    category: "Trending",
  },

  {
    id: 5,
    title: "EldenRing",
    genre: "Tactical shooter",
    price: 29.99,
    info: "Top",
    img: Img5,
    category: "Trending",
  },
  {
    id: 6,
    title: "Mortal Kombat 11",
    genre: "Fighting game",
    price: 25.99,
    info: "Top",
    img: Img6,
    category: "Trending",
  },
  {
    id: 7,
    title: "Borderlands 3",
    genre: "Action role-playing, first-person shooter",
    price: 19.99,
    info: "Top",
    img: Img7,
    category: "Trending",
  },
  {
    id: 8,
    title: "Ghost wire: Tokyo",
    genre: "Action-adventure",
    price: 30.99,
    info: "Top",
    img: Img8,
    category: "New Releases",
  },
  {
    id: 9,
    title: "Forspoken",
    genre: "Action-adventure",
    price: 28.99,
    info: "New",
    img: Img9,
    category: "Upcoming",
  },
  {
    id: 10,
    title: "Evil Dead",
    genre: "Action-adventure",
    info: "New",
    img: Img10,
    price: 61.76,
    category: "upcoming",
  },
  {
    id: 11,
    title: "Forza Horizon 3",
    genre: "Racing game",
    info: "New",
    img: Img11,
    price: 16.99,
    category: "upcoming",
  },

  {
    id: 12,
    title: "Gran Turismo 7",
    genre: "Sim racing",
    info: "New",
    img: Img12,
    price: 32.16,
    category: "Upcoming",
  },

  {
    id: 13,
    title: "Steelrising",
    genre: "Role-playing game",
    info: "New",
    img: Img13,
    price: 78.2,
    category: "Upcoming",
  },
  {
    id: 14,
    title: "Homeworld 3",
    genre: "Space flight, simulation game",
    info: "New",
    img: Img14,
    price: 42.99,
    category: "Upcoming",
  },
  {
    id: 15,
    title: "Ps4 Console",
    price: 299.99,
    img: Img15,
    category: "Accessories",
  },
  {
    id: 16,
    title: "Nintendo",
    price: 279.99,
    img: Img16,
    category: "Accessories",
  },
  {
    id: 17,
    title: "Amd Graphics Card",
    price: 169.99,
    img: Img17,
    category: "Accessories",
  },

  {
    id: 18,
    title: "Ps4 pad",
    price: 29.99,
    img: Img18,
    category: "Accessories",
  },

  {
    id: 19,
    title: "Xbox One",
    price: 229.99,
    img: Img19,
    category: "Accessories",
  },
  {
    id: 20,
    title: "Gaming Keyboard and Mouse",
    price: 59.99,
    img: Img20,
    category: "Accessories",
  },
  {
    id: 21,
    title: "WEEKEND OFFER",
    price: 59.99,
    slashed: "SAVE $19.99",
    img: Img21,
    category: "AmazingDeals",
  },
  {
    id: 22,
    title: "AMAZING DEAL",
    h3: "PS5",
    price: 669.99,
    img: Img22,
    slashed: "SAVE $9.99",
    category: "AmazingDeals",
  },
  {
    id: 23,
    title: "WEEKEND OFFER",
    price: 59.99,
    img: Img23,
    slashed: "SAVE $29.99",
    category: "AmazingDeals",
  },
  {
    id: 24,
    title: "FAR CRY 6",
    price: 64.99,
    img: Img24,
    category: "Hero-1",
  },
  {
    id: 25,
    title: "HALO INFINITE",
    price: 79.99,
    img: Img25,
    genre: "Shooter-Game",
    slashed: "SAVE $19.99",
    category: "Hero-2",
  },
  {
    id: 26,
    title: "SPIDERMAN",
    genre: "Action-adventure",
    price: 69.99,
    img: Img26,
    category: "Hero-3",
  },
  {
    id: 27,
    title: "FORZA HORIZON 3",
    genre: "Racing-game",
    price: 49.99,
    img: Img27,
    category: "forza",
  },
  {
    id: 28,
    title: "GOD OF WAR",
    genre: "Action-adventure",
    price: 62.59,
    img: Img28,
    category: "gow",
  },
  {
    id: 29,
    title: "Apex Legends",
    genre: "Action-adventure",
    info: "New",
    price: 40.56,
    img: Img29,
  },
  {
    id: 30,
    title: "Dying Light",
    genre: "Action-adventure",
    info: "New",
    price: 12.35,
    img: Img30,
  },
  {
    id: 31,
    title: "Call of Duty",
    genre: "Action, Shooting",
    info: "New",
    img: Img31,
    price: 112.99,
  },

  {
    id: 32,
    title: "Forspoken",
    genre: "Action-adventure",
    info: "New",
    img: Img32,
    price: 43.66,
  },

  {
    id: 33,
    title: "Star Field",
    genre: "Role-playing game, adventure",
    info: "New",
    img: Img33,
    price: 109.99,
  },
  {
    id: 34,
    title: "Homeworld 3",
    genre: "Space flight simulation game",
    info: "New",
    img: Img34,
    price: 80.99,
  },
  {
    id: 35,
    title: "Grand Theft Auto",
    genre: "Action, Crime",
    price: 70.99,
    info: "New",
    img: Img35,
    category: "Trending",
  },
  {
    id: 36,
    title: "God of War Ragnarok",
    genre: "Action-adventure",
    price: 13.99,
    info: "New",
    img: Img36,
    category: "Trending",
  },
  {
    id: 37,
    title: "Horizon",
    genre: "Adventure",
    price: 39.99,
    info: "Top",
    img: Img37,
    category: "Trending",
  },

  {
    id: 38,
    title: "Steel Rising",
    genre: "Action-adventure",
    price: 80.99,
    info: "Top",
    img: Img4,
    category: "NewReleases",
  },

  {
    id: 39,
    title: "Wonderlands",
    genre: "Action ",
    price: 29.99,
    info: "Top",
    img: Img38,
    category: "BestRated",
  },
  {
    id: 40,
    title: "Mortal Kombat 11",
    genre: "Fighting game",
    price: 25.99,
    info: "Top",
    img: Img39,
    category: "BestRated",
  },
  {
    id: 41,
    title: "FarCry",
    genre: "Action role-playing, first-person shooter",
    price: 39.99,
    info: "Top",
    img: Img40,
    category: "BestRated",
  },
  {
    id: 42,
    title: "Vampire",
    genre: "Action-adventure",
    price: 60.99,
    info: "Top",
    img: Img41,
    category: "NewReleases",
  },
];

export default Products;
