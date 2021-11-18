import { GiLindenLeaf } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'


const Header = () => {
    return (
        <header>
            <div class="header">
                <div class="logo">
                    <GiLindenLeaf  className="GiLindenLeaf"/>                        
                </div>
                <div class="pages-links">
                    <ul class="links-ul">
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Plant care</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div class="icons-links">
                    <AiOutlineSearch />
                    <FaUserCircle className="FaUserCircle" />
                </div>
            </div>
        </header>
    )
}
export default Header;

