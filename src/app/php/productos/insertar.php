<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");


$ins = "INSERT into productos(codigo, nombre, precio_venta, stock, precio_compra, fo_marca) values('$params->codigo','$params->nombre', $params->precio_venta, $params->stock, $params->precio_compra, $params->fo_marca)"; 

 mysqli_query($conexion, $ins) or die ('no inserto');

 class Resault {} 

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Producto grabado';

 header('Content-Type: application/json');
 echo json_encode($response);

?>
