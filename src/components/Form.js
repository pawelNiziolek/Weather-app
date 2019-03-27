import React from "react";
import "./Form.css";

const Form = props => (
  <div className="f-form">
    <div className="date">{props.time}</div>
    <form>
      <input
        className="f-input"
        type="text"
        onChange={props.change}
        value={props.value}
        placeholder="wpisz nazwę miasta"
      />
    </form>
    <div className="date">{props.date}</div>
  </div>
);

export default Form;
