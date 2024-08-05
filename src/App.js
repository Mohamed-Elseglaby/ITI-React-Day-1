import logo from './logo.svg';
import './App.css';
import AppEmp from './Components/AppEmp';
import header from './Components/Header';
import Nav from './Components/Nav';
import footer from './Components/footer';
function App() {
  return (
    <>
    {Nav}
    {header}
    <AppEmp />
    {footer}
    </>
  );
}

export default App;
