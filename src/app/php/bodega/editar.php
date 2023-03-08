<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

$editar = "UPDATE bodega SET fecha = '$params->fecha', cantidad ='$params->cantidad',
stock ='$params->stock' WHERE id_bodega =$params->id_bodega";
 
 mysqli_query($conexion, $editar) or die ('no edito');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Datos modificados';

 header('Content-Type: application/json');
 echo json_encode($response);

?>