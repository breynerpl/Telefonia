<?php
header ('Access-Control-Allow-Origin; *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into marca(nombre) values('Prueba')";
$ins = "insert into marca( nombre) values('$params->nombre')";

 mysqli_query($conexion, $ins) or die ('no inserto');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Marca grabada';

 header('Content-Type: application/json');
 echo json_encode($response);

?>