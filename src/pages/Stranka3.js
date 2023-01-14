import React from "react"

const Stranka3 = () => {
    
    return (
            <form className="formular">
            <input
                type="text"
                placeholder="Meno"
            />
            <input
                type="text"
                placeholder="Priezvisko"
            />
            <input
                type="email"
                placeholder="Email"
            />
            <textarea 
                placeholder="Koment box"
            
            />
            <input 
                type="checkbox" 
                id="IDboxu" 
            />
            <label htmlFor="IDboxu">Zakliknut?</label>
            <br />
            <br />
            
            <fieldset>
                <legend>Nazov moznosti</legend>
                <input 
                    type="radio"
                    id="1"
                    name="moznost"
                    value="moznost 1"
                />
                <label htmlFor="moznost 1">moznost 1</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="moznost"
                    value="moznost 2"
                />
                <label htmlFor="moznost 2">moznost 2</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="moznost"
                    value="moznost 3"
                />
                <label htmlFor="moznost 3">moznost 3</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor="favColor">Farba?</label>
            <br />
            <select 
                id="Farba"
                name="Farba"
            >
                <option value="">-- Choose --</option>
                <option value="red">Cervena</option>
                <option value="orange">Oranzova</option>
                <option value="yellow">Zltra</option>
                <option value="green">Zelena</option>
                <option value="blue">Modra</option>
                <option value="violet">Fialova</option>
            </select>
        </form>
    )
    
}

export default Stranka3