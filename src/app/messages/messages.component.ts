import { Component } from '@angular/core';
import { Message } from 'src/bo/Message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages : Array<Message> = [
    new Message("Etienne", "Hello l'équipe ! Même souci qu'hier pour mon internet, je suis d'ores et déjà sur la route, mais il y a des gros bouchons ce matin. J'arrive au plus vite !", new Date(2023, 5, 12, 14, 27)),
    new Message("Thomas", "Ok", new Date(2023, 5, 12, 14, 27)),
    new Message("Hisseine", "Bonjour, noté.", new Date(2023, 5, 12, 14, 27)),
    new Message("Patrice", "Coucou pas de souci Hisseine va commencer le cours 👍<br>bonjour la team coucou Hisseine<br>à propos, ils recherchent sur Pôle emploi env 60 dev .Net sur Nantes<br>une trentaine sur Rennes", new Date(2023, 5, 12, 14, 27)),
    new Message("Hisseine", "Salut Patrice, merci de la confiance placée en moi, je préfère  le faire en chinois, comme ça, l'incompréhension sera totale. pas de questions posées 🤫 😆", new Date(2023, 5, 12, 14, 27)),
    new Message("Patrice", "je serais ravis d'y assister 😅", new Date(2023, 5, 12, 14, 27)),
    new Message("Hisseine", "Bon courage !", new Date(2023, 5, 12, 14, 27)),
    new Message("Raphaël", "J'arrive au plus vite teams fait n'importe quoi", new Date(2023, 5, 12, 14, 27))
  ];
}
