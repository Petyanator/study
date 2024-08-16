import { useState } from "react";

function Form() {
    // Initialize formData as an object with keys for name, email, and phnum
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phnum: ''
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log the current state of formData
    };

    // Handle input changes and update formData accordingly
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <>
        <div id="contactcase">
            <h1>Contact Us</h1>
            <div id="contactbox">
                <form onSubmit={handleSubmit}>
                    <h2>Fill The Form</h2>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input 
                        type="text" 
                        name="name"
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Enter Name"
                    />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Enter Email"
                    />
                    <br />
                    <label htmlFor="phnum">Phonenumber:</label>
                    <br />
                    <input 
                        type="tel" 
                        name="phnum" 
                        id="phnum"
                        value={formData.phnum} 
                        onChange={handleChange} 
                        placeholder="Enter Phone Number"
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <div id="bombaclat">
                    <h2>Personal Information</h2>
                    <h4>Email:potato@potato.com</h4>
                    <h4>Name: Great Khan</h4>
                    <h4>Phonenumber:+191919191</h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default Form;
