import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { VentasService } from 'src/app/servicios/ventas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent  implements OnInit {
 
    //variables globales
  verf= false;
  ventas: any;
  idventas: any;
  productos: any;
  datop: any;
  sprod:any;
  arrprod:any =[];
  total:any;
  vent= {
    fecha: "",
    cantidad: "", 
    subtotal: "",
    total:"",
    vendedor:"",
    fo_producto:""
  };
  //variables fecha
  fecha: any;
  fechaa: any;
  diaa: any;
  mesa: any;
  yeara: any;
  dsema: any;
  //para validar
  validfecha =true;
  validcantidad =true;
  validsubtotal =true;
  validtotal =true;
  validvendedor =true;
  validfoproducto = true;
  beditar = false;
cantidad: any;
  
  
    constructor (private svent: VentasService, private sproducto:ProductosService) {}
  
  ngOnInit(): void {
    this.consulta();
    this.consulta_producto();
    this.limpiar(); 
    this.conproducto();
    this.fechac();
  }
  
  //fecha actual
  fechac(){
    const meses = ["", "Enero","Febrero","Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const diass =["", "Lunes","Martes","Miercoles","Jueves", "Viernes", "Sabado", "Domingo"];

  const f = new Date();
  this.yeara = f.getFullYear();
  this.diaa = f.getDate ();
  this.mesa = f.getMonth ();
  this.dsema = f.getDay ();
  this.fechaa = `${this.yeara}-${this.mesa}-${this.diaa}`;
let adia ="";
if (this.diaa < 10){
  adia = "0"+this.diaa;
  }else{
    adia = `${this.diaa}`;
  }
  this.fecha = `${diass[this.dsema]},${adia} de ${meses[this.mesa]} de  ${this.yeara}`;
  console.log(this.fecha);
  }
  //mostrar formulario
  mostrar(dato:any) {
    switch(dato){
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idventas = "";
        this.limpiar();
        break;
        case 1:
          this.verf = true;
          break;
    }
  } 
  
  // limpiar
  limpiar(){
    this.vent.fecha = "";
    this.vent.cantidad = "";
    this.vent.subtotal = "";
    this.vent.total = "";
    this.vent.vendedor = "";
    this.vent.fo_producto = "";
  }
  
  //validar
  validar(){
  if(this.vent.fecha == ""){
    this.validfecha =false;
  }else{
    this.validfecha = true;
  }
  if(this.vent.cantidad == ""){
    this.validcantidad =false;
  }else{
    this.validcantidad = true;
  }
  if(this.vent.subtotal == ""){
    this.validsubtotal =false;
  }else{
    this.validsubtotal = true;
  }
  if(this.vent.total == ""){
    this.validtotal =false;
  }else{
    this.validtotal = true;
  }
  if(this.vent.vendedor == ""){
    this.validvendedor =false;
  }else{
    this.validvendedor = true;
  }
  if(this.vent.fo_producto == ""){
    this.validfoproducto =false;
  }else{
    this.validfoproducto = true;
  }
  }
  consulta() {
    this.svent.consultar().subscribe((result:any) => {
      this.ventas = result;
      //console.log(this.ventas)
    }) 
  }
  consulta_producto() {
    this.svent.consultar_producto().subscribe((result:any) => {
      this.productos = result;
      console.log(this.ventas)
    }) 
  }
  ingresar() {
    //console.log(this.cat)
  this.validar();
  if(this.validfecha==true && this.validcantidad== true && this.validsubtotal== true && this.validtotal== true && this.validvendedor== true && this.validfoproducto== true){
    this.svent.insertar(this.vent).subscribe((datos:any) => {
      console.log(datos);
       datos['resultado']
      if (datos['resultado']=='OK') {
        //alert(datos['']);
        this.consulta();
      }
    });
    this.mostrar(0);
    this.limpiar();
  }
    
  }
  //consultar lista productos
  conproducto(){
    this.sproducto.consultar().subscribe((result:any) => {
      this.productos = result;
    })
  }
  bproducto(){
    if(this.datop==""){
      this,this.conproducto();
    }
    else{
      this.sproducto.filter(this.datop).subscribe((result:any) =>{
        this.productos= result;
      })
    }
  }
  selproducto(idp:number){
let cantidad = Number(prompt("Cuantos va a llevar?"));
//this.arrprod =[];
let largo =0;
this.total =0;
this.sproducto.consultaruno(idp).subscribe((result:any)=>{
  this.sprod = result;
  this.arrprod.push([Number(idp), this.sprod[0].nombre, this.sprod[0].codigo, Number(this.sprod
    [0].precio), Number(cantidad), this.sprod[0].precio * cantidad]);
    largo = this.arrprod.length;
    //console.log(largo);
    for(let i=0; i<largo; i++){
      this.total += this.arrprod[i][5];
    }
})
  }
}
