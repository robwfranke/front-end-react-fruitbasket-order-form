import React from 'react';
import './App.css';

function App() {


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


                <fieldset className="fieldset">

                    <div className="reset">
                        <button
                            type="button"
                            onClick={reset}
                        >
                            Reset
                        </button>

                    </div>

                </fieldset>

            </div>


        </>
    );
}

export default App;
