import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../app/services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.DTO';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  itens: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService
  ) {
  }

  ionViewDidLoad() {

    this.categoriaService.finAll()
      .subscribe(response => { 
        this.itens = response;
      },
      error => {}
    );
  }

}
