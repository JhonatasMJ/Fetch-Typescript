import fetchData from "./fetchData.js";
import normalizarTransacao, { TransacaoAPI } from "./normalizarTran.js";




async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?");

  if(!data) return;
   const transacoes = data.map(normalizarTransacao);
   transacoes.forEach (item => {
    item.data.getHours()
   })
}

handleData();