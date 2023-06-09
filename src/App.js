
import './App.css';

import Home from './components/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beautiful from './components/female/Beautiful'
import HoBigBoldBeautifulme from './components/female/BigBoldBeautiful'
import FeamleBestBrand from './components/female/FeamleBestBrand'
import FemaleBestDress from './components/female/FemaleBestDress'
import FemaleBestPersonality from './components/female/FemaleBestPersonality'
import FemaleClassic from './components/female/FemaleClassic'
import FemaleEntrepeneur from './components/female/FemaleEntrepeneur'
import FemaleIcon from './components/female/FemaleIcon'
import FemaleMostExpensive from './components/female/FemaleMostExpensive'
import FemaleMostReserved from './components/female/FemaleMostReserved'
import FemalePoliticalIcon from './components/female/FemalePoliticalIcon'
import FemalePopular from './components/female/FemalePopular'
import FemalePunctual from './components/female/FemalePunctual'

import BestBrandOfTheYear from './components/male/BestBrandOfTheYear'
import BestDress from './components/male/BestDress'
import BestPersonLity from './components/male/BestPersonLity'
import Entrepreneur from './components/male/Entrepreneur'
import HandsomeGuy from './components/male/HandsomeGuy'
import MostClassic from './components/male/MostClassic'
import MostExpensive from './components/male/MostExpensive'
import MostPopular from './components/male/MostPopular'
import MostPunctual from './components/male/MostPunctual'
import MostReserved from './components/male/MostReserved'
import PoliticalIcon from './components/male/PoliticalIcon'





function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/f-beautiful" element={<Beautiful/>} />
        <Route path="/f-bigbold" element={<HoBigBoldBeautifulme/>} />
        <Route path="/f-bestbrand" element={<FeamleBestBrand/>} />
        <Route path="/f-bestdress" element={<FemaleBestDress/>} />
        <Route path="/f-bestpersonality" element={<FemaleBestPersonality/>} />
        <Route path="/f-entrepreneur" element={<FemaleEntrepeneur/>} />
        <Route path="/f-classic" element={<FemaleClassic/>} />
        <Route path="/f-icon" element={<FemaleIcon/>} />
        <Route path="/f-expensive" element={<FemaleMostExpensive/>} />
        <Route path="/f-reserved" element={<FemaleMostReserved/>} />
        <Route path="/f-politicalicon" element={<FemalePoliticalIcon/>} />
        <Route path="/f-popular" element={<FemalePopular/>} />
        <Route path="/f-punctual" element={<FemalePunctual/>} />

        <Route path="/m-bestband" element={<BestBrandOfTheYear/>} />
        <Route path="/m-bestdress" element={<BestDress/>} />
        <Route path="/m-bestpersonality" element={<BestPersonLity/>} />
        <Route path="/m-entrepreneur" element={<Entrepreneur/>} />
        <Route path="/m-handsome" element={<HandsomeGuy/>} />
        <Route path="/m-classic" element={<MostClassic/>} />
        <Route path="/m-expensive" element={<MostExpensive/>} />
        <Route path="/m-popular" element={<MostPopular/>} />
        <Route path="/m-punctual" element={<MostPunctual/>} />
        <Route path="/m-reserved" element={<MostReserved/>} />
        <Route path="/m-politicalicon" element={<PoliticalIcon/>} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
