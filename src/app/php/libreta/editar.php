<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

$editar = "UPDATE libreta SET  nombre ='$params->nombre', domicilio = '$params->domicilio',
telefono ='$params->telefono' WHERE id_libreta =$params->id_libreta";
 
 mysqli_query($conexion, $editar) or die ('no edito');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Datos modificados';

 header('Content-Type: application/json');
 echo json_encode($response);

 ?>