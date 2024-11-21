import React from 'react'

function UserDetais({name, job, age}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade.: {age}</p>
      <p>Profissão.: {job}</p>
      {age >= 18 ? (<p>Pode tirar a carteira de habilitação.</p>) : (<p>Não pode tirar a carteira de habilitação.</p>)}
    </div>
  )
}

export default UserDetais
