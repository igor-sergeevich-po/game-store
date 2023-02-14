import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header';
import { Provider } from 'react-redux';
import { store } from './redux';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="game-store/" element={<Header />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
