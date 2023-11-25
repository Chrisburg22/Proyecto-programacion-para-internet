<?php
/* Recibir datos desde la aplicación */
// Variable interna/Variable externa/
$var2 = $_GET['correo'];
$var3 = $_GET['password'];

//echo "Enviaste estos Datos: $var1, $var2, $var3";

// Credenciales del Servidor de Base De Datos. 
$server= "localhost";
$user= "id21230535_arcticg";
$pass= "P1rapapa!";
$bd= "id21230535_datos";

// Conexión a la Base De Datos
$cone = mysqli_connect($server,$user,$pass,$bd);

if(!$cone){
    die("AY MI MADRE, ERROR AL CONECTARSE A LA BASE DE DATOS!");
}

$sql = "SELECT * FROM DatosP WHERE Correo = '$var2'";
$resultado = mysqli_query ($cone,$sql);
if (mysqli_num_rows($resultado)>0){
    while($row=mysqli_fetch_assoc($resultado)){
        $nombre = $row ['Nombre'];
        $password = $row ['Password'];
    }
    if (password_verify($var3,$password)){
         echo $nombre;  
    } else {
        echo "0";
    }
} else {
    echo "3";
}
mysqli_close($cone);
?>