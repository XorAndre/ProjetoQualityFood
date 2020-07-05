import React from 'react';
import {
    ContainerTopo,
    Container,
    RowTopo,
    ContainerLogo,
    ContainerActions,
    Logo,
    ContainerPesquisar,
    Pesquisar
} from './Styles';
const Topo = () => {
  const [value, onChangeText] = React.useState('Pesquise aqui');   
  return (
    <>
        <ContainerTopo>
            <Container>
                <RowTopo>
                    <ContainerLogo>
                        <Logo>Quality-Food</Logo>
                    </ContainerLogo>
                    <ContainerActions>

                    </ContainerActions>
                </RowTopo>
                <RowTopo className="space">
                    <ContainerPesquisar>
                        <Pesquisar 
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                    </ContainerPesquisar>
                </RowTopo>    
            </Container>
        </ContainerTopo>
    </>
  );
}

export default Topo;