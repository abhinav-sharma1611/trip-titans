import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import Packages from './sections/Packages';
import TrendingPackages from'./sections/TrendingPackages';
import BannerSection from './sections/BannerSection';
import PopularCountries from './sections/PopularCountry';

function App() {
  return (
    <div className="App">
     <Header/>
     <HeroSection/>
     <Packages/>
     <TrendingPackages/>
     <BannerSection/>
     <PopularCountries/>
    </div>
  );
}

export default App;
