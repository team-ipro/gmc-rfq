import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
  const [formData, setFormData] = useState({
    insuredName: '',
    address: '',
    business: '',
    existingInsurerAndPolicyNumber: '',
    coverageRequired: '',
    sumInsuredPerEmployee: '',
    totalNumberOfEmployees: '',
    totalSumInsured: '',
    employee: [{
                name: '',
                designation: '',
                age: '',
                dob: '',
                salary: '',

    }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const addEmployeeMember = () => {
    setFormData({
      ...formData,
      employee: [...formData.employee, { name: '', designation: '', age: '', dob: '', salary: '' }],
    });
  };

  const handleEmployeeChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEmployee = formData.employee.map((employeeMember, i) =>
      i === index ? { ...employeeMember, [name]: value } : employeeMember
    );
    setFormData({ ...formData, employee: updatedEmployee });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/data', formData);
      props.onFormSubmit(response.data);
      alert('Data submitted successfully');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };


  return (
    <body>
    <form onSubmit={handleSubmit}>
      <h1>RFQ Policy</h1>
      <label>
        Insured Name:
        <br></br>
        <input type="text" name="insuredName" value={formData.insuredName} onChange={handleChange} />
      </label>
      <label>
        Address:
        <br></br>
        <input type="text" name="address" value={formData.axiosddress} onChange={handleChange} />
      </label>
      <label>
        Business:
        <br></br>
        <input type="text" name="business" value={formData.business} onChange={handleChange} />
      </label>
      <label>
        Existing Insurer and Policy Number:
        <br></br>
        <input type="text" name="existingInsurerAndPolicyNumber" value={formData.existingInsurerAndPolicyNumber} onChange={handleChange} />
      </label>
      <label>
        Coverage required:
        <br></br>
        <input type="text" name="coverageRequired" className="inputBox"value={formData.coverageRequired} onChange={handleChange} />
      </label>
      <label>
        Sum Insured per employee:
        <br></br>
        <input type="number" name="sumInsuredPerEmployee" value={formData.sumInsuredPerEmployee} onChange={handleChange} />
      </label>
      <label>
        Total number of employees:
        <br></br>
        <input type="number" name="totalNumberOfEmployees" value={formData.totalNumberOfEmployees} onChange={handleChange} />
      </label>
      <label>
        Total sum insured:
        <br></br>
        <input type="number" name="totalSumInsured" value={formData.totalSumInsured} onChange={handleChange} />
      </label>


      <h3>Employee Information</h3>

      {formData.employee.map((employeeMember, index) => (
        <div key={index}>
          <label>
            Name:
            <br></br>
            <input type="text" name="name" value={employeeMember.name} onChange={(e) => handleEmployeeChange(e, index)} />
          </label>
          <label>
            Designation:
            <br></br>
            <input type="text" name="designation" value={employeeMember.designation} onChange={(e) => handleEmployeeChange(e, index)} />
          </label>
          <label>
            Age:
            <br></br>
            <input type="number" name="age" value={employeeMember.age} onChange={(e) => handleEmployeeChange(e, index)} />
          </label>
          <label>
            DOB:
            <br></br>
            <input type="date" name="dob" value={employeeMember.dob} onChange={(e) => handleEmployeeChange(e, index)} />
          </label>
          <label>
            Salary:
            <br></br>
            <input type="number" name="salary" value={employeeMember.salary} onChange={(e) => handleEmployeeChange(e, index)} />
          </label>
        </div>
      ))}
      <button type="button" onClick={addEmployeeMember}>Add Another Employee Member</button>
      <br></br>
      <br></br>
      
      <button type="submit">Submit</button>
    </form>
    </body>
  );
};

export default Form;
