import { Container, Row, Col } from "react-bootstrap";
import image from "/undraw_website_u6x8.svg"; // Pastikan path ke gambar sesuai dengan struktur proyek Anda

const HeroSection = () => {
  return (
    <Container fluid className="hero-section container">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Selamat Datang</h1>
          <p>Selamat datang di website kami. Kami senang Anda di sini.</p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="/undraw_website_u6x8.svg"
            width={500}
            height={500}
            alt="Website Illustration"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
