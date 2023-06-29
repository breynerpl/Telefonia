import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/servicios/compras.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
 //variables globales
 verf= false;
 compras: any;
 idcompras: any;
 comp= {
  fecha: "",
  cantidad: "", 
  subtotal: "",
  total:"",
  impuesto:""
 };
 //para validar
 validfecha =true;
validcantidad =true;
validsubtotal =true;
validtotal =true;
validimpuesto =true;
 beditar = false;
 
 
   constructor (private scomp: ComprasService) {}
 
 ngOnInit(): void {
   this.consulta();
   this.limpiar(); 
 }
 
 //mostrar formulario
 mostrar(dato:any) {
   switch(dato){
     case 0:
       this.verf = false;
       this.beditar = false;
       this.idcompras = "";
       this.limpiar();
       break;
       case 1:
         this.verf = true;
         break;
   }
 }
 
 // limpiar
 limpiar(){
   this.comp.fecha = "";
   this.comp.cantidad = "";
   this.comp.subtotal = "";
   this.comp.total = "";
   this.comp.impuesto = "";
 }
 
 //validar
 validar(){
  if(this.comp.fecha == ""){
    this.validfecha =false;
  }else{
    this.validfecha = true;
  }
  if(this.comp.cantidad == ""){
    this.validcantidad =false;
  }else{
    this.validcantidad = true;
  }
  if(this.comp.subtotal == ""){
    this.validsubtotal =false;
  }else{
    this.validsubtotal = true;
  }
  if(this.comp.total == ""){
    this.validtotal =false;
  }else{
    this.validtotal = true;
  }
  if(this.comp.impuesto == ""){
    this.validimpuesto =false;
  }else{
    this.validimpuesto = true;
  }
  }
 consulta() {
   this.scomp.consultar().subscribe((result:any) => {
     this.compras = result;
     //console.log(this.usuario)
   }) 
 }
 ingresar() {
   //console.log(this.cat)
 this.validar();
 if(this.validfecha==true && this.validcantidad== true && this.validsubtotal== true && this.validtotal== true && this.validimpuesto== true){
   this.scomp.insertar(this.comp).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.consulta();
     }
   });
   this.mostrar(0);
   this.limpiar();
 }
   
 }
}
