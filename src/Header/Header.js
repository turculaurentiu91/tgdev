import React from 'react';
import './Header.css';
import logo from './logo.svg';
import basketIcon from './basket-icon.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'English',
      showLanguageMenu: false,
    }

    this.languages = ['English', 'French' ,'繁中'];
  }

  toggleLanguageMenu = () => {
    this.setState({showLanguageMenu: !this.state.showLanguageMenu})
  }

  selectLanguage = newLang => {
    this.toggleLanguageMenu();
    this.setState({selectedLanguage: newLang});
  }

  render() {
    return (
      <header className="header">
        <div className="header__top">
          <div className="header__top-left-nav">
            <div className="header__language-menu">
              <button 
                className="header__button"
                onClick={this.toggleLanguageMenu}
              >
                {this.state.selectedLanguage} <i className="fa fa-angle-down"></i>
              </button>

              <div className="header__language-hidden-menu">
                {
                  this.state.showLanguageMenu && this.languages.filter(lang => lang !== this.state.selectedLanguage)
                    .map((lang, index) => (
                    <button
                      onClick={() => this.selectLanguage(lang)}
                      key={index}
                    >
                      {lang}
                    </button>
                  ))  
                }
              </div>
            </div>
            <a href="#" className="header__button">HKD</a>
          </div>
  
          <nav className="header__top-right-nav">
            <a href="#" className="header__button"><i className="fa fa-random"></i> Compare Products</a>
            <a href="#" className="header__button"><i className="fa fa-heart"></i> Wishlist</a>
            <a href="#" className="header__button"><i className="fa fa-comments"></i> Chat with Merchant</a>
            <a href="#" className="header__button"><i className="fa fa-envelope-open"></i> Inbox</a>
            <a href="#" className="header__button"><i className="fa fa-lock"></i> Login/Register</a>
          </nav>
  
          <nav className="header__mobile-nav">
          <a href="#" className="header__button">
            <i className="fa fa-user"></i>
          </a>
            <div className="header__mobile-nav-dropdown">
              <a href="#" className="header__button"><i className="fa fa-random"></i> Compare Products</a>
              <a href="#" className="header__button"><i className="fa fa-heart"></i> Wishlist</a>
              <a href="#" className="header__button"><i className="fa fa-comments"></i> Chat with Merchant</a>
              <a href="#" className="header__button"><i className="fa fa-envelope-open"></i> Inbox</a>
              <a href="#" className="header__button"><i className="fa fa-lock"></i> Login/Register</a>
            </div>
          </nav>
        </div>
        <div className="header__middle">
          <div className="header__logo">
            <img src={logo} alt="logo"/>
          </div>
  
          <nav className="header__categories">
            <a href="#" className="header__button header__button--cat">
              最新上架
            </a>
            <a href="#" className="header__button header__button--cat">
              今期推廣
            </a>
            <a href="#" className="header__button header__button--cat">
              關於好氣FUN
            </a>
            <a href="#" className="header__button header__button--cat">
              獎賞
            </a>
            <a href="#" className="header__button header__button--cat">
              熱點推介
            </a>
          </nav>
  
          <div className="header__cart">
            <div className="header__basket-icon">
              <img src={basketIcon} alt="basket icon"/>
            </div>
            <div>
              Shopping Cart <br/>
              0 Item - $0.00
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;