import './App.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import WelcomeContent from '../WelcomeContent/WelcomeContent';
import LinkPyromids from '../LinkPyromids/LinkPyromids';
import WideScope from '../WideScope/WideScope';
import Clients from '../Clients/Clients';

function App() {
  return (
    <div className="App">
    <Header />
    <WelcomeContent />
    <Promo />
    <LinkPyromids />
    <WideScope />
    <Clients />
    </div>
  );
}

export default App;
