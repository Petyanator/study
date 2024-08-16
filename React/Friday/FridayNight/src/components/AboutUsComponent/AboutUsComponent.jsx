import AboutUsPhoto from "../../assets/photos/aboutus.png"



function AboutUs() {
    return(
        <div id="aboutusbox">
            <img src={AboutUsPhoto} alt="" id="aboutusphoto" />
            <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque dicta voluptates ab asperiores commodi sapiente iste facilis numquam cumque.</p>
            </div>
        </div>
    )
}
export default AboutUs