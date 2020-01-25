import React from 'react';

import './styles/settings/colors.css';
import './styles/generic/reset.css';
import './styles/elements/base.css';
import MainTitle from './components/MainTitle';
import MainTask from './components/MainTask';

const App = () => (
  <>
    <MainTitle content="Todo" />

    <MainTask id="task1" content="Criar o title" />
    <MainTask id="task2" content="Criar o title" />
    <MainTask id="task3" content="Criar o title" />
    <MainTask id="task4" content="Criar o title" />
  </>
);

export default App;
