// import logo from './logo.svg';
import './App.css';
import Footer from "./Components/Footer"
import Header from "./Components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
        <h1>Welcome to ProShop</h1>
        <h2>Added to check git</h2>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
