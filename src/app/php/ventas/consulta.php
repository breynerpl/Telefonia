<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");
//$con = "select * from ventas order by fecha";
$con = "SELECT v.*, p.nombre AS mproducto FROM ventas v 
        INNER JOIN productos p ON v.fo_producto = p.id_productos 
        ORDER BY v.fecha"; 
$res =mysqli_query($conexion, $con) or die('no consulto ventas');

$vec =[];
while ($reg=mysqli_fetch_array($res))
{
    $vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');

?>