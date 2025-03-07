import { useState } from 'react'
import styles from './tags.module.css'

const Tags = () => {

   let [tags,setTags] = useState([
        "For You",
        "Premium",
        "MTV Roadies XX",
        "News",
        "Big Boss",
        "BBK",
        "Cricket",
        "Free Movies",
        "Kids& Family",
        "AUS vs IND",
        "Studios",
        "FREE Anime",
        "ISL",
        "Top 10",
        " TATA IPL",
        "Coming Soon",
        "Creators Adda",
        "Tennis"   
   ])

  return (
    <>
        <div className={styles.tags}>

           {
              tags.map((tag)=>{
                  return <p className={styles.tag}>{tag}</p>
              })
           }

        </div>
    </>
  
  )
}

export default Tags
