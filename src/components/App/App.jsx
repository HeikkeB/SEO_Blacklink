import './App.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import WelcomeContent from '../WelcomeContent/WelcomeContent';
import LinkPyromids from '../LinkPyromids/LinkPyromids';

function App() {
  return (
    <div className="App">
    <Header />
    <WelcomeContent />
    <Promo />
    <LinkPyromids />
    </div>
  );
}

export default App;
