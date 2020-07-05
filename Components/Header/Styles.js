import estilo from 'styled-components/native'

//Componentes Header
const ContainerTopo = estilo.View`
    background-color: #F29422;
    border-radius: 8px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.23);
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    min-height: 140px;
    width: 98%;
`;
const Container = estilo.View`
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 30px;
    padding-bottom: 10px;
    width: 99%;
`;
const RowTopo = estilo.View`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const ContainerLogo= estilo.View`
    width: 55%;
`;
const Logo= estilo.Text`
    color: #fff;
    font-size: 23px;
    font-weight: 600;
    text-transform: uppercase;
`;
const ContainerActions= estilo.View`
    width: 40%;
`;
const ContainerPesquisar= estilo.View`
    position: relative;
    margin: 0 auto;
    width: 99%;
`;
const Pesquisar= estilo.TextInput`
    background-color: #F7B05A;
    border-radius: 8px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.23);
    margin-left: -8px;
    margin-top: 8px;
    padding: 15px 10px;
    width: 92vw;
    &::placeholder{
        font-size: 20px;
    }
`;
export { 
    ContainerTopo, 
    Container, 
    RowTopo, 
    ContainerLogo, 
    ContainerActions,
    Logo,
    ContainerPesquisar,
    Pesquisar 
};