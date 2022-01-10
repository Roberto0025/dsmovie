import {ReactComponent as GithubIcon} from 'assets/img/Vector.svg';
import './style.css';

function Navbar(){
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/Roberto0025">
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <b className="dsmovie-contact-link">/Roberto0025</b>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;