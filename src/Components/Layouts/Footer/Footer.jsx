import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <footer className="full-width">
      <div className="uneven-row">
        <div className="even-columns mart-link">
          <h1 className="fw-bold">
            Gamers<span>mart</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat pariatur unde
            modi iusto iste hic aspernatur vel doloremque incidunt.
          </p>
          <div className="footer-socials">
            <i className="fa-solid fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-twitterr"></i>
            <i className="fa fa-facebook"></i>
          </div>
        </div>
        <FooterLinks />
      </div>

      <Copyright />
    </footer>
  );
}

export default Footer;
