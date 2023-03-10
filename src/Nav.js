import logo5 from './Images/ShoppingLogo.jpg'

export default function Nav({Children}){
    return(
        <div>
        <nav>
            <div className="nav-logo">
            <img src={logo5}></img>
            </div>
            <div className="nav-elem">
            <ul>
                
                <Link to="#">  <li>Home</li></Link>
                <Link to="#"><li>Shopping</li></Link>
                <Link to="#"><li>Sign In</li></Link>
                <Link to="#"><li>Cart</li></Link>
     
                
            </ul>
                </div>
        </nav>
        {Children}
        </div>
    )  
}