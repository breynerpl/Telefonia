<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into compras(fecha, cantidad, subtotal, total, impuesto) values('Prueba', 'prueba', 'prueba', 'prueba', 'Invitado')";
$ins = "insert into compras(fecha, cantidad, subtotal, total, impuesto) values('$params->fecha', '$params->cantidad', '$params->subtotal', '$params->total', '$params->impuesto')";

 mysqli_query($conexion, $ins) or die ('no inserto');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Compra grabada';

 header('Content-Type: application/json');
 echo json_encode($response);

 ?>
