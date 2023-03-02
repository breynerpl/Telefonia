<?php
header ('Access-Control-Allow-Origin; *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into proveedor(nombre) values('Prueba')";
$ins = "insert into proveedor( nombre) values('$params->nombre')";

 mysqli_query($conexion, $ins) or die ('no inserto');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Proveedor grabado';

 header('Content-Type: application/json');
 echo json_encode($response);

?>