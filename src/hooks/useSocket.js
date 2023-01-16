import { useMemo, useState, useEffect } from 'react'
import io from 'socket.io-client'

//'http://localhost:3000'
export const useSocket = ( serverPath ) => {
  
  //useMemo para que no se ejecute tantas veces el io.connetc
  const socket = useMemo( () => io.connect( serverPath, {
    transports: ['websocket']
  }), [ serverPath ])
  
  const [ online, setOnline ] = useState(false)

  useEffect(() => {
    // console.log( socket )
    setOnline( socket.connected )
  }, [ socket ])

  useEffect(() => {
    socket.on( 'connect', () => {
      setOnline(true)
    })

    // return socket.disconnect()
  }, [ socket ])

  useEffect(() => {
    socket.on( 'disconnect', () => {
      setOnline(false)
    })
  }, [ socket ])


  return {
    socket, 
    online
  }
}
