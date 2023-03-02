<?php
header ('Access-Control-Allow-Origin; *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

$editar = "UPDATE marca SET nombre ='$params->nombre'  WHERE id_marca =$params->id_marca";
 
 mysqli_query($conexion, $editar) or die ('no edito');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Datos modificados';

 header('Content-Type: application/json');
 echo json_encode($response);

 ?>