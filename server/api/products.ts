// server/api/products.ts
export default defineEventHandler(() => {
  return [
    {
      id: 1,
      name: "Беспроводные наушники",
      description:
        "Bluetooth наушники с активным шумоподавлением и качественным звуком",
      price: 5990,
      image: "/images/products/product_01.jpg",
    },
    {
      id: 2,
      name: "Смартфон XYZ",
      description:
        "Современный смартфон с мощным процессором и отличной камерой",
      price: 24990,
      image: "/images/products/product_02.jpg",
    },
    {
      id: 3,
      name: "Ремонт компьютеров",
      description:
        "Профессиональный ремонт и обслуживание компьютеров и ноутбуков",
      price: 2000,
      image: "/images/products/product_03.jpg",
    },
    {
      id: 4,
      name: "Умная колонка",
      description:
        "Умная колонка с голосовым ассистентом и качественным звуком",
      price: 4990,
      image: "/images/products/product_04.jpg",
    },
    {
      id: 5,
      name: "Установка Windows",
      description:
        "Профессиональная установка и настройка операционной системы",
      price: 1500,
      image: "/images/products/product_05.jpg",
    },
    {
      id: 6,
      name: "Беспроводная клавиатура",
      description:
        "Удобная беспроводная клавиатура с подсветкой и мультимедийными клавишами",
      price: 3490,
      image: "/images/products/product_06.jpg",
    },
    {
      id: 7,
      name: "Внешний SSD накопитель",
      description:
        "Быстрый и надежный внешний SSD накопитель для хранения данных",
      price: 7900,
      image: "/images/products/product_07.jpg",
    },
    {
      id: 8,
      name: "Настройка сети",
      description: "Профессиональная настройка домашней или офисной сети",
      price: 2500,
      image: "/images/products/product_08.jpg",
    },
  ];
});
