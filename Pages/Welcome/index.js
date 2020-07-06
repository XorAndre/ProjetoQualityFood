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
  ContainerWelcome,
  TitleLogo,
  Overlay,
  DescriptionHome,
  ButtonHome
} from "./Styles";
//Background imagem
const fundo = { uri: "https://s2.glbimg.com/Ey7RDxMXgd33XqlWy0BemZJKlHU=/0x0:2118x1415/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_f035dd6fd91c438fa04ab718d608bbaa/internal_photos/bs/2020/t/s/zcPQCbQEyuOWwRwBJBQQ/delivery.jpg" };
const Welcome = () => {
  return (
    <>
    <React.Fragment>
      <Reset />
      <Wrap>
        <ContainerWelcome source={fundo}>
            <Overlay>
                <Content>
                    <RowGrid>
                        <ColumnGrid SizeColumn="12">
                            <TitleLogo>Quality-Food</TitleLogo>
                            <DescriptionHome>
                                Um aplicativo que visa levar até você alimentos com qualidade.
                            </DescriptionHome>
                            <ButtonHome 
                                title="Acessar app"
                                color="#f29422"
                            />
                        </ColumnGrid>
                    </RowGrid>
                </Content>
            </Overlay>
        </ContainerWelcome>
      </Wrap>
    </React.Fragment>
    </>
  );
}

export default Welcome;