const defaultArticles = [
  {
    _id: "0",
    title: "Everyone Needs a Special 'Sit spot' in Nature",
    name: "Technology",
    place: "Tech",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: " practical knowledge or the application of knowledge to solve problems and achieve goals.",
  },

  {
    _id: "2",
    title: "Grand Teton Trail",
    name: "National Parks",
    place: "Trails",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A historic trail gets a modern refresh—what it means for hikers and conservationists.",
  },
  {
    _id: "3",
    title: "Multnomah Falls",
    name: "Nature",
    place: "Falls",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A historic trail gets a modern refresh—what it means for hikers and conservationists.",
  },
  {
    _id: "4",
    title: "Grand Teton Renews Historic Crest Trail",
    name: "YOSEMITE National Parks",
    place: "Parks",
    image:
      " https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A historic trail gets a modern refresh—what it means for hikers and conservationists.",
  },
  {
    _id: "5",
    title: "Everyone Needs a Special 'Sit spot' ",
    name: "Nature",
    place: "Sit spot",
    image:
      "https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Discover how spending quiet time in nature can improve mental clarity and well-being.",
  },
  {
    _id: "6",
    title: "Everyone N",
    name: "Nature",
    place: "Falls",
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Discover how spending quiet time in nature can improve mental clarity and well-being.",
  },
  {
    _id: "7",
    title: "Everyone Needs a Special 'S",
    name: "Nature",
    place: "Falls",
    image:
      "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Discover how spending quiet time in nature can improve mental clarity and well-being.",
  },
  {
    _id: "8",
    title: " 'Sit spot' in Natures",
    name: "Nature",
    place: "Falls",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "Discover how spending quiet time in nature can improve mental clarity and well-being.",
  },
  {
    _id: "9",
    title: "smartphone ",
    name: "Tech",
    place: "Tech",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "a mini-computer capable of internet browsing.",
  },
  {
    _id: "10",
    title: " Eggs",
    name: "food",
    place: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: " This Egg Sandwich is simple, fast and delicious that everyone will love",
  },
  {
    _id: "12",
    title: "Pizza ",
    name: "food",
    place: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "cheesy delicious,crispy crust, or hot tasty",
  },
  {
    _id: "13",
    title: "Pasta",
    name: "food",
    place: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: " Made from flour, water, and sometimes eggs",
  },
  {
    _id: "14",
    title: "Salad",
    name: "food",
    place: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "A salad is a dish consisting of mixed ingredients, frequently vegetables",
  },
  {
    _id: "15",
    title: "Lotus",
    name: "flower",
    place: "Plants",
    image:
      "https://plus.unsplash.com/premium_photo-1693719515280-5d369d80aca6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: " symbolic significance of purity, rebirth, and spiritual awakening",
  },
  {
    _id: "16",
    title: "Tulip",
    name: "flower",
    place: "Plants",
    image:
      "https://images.unsplash.com/photo-1586968295564-92fd7572718b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: " cup-shaped flower that grows from a bulb and is known as a quintessential sign of spring. ",
  },
  {
    _id: "17",
    title: "sunflower ",
    name: "flower",
    place: "Plants",
    image:
      "https://images.unsplash.com/photo-1540039906769-84cf3d448bc1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: " symbol of happiness, loyalty, and positivity in various cultures.",
  },
];
export { defaultArticles };
