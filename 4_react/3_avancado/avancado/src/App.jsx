import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg';

// 3 - useState - Hooks
import Data from './components/Data';

// 4,5 e 6 - Reenderização de lista
import ListRender from './components/ListRender';

// 7 e 8 - Renderização Condicional
import ConditionalRender from './components/ConditionalRender';

// 9 - Props
import ShowUserName from './components/ShowUserName';

// 10 - Desestruturação de props
import CarDetails from './components/CarDetails';

// 12 - Renderização de listas com componentes
const cars = [
  {id : 1, brand: 'Ferrari', km: 0, color: 'Amarelo'},
  {id : 2, brand: 'KIA', km: 200000, color: 'Branco'},
  {id : 3, brand: 'Renault', km: 32000, color: 'Azul'}
]

// 13 - Fragment
import Fragment from './components/Fragment';

// 14 - Children
import Container from './components/Container';

// 15 - Função em Prop
import ExecuteFunctions from './components/ExecuteFunctions';

// 16 - State Lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {

  // 15 - Função em Prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 16 - State Lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    
    <div className="App" style={{paddingBottom : "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Outra Imagem" />
      {/* 3 - useState - Hooks */}
      <Data />
      {/* 4, 5 e 6 - Reenderização de lista */}
      <ListRender />
      {/* 7 e 8 - Renderização Condicional */}
      <ConditionalRender />
      {/* 9 - Props */}
      <ShowUserName name="Douglas"/>
      {/* 10 - Desestruturação de props */}
      <CarDetails brand="Ferrari" km={999} color="Vermelho" />
      {/* 11 -  Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={0} color="Amarelo" />
      <CarDetails km={100000} color="Azul" brand="Jaguar"  />
      {/* 12 - Renderização de listas com componentes */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
      ))}
      {/* 13 - Fragment */}
      <Fragment />
      {/* 14 - Children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>
      {/* 15 - Função em Prop */}
      <ExecuteFunctions myFunction={showMessage} />
      {/* 16 - State Lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  )
}

export default App
