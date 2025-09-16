import React from 'react'
import styles from "../styles/Highlights.module.css";
import Image from "next/image";

function Highlights() {
    const works_list = [
        {position:"ML Research Intern", company:"NUS", date:"Summer 2025"},
        {position:"ML Intern", company:"Project Green Thumb", date:"Spring 2025"},
        {position:"ISW Leader", company:"Penn State Global", date:"Fall 2024 and Spring 2025"},
        {position:"Policy Research Intern", company:"MARA", date:"Summer 2024"},
    ]
    const award_list = [
        {name:"Paul Morrow Endowment Scholarship", desc:"$4000 in scholarsip awarded to exemplary students"},
        {name:"NittanyAI Advance Excellence Award", desc:"Best intern award"},
        {name:"Dean List", desc:"Every semester"},
    ]
  return (
    <div className={styles.parentDiv} data-aos="fade-up">
        <h2 className={styles.highTitle}>Highlights</h2>
        <div className={styles.highDiv}>
        <div className='workx-div'>
            {works_list.map((item, index) => (
                <div className={styles.items} key={index}>
                    <h3>{item.position} @ {item.company}</h3>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
        <div className='award-div'>
            {award_list.map((item, index) => (
                <div className={styles.items} key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
        </div>
        <div className={styles.logoDiv}>
            <Image
                      src="/psu_image.png"
                      width={125}
                      height={100}
                      alt="Penn State Logo"
                    />
            <Image
                      src="/mara_image.png"
                      width={125}
                      height={100}
                      alt="MARA Logo"
                    />
            <Image
                      src="/naiss_image.png"
                      width={125}
                      height={100}
                      alt="NAISS Logo"
                    />
            <Image
                      src="/nus_image.png"
                      width={125}
                      height={100}
                      alt="nus Logo"
                    />
        </div>
    </div>
  )
}

export default Highlights