import './index.css'

function Calculadora() {

   const inserir = (num) => {
    document.getElementById('resultado').innerHTML += num;
   }

   const clean = () => {
    document.getElementById('resultado').innerHTML = ''
   }

   const back = () => {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
   }

   const calcular = () => {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado)
   }

   const potencia = () => {
    let p = document.getElementById('resultado').innerHTML;
    let potencia = Math.pow(p, 2)
    document.getElementById('resultado').innerHTML = potencia;
   }

   const raiz = () => {
    let r = document.getElementById('resultado').innerHTML;
    let raiz = Math.sqrt(r)
    document.getElementById('resultado').innerHTML = raiz;
   }

   const fatorial = () => {
    let fator = 1;
    let n = document.getElementById('resultado').innerHTML;
    for(let i = 1; i <= n; i++){
        fator *= i;
        document.getElementById('resultado').innerHTML = fator;
    }
   }

    return (
        <div className='container'>
            <div className="calculadora">
                <h1>Calculadora</h1>
                <p id='resultado'></p>
                <table>
                    <tr>
                        <th><button type='button' onClick={clean}>C</button></th>
                        <th><button type='button' onClick={back}>BC</button></th>
                        <th><button type='button' onClick={() => inserir('*')}>*</button></th>
                        <th><button type='button' onClick={() => inserir('/')}>/</button></th>
                        <th><button type='button' onClick={clean}>ON</button></th>
                    </tr>
                    <tr>
                        <th><button type='button' onClick={() => inserir('9')}>9</button></th>
                        <th><button type='button' onClick={() => inserir('8')}>8</button></th>
                        <th><button type='button' onClick={() => inserir('7')}>7</button></th>
                        <th><button type='button' onClick={() => potencia()}>X²</button></th>
                        <th><button type='button' onClick={() => inserir('-')}>-</button></th>
                    </tr>
                    <tr>
                        <th><button type='button' onClick={() => inserir('6')}>6</button></th>
                        <th><button type='button' onClick={() => inserir('5')}>5</button></th>
                        <th><button type='button' onClick={() => inserir('4')}>4</button></th>
                        <th><button type='button' onClick={() =>raiz()}>✓</button></th>
                        <th><button type='button' onClick={() => inserir('+')}>+</button></th>
                    </tr>
                    <tr>
                        <th><button type='button' onClick={() => inserir('3')}>3</button></th>
                        <th><button type='button' onClick={() => inserir('2')}>2</button></th>
                        <th><button type='button' onClick={() => inserir('1')}>1</button></th>
                        <th><button type='button' onClick={() => inserir(',')}>,</button></th>
                        <th rowSpan={2}><button id='rowsplan' type='button' onClick={() => calcular()}>=</button></th>
                    </tr>
                    <tr>
                        <th colSpan={2}><button id='cosplan' type='button' onClick={() => inserir('0')}>0</button></th>
                        <th><button type='button' onClick={() => inserir('.')}>.</button></th>
                        <th><button type='button' onClick={() => fatorial()}>!</button></th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Calculadora