import './App.css'

function App() {

  return (
    <>
      <form action="">
        <h2>Login</h2>
        <input type="text" id='username' placeholder='Username'/>
        <br />
        <input type="text" id='password' placeholder='Password'/>
        <br />
        <input type="text" id='password' placeholder='Email'/>
        <br />
        <div id='butpack'>
        <button type="submit">Submit</button>
        <button type='reset' id='resbtn'>⟳</button>
        </div>
      </form>
    </>
  )
}

export default App
