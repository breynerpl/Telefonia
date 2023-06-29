<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into bodega(fecha, cantidad, stock) values('Prueba', 'prueba', 'Invitado')";
$ins = "insert into bodega(fecha, cantidad, stock, nom_encargado, fo_producto) values('$params->fecha', '$params->cantidad', '$params->stock', '$params->nom_encargado',$params->fo_producto)";

 mysqli_query($conexion, $ins) or die ('no inserto');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Stock grabado';

 header('Content-Type: application/json');
 echo json_encode($response);

?>