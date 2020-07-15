import React from 'react'
import './index.css'
import './App.css'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';





export default (props) =>

    <div className="App">
        <div className="Cards">
            <Card titulo="Projeto Repetição" color="#045">

            </Card>
            <Card titulo="Projeto Familia" color="#785">
                <Familia sobrenome="Garcia">
                    <FamiliaMembro nome="Samuel" />
                    <FamiliaMembro nome="Mariana" />
                    <FamiliaMembro nome="Diogo" />
                    <FamiliaMembro nome="Danilo" />
                </Familia>
            </Card>
            <Card titulo="Projeto Aleatório" color="#180">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="Primeiro Componente 1" color="#f80">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="Primeiro Componente 2" color="#580">
                <Primeiro />
            </Card>
        </div>


    </div>

