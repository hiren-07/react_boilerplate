import { useSelector } from "react-redux";
import NavbarComponent from "../../Components/Navbar";
import { getContactStyles } from "./style";

function Contact() {

  const theme = useSelector((state: any) => state.counter.theme);
  const styles = getContactStyles(theme);
  return (
    <>
      <NavbarComponent />
      <div style={styles.container as React.CSSProperties}>
        <h1 style={styles.mainTitle}>Contact Us</h1>
        <div style={styles.card}>
          <p style={styles.text}>
            We'd love to hear from you. Please reach out using any of the methods below.
          </p>
          
          <div style={styles.contactInfo}>
            <p style={styles.contactItem}>Email: <span style={styles.highlight}>info@example.com</span></p>
            <p style={styles.contactItem}>Phone: (123) 456-7890</p>
            <p style={styles.contactItem}>Address: San Francisco, CA</p>
          </div>
          
         
        </div>
      </div>
    </>
  );
}


export default Contact;