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
        <h1>Desenvolvedor Backend, Frontend, Cientista de Dados</h1>
        <div>
          <h3>“A arte de programar consiste na arte de organizar e dominar a complexidade.”</h3>
          <img src='/assets/image/carinha_no_pc_sem_fundo.png' alt='' className='imagem-faixa1' />
        </div>
      </section>
      <section className='faixa2'>
        <h1>About Me</h1>
        <div>
          <h3>Kaio Felipe Dias de Souza Sant'Ana</h3>
          <p>
            Sou formado em cursos técnicos de Informática e Língua Inglesa, e atualmente estou cursando Análise e Desenvolvimento de Sistemas. Sou apaixonado pelo desenvolvimento de software e, durante minha jornada acadêmica, adquiri habilidades técnicas sólidas e demonstrei comprometimento ao enfrentar desafios complexos.
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
              <Card nome='Chat' texto='Desenvolvimento de um chat com funcionalidades de comunicação instantânea.' />
              <Card nome='MyWorkship' texto='Trabalho em equipe para criar um sistema de agendamento eficiente e intuitivo.' />
              <Card nome='Biblioteca ' texto='Criação de um site para gerenciamento de livros, permitindo aos usuários explorar e administrar coleções de livros.' />
              <Card nome='StockExpert' texto='Desenvolvimento de um sistema de administração de vendas, onde os usuários podem gerenciar suas transações e inventário' />        
        </div>
      </section>
      <section className='faixa5'>
        <h1>Formação</h1>
        <div className='meio-faixa'>
          <div className='meio'>
              <img src='/assets/image/NSF.png' alt='' />
              <h4>- INFORMATICA</h4>
              <h4>- INGLES</h4>
          </div>
          <div className='meio'>
              <img src='/assets/image/Cópia-de-centro-universitário-catolico-italo-brasileiro-letras-brancas-horizontal.png' alt='' />
              <h4>- ANALISE E DESENVOLVEMENTO DE SISTEMA</h4>
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
