// Previne que o script seja executado antes que a página seja completamente carregada
document.addEventListener('DOMContentLoaded', () => {

    // Obtém os elementos do HTML usando os IDs que adicionamos
    const valorRealInput = document.getElementById('valor-real');
    const valorDolarInput = document.getElementById('valor-dolar');
    const btnConverter = document.getElementById('btn-converter');
    const resultadoSpan = document.getElementById('resultado');

    // Taxa de câmbio fixa (você pode alterar este valor)
    const taxaCambio = 5.25; // Exemplo: 1 Dólar = 5.25 Reais

    // Adiciona um "ouvinte de evento" ao botão
    btnConverter.addEventListener('click', () => {
        
        // Verifica se há um valor no campo de Real
        if (valorRealInput.value !== "") {
            const valorEmReal = parseFloat(valorRealInput.value);
            if (!isNaN(valorEmReal) && valorEmReal > 0) {
                const valorEmDolar = valorEmReal / taxaCambio;
                resultadoSpan.textContent = `${valorEmDolar.toFixed(2)} Dólares`;
            } else {
                resultadoSpan.textContent = "Valor inválido em Reais";
            }
        } 
        
        // Verifica se há um valor no campo de Dólar
        else if (valorDolarInput.value !== "") {
            const valorEmDolar = parseFloat(valorDolarInput.value);
            if (!isNaN(valorEmDolar) && valorEmDolar > 0) {
                const valorEmReal = valorEmDolar * taxaCambio;
                resultadoSpan.textContent = `${valorEmReal.toFixed(2)} Reais`;
            } else {
                resultadoSpan.textContent = "Valor inválido em Dólares";
            }
        }
        
        // Se nenhum campo foi preenchido
        else {
            resultadoSpan.textContent = "Preencha um dos campos para converter";
        }
    });

});