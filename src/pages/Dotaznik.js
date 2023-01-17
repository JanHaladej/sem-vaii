import React from "react"
import Axios from "axios"

export default function Form() {
    const [formDataDot, setFormDataDot] = React.useState(
        {
            quest1: "", 
            quest2: "", 
            quest3: "", 
            quest4: "", 
            quest5: "",
            quest6: "",
            quest7: "",
            quest8: "",
            quest9: "",
            quest10: "",
            meno: "", 
            priezvisko: "", 
            email: "", 
            telCislo: ""
        }
    )

    const [userList, setUserList] = React.useState ([])

    React.useEffect(() => {
        Axios.get("http://localhost:3001/api/get/dot").then((response) => {
            setUserList(response.data)
        })
    }, [userList])


    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormDataDot(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        Axios.post("http://localhost:3001/api/insert/dot", {formDataDot})
        
    }
    
    return (
        <form onSubmit={handleSubmit} className="full--dotaznik">
            <fieldset>
                <legend>1. Do 2. piliera môžem vstúpiť:</legend>
                <input 
                    type="radio"
                    id="quest1opt1"
                    name="quest1"
                    value="kedykoľvek"
                    checked={formDataDot.quest1 === "kedykoľvek"}
                    onChange={handleChange}
                />
                <label htmlFor="quest1opt1">kedykoľvek</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest1opt2"
                    name="quest1"
                    value="do 35. roku života"
                    checked={formDataDot.quest1 === "do 35. roku života"}
                    onChange={handleChange}
                />
                <label htmlFor="quest1opt2">do 35. roku života</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest1opt3"
                    name="quest1"
                    value="do 40. roku života"
                    checked={formDataDot.quest1 === "do 40. roku života"}
                    onChange={handleChange}
                />
                <label htmlFor="quest1opt3">do 40. roku života</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>2. Náklady spojené s úverom sú vyjadrené:</legend>
                <input 
                    type="radio"
                    id="quest2opt1"
                    name="quest2"
                    value="úrokovou sadzbou"
                    checked={formDataDot.quest2 === "úrokovou sadzbou"}
                    onChange={handleChange}
                />
                <label htmlFor="quest2opt1">úrokovou sadzbou</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest2opt2"
                    name="quest2"
                    value="mesačnou splátkou vynásobenou počtom mesiacov splácania"
                    checked={formDataDot.quest2 === "mesačnou splátkou vynásobenou počtom mesiacov splácania"}
                    onChange={handleChange}
                />
                <label htmlFor="quest2opt2">mesačnou splátkou vynásobenou počtom mesiacov splácania</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest2opt3"
                    name="quest2"
                    value="skratkou RPMN"
                    checked={formDataDot.quest2 === "skratkou RPMN"}
                    onChange={handleChange}
                />
                <label htmlFor="quest2opt3">skratkou RPMN</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>3. Konkrétnu poisťovňu si vyberám na základe:</legend>
                <input 
                    type="radio"
                    id="quest3opt1"
                    name="quest3"
                    value="odporúčania dobrého kamaráta"
                    checked={formDataDot.quest3 === "odporúčania dobrého kamaráta"}
                    onChange={handleChange}
                />
                <label htmlFor="quest3opt1">odporúčania dobrého kamaráta</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest3opt2"
                    name="quest3"
                    value="informácii o poistných plneniach poisťovne"
                    checked={formDataDot.quest3 === "informácii o poistných plneniach poisťovne"}
                    onChange={handleChange}
                />
                <label htmlFor="quest3opt2">informácii o poistných plneniach poisťovne</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest3opt3"
                    name="quest3"
                    value="ceny poistenia"
                    checked={formDataDot.quest3 === "ceny poistenia"}
                    onChange={handleChange}
                />
                <label htmlFor="quest3opt3">ceny poistenia</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>4. Inflácia znamená:</legend>
                <input 
                    type="radio"
                    id="quest4opt1"
                    name="quest4"
                    value="nárast cenovej hladiny tovarov a služieb"
                    checked={formDataDot.quest4 === "nárast cenovej hladiny tovarov a služieb"}
                    onChange={handleChange}
                />
                <label htmlFor="quest4opt1">nárast cenovej hladiny tovarov a služieb</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest4opt2"
                    name="quest4"
                    value="že banka zle investuje moje peniaze a výsledkom je strata"
                    checked={formDataDot.quest4 === "že banka zle investuje moje peniaze a výsledkom je strata"}
                    onChange={handleChange}
                />
                <label htmlFor="quest4opt2">že banka zle investuje moje peniaze a výsledkom je strata</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest4opt3"
                    name="quest4"
                    value="nevyužitie všetkých štátnych dotácií, na ktoré mám nárok"
                    checked={formDataDot.quest4 === "nevyužitie všetkých štátnych dotácií, na ktoré mám nárok"}
                    onChange={handleChange}
                />
                <label htmlFor="quest4opt3">nevyužitie všetkých štátnych dotácií, na ktoré mám nárok</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>5. Zhodnotenie úspor nad mieru inflácie je najlepšie:</legend>
                <input 
                    type="radio"
                    id="quest5opt1"
                    name="quest5"
                    value="čakaním na vhodný okamih na kapitálovom trhu"
                    checked={formDataDot.quest5 === "čakaním na vhodný okamih na kapitálovom trhu"}
                    onChange={handleChange}
                />
                <label htmlFor="quest5opt1">čakaním na vhodný okamih na kapitálovom trhu</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest5opt2"
                    name="quest5"
                    value="dlhodobým pravidelným mesačným investovaním malej sumy bez potreby čakať na vhodný okamih"
                    checked={formDataDot.quest5 === "dlhodobým pravidelným mesačným investovaním malej sumy bez potreby čakať na vhodný okamih"}
                    onChange={handleChange}
                />
                <label htmlFor="quest5opt2">dlhodobým pravidelným mesačným investovaním malej sumy bez potreby čakať na vhodný okamih</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest5opt3"
                    name="quest5"
                    value="vložením úspor do banky"
                    checked={formDataDot.quest5 === "vložením úspor do banky"}
                    onChange={handleChange}
                />
                <label htmlFor="quest5opt3">vložením úspor do banky</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>6. Finančná sloboda vyjadruje stav keď:</legend>
                <input 
                    type="radio"
                    id="quest6opt1"
                    name="quest6"
                    value="výnosy z mojich aktív prevyšujú moje výdavky"
                    checked={formDataDot.quest6 === "výnosy z mojich aktív prevyšujú moje výdavky"}
                    onChange={handleChange}
                />
                <label htmlFor="quest6opt1">výnosy z mojich aktív prevyšujú moje výdavky</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest6opt2"
                    name="quest6"
                    value="niekto (rodičia / partner / deti / ...) sa o mňa postará, takže nepotrebujem chodiť do práce"
                    checked={formDataDot.quest6 === "niekto (rodičia / partner / deti / ...) sa o mňa postará, takže nepotrebujem chodiť do práce"}
                    onChange={handleChange}
                />
                <label htmlFor="quest6opt2">niekto (rodičia / partner / deti / ...) sa o mňa postará, takže nepotrebujem chodiť do práce</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest6opt3"
                    name="quest6"
                    value="výplata zo zamestnania je vyššia ako moje mesačné výdavky"
                    checked={formDataDot.quest6 === "výplata zo zamestnania je vyššia ako moje mesačné výdavky"}
                    onChange={handleChange}
                />
                <label htmlFor="quest6opt3">výplata zo zamestnania je vyššia ako moje mesačné výdavky</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>7. Z hľadiska investovania je v čase ekonomickej krízy najefektívnejšie:</legend>
                <input 
                    type="radio"
                    id="quest7opt1"
                    name="quest7"
                    value="vybrať pre istotu všetky investované peniaze"
                    checked={formDataDot.quest7 === "vybrať pre istotu všetky investované peniaze"}
                    onChange={handleChange}
                />
                <label htmlFor="quest7opt1">vybrať pre istotu všetky investované peniaze</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest7opt2"
                    name="quest7"
                    value="pokračovať v investovaní a dokonca zvýšiť výšku investície"
                    checked={formDataDot.quest7 === "pokračovať v investovaní a dokonca zvýšiť výšku investície"}
                    onChange={handleChange}
                />
                <label htmlFor="quest7opt2">pokračovať v investovaní a dokonca zvýšiť výšku investície</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest7opt3"
                    name="quest7"
                    value="radšej ani nezačínať s takouto dlhodobou tvorbou finančnej rezervy"
                    checked={formDataDot.quest7 === "radšej ani nezačínať s takouto dlhodobou tvorbou finančnej rezervy"}
                    onChange={handleChange}
                />
                <label htmlFor="quest7opt3">radšej ani nezačínať s takouto dlhodobou tvorbou finančnej rezervy</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>8. Význam životného - rizikového poistenia je:</legend>
                <input 
                    type="radio"
                    id="quest8opt1"
                    name="quest8"
                    value="zabezpečiť náhradný zdroj príjmu v čase choroby / úrazu / v prípade úmrtia"
                    checked={formDataDot.quest8 === "zabezpečiť náhradný zdroj príjmu v čase choroby / úrazu / v prípade úmrtia"}
                    onChange={handleChange}
                />
                <label htmlFor="quest8opt1">zabezpečiť náhradný zdroj príjmu v čase choroby / úrazu / v prípade úmrtia</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest8opt2"
                    name="quest8"
                    value="iba v prípade, že splácam hypotéku"
                    checked={formDataDot.quest8 === "iba v prípade, že splácam hypotéku"}
                    onChange={handleChange}
                />
                <label htmlFor="quest8opt2">iba v prípade, že splácam hypotéku</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest8opt3"
                    name="quest8"
                    value="nemá význam, sú to zbytočne vyhodené peniaze"
                    checked={formDataDot.quest8 === "nemá význam, sú to zbytočne vyhodené peniaze"}
                    onChange={handleChange}
                />
                <label htmlFor="quest8opt3">nemá význam, sú to zbytočne vyhodené peniaze</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>9. Základom finančného plánu je:</legend>
                <input 
                    type="radio"
                    id="quest9opt1"
                    name="quest9"
                    value="mať zabezpečený príjem"
                    checked={formDataDot.quest9 === "mať zabezpečený príjem"}
                    onChange={handleChange}
                />
                <label htmlFor="quest9opt1">mať zabezpečený príjem</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest9opt2"
                    name="quest9"
                    value="nájsť na trhu najvýhodnejšiu úrokovú sadzbu pre hypotekárny úver"
                    checked={formDataDot.quest9 === "nájsť na trhu najvýhodnejšiu úrokovú sadzbu pre hypotekárny úver"}
                    onChange={handleChange}
                />
                <label htmlFor="quest9opt2">nájsť na trhu najvýhodnejšiu úrokovú sadzbu pre hypotekárny úver</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest9opt3"
                    name="quest9"
                    value="čo najrýchlejšie splatiť hypotekárny úver"
                    checked={formDataDot.quest9 === "čo najrýchlejšie splatiť hypotekárny úver"}
                    onChange={handleChange}
                />
                <label htmlFor="quest9opt3">čo najrýchlejšie splatiť hypotekárny úver</label>
                <br />
            </fieldset>

            <fieldset>
                <legend>10. O môj dôchodok sa postará:</legend>
                <input 
                    type="radio"
                    id="quest10opt1"
                    name="quest10"
                    value="štát"
                    checked={formDataDot.quest10 === "štát"}
                    onChange={handleChange}
                />
                <label htmlFor="quest10opt1">štát</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest10opt2"
                    name="quest10"
                    value="moje deti"
                    checked={formDataDot.quest10 === "moje deti"}
                    onChange={handleChange}
                />
                <label htmlFor="quest10opt2">moje deti</label>
                <br />
                
                <input 
                    type="radio"
                    id="quest10opt3"
                    name="quest10"
                    value="sám sa musím postarať"
                    checked={formDataDot.quest10 === "sám sa musím postarať"}
                    onChange={handleChange}
                />
                <label htmlFor="quest10opt3">sám sa musím postarať</label>
                <br />
            </fieldset>
            <div className="dotaznik--inputs">
            <input
                type="text"
                placeholder="Meno"
                onChange={handleChange}
                name="meno"
                value={formDataDot.meno}
            />
            <input
                type="text"
                placeholder="Priezvisko"
                onChange={handleChange}
                name="priezvisko"
                value={formDataDot.priezvisko}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formDataDot.email}
            />
            <input
                type="text"
                placeholder="+421 123 456 789"
                onChange={handleChange}
                name="telCislo"
                value={formDataDot.telCislo}
            />
            </div>

            <button className="dotaznik--submit">Odošli</button>

            <div className="counter">
            {/*var variable = JSON.parse(JSON.stringify(userList))*/}

            {userList.map((val) => {
            return (
                <div className="one-result">
                <div className="form--base">
                    <h2>{val.meno} už dokončil dotazník</h2>
                </div>
                </div>
            )
        })}
            </div>

        </form>
    )
}
