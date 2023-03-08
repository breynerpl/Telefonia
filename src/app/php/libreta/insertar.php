<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into libreta(nombre, domicilio, telefono) values('Prueba', 'prueba', 'Invitado')";
$ins = "insert into libreta(nombre, domicilio, telefono) values('$params->nombre', '$params->domicilio', '$params->telefono')";

 mysqli_query($conexion, $ins) or die ('no inserto');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Libreta grabada';

 header('Content-Type: application/json');
 echo json_encode($response);

?>