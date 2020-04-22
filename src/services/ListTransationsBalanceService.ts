import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface ListTransactionsBalance {
  transactions: Transaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
}

class ListTransactionsBalanceService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): ListTransactionsBalance {
    const transactions = this.transactionsRepository.all();

    if (transactions.length === 0) {
      throw Error('No transactions were made');
    }

    const balance = this.transactionsRepository.getBalance();

    const listTransationsBalance = {
      transactions,
      balance,
    };

    return listTransationsBalance;
  }
}

export default ListTransactionsBalanceService;
