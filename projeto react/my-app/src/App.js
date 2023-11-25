import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" className="justify-content-center">
        <Nav className="mr-auto">
          <Nav.Link href="#welcome-section">INÍCIO</Nav.Link>
          <Nav.Link href="#projects">PROJETOS</Nav.Link>
          <Nav.Link href="#contact">CONTATO</Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid id="welcome-section" className="welcome-section section">
        <Row>
          <Col>
            <h1>Projeto de Portfolio de Joana Dark</h1>
            <p>Um simples Portfolio para o projeto de interface gráfica</p>
            <p>11/2023</p>
            <p>versão react</p>
          </Col>
        </Row>
      </Container>

      <Container fluid id="projects" className="projects-section section">
        <Row>
          <Col>
            <a href="https://github.com/JoanaDark1/Projetos_Interface/tree/main/projetos/form" target="_blank" rel="noopener noreferrer" className="project project-tile">
              <img
                className="project-image"
                src="https://github.com/JoanaDark1/Projetos_Interface/blob/main/projetos/imagens/Imagem_form.png?raw=true"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Formulário
                <span className="code">&#47;&gt;</span>
              </p>
            </a>
          </Col>
          <Col>
            <a href="https://github.com/JoanaDark1/Projetos_Interface/tree/main/projetos/tributo" target="_blank" rel="noopener noreferrer" className="project project-tile">
              <img
                className="project-image"
                src="https://github.com/JoanaDark1/Projetos_Interface/blob/main/projetos/imagens/imagem_tributo.png?raw=true"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Página de tributo
                <span className="code">&#47;&gt;</span>
              </p>
            </a>
          </Col>
        </Row>
      </Container>

      <Container fluid id="contact" className="contact-section section">
        <Row>
          <Col>
            <div className="contact-section-header">
              <h2>Caso queira entrar em contato</h2>
            </div>
            <div className="contact-links">
              <Button variant="transparent" id="profile-link" href="https://github.com/JoanaDark1" target="_blank" className="btn contact-details">
                <i className="fab fa-github"></i> GitHub
              </Button>
              <Button variant="transparent" href="mailto:casajilo0@gmail.com" className="btn contact-details">
                <i className="fas fa-at"></i> Email
              </Button>
              <Button  variant="transparent "  href="tel:81 99995555" className="btn contact-details">
                <i className="fas fa-mobile-alt"></i> Telefone
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
