import './App.css'

// 2 - CSS de Componente
import MyComponent from './components/MyComponent'

// 6 - CSS Modules
import Title from './components/Title'

function App() {

  // 4 - CSS Inline Style Dinamico
  const n = 15

  // 5 - Classe Dinâmica
  const redTitle = true

  return (
    <div className="App">
      {/* 1 - CSS Global --> index.css */}
      <h1>CSS no React</h1>
      {/* 2 - CSS de Componente */}
      <MyComponent/>
      <p>Pegou o CSS do componente</p>
      {/* 3 - CSS Inline */}
      <p style={{color: 'blue', padding : "25px", borderTop: "1px solid blue"}}>Este elemento tem estilos inline</p>
      {/* 4 - CSS Inline Style Dinamico */}
      <h2 style={n > 10 ? {color : "purple"} : {color : "magenta"}}>
        CSS dinâmico
      </h2>
      <h2 style={n > 20 ? {color : "purple"} : {color : "magenta"}}>
        CSS dinâmico
      </h2>
      {/* 5 - Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe
      </h2>
      {/* 6 - CSS Modules */}
      <Title/>
    </div>
  )
}

export default App
