import ReactDOM from 'react-dom/client'
import App from './app/App.tsx';
import "normalize.css";
import 'swiper/css';
import "./shared/styles/reset.css";
import './shared/styles/index.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
