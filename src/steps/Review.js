import React from "react";

// crust: 'Original',
// sauce: "redSauce",
// whiteSauce: "dairy",
// cheese: 'Mozzarella',
// protein: 'Anchovies',
// veggies: {},
// service: 'Delivery',
// pizza: ''

function camelCaseToString(str) {
  return str.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) { return str.toUpperCase(); })
}

const Review = ({ setForm, formData, navigation }) => {
  const { whiteSauce, ...data } = formData

  const { go } = navigation;
  const getValueForKey = (key) => {
    if (typeof formData[key] === 'string') {
      return camelCaseToString(data[key])
    }

    if (typeof formData[key] === 'object') {
      const values = formData[key]
      const res = [];
      for (const property in values) {
        if (values[property]) res.push(camelCaseToString(property))
      }

      return res.join(', ');
    }


    return data[key]
  }

  return (
    <div className="form">
      <h1>Review your data</h1>
      <div className='center'>
        {Object.keys(data).map(k => {
          return <div key={k}>
            <p>
              <strong> {camelCaseToString(k)} :</strong> {getValueForKey(k)}
              <button onClick={() => go(camelCaseToString(k))}>Edit</button>
            </p>
            {data[k] === 'whiteSauce' && <p>
              <strong>{camelCaseToString('milk')} :</strong> {getValueForKey(k)}</p>}
          </div>
        })}


      </div>
      <div>
        <button onClick={() => go("Submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
