import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Foto, TextTitulo, TextSubTitulo, Collum1, Collum2, Icon, CardItem, Carousel, ContainerCarousel } from './style';


const Home: React.FC = () => (

  <>
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
    <ContainerCarousel>
      <Carousel horizontal showsHorizontalScrollIndicator={false}>
        <CardItem key='teste'><Text>asihasuhsaiuhsa</Text></CardItem>
        <CardItem key='teste1'><Text>asihasuhsaiuhsa</Text></CardItem>
        <CardItem key='teste2'><Text>asihasuhsaiuhsa</Text></CardItem>
        <CardItem key='teste10'><Text>asihasuhsaiuhsa</Text></CardItem>
        <CardItem key='teste11'><Text>asihasuhsaiuhsa</Text></CardItem>
        <CardItem key='teste21'><Text>asihasuhsaiuhsa</Text></CardItem>
      </Carousel>
    </ContainerCarousel>


  </>
);

export default Home;
