import React from 'react';
import './variables.css';
import './App.css';

// Components 
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Components
import Home from "./pages/HomePage";
import InnerPage from "./pages/InnerPage";

// Inner page 
import Project from "./pages/Inner/Project";
import Team from "./pages/Inner/Team";
import AboutUs from "./pages/Inner/AboutUs";
import News from "./pages/Inner/News";
import Join from "./pages/Inner/Join";
import Problem from "./pages/Inner/Problem";

function App() {
    return (
      <>

      <Router>

        <Navbar />
          
          <Routes>

            <Route index element={<Home />} />

            <Route path="/projects" 
              element={<InnerPage pageName="Projects" pageDescription="Here are some of our recent projects!" ordinaryPage={true}>
              {/* Your page content react component */}
                <Project />
              {/* Your page content react component */}
              </InnerPage>} />

            <Route path="/team" 
              element={<InnerPage pageName="Team" pageDescription="Meet the cool people of this community!" ordinaryPage={true}>
              {/* Your page content react component */}
                <Team />
              {/* Your page content react component */}
              </InnerPage>} />

            <Route path="/about-us" 
              element={
              <InnerPage pageName="About Us" pageDescription="Know more about our fun community of tech nerds!" ordinaryPage={true}>
                {/* Your page content react component */}
                  <AboutUs />
                {/* Your page content react component */}
              </InnerPage>
              } 
              />

            <Route path="/news" 
              element={
              <InnerPage pageName="News" pageDescription="Gather the important news of what's going in te community" ordinaryPage={true}>
                {/* Your page content react component */}
                  <News />
                {/* Your page content react component */}
              </InnerPage>
              } 
              />

            <Route path="/join" 
              element={
              <InnerPage pageName="Join Us" pageDescription="Fill the form to request for joining the most fun-filled community of techies all around the world!" ordinaryPage={true}>
                {/* Your page content react component */}
                  <Join />
                {/* Your page content react component */}
              </InnerPage>
              } 
              />

            <Route path="/report-a-problem" 
              element={
              <InnerPage pageName="Report Problem" pageDescription="Inform us of a important problem and you can win amazing community swags" ordinaryPage={true}>
                {/* Your page content react component */}
                  <Problem />
                {/* Your page content react component */}
              </InnerPage>
              } 
              />

            <Route path="*" element={
              <InnerPage pageName="404" pageDescription="Yeah, we pardon your this mistake!" ordinaryPage={false}>
                <div className="d-flex justify-content-center align-items-center" id="main" style={{margin: '40vh auto'}}>
                    <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
                    <div className="inline-block align-middle">
                      <h2 className="font-weight-normal lead" id="desc">&nbsp;Page not found.</h2>
                    </div>
                </div>
              </InnerPage>
            } />

          </Routes>

        <Footer />

      </Router>

      </>
    );
  }

export default App;
