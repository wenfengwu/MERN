import React, { useReducer } from "react";

const divStyle = {
  padding: "12px 15px",
};

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};

function reducer(state, action){
  console.log(action.type)
  console.log(action.payload)
  let error = null;
  switch(action.type){
    case 'firstName': 
        action.payload.length < 3 ? error = "Field must to more than 2 characters" : error = null;
        break;
    case 'lastName': 
        action.payload.length < 3 ? error = "Field must to more than 2 characters" : error = null;
        break;
    case 'email': 
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        regEmail.test(action.payload) ? error = null : error = "Invalid Email"
  }
  return{
    ...state,
    [action.type]: {value: action.payload, error: error}
  };
}

export default () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: name,
      payload: value
    });
  }

  return(
    <div>
      {JSON.stringify(state)}

      <div style = {divStyle}>
        <label>
          <span>First Name: </span>{' '}
          <input type="text" name="firstName" value = {state.firstName.value} onChange = {handleChange} />
          <p  style = {{ color: "red"}}>{state.firstName.error}</p>
        </label>
      </div>

      <div style = {divStyle}>
        <label>
          <span>Last Name: </span>{' '}
          <input type="text" name="lastName" value = {state.lastName.value} onChange = {handleChange}/>
          <p  style = {{ color: "red"}}>{state.lastName.error}</p>
        </label>
      </div>

      <div style = {divStyle}>
        <label>
          <span>Email: </span>{' '}
          <input type="email" name="email" value = {state.email.value} onChange = {handleChange}/>
          <p  style = {{ color: "red"}}>{state.email.error}</p>
        </label>
      </div>

    </div>
  );

}
