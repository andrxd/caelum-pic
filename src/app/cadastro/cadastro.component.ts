import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem = new MensagemComponent()

  constructor(private servico: FotoService,
    private rotaAtiva: ActivatedRoute,
    private roteador: Router) {
    let fotoId = this.rotaAtiva.snapshot.params.fotoId

    if (fotoId) {
      this.servico
        .pesquisar(fotoId)
        .subscribe(
          fotoApi => this.foto = fotoApi
        )
    }

  }
  salvar() {
    if (this.foto._id) {
      this.servico.alterar(this.foto).subscribe(
        () => {

          this.mensagem.texto = `${this.foto.titulo} alterado com ssucesso`
          this.mensagem.tipo = 'success'

          setTimeout(() => {
            this.roteador.navigate([''])
          }, 3000);


        }
      )
    } else {
      this.servico.cadastrar(this.foto).subscribe(
        () => {
          this.mensagem.texto = `${this.foto.titulo} Cadastrada com sucesso`
          this.mensagem.tipo = 'success'
        }
        , error => {
          this.mensagem.texto = `Oops deu errado, tente novamente mais tarde`
          this.mensagem.tipo = 'danger'
        }
      )
    }
  }


  ngOnInit() {
  }


}
