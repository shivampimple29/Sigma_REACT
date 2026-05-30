import { useState } from "react";

function Form(){

    const [formData,setFormData]=useState({
        username:"",
        surname:"",
    });

    function handleInputChange(event){
        setFormData( (currData)=>{
            return{ ...currData,[event.target.name]:event.target.value}
        })
    }

    function handleSubmit(event){
        console.log(formData);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="form">
            <label htmlFor="username">First Name </label>
            <input type="text" placeholder="username" id="username" value={formData.username} name="username" onChange={handleInputChange} />
            <br /><br /><br />
            <label htmlFor="surname">Last Name </label>
            <input type="text" placeholder="surname" id="surname" value={formData.surname} name="surname" onChange={handleInputChange} />
            <br /><br /><br />
            <button>Submit</button>
        </div>
        </form>
    );
}


export default Form;