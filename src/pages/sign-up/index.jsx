/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */

import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Form,
  Input,
  StyledLink,
} from '../../components/FormComponents';
import { api } from '../../services/api';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await api.createUser(formData);
      setLoading(false);
      setFormData({});
      navigate('/');
    } catch (e) {
      alert('Erro!', e);
    }
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <main className="right">
        <div className="banner">
          <h1>linkr</h1>
          <h2>save, share and discover the best links on the web</h2>
        </div>
      </main>

      <aside className="left">
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            placeholder="email"
            type="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            required
          />

          <Input
            name="password"
            placeholder="password"
            type="password"
            value={formData.password || ''}
            onChange={handleInputChange}
            required
          />

          <Input
            name="userName"
            placeholder="username"
            type="text"
            value={formData.userName || ''}
            onChange={handleInputChange}
            required
          />

          <Input
            name="pictureUrl"
            placeholder="picture url"
            type="url"
            value={formData.pictureUrl || ''}
            onChange={handleInputChange}
            required
          />

          <Button disabled={loading}>
            {loading ? <ClipLoader /> : 'Sign Up'}
          </Button>
          <StyledLink to="/">
            <p>Switch back to log in</p>
          </StyledLink>
        </Form>
      </aside>
    </Container>
  );
}
