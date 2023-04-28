import React from 'react'
import '../popupForm.css'
import { useState } from 'react';
import { useEffect } from 'react';


const PopupForm = (props) => {

const initialvalues = {sprint: "",sprintweek :"", tickettype: "", parentticketno: "", ticketno: "", efforthours: "", status: "", comment: ""} ;
const [formValues, setFormValues] = useState(initialvalues);
const [formData, setFormData] = useState(initialvalues);
const [showForm, setShowForm] = useState(true);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const[data,setdata]=useState([]);
const [formSubmitted, setFormSubmitted] = useState(false);

const handleChange = (e) => {
const {name, value} = e.target;
setFormValues({...formValues, [name]: value }); }

// const handleButtonClick = (e) => {
//   e.preventDefault();
//   document.getElementById('form').submit();
// };

const handleSubmit = (e) => {
e.preventDefault();
setFormErrors(validate(formValues));
localStorage.setItem('formData', JSON.stringify(formValues));
// setFormData(formValues);
setFormSubmitted(true);
const newtodos=[...data,formValues];
setdata(newtodos);
console.log(data);
props.handleClose();
// document.getElementsByClassName('newww').style.visibility='hidden';
}

useEffect(() => {
console.log(formErrors);
if(Object.keys(formErrors).length === 0 && isSubmit){
console.log(formValues);
const storedData = localStorage.getItem('formData');
if (storedData) {
  setFormData(JSON.parse(storedData));
}
}
}, [formErrors]);

// useEffect(() => {
//   const storedData = localStorage.getItem('formData');
//   if (storedData) {
//     setFormData(JSON.parse(storedData));
//   }
// }, []);

const renderTableRows = () => {
  return data.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.sprint}</td>
        <td>{data.sprintweek}</td>
        <td>{data.tickettype}</td>
        <td>{data.parentticketno}</td>
        <td>{data.ticketno}</td>
        <td>{data.efforthours}</td>
      </tr>
    );
  });
};

const validate = (values) =>{
const errors = {};
const regex = /^[a-zA-Z0-9-]+$/

if(!values.sprint){
errors.sprint = "*Sprint is required"
}

else if (!regex.test(values.sprint)) {
errors.sprint = "*This is not a valid sprint format!"; }

if(!values.sprintweek){
errors.sprintweek = "*Sprint Week is required"
}

if(formValues.tickettype==="Defect" || formValues.tickettype==="Task")
{
  if(!values.parentticketno){
    errors.parentticketno = "*Parent Ticket No Type is required"
    }
    else if (!regex.test(values.parentticketno)) {
      errors.parentticketno = "*This is not a valid Parent Ticket No format!";
      }
}
   if(!values.tickettype){
  errors.tickettype = "*Ticket Type is required"
 }

  if(!values.ticketno){
errors.ticketno = "*Ticket No is required"
 }

 if(!values.efforthours){
errors.efforthours = "*Effort hours is required"
}

 if(!values.status){

   errors.status = "*Status is required"
 }

  if(!values.comments){
  errors.comments = "*Comment is required"
  }
  return errors;
  }

return (
<>
<div className='newww'>
      <h2>Form Data</h2>
      <table>
        <thead>
          <tr>
            <th>Sprint</th>
            <th>Sprint Week</th>
            <th>Ticket Type</th>
            <th>Parent TicketNo.</th>
            <th>Ticket No.</th>
            <th>Effort Hours</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
<div >
<form id="form" onSubmit={handleSubmit} >
<div className="Formbase">

<div className="field">

<label>Sprint</label><br/>
<input type="text" name = "sprint" placeholder="Sprint" value={formValues.sprint} onChange={handleChange} />
  </div>
 <p className="error-check" style={{color:'red'}}>{formErrors.sprint}</p>


<div className="field">
<label>Sprint Week</label><br/>
<select name="sprintweek" value={formValues.sprintweek} onChange={handleChange} defaultValue={null}>

<option>Select</option>
<option>Week 1</option>
<option>Week 2</option>
<option>Week 3</option>
<option>Week 4</option>

</select>

 </div>
<p className="error-check" style={{color:'red'}}>{formErrors.sprintweek}</p>


 <div className="field">
 <label>Ticket Type</label><br/>

 <select name="tickettype" value={formValues.tickettype} onChange = {handleChange}>
<option>Select</option>
<option>Story</option>
<option>Task</option>
<option>Defect</option>
<option>Bug</option>
</select>

</div>
 <p className="error-check" style={{color:'red'}} >{formErrors.tickettype}</p>


 {
 formValues.tickettype === "Task" || formValues.tickettype === "Defect"

 &&

 <div className="Field">

<label> Parent Ticket No</label><br/>

<input type="text" name="parentticketno" value = {formValues.parentticketno} onChange={handleChange} />
<p className="error-check" style={{color:'red'}}>{formErrors.parentticketno}</p>

</div>
}

<div className="field">

<label>Ticket No</label><br/>
<input type="text" name = "ticketno" value={formValues.ticketno} onChange={handleChange} />
</div>

<p className="error-check" style={{color:'red'}}>{formErrors.ticketno}</p>




<div className="field">
<label>Effort Hours</label><br/>
<input type='number' min='0' max = '8' name= "efforthours" values = {formValues.efforthours} onChange={handleChange} />
</div>
<p className="error-check" style={{color:'red'}}>{formErrors.efforthours}</p>


<div className="field">
<label>Status</label><br/>
<select name="status" value = {formValues.status} onChange={handleChange}>
<option>Select</option>
<option>In Progress</option>
<option>Completed</option>
<option>Blocked</option>
</select>
</div>
<p className="error-check" style={{color:'red'}}>{formErrors.status}</p>
<div className="field">

<label>Comments</label><br/>
<input type="text" name = "comments" value={formValues.comments} onChange={handleChange}/>
</div>
<p className="error-check" style={{color:'red'}}>{formErrors.comments}</p>
<br></br>
<button type="submit" >Submit</button>
</div>
</form>
</div>
</>
)
}

export default PopupForm;