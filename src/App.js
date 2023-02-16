import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from './components/header';
import { HomePage } from './pages/home-page';
import { GamePage } from './pages/game-page';
import { OrderPage } from './pages/order-page/order-page';
import { NotFinedPage } from './pages/not-fined-page';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="game-store/" element={<Header />}>
              <Route index element={<HomePage />} />
              <Route path="/game-store/app/:title" element={<GamePage />} />\
              <Route path="/game-store/order" element={<OrderPage />} />
              <Route path="*" element={<Navigate to="/game-store/" />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
