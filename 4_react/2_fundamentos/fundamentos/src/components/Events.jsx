// 6 - Eventos

const Events = () => {

  const handleClick = (e) => {
    console.log(e);
    console.log('Executou');
  }

  // 8 - Função de renderização
  const renderSomething = (x) => {
    if (x) {
        return <h1>Renderizando isso!</h1>
    } else {
        return <h1>Renderizando outra coisa!</h1>
    }
  }
  

  return (
    <div>
        <div>
            <button onClick={() => console.log('Testando um evento')}>Clique aqui</button>
        </div>
        {/* 7 - Evento com função */}
        <div>
            <button onClick={handleClick}>Clique aqui com função</button>
        </div>
        {/* 8 - Função de renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events