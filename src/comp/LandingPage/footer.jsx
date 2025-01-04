import { Footer } from '../../assets/styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © Copyright {new Date().getFullYear()} Ilerioluwakiiye Abolade. 
        Last updated: December 24, 2024.
      </p>
    </Footer>
  );
};

export default FooterComponent;