function App(){
    
    const jogador01 = parseInt(Math.random() * 5);
   
    function pedra(){
      if(jogador01 === 0){
        alert('🚨 Empate! 🚨');
      }else if(jogador01 === 1){
        alert('Você foi coberto!');
      }else if(jogador01 === 2){
        alert('você amassou a tesoura');
      }else if(jogador01 === 3){
        alert('Largato esmagado!');
      }else{
        alert('Você foi vaporizado pelo Spock')
      }
    }
    function papel(){
        if(jogador01 === 1){
            alert('🚨 Empate! ha.ha.ha.ha 🚨');
        }else if(jogador01 === 0){
            alert('Papel cobre pedra');
        }else if(jogador01 === 2){
            alert('Você foi cortado');
        }else if(jogador01 ===3){
            alert('O Largato comeu você')
        }else{
            alert('refuta o Spock, Bazinga');
        }
    }
    function tesoura(){
        if(jogador01 === 0){
            alert('Você foi esmagado');
        }else if(jogador01 === 1){
            alert('Cortando o papel');
        }else if(jogador01 === 2){
            alert('🚨 Empate! ha 🚨');
        }else if(jogador01 === 3){
            alert('Largato decaptado');
        }else{
            alert('Você foi esmagado pelo Spock, Bazinga!')
        }

    }
    function largato(){
        if(jogador01 === 0){
            alert('Você foi esmagado');
        }else if(jogador01 === 1){
            alert('Comendo de boas o papel');
        }else if(jogador01 === 2){
            alert('você foi decapitado 💀');
        }else if(jogador01 === 3){
            alert('🚨 Empate! ha.ha.ha 🚨');
        }else{
            alert('☠️ Spock foi envenenado ☠️');
        }

    }
    function spock(){
        if(jogador01 === 0){
            alert('Vaporizou a pedra');
        }else if(jogador01 === 1){
            alert('você foi refutado');
        }else if(jogador01 === 2){
            alert('a tesoura foi derretida 🫠');
        }else if(jogador01 === 3){
            alert('☠️ você Foi envenenado ☠️');
        }else{
            alert('🚨 Empate! ha.ha 🚨')
        }
    }
    
    return(
        <div className="conteiner">
            <div className="intro">
                <h1>JOKENPÔ</h1>
                <h2>jokenpô baseado em <mark>The Big Bang Theory</mark></h2>
                <h3>Pedra, Papel, Tesoura, Largato e Spock</h3>
                <p>Qual vai ser sua jogada:</p>
            </div>
                <button onClick={pedra}>🪨</button>
                <button onClick={papel}>🧻</button>
                <button onClick={tesoura}>✂️</button>
                <button onClick={largato}>🐊</button>
                <button onClick={spock}>🖖</button>
        </div>
    );
}
export default App;