import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {

  createDb() {

    const categories = [
      { id: 1, name: 'Lazer', description: 'Cinema, parques, shows' },
      { id: 1, name: 'Moradia', description: 'Pagamento das contas da casa' },
      { id: 1, name: 'Transporte', description: 'Combustível, Uber' },
      { id: 1, name: 'Saúde', description: 'Plano de saúde e remédios' },
      { id: 1, name: 'Salário', description: 'Recebimento de salário' },
      { id: 1, name: 'Freelas', description: 'Trabalhos como freelancer' },
    ];

    return { categories };

  }
}
