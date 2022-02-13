import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª edição do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCv0rFLuASVL8-laPR2CEFIA" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/kaio-eduardo-gomes-3b29a922b/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/kadu_gomes_10/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;