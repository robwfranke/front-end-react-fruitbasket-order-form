// voor eerste keer:
// npm install
// npm install react-hook-form --save    --save zorgt ervoor dat het toegevoegd wordt aan package.json
// runnen met npm start


import React from 'react';

import {useForm} from "react-hook-form"
import './App.css';

function App() {
    //na useform( staan allerlei waardes die jekunt meegeven, zoals defaultValues
    const {register, handleSubmit, errors} = useForm({

        defaultValues: {
            surName: "Jan",
            familyName: "Klaassen"
        },
        // mode: "onChange"
    });
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);


    // function onSubmit(event) {    deze hoeft niet meer, react-hook-form doet dat
    //     event.preventDefault();
    //     console.log("jij wilt versturen")
    // }

    function onSubmit(data) {

        console.log("Aantal Aardbeien  " + countAardbeien)
        console.log("Aantal Bananen  " + countBananen)
        console.log("Aantal Appels  " + countAppels)
        console.log("Aantal Kiwi's  " + countKiwi)
        console.log("surName  " + data.surName)
        console.log("familyName  " + data.familyName)
        console.log("leeftijd  " + data.age)
        console.log("Postcode  " + data.postalCode)
        console.log("frequentie  "+data.frequentie)

        console.log("comments  " + data.comments)



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


                <fieldset className="fieldset">

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


                <form onSubmit={handleSubmit(onSubmit)}>
                    <label id="naw">Voornaam
                        <input ref={register({required: true, maxLength: 10})} type="text" name="surName"
                               placeholder="bijv Jan"/>
                        {errors.surName && <p>fout! Voornaam</p>}
                    </label>

                    <label id="naw">Achternaam
                        <input ref={register({required: true})} type="text" name="familyName"
                               placeholder="bijv Karelsen"/>
                        {errors.familyName && <p>fout! Achternaam</p>}
                    </label>

                    <label id="naw">Leeftijd
                        <input ref={register({required: true, min: 18})} type="number" name="age"/>
                        {errors.age && <p>fout! Leeftijd</p>}
                    </label>

                    {/*kijk bij omschrijving regex*/}

                    <label id="naw">Postcode
                        <input ref={register({required: true, pattern: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i})} type="text"
                               name="postalCode" placeholder="bijv 7500AA"/>
                        {errors.postalCode && <p>fout! 1234 AA of 1234 aa of 1234AA</p>}
                    </label>


                    <p>Bezorgfrequentie</p>

                    <div className="radio">

                        <label htmlFor="field-eachWeek" id="radioButton">
                            <input ref={register({required: true})} type="radio" name="frequentie" id="field-eachWeek"
                                   value="Iedere week"/>

                            Iedere week
                        </label>

                        <lbl htmlFor="field-alternateWeek" id="radioButton">
                            <input ref={register} type="radio" name="frequentie" id="field-alternateWeek"
                                   value="Om de week"/>
                            Om de week
                        </lbl>

                        <label htmlFor="field-eachMonth" id="radioButton">
                            <input ref={register} type="radio" name="frequentie" id="field-eachMonth"
                                   value="Iedere maand"/>
                            Iedere maand
                        </label>


                        <label htmlFor="field-other" id="radioButton">
                            <input ref={register} type="radio" name="frequentie" id="field-other" value="Anders"/>
                            Anders
                            {errors.frequentie && <p>Radiobutton kiezen!!</p>}
                        </label>


                        <label htmlFor="field-other" id="radioButton1" >
                            <input ref={register} type="radio" name="frequentie" id="field-other" value="Anders"/>
                            Anders
                            {errors.frequentie && <p>Radiobutton kiezen!!</p>}
                        </label>




                    </div>


                    <label htmlFor="field-comments">
                        Opmerking
                        <br/>
                        <textarea ref={register({required: true})} name="comments" id="textArea" rows="4" cols="40"
                        ></textarea>
                    </label>
                    <p></p>

                    <label htmlFor="terms-and-conditions">
                        <input
                            ref={register}
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions"
                            checked={checkedTerms}
                            onChange={() => toggleCheckedTerms(!checkedTerms)}
                        />

                        Ik ga akkoord met de algemene voorwaarden
                    </label>
                    <p></p>

                    <button type="submit" id="submit" disabled={!checkedTerms}>
                        verzenden
                    </button>


                </form>


            </div>


        </>
    );
}

export default App;
