import { Button } from 'react-native-elements/dist/buttons/Button';
import deleteButton from '../../assets/images/shoppingCart/deleteButton.png';
import addButton from '../../assets/images/shoppingCart/addButton.png';
import lessButton from '../../assets/images/shoppingCart/lessButton.png'

const main = {
    data: [
        {
            name: "Levi’s Jeans",
            src: deleteButton,
            color: "Color : Dark Grey",
            size: "Size : L",
            amount: "$76",
            add: addButton,
            number: 1,
            less: lessButton,
            sub: "Sub Total :",
            total: "$152"
        },
        {
            name: "Milano Parada",
            src: deleteButton,
            color: "Color : Silver",
            size: "Size : No size",
            amount: "$96",
            add: addButton,
            number: 1,
            less: lessButton,
            sub: "Sub Total :",
            total: "$152"
        },
    ]
}

export default main;