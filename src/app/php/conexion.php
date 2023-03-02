<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$bd = "basetelefonia";

$conexion = mysqli_connect ($servidor, $usuario, $clave) or die ("no se concecto a mysql");
mysqli_select_db ($conexion, $bd) or die ("no se encontro la base de datos");


?>