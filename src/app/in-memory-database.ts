import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {

  createDb() {

    const categories: Category[] = [
      { id: 1, name: 'Lazer', description: 'Cinema, parques, shows' },
      { id: 2, name: 'Moradia', description: 'Pagamento das contas da casa' },
      { id: 3, name: 'Transporte', description: 'Combustível, Uber' },
      { id: 4, name: 'Saúde', description: 'Plano de saúde e remédios' },
      { id: 5, name: 'Salário', description: 'Recebimento de salário' },
      { id: 6, name: 'Freelas', description: 'Trabalhos como freelancer' },
    ];

    return { categories };

  }
}
