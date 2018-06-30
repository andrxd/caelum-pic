import { Component, OnInit } from '@angular/core';
import { FotoService } from '../services/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = `FotosTop`
  listaFotos: FotoComponent[]
  mensagem = new MensagemComponent()

  constructor(private servico: FotoService) {
    this.servico.listar().subscribe(
      fotosApi => {
        this.listaFotos = fotosApi
      }
    )
  }

  apagar(foto: FotoComponent) {
    this.servico.deletar(foto).subscribe(() => {
      this.listaFotos = this.listaFotos.filter(
        fotoDaLista => {
          if (fotoDaLista != foto) {
            return fotoDaLista
          }
          this.mensagem.texto = `${foto.titulo} exluida com sucesso`
          this.mensagem.tipo = 'success'
        })
    }, erro => {
      this.mensagem.texto = `Erro ao remover ${foto.titulo} `
      this.mensagem.tipo = 'danger'
    })
  }
  ngOnInit() {
  }

}