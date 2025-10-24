import { Footer } from '../../assets/styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © Copyright {new Date().getFullYear()} Ilerioluwakiiye Abolade. 
        Last updated: October 2025.
      </p>
    </Footer>
  );
};

export default FooterComponent;