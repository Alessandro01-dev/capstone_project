import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { authData } = useAuth();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    let newSocket;
    if (authData?._id) {

      const URL = import.meta.env.VITE_BASE_SERVER_URL;

      newSocket = io(URL, {
        transports: ['polling', 'websocket']
      });

      newSocket.on('connect', () => {
        console.log('SOCKET CONNESSO CON ID:', newSocket.id);
        newSocket.emit('join_room', String(authData._id));
      });

      setSocket(newSocket);
    }

    return () => {
      if (newSocket) newSocket.disconnect();
    };
  }, [authData?._id]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
