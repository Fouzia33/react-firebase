import { useState } from "react";
import ConnectModal from "./component/ConnectModal";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase.config';

function App() {
  const [ user , setUser ] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      <div className="app-header">
        <ConnectModal />
      </div>
      <div className="posts-container"></div>
    </div>
  );
}

export default App;
