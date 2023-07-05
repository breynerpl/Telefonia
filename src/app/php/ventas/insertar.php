<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into ventas(fecha, cantidad, subtotal, total, vendedor, cliente) values('Prueba', 'prueba', 'prueba', 'prueba', 'Invitado')";
$ins = "INSERT into ventas(fecha, cantidad, subtotal, total, vendedor, fo_producto, cliente) values('$params->fecha', '$params->cantidad', '$params->subtotal', '$params->total', '$params->vendedor', '$params->fo_producto', '$params->cliente')";

 mysqli_query($conexion, $ins) or die ('no inserto');

 class Resault {} 

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Venta grabados';

 header('Content-Type: application/json');
 echo json_encode($response);

?>