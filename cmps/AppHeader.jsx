const { Link, NavLink } = ReactRouterDOM
const {useState} = React
// const 

export function AppHeader() {

const [toggleAppsMenu, setToggleAppsMenu] = useState(false)

    return <header className="app-header">
        <Link to="/">
            <h3 className="logo"> <span>A</span><span>P</span><span>P</span><span>S</span><span>S</span><span>U</span><span>S</span></h3>
        </Link>
        <nav>
            <button class="main-header-menu" onClick={()=>setToggleAppsMenu(!toggleAppsMenu)} ><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18q0-.825.588-1.413Q5.175 16 6 16t1.412.587Q8 17.175 8 18q0 .825-.588 1.413Q6.825 20 6 20Zm6 0q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm6 0q-.825 0-1.413-.587Q16 18.825 16 18q0-.825.587-1.413Q17.175 16 18 16q.825 0 1.413.587Q20 17.175 20 18q0 .825-.587 1.413Q18.825 20 18 20ZM6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14Zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm6 0q-.825 0-1.413-.588Q16 12.825 16 12t.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12q0 .825-.587 1.412Q18.825 14 18 14ZM6 8q-.825 0-1.412-.588Q4 6.825 4 6t.588-1.412Q5.175 4 6 4t1.412.588Q8 5.175 8 6t-.588 1.412Q6.825 8 6 8Zm6 0q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Zm6 0q-.825 0-1.413-.588Q16 6.825 16 6t.587-1.412Q17.175 4 18 4q.825 0 1.413.588Q20 5.175 20 6t-.587 1.412Q18.825 8 18 8Z"/></svg></button>
          { toggleAppsMenu&&
            <section className="apps-nav-container">
            <NavLink onClick={()=>setToggleAppsMenu(!toggleAppsMenu)} className="header-btn" to="/">< img  className="app-nav-pic" src="./assets/img/googleHome.png" alt="Home" /></NavLink>
            {/* <NavLink className="app-nav-pic" to="/about">About</NavLink> */}
            <NavLink onClick={()=>setToggleAppsMenu(!toggleAppsMenu)} className="header-btn" to="/mail">< img className="app-nav-pic" src="./assets/img/gmailLogo.png" alt="Gmail" /></NavLink>
            <NavLink onClick={()=>setToggleAppsMenu(!toggleAppsMenu)} className="header-btn"  to="/note"><img className="app-nav-pic" src="./assets/img/googleKeep.png" alt="Notes" /></NavLink>
           </section>
          } 
        </nav>
    </header>
}
