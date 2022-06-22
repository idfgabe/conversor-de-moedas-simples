function Converter() {
  let valorInserido = parseFloat(document.getElementById("valor").value);
  let valorDolar = valorInserido / 5;
  let valorBitcoin = valorInserido / 210744;

  let dolarImprimido = document.getElementById("usdConvertido");
  let dolarConvertido = `O resultado em Dólar é aproximadamente: U$ ${valorDolar.toFixed(
    2
  )}`;
  dolarImprimido.innerHTML = dolarConvertido;

  let bitcoinImprimido = document.getElementById("btcConvertido");
  let bitcoinConvertido = `O resultado em Bitcoins é aproximadamente: BTC ${valorBitcoin.toFixed(
    8
  )}`;
  bitcoinImprimido.innerHTML = bitcoinConvertido;
}
