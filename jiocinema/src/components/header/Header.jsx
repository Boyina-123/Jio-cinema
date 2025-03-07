import styles from './Header.module.css'
import JCLogo from '../../assets/jc-logo.png'
import crown from '../../assets/crown-png.webp'
import searchIcon from '../../assets/search icon.webp'
import voicesearchIcon from '../../assets/voicesearch icon.jpeg'
import jioIcon from "../../assets/jio-logo.png"
import {useState, useEffect } from 'react'
import Show from '../show/Show'

const Header = (props) => {

    let navlinks=["Home","Sports","Movies","TVShows","More"] 
    let [searchTitle,setSearchTitle] = useState("");
    let [filteredMovies,setFilteredMovies]=useState([])

    useEffect(()=>{

        if(searchTitle!=="")
        {
            let filterMovies = props.movies.filter((movie)=>{
                return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase())==0
            })
    
            setFilteredMovies(filterMovies)
        }
        else
        {
            setFilteredMovies([])
        }


    },[searchTitle])

    return (
    <>
        <header className={styles.header}>
       
                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src={JCLogo} alt='logo' width={100}/>
                        <div className={styles.premium}>
                          <img src={crown} alt="image" width={12}/> 
                          <p>Gopremium</p>
                        </div>
                    </div>
                    <ul className={styles.navlinks}>
                       {
                            navlinks.map((link)=>{
                                return <li className={styles.navlink}>{link}</li>
                            })
                       }
                    </ul>
                </nav>

                <div className={styles.search}>

                         <div className={styles.searchBox}>
                             <div className={styles.headerIcon}>
                                <img src={searchIcon} alt="icon" width={30}/>
                             </div>

                             <input type="text"
                             onChange={(event)=>{
                                  setSearchTitle(event.target.value)
                             }} className={styles.searchInput} placeholder='Movies,Shows and More ' />


                             <div className={styles.headerIcon}>
                                 <img src={voicesearchIcon} alt="icon" width={20} />
                             </div>
                         </div>
                         <img className={styles.usericon} src={jioIcon} alt="icon" width={45}/>

                </div>

        </header>
        <div>
        {
            filteredMovies.length!==0?(
                <div className={styles.searchResults}>
                            
                        {
                            filteredMovies.map((movie)=>{
                                return <Show movie={movie}/>
                            })
                        }

                </div>
            ):null
        }
        </div>
    </>
  )
}

export default Header
