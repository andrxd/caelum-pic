import { Component, Input } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from "../services/foto.service";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styles:[]
})

export  class CardComponent{
    @Input() foto : FotoComponent

    // constructor(private servico: FotoService){

    // }

    // apagar(foto){
    //     this.servico.deletar(foto).subscribe()
    // }
}

