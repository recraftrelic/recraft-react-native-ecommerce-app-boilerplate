import Image1 from "../../assets/images/introscreens/Image1.png";
import Screen2 from "../../assets/images/introscreens/Screen2.png";
import Screen3 from "../../assets/images/introscreens/Screen3.png";
import slide from "../../assets/images/introscreens/slide.png";
import slide1 from "../../assets/images/introscreens/slide1.png";
import slide2 from "../../assets/images/introscreens/slide2.png";
const introScreens = {
  shopping: [
    {
      src: Image1,
      heading: "SHOPPING FROM HOME",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus accumsan erat id facilisis.",
    },
  ],

  product: [
    {
      src: Screen2,
      heading: "PRODUK ORIGINAL",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus accumsan erat id facilisis.",
    },
  ],

  express: [
    {
      src: Screen3,
      heading: "EXPRESS DELIVERY",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus accumsan erat id facilisis.",
    },
  ],
  btnTex: "NEXT",
  skip: "SKIP",
};

const slideImage = {
  shopping: slide,
  product: slide1,
  express: slide2,
};

export { introScreens, slideImage };
