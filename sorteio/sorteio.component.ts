import { Component, OnInit } from '@angular/core';
import { AdivinhaService } from '../modelo/adivinha.service';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {
  palpite: number;
  message: string;
  constructor(private adv: AdivinhaService) { }

  ngOnInit() {
    this.adv.gerarNumero(1, 20);
  }
  check() {
    this.message = this.adv.sortear(this.palpite);
  }
}
