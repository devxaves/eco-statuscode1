import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './App.css';
import './index.css';
import Landing from './components/Landing'
import FeatureSection from './components/FeatureSection';
import Safari from './pages/Safari';
import NFT from './pages/NFT';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <div className="max-w-7xl  align-center">
          <Routes>
            <Route
              path="/"
              element={<Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
              <ParallaxLayer offset={0} speed={0.25}>
                <div class="animation_layer parallax" id="artback"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.3}>
                <div class="animation_layer parallax" id="mountain"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={-0.5}>
                <div class="animation_layer parallax" id="logoland"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.3}>
                <div class="animation_layer parallax" id="jungle1"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.35}>
                <div class="animation_layer parallax" id="jungle2"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.5}>
                <div class="animation_layer parallax" id="jungle3"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.45}>
                <div class="animation_layer parallax" id="jungle4"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.15}>
                <div class="animation_layer parallax" id="manonmountain"></div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.35}>
                <div class="animation_layer parallax" id="jungle5"></div>
              </ParallaxLayer>
              <ParallaxLayer className='h-max' offset={1} speed={0.25}>
                <TextBlock />
              </ParallaxLayer>
       
      
            </Parallax>}
            />
            <Route
              path="safari"
              element={<Safari/>}
            />
            <Route
              path="nft"
              element={<NFT/>}
            />
            
          </Routes>
        </div>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
