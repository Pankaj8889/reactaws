import React  from 'react';
import { NavBar, HeroLayout2, Features2x3, MarketingFooter } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <HeroLayout2 width={"100vw"}/>
      <Features2x3 width={"100vw"}/>
      <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default App;
