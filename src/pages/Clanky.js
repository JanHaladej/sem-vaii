import React from "react"

import img1 from "../images/ClankyImgs/clanky1.jpg"
import img2 from "../images/ClankyImgs/clanky2.webp"

export default function Clanky(){
    return (
        <div className="full--clanky">
            <div className="uvod">
                <div className="uvod--nadpis">
                    <h1>Postrehy z trhu</h1>
                </div>
                
            </div>
            
            <div className="box">
                    <div className="boxText">
                        <h1>Ako sa správať na kapitálovom trhu v čase výrazných poklesov??</h1>
                        <p>Aktuálna situácia v súvislosti s pandémiou spôsobenou vírusom má dopad aj na kapitálové trhy.   V posledných dňoch trhy zaznamenali výrazné poklesy, nie je to však dôvod na paniku. Treba zachovať pokoj a správať sa racionálne. Pokiaľ už svoju pravidelnú investíciu máte "rozbehnutú", treba sa držať investičného horizontu, ktorý ste...</p>
                    </div>
                    <img src={img1} alt="" className="boxImg--right"/>
                </div>
                
                <div className="box">
                    <img src={img2} alt="" className="boxImg--left"/>
                    <div className="boxText">
                        <h1>Radosť na splátky</h1>
                        <p>Obdobie Vianoc so sebou prináša tlak na zvýšenú spotrebu. Počnúc "výpredajmi" typu Black Friday a končiac krásnym vianočným stromčekom s množstvom darčekov pod ním. Formy financovania dopriatej radosti sú rôzne. Niekto sa na Vianoce pripravuje, počíta s ich každoročným príchodom a tvorí si zodpovedne rezervu. Niekto čaká na odmeny, iný...</p>
                    </div>
                </div>
        </div>
    )
    
}