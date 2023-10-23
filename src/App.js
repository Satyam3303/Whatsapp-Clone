import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./components/Messenger";

import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '843887200056-qifpg10ha952nlpaa76gvhkea1gnqo63.apps.googleusercontent.com'

  return (
   < GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
   <Messenger/>
   </AccountProvider>
   </ GoogleOAuthProvider>
  );
}

export default App;
