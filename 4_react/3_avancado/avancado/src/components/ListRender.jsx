import {useState} from 'react'

const ListRender = () => {
  
  const [list] = useState(['Fulano', 'Ciclano', 'Beltrano'])

  const [users, setUsers] = useState([
    {id : 1, name: 'Douglas', age: 30},
    {id : 2, name: 'Paula', age: 29},
    {id : 3, name: 'Vitória', age: 4}
  ])

  const deleteRandom = () => {

    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id ))
  }

  return (
    <div>
        {/* 4 - Renderização de listas (Não é recomendado) */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5 - Renderização de listas com key (Recomendado) */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* 6 - Previous State */}
        <button onClick={deleteRandom}>Delete Users</button>
    </div>
  )
}

export default ListRender