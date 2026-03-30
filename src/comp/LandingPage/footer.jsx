import { Footer } from '../../assets/styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © Copyright {new Date().getFullYear()} Ilerioluwakiiye Abolade. 
        Last updated: March 24, 2026.
      </p>
    </Footer>
  );
};

export default FooterComponent;