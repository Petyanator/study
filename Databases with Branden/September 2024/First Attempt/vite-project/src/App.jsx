import './App.css'

function App() {

  return (
    <>
      <form action="">
        <h2>Login</h2>
        <div>
        <input type="text" id='username' placeholder='Username'/>
        </div>
        <br />
        <div>
        <input type="text" id='password' placeholder='Password'/>
        </div>
        <br />
        <button type="submit">Submit</button>
        <button type='reset'>⟳</button>
      </form>
    </>
  )
}

export default App
