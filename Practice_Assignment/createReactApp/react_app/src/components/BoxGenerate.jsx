import React, {useState} from 'react'

const BoxGenerate = (props) => {

  const [box, setBox] = useState({
    color:"",
    width:"",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target.name)
    console.log(e.target.value)
    setBox({
      ...box,
      [name]: value
    })
  }

  const submitHandle = (e) =>{
    e.preventDefault();
    props.addBox(box);
    setBox({color: "", width: ""});
  }

  return (
    <div>
        <form onSubmit = {submitHandle}>
            <div>
                <label>Enter a Color:  </label>
                <input type="text" name = "color" onChange = {handleChange} value = {box.color} />
            </div>
            <div>
                <label>Enter a box width:  </label>
                <input type="number" name = "width" onChange = {handleChange} value = {box.width} />
            </div>
            <button>Generate Box</button>
        </form>
    </div>
  )
}

export default BoxGenerate;



