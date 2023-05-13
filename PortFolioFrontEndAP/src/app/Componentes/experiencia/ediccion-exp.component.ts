import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ediccion-exp',
  templateUrl: './ediccion-exp.component.html',
  styleUrls: ['./ediccion-exp.component.css']
})
export class EdiccionExpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public regresarPrincipal() {
    this.router.navigate(['']);
}
}
