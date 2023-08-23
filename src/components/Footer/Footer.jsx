import ButtonPurple from "../Button/ButtonPurple";
import NumberSection from "../Section/NumberSection";
import { TextCommon } from "../Text/TextCommon";
import { TextCommonWhite } from "../Text/TextCommonWhite";
import TextSecundary from "../Text/TextSecundary";
import TextSecundaryWhite from "../Text/TextSecundaryWhite";

import styles from "./style.module.css"


export default function Footer() {
    return (
        <div className={styles.sectionFooter}>
        <NumberSection numbSection="02" />
        <footer className={styles.footer}>
            <div className={styles.internFooter}>
                <div className={styles.elementsFooter}>
                    <TextSecundaryWhite textSecW="Experience more together" />
                    <TextCommonWhite textPW="Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions."/>
                    <ButtonPurple button="Download v1.3"/>
                </div>
            </div>
        </footer>
        </div>
    )
}