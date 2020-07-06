import React from 'react';
import { Reset } from 'styled-reset'
import {
  SafeAreaView,
  SectionList
} from "react-native";
//Componentes externos
import Topo from '../../Components/Header'
//Componentes internos
import {
  Wrap
} from "./Styles";

const Home = () => {
  return (
    <>
    <React.Fragment>
      <Reset />
      <Wrap>
        <Topo/>
      </Wrap>
    </React.Fragment>
    </>
  );
}

export default Home;