import { Observable, of, throwError } from "rxjs";

export class TransformTitleTo {

    public static link(title: string): Observable<string> {
        // Remove espaços e converte para minúsculas
        let linkValido = title.toLowerCase().replace(/\s+/g, '-');

        // Substitui caracteres especiais
        linkValido = linkValido.replace(/[áàãâä]/g, 'a');
        linkValido = linkValido.replace(/[éèêë]/g, 'e');
        linkValido = linkValido.replace(/[íìîï]/g, 'i');
        linkValido = linkValido.replace(/[óòõôö]/g, 'o');
        linkValido = linkValido.replace(/[úùûü]/g, 'u');
        linkValido = linkValido.replace(/ç/g, 'c');

        // Remove caracteres especiais
        const linkSemEspeciais = linkValido.replace(/[^\w\-]+/g, '');

        return of(linkSemEspeciais);
    }
}