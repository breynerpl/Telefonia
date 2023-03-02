<?php
header ('Access-Control-Allow-Origin; *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

$editar = "UPDATE compras SET fecha = '$params->fecha', cantidad ='$params->cantidad', subtotal = '$params->subtotal',
total ='$params->total', impuesto ='$params->impuesto' WHERE id_compras =$params->id_compras";
 
 mysqli_query($conexion, $editar) or die ('no edito');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Compra modificada';

 header('Content-Type: application/json');
 echo json_encode($response);

 ?>
