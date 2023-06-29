import { Component, OnInit } from '@angular/core';
import { BodegaService } from 'src/app/servicios/bodega.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.scss']
})
export class BodegaComponent implements OnInit {
//variables globales
verf= false;
bodega: any;
idbodega: any;
productos:any;  
bode= { 
  fecha: "",
  cantidad: "", 
  stock: "",
  nom_encargado:"",
  fo_producto:""
};
//para validar
validfecha =true;
validcantidad =true;
validstock =true;
validnomencargado =true;
validfoproducto =true;
beditar = false;
  

  constructor (private sbode: BodegaService) {}

ngOnInit(): void {
  this.consulta();
  this.consulta_product();
  this.limpiar(); 
}

//mostrar formulario
mostrar(dato:any) {
  switch(dato){
    case 0:
      this.verf = false;
      this.beditar = false;
      this.idbodega = "";
      this.limpiar();
      break;
      case 1:
        this.verf = true;
        break;
  }
}

// limpiar
limpiar(){
  this.bode.fecha = "";
  this.bode.cantidad = "";
  this.bode.stock = "";
  this.bode.nom_encargado = "";
  this.bode.fo_producto = "";
}

//validar
validar(){
if(this.bode.fecha == ""){
  this.validfecha =false;
}else{
  this.validfecha = true;
}
if(this.bode.cantidad == ""){
  this.validcantidad =false;
}else{
  this.validcantidad = true;
}
if(this.bode.stock == ""){
  this.validstock =false;
}else{
  this.validstock = true;
}
if(this.bode.nom_encargado == ""){
  this.validnomencargado =false;
}else{
  this.validnomencargado = true;
}
if(this.bode.fo_producto == ""){
  this.validfoproducto =false;
}else{
  this.validfoproducto = true;
}
}
consulta() {
  this.sbode.consultar().subscribe((result:any) => {
    this.bodega = result;
    //console.log(this.ventas)
  }) 
}
consulta_product() {
  this.sbode.consultar_producto().subscribe((result:any) => {
    this.productos = result;
    console.log(this.bodega)
  }) 
}
ingresar() {
  //console.log(this.cat)
this.validar();
if(this.validfecha==true && this.validcantidad== true && this.validstock== true && this.validnomencargado== true &&this.validfoproducto== true){
  this.sbode.insertar(this.bode).subscribe((datos:any) => {
    if (datos['resultado']=='OK') {
      //alert(datos['mensaje']);
      this.consulta();
    }
  });
  this.mostrar(0);
  this.limpiar();
}
  
}
pregunta (id: any, nombre:any) {
  console.log("Entro con el id" + id)
  Swal.fire({
    title: '¿Esta seguro de eliminar el usuario '+ nombre +'?',
    text: "El proceso no podra ser revertido!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.borrarusuario(id);
      Swal.fire(
        'Eliminado!',
        'El usuario ha sido eliminado.',
        'success'
      )
    }
  })
}
borrarusuario(id:any){
  console.log(id);
  this.sbode.eliminar(id).subscribe((datos: any) =>{
    if (datos['resultado']=='OK'){
      this.consulta();
    }
  });

}
cargardatos(datos:any, id: number){ 
  //console.log(datos);
  this.bode.fecha = datos.fecha;
  this.bode.cantidad= datos.cantidad;
  this.bode.stock = datos.stock;
  this.bode.nom_encargado = datos.nom_encargado;
  this.bode.fo_producto = datos.fo_producto;
  this.idbodega = id;
  this.mostrar(1);
  this.beditar=true;
}
editar(){
   //console.log(this.cat)
this.validar();
if(this.validfecha==true && this.validcantidad== true && this.validstock== true && this.validnomencargado== true && this.validfoproducto== true){
  this.sbode.edit(this.bode, this.idbodega).subscribe((datos:any) => {
    if (datos['resultado']=='OK') {
      //alert(datos['mensaje']);
      this.consulta();
      this.consulta_product();
    }
  });
  this.mostrar(0);
  
}
}
}
