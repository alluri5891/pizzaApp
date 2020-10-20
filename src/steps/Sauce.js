import React from "react";
import FormField from './formField';

const Sauce = ({ setForm, formData, navigation, stepData = {} }) => {
    const { sauce, whiteSauce } = formData;

    const { next, previous } = navigation;
    const { optionalFields = [] } = stepData

    return (
        <div className="form">
            <h1>Step 2: Add Sauce</h1>
            <FormField
                {...stepData}
                onChange={setForm}
                value={sauce}
            />
            {
                optionalFields.map(item => {
                    return sauce === item.if &&
                        <FormField
                            // {...stepData}
                            {...item}
                            onChange={setForm}
                            value={whiteSauce}
                        />
                        // <div className='heading-step' name='milk' onChange={setForm}>
                        //     <label >Milk</label><br />
                        //     <input className='radio-btn' type="radio" name='whiteSauce' id="Dairy" value="dairy" checked={whiteSauce === "dairy"} />
                        //     <label htmlFor="Dairy">Dairy</label><br />
                        //     <input className='radio-btn' type="radio" name='whiteSauce' id="Dairy-free" value="dairy-free" checked={whiteSauce === "dairy-free"} />
                        //     <label htmlFor="Dairy-free">Dairy-free</label><br />
                        // </div>
                        || null

                })
            }

            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Sauce;
