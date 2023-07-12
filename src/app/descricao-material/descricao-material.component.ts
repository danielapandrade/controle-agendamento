import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-descricao-material',
  templateUrl: './descricao-material.component.html',
  styleUrls: ['./descricao-material.component.css']
})
export class DescricaoMaterialComponent {

  apiUrl = '';
  materialList: any[] = [];

  material: string | null;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.material = this.route.snapshot.paramMap.get('material');
    })

    if (this.material === 'auditorio') {
      this.apiUrl = 'https://mocki.io/v1/fba6a83e-dee9-40b1-ae11-84f3fefeab5a'
    }

    if (this.material === 'projetor') {
      this.apiUrl = 'https://mocki.io/v1/f5cf1e64-4213-48b1-8c75-5a10e1d00707';
    }

    if (this.material === 'som') {
      this.apiUrl = 'https://mocki.io/v1/77538ab7-6be0-49a8-b1b6-9533c34908de';
    }


    if (this.material === 'eletronico') {
      this.apiUrl = 'https://mocki.io/v1/83d87ee3-9666-4a20-bc7b-c3e3d5c15417'
    }

    this.getMaterialList();
  }

  getMaterialList() {
    const promise = this.http.get<[]>(this.apiUrl).toPromise();

    return promise.then(
      (response: any) => {

        this.materialList = response;
      },
      (error: any) => {

        console.log(error);
      }
    );
  }
}


