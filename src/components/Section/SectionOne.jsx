import ContainerImages from "../Images/ContainerImages";
import { TextCommon } from "../Text/TextCommon";
import TextSection from "../Text/TextSection";
import TextSecundary from "../Text/TextSecundary";

import styles from "./style.module.css"

import ImgHobbie1 from "../../assets/desktop/image-woman-in-videocall.jpg"
import ImgHobbie2 from "../../assets/desktop/image-women-videochatting.jpg"
import ImgHobbie3 from "../../assets/desktop/image-men-in-meeting.jpg"
import ImgHobbie4 from "../../assets/desktop/image-man-texting.jpg"
import NumberSection from "./NumberSection";

export default function SectionOne() {
    return (
        <section className={styles.sectionOne}>
            <NumberSection numbSection="01" />
            <ContainerImages imgEx1={ImgHobbie1} imgEx2={ImgHobbie2} imgEx3={ImgHobbie3} imgEx4={ImgHobbie4} Hobb1="Mulher em video Chamada" Hobb2="Mulher em videoChat com parentes" Hobb3="Homem em Reunião" Hobb4="Homem Digitando" />
            <TextSection textSect="BUILD FOR MODERN USE" />
            <TextSecundary textSec="Smarter meetings, all in one place" />
            <TextCommon textP="Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export." />
        </section>
    )
}