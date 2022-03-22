/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */

import React /* ,{ useState } */ from 'react';
import {
  Container,
} from '../../components/FormComponents';
import { Header } from '../../components/HomeComponents';

export default function Home() {
  // const [formData, setFormData] = useState({});

  /* function handleSubmit(e) {
    e.preventDefault();
  }
  */

  /*
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  */
  return (
    <Container>
      <Header>
        <h1>linkr</h1>
      </Header>

    </Container>
  );
}
