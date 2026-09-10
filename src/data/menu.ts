export type Dish = { name: string; jp?: string; desc: string; price: string };

export const MENU: { category: string; items: Dish[] }[] = [
  {
    category: "Ramen",
    items: [
      {
        name: "Tori Shoyu Ramen",
        jp: "鶏醤油",
        desc: "Soy-forward chicken broth, grilled chicken, jammy egg, nori",
        price: "₹460",
      },
      {
        name: "Tori Miso Ramen",
        jp: "鶏味噌",
        desc: "Slow-simmered chicken broth whipped with red miso, corn, scallion",
        price: "₹480",
      },
      {
        name: "Yasai Shoyu Ramen",
        jp: "野菜醤油",
        desc: "Vegetable broth, shiitake, greens, soy tare",
        price: "₹420",
      },
      {
        name: "Yasai Miso Ramen",
        jp: "野菜味噌",
        desc: "Miso vegetable broth, tofu, corn, mushrooms",
        price: "₹440",
      },
    ],
  },
  {
    category: "Sushi / Bites",
    items: [
      { name: "Chicken Gyoza", desc: "Pan-seared, six pieces, ponzu", price: "₹280" },
      { name: "Veg Gyoza", desc: "Cabbage, shiitake, chive", price: "₹260" },
      { name: "Spicy Kani Maki", desc: "Crab stick, chilli mayo, tobiko", price: "₹340" },
      { name: "Avocado Maki", desc: "Avocado, sesame, soy", price: "₹300" },
    ],
  },
  {
    category: "Matcha / Drinks",
    items: [
      { name: "Iced Matcha", jp: "抹茶", desc: "Ceremonial grade, milk, ice", price: "₹260" },
      { name: "Hojicha Latte", desc: "Roasted green tea, lightly sweet", price: "₹250" },
      { name: "Yuzu Soda", desc: "Yuzu, soda, salted rim", price: "₹190" },
    ],
  },
  {
    category: "Add-ons",
    items: [
      { name: "Ajitama Egg", desc: "Soy-cured, jammy centre", price: "₹80" },
      { name: "Extra Noodles", desc: "Kaedama, straight into the broth", price: "₹90" },
      { name: "Nori Sheets", desc: "Three sheets", price: "₹60" },
      { name: "Chilli Oil", desc: "House rayu, use carefully", price: "₹50" },
    ],
  },
];
