<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

$editar = "UPDATE productos SET codigo ='$params->codigo',nombre = '$params->nombre', precio_venta = $params->precio_venta, fo_marca = $params->fo_marca, precio_compra=  $params->precio_compra, stock = $params->stockWHERE id_productos =$params->id_productos";
 
 mysqli_query($conexion, $editar) or die ('no edito');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Datos modificados';

 header('Content-Type: application/json');
 echo json_encode($response);

 ?>