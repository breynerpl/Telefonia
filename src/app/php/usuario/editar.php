<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);
$id = $_GET['id']; 
 

require("../conexion.php");

$editar = "UPDATE usuario SET nombre = '$params->nombre', correo ='$params->correo', clave = sha1 ('$params->clave'),
direccion ='$params->direccion', celular ='$params->celular' WHERE id_usuario =$id";
 
 mysqli_query($conexion, $editar) or die ('no edito');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Datos modificados';

 header('Content-Type: application/json');
 echo json_encode($response);

?>