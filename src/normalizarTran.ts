import moedaNumero from "./moedaNumero.js";
import stringToDate from "./stringData.js";

type TransacaoPagamento = 'Cartão de Crédito' | 'Boleto';
type TransacaoStatus = "Paga" | "Recusada pela opreadora de cartão" | "Aguardando pagamento" | "Estornada";

export interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ['Valor (R$)']: string;
    ['Forma de Pagamento']: TransacaoPagamento;
    ['Cliente Novo']: number
}


export interface Transacao {
    nome: string;
    id: number;
    data: string;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
}



export default function normalizarTransacao(transacao: TransacaoAPI) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: stringToDate(transacao.Data),
        status: transacao.Status,
        email: transacao.Status,
        moeda: transacao["Valor (R$)"],
        valor: moedaNumero(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    }
}

