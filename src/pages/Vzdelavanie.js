import React from "react"

import img1 from "../images/VzdelavanieImgs/Vzdelavanie1.jpg"
import img2 from "../images/VzdelavanieImgs/Vzdelavanie2.jpg"
import img3 from "../images/VzdelavanieImgs/Vzdelavanie3.jpg"

export default function Vzdelavanie(){
    return (
        <div className="full--vzdelavanie">
            <div className="uvod">
                <div className="uvod--nadpis">
                    <h1>WORKSHOPY</h1>
                </div>
                <div className="uvod--text">
                    <p>Ako skupina usporiadávame workshopy, kde si človek vyskúša svoju finančnú gramotnosť. Môžete nahliadnuť do toho, ako funguje finančný trh, aké nástrahy v ňom existujú a pokiaľ sa budete riadiť zásadami, akými sa riadite aj v realite, dokážete dokonca aj predpovedať svoju vlastnú budúcnosť.</p>
                </div>
            </div>
            
            <div className="box">
                    <div className="boxText">
                        <h1>To, čo nás v škole nenaučili</h1>
                        <hr className="hr--podNadpisom" />
                        <p>Dávaš si na konci mesiaca otázku, kedy už konečne príde výplata? Máš pocit, že vlastne ani nevieš, kde sa „strácajú“ všetky Tvoje zarobené peniaze? Deň čo deň s nimi každý z nás pracuje. Máme ich však POD KONTROLOU? Vieme AKO S NIMI PRACOVAŤ? Alebo sa stávame len obeťami agresívneho marketingu a predajcov rôznych produktov?</p>
                    </div>
                    <img src={img1} alt="" className="boxImg--right"/>
                </div>
                
                <div className="box">
                    <img src={img2} alt="" className="boxImg--left"/>
                    <div className="boxText">
                        <h1>Čo využiť a na čo si dať pozor</h1>
                        <hr className="hr--podNadpisom" />
                        <p>Získaj 30 rokov finančných skúseností za 2 hodiny. ŽIADNE POUČKY, ŽIADNE ŠKOLENIA. Zábavnou, interaktívnou formou – formou SIMULÁCIE 30-tich rokov života - získaj vedomosti a prehľad o fungovaní finančného trhu. V priebehu simulácie zažiješ situácie, ktoré nám sám život prináša.</p>
                        <p>Cieľom je splniť 3 základné úlohy: VLASTNÉ BÝVANIE, VZDELANIE a FINANČNÁ SLOBODA, a to aj napriek rôznym životným nástrahám, ktoré sa v simulácií vyskytnú. Počas priebehu postupne dostaneš komplexný prehľad o fungovaní trhu a dozvieš sa 7 ZÁKLADNÝCH PRAVIDIEL ako sa aj s PRIEMERNÝM PRÍJMOM stať FINANČNE NEZÁVISLÝM.</p>
                        <p>Príď na workshop, ktorý organizujeme v rámci zvyšovania finančnej gramotnosti.</p>
                    </div>
                </div>
                
                <div className="box">
                    <div className="boxText">
                        <h1>Čo je dôležitejšie??</h1>
                        <hr className="hr--podNadpisom" />
                        <p>Najčastejšie komunikujeme spomedzi finančných inštitúcii práve s bankou a poisťovňou. Dostanem tam však relevantné odpovede a informácie, alebo som len súčasťou plánu, ktorý musia pracovníci naplniť? Lepšie než porovnávať a hľadať najlepší produkt na trhu je vytvoriť si VLASTNÚ STRATÉGIU vo financiách, a práve to si môžeš vyskúšať na workshope.</p>
                        <p>Príď si rozšíriť obzory a naučiť sa niečo nové, praktické, čo VYUŽIJEŠ aj v REÁLNOM ŽIVOTE.</p>
                    </div>
                    <img src={img3} alt="" className="boxImg--right"/>
                </div>
        </div>
    )
    
}