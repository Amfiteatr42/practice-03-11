import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormAuth({ onSubmit, onGoogleClick }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const options = {
    name: setName,
    email: setEmail,
    password: setPassword,
    checkbox: setCheckbox,
  };

  function onChange(e) {
    const { name, value } = e.target;

    if (name === 'checkbox') {
      options[name](value => !value);
      return;
    }

    options[name](value);
  }

  function onRegistry(e) {
    e.preventDefault();

    onSubmit({ name, email, password });

    Object.values(options).map(setState =>
      setState(prevState => (typeof prevState === 'boolean' ? false : ''))
    );
  }

  return (
    <Form onSubmit={onRegistry}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={onChange}
          name="name"
          type="text"
          placeholder="Name"
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
          value={password}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onChange={onChange}
          name="checkbox"
          type="checkbox"
          label="Check me out"
          checked={checkbox}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!checkbox}>
        Submit
      </Button>
      <Button
        variant="primary"
        type="button"
        disabled={!checkbox}
        onClick={onGoogleClick}
      >
        Goodle Auth
      </Button>
    </Form>
  );
}

export default FormAuth;
