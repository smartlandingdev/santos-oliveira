import { Header, Hero, Products, Testimonial } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Products />
        <Testimonial />
      </main>
    </div>
  );
}

export default App;
