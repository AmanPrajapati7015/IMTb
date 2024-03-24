// import '/styles.css'
function Navbar(){

    return(<>
    <link rel="stylesheet" href="/styles.css" />
    <div className="navbar">
        <nav>
            <h1>IMTb</h1>
            <div className="home_btn">
                <img src="./icons/hamburger.svg" alt="" width="25px" height="25px"/>
                <h2>Menu</h2>
            </div>
            <div className="search">
                <input type="text" placeholder="Search IMTb"/>
                <img src="./icons/search.svg" alt=""  width="25px" height="25px"/>
            </div>
            <div className="watchlist">
                <img src="./icons/bookmark.svg" alt=""  width="25px" height="25px"/>
                <h2>Watch list</h2>
            </div>
            <h2 className="sign-in">Sign in</h2>
        </nav>
    </div>        
 
    </>)
}

export default Navbar;