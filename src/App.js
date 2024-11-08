import AuthorBanner from './components/AuthorBanner/AuthorBanner';
import MainBanner from './components/MainBanner/MainBanner';
import { NewBooks } from './components/NewBooks/NewBooks';
import DiscountBanner from './components/DiscountBanner/DiscountBanner';

function App() {
  return (
    <div className="App">
      <MainBanner />
      <NewBooks />
      <AuthorBanner />
      <DiscountBanner />
    </div>
  );
}

export default App;
