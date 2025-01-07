import './App.css';
import './responsive.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct imports for React Router v6

import NavigationBar from './Components/NavigationBar';
import Timeline from './Components/Timeline';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ServiceCom1 from './Components/ServiceCom1';
import ServiceCom2 from './Components/ServiceCom2';
import DigitalMarketing from './Components/DigitalMarketing';
import WebApp from './Components/WebApp';
import Corporate from './Components/Corporate';
import ServiceCom3 from './Components/ServiceCom3';

function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <div className="App">
        <NavigationBar />
        <Routes> {/* Use Routes for route definitions in v6 */}
          {/* Define a route for the home page */}
          <Route path="/" element={

            <Home />} />

          {/* Define routes for each section */}
          <Route
            path="/about"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  background: '#920E0E',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <About />
              </section>
            }
          />

          <Route
            path="/services"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Services />
              </section>
            }
          />

          <Route
            path="/timeline"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  background: '#260101',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: '30px',
                }}
              >
                <Timeline />
              </section>
            }
          />

          <Route
            path="/contact"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  padding: '50px',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <h1>Contact</h1>
                <p>Contact us here.</p>
              </section>
            }
          />

          {/* Define routes for ServiceCom1 and ServiceCom2 */}
          <Route
            path="/servicecom1"
            element={
              <section style={{ minHeight: '100vh' }} className="servicecom1">
                <ServiceCom1 />
              </section>
            }
          />

          <Route
            path="/servicecom2"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  background: '#920E0E',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ServiceCom2 />
              </section>
            }
          />

          <Route
            path="/servicecom3"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ServiceCom3 />
              </section>
            }
          />

          <Route
            path="/digitalmarketing"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  background: '#920E0E',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <DigitalMarketing />
              </section>
            }
          />


          <Route
            path="/webapp"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  background: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <WebApp />
              </section>
            }
          />


          <Route
            path="/corporate"
            element={
              <section
                style={{
                  minHeight: '100vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Corporate />
              </section>
            }
          />

        </Routes> {/* End of Routes */}
      </div>
    </BrowserRouter>
  );
}

export default App;
