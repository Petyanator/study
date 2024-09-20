import './App.css'
import Debates from './components/Debates'
import TopicName from './components/TopicName'
import MainInfo from './components/MainInfo'


function App() {
  return (
    <>
    <div id='container'>
      <div className='box'><Debates></Debates></div>

    <div><MainInfo></MainInfo></div>
      <div className='box'><TopicName></TopicName></div>
    </div>
    </>
  )
}

export default App
