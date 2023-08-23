import ButtonBlue from "../Button/ButtonBlue";
import ButtonPurple from "../Button/ButtonPurple";
import { TextCommon } from "../Text/TextCommon";
import TextPrincipal from "../Text/TextPrincipal";

import styles from "./style.module.css"

export default function SectionAvatars({imgMob, imgDesk1, imgDesk2, avatar}) {
    return (
        <section className={styles.sectionAvatar}>
            <img src={imgMob} alt={avatar} className={styles.imgMobile} />
            <img src={imgDesk1} alt={avatar} className={styles.imgDesk} />
            <div className={styles.containerText}>
                <TextPrincipal textPrinc="Group Chat for Everyone" />
                <TextCommon textP="Meet makes it easy to connect with others face-to-face virtually and collaborate across any device." />
                <div className={styles.containerBtn}>
                    <ButtonBlue button="Download v1.3" />
                    <ButtonPurple button="What is it?" />
                </div>
            </div>
            <img src={imgDesk2} alt={avatar} className={styles.imgDesk} />
        </section>
    )
}