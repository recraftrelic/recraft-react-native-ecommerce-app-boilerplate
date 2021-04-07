import ProfilIcon from '../../assets/images/profilepage/ProfilIcon.png';
import LocationIcon from '../../assets/images/profilepage/LocationIcon.png';
import ListIcon from '../../assets/images/profilepage/ListIcon.png';
import LoveIcon from '../../assets/images/profilepage/LoveIcon.png';
import CardIcon from '../../assets/images/profilepage/CardIcon.png';
import settings from '../../assets/images/profilepage/settings.png';

const profile ={
    data:[
        {
            src: ProfilIcon,
            name: 'Account',
        },
        {
            src: LocationIcon,
            name: 'My Address',
        },
        {
            src: ListIcon,
            name: 'My Order',
        },
        {
            src: LoveIcon,
            name: 'My Favourites',
        },
        {
            src: CardIcon,
            name: 'Payment',
        },
        {
            src: settings,
            name: 'Settings',
        },
    ]
}

export default profile;