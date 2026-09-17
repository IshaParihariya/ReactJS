import styles from "./Card.module.css";

import {Bookmark} from "lucide-react";


const Card = (props) => {
  return (
    <div className={styles.card}>
       <div className={styles.top}>
            <img src={props.img} alt="logo"></img>
            <button>Save 
            <span className="bookmark-icon">
            <Bookmark size={14} />
            </span> 
            </button>
        </div>

        <div className={styles.centre}>
          <h3>{props.companyName} <span>{props.timeAgo} hours ago</span></h3>  
          <h2>{props.post}</h2>
          <div className={styles.tag}>
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>

        <div className={styles.bottom}>
            <div>
                <div className="bottom-left">
                    <h3>${props.pay}</h3>
                    <p>{props.city},{props.country}</p>
                </div>
            </div>
            <button> Apply Now</button>
        </div>

    </div>
  )
}

export default Card