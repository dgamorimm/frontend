import React from 'react'

const ConditionalRender = () => {
  
  const x = true;

  const name = "Douglas";

  return (
    <div>
        {/* 7 - Render Condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>}
        {/* 8 - Render Condicional com else */}
        <h3>Render ternário</h3>
        {name === "Douglas" ? <p>Sim, o nome é Douglas</p> : <p>Nome diferente de Douglas</p>}
    </div>
  )
}

export default ConditionalRender