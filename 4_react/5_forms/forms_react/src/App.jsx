import './App.css'

// 1 - Criação de Form
import MyForm from './components/MyForm'

function App() {

  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm userName="Douglas" userEmail="douglas@ig.com.br"/>
    </div>
  )
}

export default App
