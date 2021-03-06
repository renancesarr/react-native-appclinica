import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';


export const Container = styled.View`
  background-color: #1054E8;
  max-height: 50%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  align-content:center;
  flex:1;
  flex-direction: row;
`;

export const Collum1 = styled.View`
  padding-top: 64px;
  padding-left: 16px;
  max-width: 70%;
`;
export const Collum2 = styled.View`
  padding-top: 104px;
  max-width: 30%;
  margin-left: auto;
  align-content:flex-end;
`;

export const Foto = styled.View`
  background-color: grey;
  border-radius: 60px;
  height: 80px;
  width: 80px;
`;
export const TextTitulo = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  margin-top: 16px;
`;
export const TextSubTitulo = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-top: 16px;
  opacity: 0.6;
`
export const Icon = styled(FeatherIcon)`
  padding-right:24px;

`;
