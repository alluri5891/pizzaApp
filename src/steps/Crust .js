import React from "react";
import FormField from './formField';

const Crust = ({ setForm, formData, navigation, stepData = {} }) => {
    const { crust } = formData;

    const { next } = navigation;

    return (
        <div className="form">
            <h1>Step 1: Select Your Crust</h1>
            {/* <select name="crust" onChange={setForm} value={crust}>
                <option value="Original">Original</option>
                <option value="Gluten-free">Gluten-free</option>
            </select> */}
            <FormField
                {...stepData}
                onChange={setForm}
                value={crust}
            />
            <div>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Crust;
