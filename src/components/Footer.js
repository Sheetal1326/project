import { Link, animateScroll as scroll } from 'react-scroll'
import social from './social.png'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Pets Reunite</h1>
                <img src={social} alt="Social" className='img2' />
                <p className="footer-text">

                </p>
              </div>
             <div className="col-md-3">
                <p className="footer-title">Important Links</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="scroll" spy={true} smooth={true} duration={1000} > About Us </Link>
                  </li>                
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >petsreunite@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" >+91 9837482911</Link>
                  </li>
                  <li>
                    <Link to="#" >1800 456 123</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com" >Instagram: @petsreunite23</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com" >Twitter: @petsReunite</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com">FaceBook: @petsReunite2312</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;