import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 2, nome: 'Burguers'  },
    { codigo: 3, nome: 'Assados'   },
    { codigo: 4, nome: 'Cachorrão' }
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  public produtos = [
    { codigo: 1, categoria: 3, descricao: 'O melhor lanche de toda região, venha provar', nome: 'Hamburgão',         valor: 5.99, imagens: ['Hamburgao1.jpg'], visibled: false },
    { codigo: 2, categoria: 3, descricao: 'O melhor lanche de toda região, venha provar', nome: 'Lanche De Calabresa',            valor: 7.00, imagens: ['LancheDeCalabresa.jpg'], visibled: false },
    { codigo: 3, categoria: 3, descricao: 'O melhor lanche de toda região, venha provar', nome: 'Lanche De Tomate', valor: 12.00, imagens: ['LancheDeTomate.jpg'], visibled: false },
    { codigo: 4, categoria: 3, descricao: 'O melhor lanche de toda região, venha provar', nome: 'Lanche De presunto',           valor: 7.00, imagens: ['Lanchepresunto.jpg' ], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'A melhor pizza toda região, venha provar', nome: 'Pizza Da Casa',         valor: 30.90, imagens: ['pizza3.jpg' ], visibled: false },
    { codigo: 7, categoria: 1, descricao: 'A melhor pizza de toda região, venha provar', nome: 'Pizza Especial',        valor: 50.50, imagens: ['pizza2.jpg' ], visibled: false },
    { codigo: 8, categoria: 1, descricao: 'A melhor pizza de toda região, venha provar', nome: 'Pizza Simples',         valor: 34.60, imagens: ['pizza1.jpg' ], visibled: false },
    { codigo: 9, categoria: 1, descricao: 'A pizza  de toda região, venha provar', nome: 'Pizza Do Dia',              valor: 35.90, imagens: ['pizza4.jpg' ], visibled: false },
    { codigo: 10, categoria: 2, descricao: 'O melhor burger de toda região, venha provar', nome: 'Hambúrguer Da Casa',      valor: 22.20, imagens: ['Hamburguer1.jpg' ], visibled: false },
    { codigo: 11, categoria: 2, descricao: 'O melhor burger de toda região, venha provar', nome: 'Hambúrguer Simples',     valor: 22.50, imagens: ['Hamburguer2.jpg' ], visibled: false },
    { codigo: 12, categoria: 2, descricao: 'O melhor burger de toda região, venha provar', nome: 'Hambúrguer Do Dia',       valor: 17.95, imagens: ['Hamburguer3.jpg' ], visibled: false },
    { codigo: 13, categoria: 4, descricao: 'O melhor cachorrão de toda região, venha provar', nome: 'Cachorro De Bacon',                    valor: 8.00, imagens: ['CachorroBacon.jpg' ], visibled: false },
    { codigo: 14, categoria: 4, descricao: 'O melhor cachorrão de toda região, venha provar', nome: 'Cachorro De Calabresa',                      valor: 12.00, imagens: ['CachorroCalabresa.jpg' ], visibled: false },
    { codigo: 15, categoria: 4, descricao: 'O melhor cachorrão de toda região, venha provar', nome: 'Cachorro Simples',        valor: 18.00, imagens: ['CachorroSimples.jpg' ], visibled: false },
    { codigo: 16, categoria: 4, descricao: 'O melhor cachorrão de toda região, venha provar', nome: 'Cachorro Vegano',     valor: 18.00, imagens: ['CachorroVegano.jpg' ], visibled: false }
  
  ]

  public pathImgs = '../../assets/img/';

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
