import pasta from "../assets/pasta.jpg";
import pizza from "../assets/pizza.jpg";
import pizza2 from "../assets/pizza2.jpg";
import burger from "../assets/burger.jpg";
import sushi from "../assets/sushi.jpg";
import grill from "../assets/grill4.jpg";
import upscale from "../assets/upscale.jpg";
import cafe from "../assets/cafe.jpg";
import indian from "../assets/indian.jpg";

const restaurantData = [
    {
      id: 1,
      name: "Cedar Grill & Lounge",
      address: "Olof Palmes plats 8, Göteborg",
      cuisine: "American",
      type: "Lounge",
      openingHours: "Mon-Sat: 10am-10pm",
      coordinates: { lat: 57.700, lng: 11.9527 },
      image: grill,
      rating: 4.2,
    },
    {
      id: 2,
      name: "Pasta Palace",
      address: "Andra Långgatan 8, Göteborg",
      cuisine: "Italian",
      type: "Romantic",
      openingHours: "Mon-Sat: 16pm-12pm",
      coordinates: { lat: 57.6992, lng: 11.9501 },
      image: pasta,
      rating: 4.1,
    },
    {
      id: 3,
      name: "Sushi Haven",
      address: "Linnégatan 22, Göteborg",
      cuisine: "Japanese",
      type: "Romantic",
      openingHours: "Mon-Sun: 12pm-9pm",
      coordinates: { lat: 57.6975, lng: 11.9513 },
      image: sushi,
      rating: 3.2,
    },
    {
      id: 4,
      name: "Burger Bistro",
      address: "Magasinsgatan 5, Göteborg",
      cuisine: "Burgers",
      type: "Street Food",
      openingHours: "Mon-Fri: 11am-9pm, Sat-Sun: 12pm-10pm",
      coordinates: { lat: 57.7043, lng: 11.9619 },
      image: burger,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Mama Mia Pizzeria",
      address: "Östra Hamngatan 28, Göteborg",
      cuisine: "Pizza",
      type: "Outdoor seating",
      openingHours: "Mon-Sun: 11am-11pm",
      coordinates: { lat: 57.7077, lng: 11.9678 },
      image: pizza,
      rating: 3.8,
    },
    {
      id: 6,
      name: "Bombay",
      address: "Redbergsplatsen 7, Göteborg",
      cuisine: "Indian",
      type: "Outdoor seating",
      openingHours: "Tis-Sun: 11am-11pm",
      coordinates: { lat: 57.7163, lng: 12.0047 },
      image: indian,
      rating: 4.3,
    },
    {
      id: 7,
      name: "Odin Pizzeria",
      address: "Odinsgatan 8, Göteborg",
      cuisine: "Pizza",
      type: "Outdoor seating",
      openingHours: "Mon-Sun: 11am-11pm",
      coordinates: { lat: 57.7090, lng: 11.9809 },
      image: pizza2,
      rating: 3.6,
    },
    {
      id: 8,
      name: "Evolushion",
      address: "Lilla Kyrkogatan 3, Göteborg",
      cuisine: "International",
      type: "Romantic",
      openingHours: "Mon-Sat: 16pm-12pm",
      coordinates: { lat: 57.7048, lng: 11.9651 },
      image: upscale,
      rating: 4.8,
    },
    {
      id: 9,
      name: "Coffee House",
      address: "Linnégatan 3, Göteborg",
      cuisine: "Café",
      type: "Outdoor seating",
      openingHours: "Mon-Sun: 11am-11pm",
      coordinates: { lat: 57.6989, lng: 11.9517 },
      image: cafe,
      rating: 3.9,
    },
];

export default restaurantData;
