<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");

$del = "DELETE FROM compras WHERE id_compras=" .$_GET ['id'];
 mysqli_query($conexion, $del) or die ('no elimino');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Compra borrada';

 header('Content-Type: application/json');
 echo json_encode($response);

?>