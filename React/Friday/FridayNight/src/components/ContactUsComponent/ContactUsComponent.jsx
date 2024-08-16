function Contact() {
    return(
        <div id="contactcase">
            <h1>Contact Us</h1>
            <div id="contactbox">
                <form action="" id="myForm">
                    <h2>Fill The Form</h2>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input type="text" id="email" />
                    <br />
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" id="name"/>
                    <br />
                    <label htmlFor="phonenumber">Telephone:</label>
                    <br />
                    <input type="tel" id="phonenumber"/>
                    <br />
                    <button type="submit" className="btn">Submit</button>
                </form>
                <div>
                    <h2>Personal Information</h2>
                    <h4>Email: smashedpotatoes@potato.com</h4>
                    <h4>Name: Great Khan</h4>
                    <h4>Telephone: +119191919191</h4>
                </div>
            </div>
        </div>
    )
}
export default Contact