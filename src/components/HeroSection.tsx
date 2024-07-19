import { Container, Row, Col } from "react-bootstrap";
import { HelpButton } from "./HelpButton";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section container">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Selamat Datang</h1>
          <p>
            Website ini berisi url menuju ke beberapa website yang ada di
            farrasindo group
          </p>
          <div>
            Masih bingung? bisa klik tombol
            <HelpButton />
          </div>
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
