import React from 'react';
import { Container, Foto, TextTitulo, TextSubTitulo, Collum1, Collum2, Icon } from './style';
import { Text } from 'react-native'


const Home: React.FC = () => (

  <Container>
    <Collum1>
      <Foto></Foto>
      <TextTitulo>Seja bem vindo.</TextTitulo>
      <TextSubTitulo>Agende sua consulta de forma rápida e segura.</TextSubTitulo>
    </Collum1>
    <Collum2>
      <Icon name="bell" size={24} color="#fff"></Icon>
    </Collum2>

  </Container>
);

export default Home;
