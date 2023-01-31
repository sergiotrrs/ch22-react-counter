import React from 'react'

const users = [
  {
    idUser: 12578,
    name: "Pax",
    cohorte: 22
  } ,
  {
    idUser: 158,
    name: "Juan Real",
    cohorte: 22
  }

]


export const Home = () => {

  const listItems = users.map( (user, index)=> <li key={index}>{user.name} de la {user.cohorte}</li>);

  return (
    <div>
        <h1>Estás en Home</h1>
        <ul>
          {listItems}
        </ul>
    </div>
  )
}
