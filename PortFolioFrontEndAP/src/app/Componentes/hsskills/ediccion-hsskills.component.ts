import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ediccion-hsskills',
  templateUrl: './ediccion-hsskills.component.html',
  styleUrls: ['./ediccion-hsskills.component.css']
})
export class EdiccionHsskillsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
}
}
