import './App.css'

// 2 - Importando o componente
import FirstComponent from './components/FirstComponent'

// 4 - Template expressions
import TemplateExpressions from './components/TemplateExpressions'

// 5 - Hierarquia
import Hierarchy from './components/Hierarchy'

// 6 - Eventos
import Events from './components/Events';

function App() {
  // 3 - Comentários
  return (
    <div className="App">
      {/* 4 - Comentários JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Hierarchy/>
      <Events/>
    </div>
  );
}

export default App
