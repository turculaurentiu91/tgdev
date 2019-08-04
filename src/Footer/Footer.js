import React from 'react';
import './Footer.css';

import googleBadge from './google-play-badge.png';
import appleBadge from './apple-store-badge.svg';

const Footer = (props) => {
  return(
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__link-group">
          <h4>網上換購</h4>
            <a href="#" className="footer__link">商品推介</a>
            <a href="#" className="footer__link">商品分類</a>
            <a href="#" className="footer__link">熱點推介</a>
            <a href="#" className="footer__link">新手指南</a>
            <a href="#" className="footer__link">常見問題</a>
        </div>
        <div className="footer__link-group">
          <h4>會員專區</h4>
          <a href="#" className="footer__link">我的賬戶</a>
          <a href="#" className="footer__link">獎賞</a>
          <a href="#" className="footer__link">條款及細則</a>
          <a href="#" className="footer__link">私隱政策</a>
        </div>
        <div className="footer__link-group">
          <h4>關於我們</h4>
          <a href="#" className="footer__link">關於煤氣公司</a>
          <a href="#" className="footer__link">關於好氣Fun</a>
          <a href="#" className="footer__link">關於合作商戶</a>
          <a href="#" className="footer__link">聯絡我們</a>
        </div>
        <div className="footer__link-group">
          <h4>付款方式</h4>
          <p>Alipay</p>
          <p>Visa</p>
          <p>Mastercard</p>
          <p>Unionpay</p>
          <p>PayMe</p>
        </div>
        <div className="footer__link-group">
          <h4>關注我們</h4>
          <a href="#" className="footer_social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="footer_social-link">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="footer_social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer__link-group">
          <h4>下載應用程式</h4>
          <div className="footer__badge"><img src={googleBadge} alt="google store badge"/></div>
          <div className="footer__badge"><img src={appleBadge} alt="apple store badge"/></div>
        </div>
      </div>

      <div className="footer__copyright">
      © 2019 The Hong Kong and China Gas Company Limited. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;