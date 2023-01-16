import { useContext, useState } from "react"
import { SocketContext } from "../context/SocketContext"

const BandAdd = () => {
  const [ value, setValue ] = useState('')
  const { socket } = useContext( SocketContext )

  const onSubmit = (ev) => {
    ev.preventDefault()
    if ( !!value.trim().length ) {
      createBand(value)
      setValue('')
    }
  }

  const createBand = ( name ) => {
    socket.emit('create-band', { name })
  }

  return (
    <>
      <h3>Agregar Bandas</h3>
      
      <form onSubmit={ onSubmit }>
        <input 
          className='form-control' 
          placeholder='Nuevo nombre de banda'
          value={ value }
          onChange={ (ev) => setValue( ev.target.value )}
        />
      </form>
    </>
  )
}

export default BandAdd