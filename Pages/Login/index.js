import React from 'react';
import { Reset } from 'styled-reset'
import {
  SafeAreaView,
  SectionList,
} from "react-native";
//Componentes externos
import {
    Content,
    RowGrid,
    ColumnGrid
} from '../../Components/Grid/Styles'
//Componentes internos
import {
  Wrap,
  ContainerLogin,
  ImagemLogin,
  TitleLogo,
  ButtonLogin,
  InputsBrancos
} from "./Styles";
const Login = () => {
  return (
    <>
    <React.Fragment>
      <Reset />
      <Wrap>
        <ContainerLogin>
            <Content>
                <RowGrid>
                    <ColumnGrid SizeColumn="12">
                       <Login>
                            <ImagemLogin
                            source={require('../../assets/imgs/Login.png')}
                            /> 
                            <TitleLogo>Quality-Food</TitleLogo>
                            <InputsBrancos
                                placeholder="E-mail"
                            />
                            <InputsBrancos
                                placeholder="Senha"
                            />
                            <ButtonLogin 
                                title="Fazer Login"
                                color="#f29422"
                            />
                       </Login>
                    </ColumnGrid>
                </RowGrid>
            </Content>
        </ContainerLogin>
      </Wrap>
    </React.Fragment>
    </>
  );
}

export default Login;