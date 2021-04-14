import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Activity from './pages/Activity'
import Homepage from './Components/Homepage/Homepage'
import { useState, useCallback } from 'react'
import BannerCookies from './Components/BannerCookies/BannerCookies'
import Footer from './Components/Footer/Footer'

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(
    localStorage.getItem('cookieSession')
  )

  const cookieSession = useCallback(() => {
    const date = JSON.stringify(new Date())
    localStorage.setItem('cookieSession', `date:${date}`)
    setIsBannerVisible(true)
    return
  }, [])

  return (
    <>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route exact path='/activities/:id'>
              <Activity />
            </Route>
          </Switch>
          <BannerCookies
            isBannerVisible={isBannerVisible}
            setVisibleBanner={cookieSession}
          />
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
