function addToCart(num) {
  var obj = new Array();
  if (sessionStorage.getItem("Cart") != null) {
    obj = JSON.parse(sessionStorage.getItem("Cart"));
  }
  // Totally Temporary this is way to fixed

  switch (num) {
    case 1:
      obj.push({
        name: "Destiny 2: Beyond Light",
        rating: "T",
        instock: "Yes",
        price: "$39.99",
      });

      sessionStorage.setItem("Cart", JSON.stringify(obj));
      break;
    case 2:
      obj.push({
        name: "Assassin's Creed Valhalla",
        rating: "M",
        instock: "No",
        price: "$59.99",
      });

      sessionStorage.setItem("Cart", JSON.stringify(obj));
      break;
    case 3:
      obj.push({
        name: "Call of Duty Modern Warfare",
        rating: "M",
        instock: "Yes",
        price: "$59.99",
      });

      sessionStorage.setItem("Cart", JSON.stringify(obj));
      break;
    case 4:
      obj.push({
        name: "Among Us",
        rating: "E",
        instock: "Yes",
        price: "$19.99",
      });

      sessionStorage.setItem("Cart", JSON.stringify(obj));
      break;
    case 5:
      obj.push({
        name: "The Elder Scrolls V: Skyrim",
        rating: "M",
        instock: "Yes",
        price: "$39.99",
      });

      sessionStorage.setItem("Cart", JSON.stringify(obj));
      break;
    case 6:
      obj.push({
        name: "Assassin's Creed Odyssey",
        rating: "M",
        instock: "Yes",
        price: "$59.99",
      });

      sessionStorage.setItem("Cart", JSON.stringify(obj));
      break;

    case 7:
      obj.push({
        name: "Cyberpunk 2077",
        rating: "M",
        instock: "No",
        price: "$59.99",
      });

      sessionStorage.setItem("Cart", JSON.stringify(obj));
      break;

    default:
      break;
  }
}
