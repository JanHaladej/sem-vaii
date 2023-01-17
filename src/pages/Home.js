import React from "react"

import Slider from "../components/Slider"

import img1 from "../images/HomeImgs/Home1.jpg"
import img2 from "../images/HomeImgs/Home2.jpg"

export default function Home(){
    return (
        <div>
            <Slider/> {/*https://github.com/IamDyroz/carousel*/}

            <div className="HomeContent">
                <div className="box">
                    <div className="boxText">
                        <h1>Finančná gramotnosť</h1>
                        <hr className="hr--podNadpisom" />
                        <p>V poslednej dobe často používané slovné spojenie, avšak stále málo rozvinutá oblasť z pohľadu vedomostí obyvateľstva a aplikácie v bežnom živote.</p>
                        <p>Príklad z praxe:</p>
                        <p>Na začiatku si klienti myslia, že mojou prácou je chodiť po bankách s požiadavkou najnižšej úrokovej sadzby na hypotéku. Tento parameter však nie je zďaleka najdôležitejší, ak chceme mať správne nastavené financovanie. Čo tak pozrieť sa na to, koľko v skutočnosti banke vrátim? Napr. pri hypotéke vo výške 100.000 Eur, ak by som bral do úvahy priemernú úrokovú sadzbu 1,5% (čo sa v praxi nedá presne stanoviť na celú dobu splácania), vrátim cca 124.000 Eur. To je o 24.000 Eur viac, ako som si požičal. Namiesto toho, aby sme sa predbiehali s lepšou úrokovou sadzbou o desatinu-dve, poďme riešiť, ako znížiť preplatenosť z 24.000 Eur až na 0 (nula) Eur.</p>
                        <p>O tom je finančná gramotnosť - vedieť efektívne pracovať so svojimi peniazmi, mať finančný plán.</p>
                    </div>
                    <img src={img1} alt="" className="boxImg--right"/>
                </div>
                <div className="box">
                    <img src={img2} alt="" className="boxImg--left"/>
                    <div className="boxText">
                        <p>Takýchto "málo komunikovaných" oblastí je viacero. Viete si napríklad vypočítať a pripraviť požadovanú Rentu? Pritom je to aj v možnostiach pracujúceho človeka s priemernou mzdou v hospodárstve, len o tom často ani nevedia.</p>
                        <p>Každý z nás má jedného lekára, tak prečo nemať aj svojho človeka na finančnom trhu, všetko pod jednou strechou? Nájdite si čas a spoločne sa pozrime na Vaše priania a potreby, a aj na základe Vašich možností Vám vypracujem Váš individuálny finančný plán.</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}