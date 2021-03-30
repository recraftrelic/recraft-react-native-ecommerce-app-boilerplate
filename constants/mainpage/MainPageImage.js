import WomenFashion from '../../assets/images/mainpage/WomenFashion.png';
import MenFashion from '../../assets/images/mainpage/MenFashion.png';
import ChildClothes from '../../assets/images/mainpage/ChildClothes.png';
import Fooddrink from '../../assets/images/mainpage/Fooddrink.png';
import Kitchentools from '../../assets/images/mainpage/Kitchentools.png';
import Furniture from '../../assets/images/mainpage/Furniture.png';
import Hobby from '../../assets/images/mainpage/Hobby.png';
import Electronic from '../../assets/images/mainpage/Electronic.png';
import LoveIcon from '../../assets/images/mainpage/LoveIcon.png';
import Carticon from '../../assets/images/mainpage/Carticon.png';

const main ={
    data: [
        {
            src: WomenFashion,
        },
        {
            src: MenFashion,
        },
        {
            src: ChildClothes,
        },
        {
            src: Fooddrink,
        },
        {
            src: Kitchentools,
        },
        {
            src: Furniture,
        },
        {
            src: Hobby,
        },
        {
            src: Electronic,
        }
    ],
    dataSale: [
        {
          name: "Camelia Heels",
          discount: "$64",
          actual: "$125",
          average: "Disc 50%"  
        },
        {
            name: "Converse Shoes",
            discount: "$89",
            actual: "$135",
            average: "Disc 40%"  
        },
        {
            name: "Levi's Jacket",
            discount: "$94",
            actual: "$135",
            average: "Disc 40%"    
        },
        {
            name: "Aphira Chair",
            discount: "$147",
            actual: "$185",
            average: "Disc 20%"   
        },
        {
            name: "Pan",
            discount: "$65",
            actual: "$5",
            average: "Disc 20%"    
        },
    ],
    dataPopular: [
        {
            name: "Vinta BackPack",
            src: LoveIcon,
            amount: "$78",
            rating: 3, 
            cart: Carticon,
            average: 4.9,
        },
        {
            name: "Kimono Clogs",
            src: LoveIcon,
            amount: "$65",
            rating: 1,
            cart: Carticon,
            average: 4.9,
        },
    ]
}

export default main;