import potato from "../../assets/photos/mainpage.jpg"

function MainPage() {
    return(
        <div id="mainbox">
            <img src={potato} alt="mainpage"/>
            <h1>Welcome To The Main Page</h1>
        </div>
    )
}
export default MainPage