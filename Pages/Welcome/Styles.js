import estilo from 'styled-components/native'
//Containers
const Wrap = estilo.View`
    background-color: #F2522E;
    min-height: 100vh;
`;
const Overlay = estilo.View`
    background-color: rgba(8, 8, 8, 0.4);
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    height: 100%;
    width: 100%;
`;
const ContainerWelcome = estilo.ImageBackground`
    border-radius: 8px;
    height: 88vh;
    margin: 10px auto;
    width: 94%;
`;
const TitleLogo = estilo.Text`
    background-color: none;
    font-size: 40px;
    font-weight: 600;
    color: white;
`;
const DescriptionHome = estilo.Text`
    font-size: 24px;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const ButtonHome = estilo.Button`
    filter: drop-shadow(0px 3px 6px rgba(253, 57, 57, 0.49));
    font-size: 22px;
    display-inline: block;
    margin-top: 10px;
`;
export { Wrap, ContainerWelcome, TitleLogo, Overlay, DescriptionHome, ButtonHome };