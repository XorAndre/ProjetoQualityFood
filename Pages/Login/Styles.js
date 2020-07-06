import estilo from 'styled-components/native'
//Containers
const Wrap = estilo.View`
    background-color: #EAECF0;
    min-height: 100vh;
`;
const Login = estilo.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 82%;
`;
const ContainerLogin = estilo.View`
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
`;
const ImagemLogin = estilo.Image`
    width: 282.66px;
    height: 237.33px;
    background: transparent;
    margin-left: 10px;
`;
const TitleLogo = estilo.Text`
    font-size: 30px;
    text-align: center;
    background: transparent;
`;
const ButtonLogin = estilo.Button`
    width: 282.66px;
    height: 237.33px;
    background: transparent;
`;
const InputsBrancos = estilo.TextInput`
    background-color: #fff;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.10);
    border-radius: 80px;
    border-color: #333;s
    border-width: 1px;
    border-style: solid;
    color: #333;
    margin-top: 6px; 
    margin-bottom: 10px;
    padding-left: 10px;
    padding-bottom: 15px;
    padding-top: 15px;
    width: 100%;
`;
export {
    Wrap,
    ContainerLogin,
    ImagemLogin,
    TitleLogo,
    ButtonLogin,
    InputsBrancos
};
