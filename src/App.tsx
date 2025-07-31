import Router from './components/Router';
import { useState } from 'react';
import { app } from 'firebaseApp';
import { getAuth } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';

function App() {
  const auth = getAuth(app);
  console.log(auth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth.currentUser);

  return (
    <>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
