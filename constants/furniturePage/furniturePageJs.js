import LoveIcon from '../../assets/images/mainpage/LoveIcon.png';
import Carticon from '../../assets/images/mainpage/Carticon.png';

const main = {
    data: [
        {
            name: "Sofa",
            quantity: "12 Items"
        },
        {
            name: "Chair",
            quantity: "18 Items"
        },
        {
            name: "Bed",
            quantity: "10 Items"
        },
        
    ],
    dataPopular: [
        {
            name: "Green Chair",
            src: LoveIcon,
            amount: "$97",
            rating: 5, 
            cart: Carticon,
            average: 4.9,
        },
        {
            name: "Spring sofa",
            src: LoveIcon,
            amount: "$224",
            rating: 1,
            cart: Carticon,
            average: 4.8,
        },
        {
            name: "Annalis",
            src: LoveIcon,
            amount: "$78",
            rating: 1,
            cart: Carticon,
            average: 4.9,
        },
    ]
}

export default main;