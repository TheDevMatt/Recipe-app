import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '../Button/Button';
import Form from '../Form/Form';
import '../../styles/Navigation.scss';
import '../../styles/HamburgerMenu.scss';

interface HamburgerProps {
    isInitiallyOpen?: boolean;
}

function Navigation(props: HamburgerProps){

    const {isInitiallyOpen} = props;

    const [value, setValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const inputValue = e.target.value;

        setValue(inputValue);
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

        return(
        <nav className='navigation-container'>
            <div className='navigation-menu' onClick={toggleSidebar}><MenuIcon fontSize='large'/>
            </div>
            <div className='navigation-logo'>Eat<strong>Yummy</strong></div>
            <Form className='navigation-search' placeholder='Search meals' value={value} onChange={handleChange}></Form>
            <Button className='custom-button navigation-button'><ShoppingCartIcon className='navigation-cart'/><span>Cart</span></Button>
        <div className={`navigation-sidebar ${isOpen ? 'open' : ''}`}>
            <div className='sidebar-content'>
            <MenuIcon className='sidebar-close' onClick={toggleSidebar} fontSize='large'>Close</MenuIcon>
                <a href='#'>My Account</a>
                <a href='#'>My Favourite</a>
                <a href='#'>My Wallet</a>
                </div></div>
        </nav>
    )
}

export default Navigation;