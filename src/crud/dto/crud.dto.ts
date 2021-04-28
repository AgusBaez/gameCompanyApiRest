//data transfer objet = Define los datos que se envian entre el cliente y servidor
export class CreateJugadorDTO {
    id: number;
    firstname: string;
    email: string;
    status: number;
    credit: string;
    createAt: Date;
}
