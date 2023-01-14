import React from "react"

import img1 from "../images/SluzbyImgs/Sluzby1.jpg"
import img2 from "../images/SluzbyImgs/Sluzby2.webp"

export default function Sluzby(){
    return (
        <div className="full--sluzby">

            <div className="uvod--sluzby">
                <div className="uvod--nadpis">
                    <br />
                    <br />
                    <h1>BÝVANIE</h1>
                    <br />
                    <br />
                </div>
                <div className="uvod--text">
                    <p>Vyriešiť otázku vlastného bývania je cieľom mnohých mladých ľudí, avšak nie len ich. Viete v akej hodnote môžete hľadať svoje vysnívané bývanie, aby ste neprekročili hodnotu zdravého zadlženia sa? Ako vyzerá hypotéka v číslach? Máte záujem o zníženie celkovej preplatenosti? Rád Vám s tým pomôžem a pripravím nezáväzný plán na základe Vašej konkrétnej situácie.</p>
                    <br />
                    <br />
                </div>
            </div>

            <hr className="horizontalLine" />
            
            <div className="box">
                    <div className="boxText">
                        <h1>Prvé bývanie</h1>
                        <p>Prvé vlastné bývanie je veľkým krokom v živote. Pre tých, ktorí to berú na vlastné ramená a chcú pri tom využiť peniaze banky, odporúčam dôsledne sa pripraviť. Častokrát sa stretávam s otázkou "Kde dostanem lepšiu hypotéku?". Vhodnejšou otázkou je v tomto prípade otázka "Ako som sa pripravil na získanie hypotéky?". Ideálne je, mať ucelenú predstavu financovania už dlhší čas dopredu a na realizáciu sa dôsledne pripraviť, mať plán. Úspora medzi naplánovaným financovaním a spontánnym rozhodnutím vyriešiť to "zo dňa na deň" môže dosiahnuť až 30%. Pri financovaní vo výške 100.000 EUR je 30% z toho určite zaujímavá suma, súhlasíte? Som presvedčený, že viete ušetrené peniaze využiť pre vás prospešnejšie než "dotovaním banky".</p>
                    </div>
                    <img src={img1} alt="" className="boxImg"/>
                </div>
                
                <div className="box">
                    <img src={img2} alt="" className="boxImg"/>
                    <div className="boxText">
                        <h1>Druhé a ďalšie bývanie</h1>
                        <p>Časom sa naše možnosti, ale aj preferencie menia. Preto ľudia s vlastným bývaním sa časom obzerajú po zmene. S rozrastajúcou sa rodinou sa obzeráme po väčšej nehnuteľnosti s vyšším komfortom, vyhovujúcejšou lokalitou. A možno už len chcete mať konečne pokoj od svokrovcov :) Tu často dostávam otázku "Kde dostanem najnižší úrok?" Zďaleka to nie je najdôležitejší parameter. Vhodnejšie je si klásť otázku: "Ako znížiť preplatenosť?" Mimoriadne splátky a čo najkratšia doba splatnosti nie je vždy najlepším riešením.</p>
                        <p>Aj v tomto prípade platí, že správne nastavený plán je kľúčom k efektívnejšiemu využitiu Vašich neľahko zarobených peňazí.</p>
                    </div>
                </div>

            <div className="uvod--sluzby">
                <div className="uvod--nadpis">
                    <h1>RENTA ALEBO LEN DÔCHODOK</h1>
                </div>
                <div className="uvod--text">
                    <p>Vyriešiť otázku vlastného bývania je cieľom mnohých mladých ľudí, avšak nie len ich. Viete v akej hodnote môžete hľadať svoje vysnívané bývanie, aby ste neprekročili hodnotu zdravého zadlženia sa? Ako vyzerá hypotéka v číslach? Máte záujem o zníženie celkovej preplatenosti? Rád Vám s tým pomôžem a pripravím nezáväzný plán na základe Vašej konkrétnej situácie.</p>
                </div>
            </div>


            <div className="uvod--sluzby">
                <div className="uvod--nadpis">
                    <h1>ZABEZPEČENIE ZDRAVIA A MAJETKU</h1>
                </div>
                <div className="uvod--text">
                    <p>Vyriešiť otázku vlastného bývania je cieľom mnohých mladých ľudí, avšak nie len ich. Viete v akej hodnote môžete hľadať svoje vysnívané bývanie, aby ste neprekročili hodnotu zdravého zadlženia sa? Ako vyzerá hypotéka v číslach? Máte záujem o zníženie celkovej preplatenosti? Rád Vám s tým pomôžem a pripravím nezáväzný plán na základe Vašej konkrétnej situácie.</p>
                </div>
            </div>

            <div className="uvod--sluzby">
                <div className="uvod--nadpis">
                    <h1>TVORBA REZERV PRE DETI</h1>
                </div>
                <div className="uvod--text">
                    <p>Vyriešiť otázku vlastného bývania je cieľom mnohých mladých ľudí, avšak nie len ich. Viete v akej hodnote môžete hľadať svoje vysnívané bývanie, aby ste neprekročili hodnotu zdravého zadlženia sa? Ako vyzerá hypotéka v číslach? Máte záujem o zníženie celkovej preplatenosti? Rád Vám s tým pomôžem a pripravím nezáväzný plán na základe Vašej konkrétnej situácie.</p>
                </div>
            </div>




        </div>
    )
    
}