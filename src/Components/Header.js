import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import CallIcon from '@mui/icons-material/Call'
import InfoIcon from '@mui/icons-material/Info'
import bg from './logo_black.png'
import {Link} from 'react-router-dom'
import './Header.css'
function Header(){
    return(
        <div class="navContain">
            <img class="bg" src={bg}></img>
            <div class="navs">
                <Link to ='/'><HomeIcon/> HOME </Link>
                <Link to ='/contact'><CallIcon/>CONTACT</Link>
                <Link to ='/about'><InfoIcon/>ABOUT</Link>
            </div>
        </div>
    );
}
export default Header