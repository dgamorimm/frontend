// 4 - Template expressions

const TemplateExpressions = () => {
  const name = "Douglas"

  const data = {
    age : 30,
    job : "Programador"
  }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>O {name} tem {data.age} anos e trabalha como {data.job}</p>
    </div>
  )
}

export default TemplateExpressions