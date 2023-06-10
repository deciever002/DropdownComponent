import React, { useState } from "react";
import styles from '../styles/dropdown.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { options } from "../data/options";

export default function Dropdown(){
    //used hooks to handle different states in app

    //isActive is a state to check whether dropdown is opened or closed
    const [isActive,setIsActive] = useState(false);

    //selectedOption is used to the state of option 
    const [selectedOption,setSelectedOption] = useState("None");

    //custom event handler to handle mouse hover on select button
    function handleMouseHover(event){
        setIsActive(true);
    }

    //custom event handler to handle when user clicks on particular option
    function handleOptionClick(event){
        setIsActive(false);
        setSelectedOption(event.target.innerText);
    }

    //jsx to render the component
    return (
        <div className={styles.dropdownItemsContainer}>
            <div className={styles.card}>
                <div style={{display: "flex",width: "100%",justifyContent:"space-around",alignItems:"center"}}>
                    <h2>Select your option:</h2>
                    <div className={styles.dropdownSelect} onMouseEnter={(e) => handleMouseHover(e)}>
                        <span>Select</span>
                        <FontAwesomeIcon icon={faCaretDown}/>
                    </div>
                </div>
                { isActive && 
                    <div style={{display: "flex",width: "100%",justifyContent:"space-around",alignItems:"center"}}>
                        <div className={styles.dropdownOptions}>
                            {options.map((option,index) => (
                                    <p key={index} className={styles.options} onClick={(e) => handleOptionClick(e)}>{option}</p>
                            ))}
                        </div>
                    </div>
                }
            </div>
            <div>
                <h2 style={{textAlign:"center"}}>Selected Option: <span className="gradientText">{selectedOption}</span></h2>
            </div>
        </div>
    );
}