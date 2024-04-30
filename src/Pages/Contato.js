import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Contato.css';

function Ctt(){

    return(

        <>

      <h2 className='tx'>Insira os dados para contato</h2>

<div className='cu'>

<Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='font'>Nome:</Form.Label>
          <Form.Control type="text" placeholder="Insira seu Nome" className="inp" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className='font'>Telefone</Form.Label>
          <Form.Control type="number" placeholder="Insira seu telefone" className="inp" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className='font'>Assunto:</Form.Label>
        <Form.Control placeholder="Insira o assunto" className="inp" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className='font'>Mensagem:</Form.Label>
        <Form.Control placeholder="Insira o recado" className="inp"/>
      </Form.Group>

   

      <Button variant="primary" type="submit" className='w-100 butao'>
        Enviar
      </Button>
    </Form>
</div>    

        </>

    )


}
export default Ctt;