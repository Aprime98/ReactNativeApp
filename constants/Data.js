import assets from "./assets";

const hairCategroies = [
  {
    id: "1",
    name: "Braids",
    description:
      "Braids are a popular hairstyle that involves weaving strands of hair together, creating a stylish and versatile look.",
    image: assets.rect10,
  },
  {
    id: "2",
    name: "Dreads",
    description:
      "Dreadlocks, or dreads, are a hairstyle created by intentionally matting or twisting sections of hair, resulting in unique and textured locks that can vary in size and length.",
    image: assets.rect11,
  },
  {
    id: "3",
    name: "Ghanaian",
    description:
      "Ghana weaving, are intricate and beautifully patterned braided hairstyles originating from Ghana. These hairstyles typically involve intricate and symmetrical patterns created by braiding hair close to the scalp, resulting in stunning and eye-catching designs.",
    image: assets.rect12,
  },
  {
    id: "4",
    name: "Lines",
    description:
      " Lines include cutting, coloring, curling, straightening, braiding, or any other technique used to create a specific hairstyle.",
    image: assets.rect13,
  },
];

const ordered = [
  {
    id: "100",
    name: "Ghanaian",
    salon: "Doris Salon",
    date: "Ordered 2 months ago",
    image: assets.rect14,
  },
  {
    id: "101",
    name: "Knotless",
    salon: "Wambo Salon",
    date: "Ordered 1 month ago",
    image: assets.rect15,
  },
];

const Recommended = [
  {
    id: "200",
    name: "Braids",
    salon: "Doris Salon",
    amount: "Ksh 2000",
    image: assets.rect14,
  },
  {
    id: "201",
    name: "Knotless",
    salon: "Wambo Salon",
    amount: "Ksh 3000",
    image: assets.rect15,
  },
];

const salons = [
  {
    id: "400",
    name: "Doris Salon",
    rating: "4.5",
    image: assets.rect22,
  },
  {
    id: "401",
    name: "Wambo Salon",
    rating: "4.5",
    image: assets.rect26,
  },
  {
    id: "402",
    name: "Doris Salon",
    rating: "4.5",
    image: assets.rect24,
  },
  {
    id: "403",
    name: "Wambo Salon",
    rating: "4.5",
    image: assets.rect28,
  },
  {
    id: "404",
    name: "Doris Salon",
    rating: "4.5",
    image: assets.rect30,
  },
  {
    id: "405",
    name: "Wambo Salon",
    rating: "4.5",
    image: assets.rect32,
  },
];

export default { hairCategroies, ordered, Recommended, salons };
