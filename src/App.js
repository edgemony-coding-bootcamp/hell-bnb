import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Activity from './pages/Activity';
import Homepage from './components/Homepage/Homepage';
import { useState, useCallback } from 'react';
import BannerCookies from './components/BannerCookies/BannerCookies';
import Footer from './components/Footer/Footer';
import PhotoPreview from './components/PhotoPreview/PhotoPreview';

import Modal from './components/Modal/Modal';

import { Main } from './assets/App.elements';

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(
    localStorage.getItem('cookieSession')
  );

  const cookieSession = useCallback(() => {
    const date = JSON.stringify(new Date());
    localStorage.setItem('cookieSession', `date:${date}`);
    setIsBannerVisible(true);
    return;
  }, []);

  // Modal Logic

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Router>
        <Main>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          <Header />

          <PhotoPreview
            openModal={openModal}
            both={true}
            top={true}
            bottom={true}
            zero={true}
            left={true}
          />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/activities/:id">
              <Activity />
            </Route>
          </Switch>
          <BannerCookies
            isBannerVisible={isBannerVisible}
            setVisibleBanner={cookieSession}
          />
          <Footer />
        </Main>
      </Router>
    </>
  );
}

export default App;
