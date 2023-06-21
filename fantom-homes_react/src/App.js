<<<<<<< HEAD
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Creators from "./Components/Creators/Creators"
import Cta from "./Components/Cta/Cta"
import Footer from "./Components/Footer/Footer"
import HeroPage from "./Components/HeroPage/HeroPage"
import LiveAuction from "./Components/LiveAuction/LiveAuction"
import NavBar from "./Components/NavBar/NavBar"
import Partners from "./Components/Partners/Partners"
import SellNft from "./Components/SellNft/SellNft"
import SuperDrops from "./Components/SuperDrops/SuperDrops"
function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <HeroPage />
                                <Partners />
                                <SuperDrops />
                                <LiveAuction />
                                <SellNft />
                                <Creators />
                                <Cta />
                                <Footer />
                            </>
                        }
                    />
                    <Route exact path="/marketplace" element={<SuperDrops />} />
                </Routes>
            </Router>
        </>
    )
=======
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Creators from "./Components/Creators/Creators";
import Cta from "./Components/Cta/Cta";
import Footer from "./Components/Footer/Footer";
import HeroPage from "./Components/HeroPage/HeroPage";
import LiveAuction from "./Components/LiveAuction/LiveAuction";
import NavBar from "./Components/NavBar/NavBar";
import Partners from "./Components/Partners/Partners";
import SellNft from "./Components/SellNft/SellNft";
import SuperDrops from "./Components/SuperDrops/SuperDrops";
import CreatorPage from "./Components/CreatorPage/CreatorPage";
function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <HeroPage />
                <Partners />
                <SuperDrops />
                <LiveAuction />
                <SellNft />
                <Creators />
                <Cta />
                <Footer />
              </>
            }
          />
          <Route exact path="/marketplace" element={<SuperDrops/>}/>
          <Route exact path="/creator" element={<CreatorPage/>}/>
        </Routes>
      </Router>
    </>
  );
>>>>>>> 25e99bfdea4658629ce97e7cf69368fe7aeaa58d
}

export default App
