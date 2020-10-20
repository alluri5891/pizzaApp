import React from "react";
import FormField from './formField';

const Veggies = ({ setForm, formData, navigation, stepData }) => {
    const { veggies, } = formData;

    const { next, previous } = navigation;

    return (
        <div className="form">
            <h1>Step 6: Add Veggies</h1>
            <FormField
                {...stepData}
                onChange={setForm}
                value={veggies}
                formData={formData}
            />
            {/* <div className='heading-step'>

                <input className='check-box' type="checkbox" value="Artichokes" name="veggies.Artichokes" checked={veggies.Artichokes === true} onChange={setForm} />
                <label>Artichokes </label><br />

                <input className='check-box' type="checkbox" value="Arugula" name="veggies.Arugula" checked={veggies.Arugula === true} onChange={setForm} />
                <label>Arugula </label><br />

                <input className='check-box' type="checkbox" value="Basil" name="veggies.Basil" checked={veggies.Basil === true} onChange={setForm} />
                <label>Basil </label><br />

                <input className='check-box' type="checkbox" value="Jalapenos" name="veggies.Jalapenos" checked={veggies.Jalapenos === true} onChange={setForm} />
                <label>Jalapenos </label><br />

                <input className='check-box' type="checkbox" value="BlackOlives" name="veggies.BlackOlives" checked={veggies.BlackOlives === true} onChange={setForm} />
                <label>Black Olives </label><br />

                <input className='check-box' type="checkbox" value="Mushrooms" name="veggies.Mushrooms" checked={veggies.Mushrooms === true} onChange={setForm} />
                <label>Mushrooms </label><br />

                <input className='check-box' type="checkbox" value="Onions" name="veggies.Onions" checked={veggies.Onions === true} onChange={setForm} />
                <label>Onions </label><br />

                <input className='check-box' type="checkbox" value="Pineapple" name="veggies.Pineapple" checked={veggies.Pineapple === true} onChange={setForm} />
                <label>Pineapple </label><br />

                <input className='check-box' type="checkbox" value="Spinach" name="veggies.Spinach" checked={veggies.Spinach === true} onChange={setForm} />
                <label>Spinach </label><br />

                <input className='check-box' type="checkbox" value="Romaine" name="veggies.Romaine" checked={veggies.Romaine === true} onChange={setForm} />
                <label>Romaine </label>
            </div> */}

            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>

        </div>
    );
};

export default Veggies;
