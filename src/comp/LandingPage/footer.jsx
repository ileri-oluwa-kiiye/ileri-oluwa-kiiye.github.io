import { Footer } from '../../assets/styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © Copyright {new Date().getFullYear()} Ilerioluwakiiye Abolade. 
        Last updated: January 5, 2024.
      </p>
    </Footer>
  );
};

export default FooterComponent;