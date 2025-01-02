/**
 * Recebe string '1.200,50' e retorna o número 1200.50
 */

export default function moedaNumero(moeda: string):number | null {
   const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
   return isNaN(numero) ? null : numero; 
 
}