<?php
header ('Access-Control-Allow-Origin; *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into usuario(nombre, correo, clave, direccion, celular) values('Prueba', 'prueba@gmail.com', sha1 ('12345'), 'Invitado', 'Invitado')";
$ins = "insert into usuario(nombre, correo, clave, direccion, celular) values('$params->nombre', '$params->correo', sha1('$params->clave'), '$params->direccion' '$params->celular')";

 mysqli_query($conexion, $ins) or die ('no inserto');

 class Resault {}

 $response = new Resault ();
 $response->resultado = 'OK';
 $response->mensaje = 'Datos grabados';

 header('Content-Type: application/json');
 echo json_encode($response);

?>