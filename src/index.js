import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import './index.css';
import App from './App';
import { AuthContextProvider } from './Store/auth-context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider>
<App />
</AuthContextProvider>);

