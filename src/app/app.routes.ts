import { RouterModule, Routes } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const rotasApp: Routes = [
    { path: "", component: ListagemComponent },    
    { path: "cadastro/:fotoId", component: CadastroComponent },
    { path: "cadastro", component: CadastroComponent },
    { path: '**', redirectTo: "" }
]
export const ModuloRoteamento = RouterModule.forRoot(rotasApp)