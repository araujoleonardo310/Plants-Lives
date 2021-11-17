import React from "react";
const Header = () => {
    return (
        <header>
            <div class="header">
                <div class="logo">
                    <i class="fas fa-leaf"></i>                        
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
                    <i class="fas fa-search"></i>
                    <i class="fas fa-user-circle"></i>
                </div>
            </div>
        </header>
    )
}
export default Header;