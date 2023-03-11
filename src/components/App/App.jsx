import './App.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import WelcomeContent from '../WelcomeContent/WelcomeContent';
import LinkPyromids from '../LinkPyromids/LinkPyromids';
import WideScope from '../WideScope/WideScope';
import Clients from '../Clients/Clients';
import Payments from '../Payments/Payments';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <WelcomeContent />
    <Promo />
    <LinkPyromids />
    <WideScope />
    <Clients />
    <Payments />
    <Footer />
    </div>
  );
}

export default App;
