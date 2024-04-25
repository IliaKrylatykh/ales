import { generateSlug } from "@/shared/lib/generateSlug";
import { ProductEntity } from "./entities";
import AboutBird from "@/shared/images/about-bird.jpg";
import Animal from "@/shared/images/animal.jpg";
import Bird from "@/shared/images/bird.jpg";

export const productsArray: ProductEntity[] = [
  {
    id: "1",
    name: "Almond Milk",
    slug: generateSlug("Almond Milk"),
    description: "A nutty milk alternative rich in Vitamin E.",
    images: [
      AboutBird,
      Animal,
      AboutBird,
      Animal,
      AboutBird,
      AboutBird,
      Bird,
      AboutBird,
    ],
  },
  {
    id: "2",
    name: "Soy Candle",
    slug: generateSlug("Soy Candle"),
    description: "Eco-friendly candle made from soy wax with a soothing aroma.",
    images: [Animal, AboutBird, AboutBird, Bird, Bird],
  },
  {
    id: "3",
    name: "Olive Oil",
    slug: generateSlug("Olive Oil"),
    description:
      "Extra virgin olive oil with a rich taste and high in antioxidants.",
    images: [Bird, Bird, AboutBird, Animal, Animal, AboutBird, AboutBird],
  },
  {
    id: "4",
    name: "Maple Syrup",
    slug: generateSlug("Maple Syrup"),
    description: "Pure maple syrup perfect for pancakes and waffles.",
    images: [AboutBird, Bird, AboutBird, Animal, Bird, AboutBird, Animal],
  },
  {
    id: "5",
    name: "Blueberry Jam",
    slug: generateSlug("Blueberry Jam"),
    description: "Sweet and delicious jam made from fresh blueberries.",
    images: [Bird, AboutBird, AboutBird, AboutBird, AboutBird],
  },
  {
    id: "6",
    name: "Almond Milk",
    slug: generateSlug("Almond Milk"),
    description: "A nutty milk alternative rich in Vitamin E.",
    images: [
      Animal,
      AboutBird,
      AboutBird,
      Bird,
      AboutBird,
      Animal,
      AboutBird,
      Animal,
    ],
  },
  {
    id: "7",
    name: "Soy Candle",
    slug: generateSlug("Soy Candle"),
    description: "Eco-friendly candle made from soy wax with a soothing aroma.",
    images: [Animal, AboutBird, Bird, Animal, AboutBird],
  },
  {
    id: "8",
    name: "Olive Oil",
    slug: generateSlug("Olive Oil"),
    description:
      "Extra virgin olive oil with a rich taste and high in antioxidants.",
    images: [Bird, AboutBird, Animal, AboutBird, Animal, AboutBird, Bird],
  },
  {
    id: "9",
    name: "Maple Syrup",
    slug: generateSlug("Maple Syrup"),
    description: "Pure maple syrup perfect for pancakes and waffles.",
    images: [
      Animal,
      AboutBird,
      AboutBird,
      Animal,
      AboutBird,
      Animal,
      AboutBird,
    ],
  },
  {
    id: "10",
    name: "Blueberry Jam",
    slug: generateSlug("Blueberry Jam"),
    description: "Sweet and delicious jam made from fresh blueberries.",
    images: [AboutBird, AboutBird, Animal, AboutBird, Animal],
  },
  {
    id: "11",
    name: "Almond Milk",
    slug: generateSlug("Almond Milk"),
    description: "A nutty milk alternative rich in Vitamin E.",
    images: [
      Bird,
      Animal,
      AboutBird,
      Animal,
      AboutBird,
      AboutBird,
      Bird,
      Animal,
    ],
  },
  {
    id: "12",
    name: "Soy Candle",
    slug: generateSlug("Soy Candle"),
    description: "Eco-friendly candle made from soy wax with a soothing aroma.",
    images: [Bird, AboutBird, Bird, AboutBird, AboutBird],
  },
  {
    id: "13",
    name: "Olive Oil",
    slug: generateSlug("Olive Oil"),
    description:
      "Extra virgin olive oil with a rich taste and high in antioxidants.",
    images: [Animal, AboutBird, Animal, AboutBird, Animal, Bird, AboutBird],
  },
  {
    id: "14",
    name: "Maple Syrup",
    slug: generateSlug("Maple Syrup"),
    description: "Pure maple syrup perfect for pancakes and waffles.",
    images: [AboutBird, Animal, Bird, Bird, Animal, Animal, AboutBird],
  },
  {
    id: "15",
    name: "Blueberry",
    slug: generateSlug("Blueberry Jam"),
    description: "Sweet and delicious jam made from fresh blueberries.",
    images: [AboutBird, Animal, Bird, Bird, Animal],
  },
];
