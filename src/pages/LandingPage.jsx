import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SectionAvatars from "../components/Images/SectionAvatar";
import SectionOne from "../components/Section/SectionOne";

import Logo from ".././assets/logo.svg"

import avatarDeskR from "../assets/desktop/image-hero-right.png"
import avatarDeskL from "../assets/desktop/image-hero-left.png"
import avatarMobile from "../assets/tablet/image-hero.png"

export default function LandingPage() {
    return (
        <>
            <Header imgLogo={Logo} />
            <SectionAvatars imgDesk1={avatarDeskL} imgDesk2={avatarDeskR} imgMob={avatarMobile} avatar="Avatares de Usuarios" />
            <SectionOne />
            <Footer />
        </>
    )
}