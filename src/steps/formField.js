import React, { Component } from 'react';
import ItemForm from "./ItemForm";

class FormField extends Component {
  renderField = () => {
    const { type = "", field, setForm, value, options = [], onChange, label, formData = {} } = this.props;
    switch (type) {
      case "select":
        return <select name={field} onChange={onChange} value={value}>
          {
            options.map(i => {
              return <option value={i.value}>{i.label}</option>
            })
          }
        </select>
      case "radio":
        return <div className='heading-step' onChange={onChange}>
          <label >{label}</label><br />
          {
            options.map(i => {
              return <>
                <input className='radio-btn' type="radio" name={field} id={i.label} value={i.value} checked={value === i.value} />
                <label htmlFor={i.label}>{i.label}</label><br />
              </>
            })
          }
        </div>
      case "input":
        return <ItemForm
          label={label}
          name={field}
          value={value}
          onChange={onChange}
        />
      case "checkbox":
        return <div className='heading-step'>
          {
            options.map(i => {
              return <> <input className='check-box' type="checkbox" value={i.label}
                name={i.value}
                checked={value[i.label] == true}
                onChange={onChange} />
                <label>{i.label} </label><br />
              </>
            })
          }
        </div>
      case "text":
      default:
        return <div>{value}</div>

    }
  }
  render() {
    return (
      <div>
        {this.renderField()}
      </div>
    );
  }
}

export default FormField;