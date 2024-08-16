import './App.css'
import AboutUs from './components/AboutUsComponent/AboutUsComponent'
import Features from './components/FeatureComponent/FeaturesComponent'
import MainPage from './components/MainPageComponent/MainPageComponent'
import Navigation from './components/NavigationComponent/NavigationComponent'
import Form from './components/ContactUsComponent/Form'

function App() {
  return(
    <div>
      <Navigation />
      <MainPage />
      <Features />
      <AboutUs />
      <Form />
    </div>
  )
}
export default App
