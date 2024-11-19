import "./Footer.css";

const Footer = ({ children, urlLogo }) => {
  return (
    <footer className="footer">
      <div>{children}</div>
      <img src={urlLogo} alt="logo" className="logo" />
    </footer>
  );
};

export default Footer;
