import "./MyForm.css"

import { useState } from "react"

const MyForm = ({userName, userEmail}) => {

  // 3 - Gerenciamento de Dados
  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)
  const [bio, setBio] = useState("")
  const [role, setRole] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  // 5 - Envio de formulários	
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, bio, role);

    // validação
    // envio

    // 7 - Limpar o Form
    setName("")
    setEmail("")
    setBio("")
    setRole("")
  }

  return (
    <div>
        {/* 1 - Criação de Form */}
        {/* 5 - Envio de formulários */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={handleName}
                    // 6 - Controlled Inputs
                    value={name || ""}
                />
            </div>
            {/* 2 - Label Envolvendo o input */}
            <label>
                <span>E-mail:</span>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Digite seu e-mail"
                    // 4 - Simplificando o onChange
                    onChange={(e) => setEmail(e.target.value)}
                    // 6 - Controlled Inputs
                    value={email || ""}
                />
            </label>
            {/* 8 - Textarea */}
            <label>
                <span>Bio:</span>
                <textarea 
                    name="bio" 
                    placeholder="Descrição do usuário"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}>
                </textarea>
            </label>
            {/* 9 - Select */}
            <label>
                <span>Função no sistema</span>
                <select 
                    name="role" 
                    onChange={(e) => setRole(e.target.value)}
                    value={role}>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm