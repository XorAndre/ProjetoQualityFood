import React from 'react';
import { Reset } from 'styled-reset'
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
const Registro = () => {
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
                                placeholder="Nome Completo"
                            />
                            <InputsBrancos
                                placeholder="E-mail"
                            />
                            <InputsBrancos
                                placeholder="Senha"
                            />
                            <InputsBrancos
                                placeholder="Confirme sua senha"
                            />
                            <ButtonLogin 
                                title="Registrar"
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

export default Registro;