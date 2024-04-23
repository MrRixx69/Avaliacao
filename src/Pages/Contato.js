import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Ctt(){

    return(

        <>

<Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="email" placeholder="Insira seu Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="password" placeholder="Insira seu telefone" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Assunto:</Form.Label>
        <Form.Control placeholder="Insira o assunto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Mensagem:</Form.Label>
        <Form.Control placeholder="Insira o recado" />
      </Form.Group>

   

      <Button variant="primary" type="submit">
        Envair
      </Button>
    </Form>

        </>

    )


}
export default Ctt;