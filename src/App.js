// voor eerste keer:
// npm install
// npm install react-hook-form --save    --save zorgt ervoor dat het toegevoegd wordt aan package.json
// runnen met npm start



import React from 'react';

import {useForm}  from "react-hook-form"
import './App.css';

function App() {

    const{register, handleSubmit}= useForm();
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);



    function onSubmit(event) {
        event.preventDefault();
        console.log("jij wilt versturen")
    }


    const [countAardbeien, setCountAardbeien] = React.useState(0);
    const [countBananen, setCountBananen] = React.useState(0);
    const [countAppels, setCountAppels] = React.useState(0);
    const [countKiwi, setCountKiwis] = React.useState(0);


    function reset() {
        // countAardbeien(0);
        setCountAardbeien(0)
        setCountBananen(0);
        setCountAppels(0);
        setCountKiwis(0)
    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>


            <div className="plusminus">


                <fieldset className="fieldset" >

                    <label>Aardbeien </label>

                    <button
                        type="button"
                        onClick={() => setCountAardbeien(countAardbeien === 0 ? countAardbeien : countAardbeien - 1)}
                    >
                        -
                    </button>

                    {countAardbeien}

                    <button
                        type="button"
                        onClick={() => setCountAardbeien(countAardbeien + 1)}
                    >
                        +
                    </button>
                </fieldset>


                <fieldset className="fieldset">

                    <label>Bananen </label>

                    <button
                        type="button"
                        // onClick={() => setCountBananen(countBananen - 1)}
                        onClick={() => setCountBananen(countBananen === 0 ? countBananen : countBananen - 1)}
                    >
                        -
                    </button>

                    {countBananen}

                    <button
                        type="button"
                        onClick={() => setCountBananen(countBananen + 1)}
                    >
                        +
                    </button>

                </fieldset>


                <fieldset className="fieldset">

                    <label>Appels </label>

                    <button
                        type="button"
                        onClick={() => setCountAppels(countAppels === 0 ? countAppels : countAppels - 1)}
                    >
                        -
                    </button>

                    {countAppels}

                    <button
                        type="button"
                        onClick={() => setCountAppels(countAppels + 1)}
                    >
                        +
                    </button>
                </fieldset>


                <fieldset className="fieldset">

                    <label>Kiwi's </label>

                    <button
                        type="button"
                        onClick={() => setCountKiwis(countKiwi === 0 ? countKiwi : countKiwi - 1)}
                    >
                        -
                    </button>

                    {countKiwi}

                    <button
                        type="button"
                        onClick={() => setCountKiwis(countKiwi + 1)}
                    >
                        +
                    </button>
                </fieldset>


                {/*<fieldset className="fieldset">*/}

                <div className="reset">
                    <button
                        className="resetButton"
                        type="button"
                        onClick={reset}
                    >
                        Reset
                    </button>

                </div>

                {/*</fieldset>*/}

            </div>


            {/*  start opdracht 2*/}

            <div className="opdracht2">


                <form onSubmit={onSubmit}>
                    <label id="naw">Voornaam
                        <input type="text" name="surName" placeholder="bijv Jan"/>
                    </label>

                    <label id="naw">Achternaam
                        <input type="text" name="familyName" placeholder="bijv Karelsen"/>
                    </label>

                    <label id="naw">Leeftijd
                        <input type="text" name="Age" />
                    </label>

                    <label id="naw">Postcode
                        <input type="text" name="PostalCode" placeholder="bijv 7500AA"/>
                    </label>


                    <p>Bezorgfrequentie</p>

                    <div className="radio">

                        <label htmlFor="field-eachWeek" id="radioButton">
                            <input type="radio" name="frequentie" id="field-eachWeek"/>
                            Iedere week
                        </label>

                        <lbl htmlFor="field-alternateWeek" id="radioButton">
                            <input type="radio" name="frequentie" id="field-alternateWeek"/>
                            Om de week
                        </lbl>

                        <label htmlFor="field-eachMonth" id="radioButton">
                            <input type="radio" name="frequentie" id="field-eachMonth"/>
                            Iedere maand
                        </label>


                        <label htmlFor="field-other" id="radioButton">
                            <input type="radio" name="frequentie" id="field-other"/>
                            Anders
                        </label>

                    </div>


                    <label htmlFor="field-comments" >
                        Opmerking
                        <br/>
                        <textarea name="recipe-comments" id="textArea" rows="4" cols="40"
                                  placeholder="Wat vond je van het recept?"></textarea>
                    </label>
                    <p></p>

                    <label htmlFor="terms-and-conditions">
                        <input
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions"
                            checked={checkedTerms}
                            onChange={() => toggleCheckedTerms(!checkedTerms)}
                        />

                        Ik ga akkoord met de algemene voorwaarden
                    </label>
                    <p></p>

                    <button type="submit" id="submit">
                        verzenden
                    </button>


                </form>






            </div>




        </>
    );
}

export default App;
