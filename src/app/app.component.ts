import { Component, OnInit } from '@angular/core';

import '../assets/css/style.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    calculadora: string;
    valor: string;
    sinal : string;
    total : number;
    resultado: number;
    numero: string;

    constructor() {
        this.title = "CALCULADORA";
        this.calculadora = '';
        this.resultado = 0;
        this.valor = '';
        this.numero = '';
    }

    ngOnInit(): void {
    }

    
    // LIMPAR TELA DA CALCULADORA    
    clean(){
        this.calculadora = '';
        this.resultado = 0;
        this.sinal='';
        this.valor = '';
        this.numero = '';
    }

    Numero(valor){
        this.calculadora = this.calculadora + valor;
        this.numero = this.numero + valor;
    }

    Somar(){
        this.valor = this.calculadora;
        if(this.valor == ''){ //verifica se o usuário digitou algum número
            this.calculadora = '';
        }
        else{
            this.calculadora = this.valor + '+';
            this.resultado = (this.resultado) + (parseInt(this.numero));
            this.sinal = '+';
            this.numero = '';
        }
    }

    Subtrair(){
        this.valor = this.calculadora;
        if(this.valor == ''){ //verifica se o usuário digitou algum número
            this.calculadora = '';
        }
        else{
            this.calculadora = this.valor + '-';
            this.resultado = (parseInt(this.numero)) - (this.resultado);
            this.sinal = '-';
            this.numero = '';
        }
    }

    Multiplicar(){
        this.valor = this.calculadora;
        if(this.valor == ''){ //verifica se o usuário digitou algum número
            this.calculadora = '';
        }
        else{
            this.calculadora = this.valor + 'x';
            this.resultado = parseInt(this.numero);
            this.sinal = 'x';
            this.numero = '';
        }
    }

    Resultado(){
        if(this.sinal == '+'){
            this.calculadora = String((this.resultado) + parseInt(this.numero));
        }
        if(this.sinal == '-'){
            this.calculadora = String((this.resultado) - parseInt(this.numero));
        }
        if(this.sinal == 'x'){
            this.calculadora = String((this.resultado) * parseInt(this.numero));   
        }

        //Permite que o resultado na tela seja usado para novas operações
        this.numero = this.calculadora;
        this.resultado = 0;
    }
    
}
