import './App.css';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer3';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import BlogPage from './pages/BlogPage'
import BlogSinglePage from './pages/BlogSinglePage'
import ContactPage from './pages/ContactPage'
import ServiceSinglePage from './pages/ServiceSinglePage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <div className="App">
    <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/AboutUs" component={AboutUsPage}/>  
            <Route exact path="/Services" component={ServicesPage}/> 
            <Route exact path="/ServiceSingle" component={ServiceSinglePage}/> 
            <Route exact path="/Contact" component={ContactPage}/>         
            <Route exact path="/BlogPage" component={BlogPage}/>         
            <Route exact path="/BlogSinglePage" component={BlogSinglePage}/>         
          </Switch>
      </Router>         
          <Footer1/>
          <Footer2/>
          <Footer3/>
    </div>
  );
}

export default App;
