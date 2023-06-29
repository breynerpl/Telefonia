import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

   //variables globales
verf= false;
productos: any;
marca: any;
idprod: any;
product= {
  codigo: "",
  nombre: "",
  fo_marca: 0,
  precio_venta: 0, 
  precio_compra: 0,
  stock:0,
  
};
//para validar
validcodigo =true;
validnombre =true;
validpventa =true;
validpcompra =true;
validstock =true;
validfomarca= true;
beditar = false;


  constructor (private sproducto:ProductosService) {}

ngOnInit(): void {
  this.consulta();
  this.consulta_marca();
  //this.limpiar(); 
}

//mostrar formulario
mostrar(dato:any) {
  switch(dato){
    case 0:
      this.verf = false;
      this.beditar = false;
      this.idprod = "";
      //this.limpiar();
      break;
      case 1:
        this.verf = true;
        break;
  }
}

// limpiar
limpiar(){
  this.product.codigo = "";
  this.product.nombre = "";
  this.product.fo_marca = 0;
  this.product.precio_venta = 0;
  this.product.precio_compra = 0;
  this.product.stock= 0;
}

//validar
validar(){
  if(this.product.codigo == ""){
    this.validcodigo =false;
  }else{
    this.validcodigo = true;}
if(this.product.nombre == ""){
  this.validnombre =false;
}else{
  this.validnombre = true;}

if(this.product.fo_marca == 0){
  this.validfomarca =false;
}else{
  this.validfomarca = true;}
if(this.product.precio_venta == 0){
  this.validpventa =false;
}else{
  this.validpventa= true;}
if(this.product.precio_compra == 0){
  this.validpcompra =false;
}else{
  this.validpcompra = true;}
  if(this.product.stock == 0){
    this.validstock =false;
  }else{
    this.validstock = true;}
  }
consulta() {
  this.sproducto.consultar().subscribe((result:any) => {
    this.productos = result;
    console.log(this.productos)
  }) 
}
consulta_marca() {
  this.sproducto.consultar_marca().subscribe((result:any) => {
    this.marca = result;
    console.log(this.productos)
  }) 
}
ingresar() {
  //console.log(this.cat)
this.validar();
if(this.validcodigo==true && this.validnombre== true && this.validfomarca== true && this.validpventa== true && this.validpcompra== true && this.validstock== true){
  this.sproducto.insertar(this.product).subscribe((datos:any) => {
    if (datos['resultado']=='OK') {
      //alert(datos['mensaje']);
      this.consulta();
    }
  });
  this.mostrar(0);
  this.limpiar();
}
  
}
cargardatos(datos:any, id: number){
  //console.log(datos);
  this.product.codigo = datos.codigo;
  this.product.nombre = datos.nombre;
  this.product.fo_marca = datos.fo_marca;
  this.product.precio_venta = datos.precio_venta;
  this.product.precio_compra = datos.precio_compra;
  this.product.stock = datos.stock;
  this.idprod = id;
  this.mostrar(1);
  this.beditar=true;
}
editar(){
   //console.log(this.cat)
this.validar();
if(this.validcodigo==true && this.validnombre== true && this.validfomarca== true && this.validpventa== true && this.validpcompra== true && this.validstock== true){
  this.sproducto.edit(this.product, this.idprod).subscribe((datos:any) => {
    if (datos['resultado']=='OK') {
      //alert(datos['mensaje']);
      this.consulta();
    }
  });
  this.mostrar(0);
  
}
}
}


