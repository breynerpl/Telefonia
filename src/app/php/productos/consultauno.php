<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");


public function consultauno($id){
    $con ="SELECT p.*, m.nombre AS nmarca FROM productos p 
    INNER JOIN marca m ON p.fo_marca = m.id_marca 
    WHERE p.id_productos = $id
    ORDER BY p.nombre";
    $res=mysqli_query($this->conexion,$con) or die ('no consulto marca');

    $vec=[];
    while ($reg=mysqli_fetch_array($res))
    {
        $vec[]=$reg;
    }
    return $vec;
}
$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');

?>