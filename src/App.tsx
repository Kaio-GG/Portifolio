import './App.scss';
import React from 'react';
import Card from './components/card';
import Icones from './components/icones';




function App() {
  
  return (
    <main className="app">
      <header className='header'>
        <img src='/assets/image/logo-kaio.svg' alt='' className='logo'/>
      </header>
      <section className='faixa1'>
        <h1>Desenvolvedor FullStack</h1>
        <div>
          <h3>“A arte de programar consiste na arte de organizar e dominar a complexidade.”</h3>
          <img src='/assets/image/carinha_no_pc_sem_fundo.png' alt='' className='imagem-faixa1' />
        </div>
      </section>
      <section className='faixa2'>
        <h1>About Me</h1>
        <div className='org'>
          <h3>Kaio Felipe Dias de Souza Sant'Ana</h3>
          <p>
              Sou um desenvolvedor FullStack apaixonado por tecnologia e inovação. Me formei em um curso técnico de informática com foco em desenvolvimento, onde descobri meu interesse por criar soluções que impactam o dia a dia das pessoas. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Universidade Ítalo, buscando aprofundar ainda mais meus conhecimentos na área. Busco constantemente desafios para aprimorar minhas habilidades e desenvolver aplicações úteis e intuitivas. Tenho experiência com JavaScript, TypeScript, React, Express.js e MySQL, além de estar sempre aberto a aprender novas tecnologias.             
          </p>
        </div>
      </section>
      <section className='faixa3'>
        <h1>Linguagens, Frameworks e Banco de Dados</h1>
        <div className='org-imagens'>
          
          <div>
            <img src='/assets/image/javascript-logo.svg' alt='JavaScript'/>
          </div>
          <div>
            <img src='/assets/image/typescript.svg' alt='TypeScript'/>           
          </div>

          <div>
            <img src='/assets/image/mysql-logo.svg' alt='MySQL'/>          
          </div>
          <div>
            <img src='/assets/image/logo.svg' alt='React'/>
          </div>
        </div>
      </section>
      
      <section className='faixa4'>
        <h1>Projetos</h1>
        <div className='meio'>
              <Card nome='Chat' texto='Desenvolvimento de um chat com funcionalidades de comunicação instantânea.'  />
              <Card nome='MyWorkship' texto='Trabalho em equipe para criar um sistema de agendamento eficiente e intuitivo.' />
              <Card nome='Biblioteca ' texto='Criação de um site para gerenciamento de livros, permitindo aos usuários explorar e administrar coleções de livros.' />
              <Card nome='StockExpert' texto='Desenvolvimento de um sistema de administração de vendas, onde os usuários podem gerenciar suas transações e inventário' />        
        </div>
      </section>
      <section className='faixa5'>
        <h1>Formação</h1>
        <div className='meio-faixa'>
          <div className='meio'>
              <img className='icon-nfs' src='/assets/image/NSF.png' alt='' />
              <div className='org-cell'>
                  <h5 className='texto-info'>- INFORMATICA</h5>
                  <h5 className='texto-info'>- INGLES</h5>
              </div>
          </div>
          <div className='meio'>
              <img className='icon-italo' src='/assets/image/Cópia-de-centro-universitário-catolico-italo-brasileiro-letras-brancas-horizontal.png' alt='' />
              <h5>- ANALISE E DESENVOLVEMENTO DE SISTEMA</h5>
          </div>
        </div>
      </section>
      <section className='footer'>
        <Icones/>      
      </section>
    </main>
  );
}

export default App;
