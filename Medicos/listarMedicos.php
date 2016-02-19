<?php
	function recoger_medicos(){
		$servername = "localhost";
        $username = "eusa15";
        $password = "eusa15";
        $dbname = "eusa15_bdphp";
  
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
           echo "Error!";
        }
        
        if (!mysqli_set_charset($conn, "utf8")) {
            mysqli_error($conn);
        } else {
            mysqli_character_set_name($conn);
        }
        $bandera= true;
        $sql="SELECT MEDICOS.APELLIDOS AS apellidos , MEDICOS.NOMBRE AS nombre , especialidades.nombre AS especialidad FROM MEDICOS, especialidades WHERE MEDICOS.ID_ESPECIALIDAD = especialidades.id";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                if ($bandera) {
                    echo "<tr class='alt'>".
                        "<td>".$row["nombre"]."</td>".
                        "<td>".$row["apellidos"]."</td>".
                        "<td>".$row["especialidad"]."</td>".
                    "</tr>";
                }else{
                    echo "<tr>".
                        "<td>".$row["nombre"]."</td>".
                        "<td>".$row["apellidos"]."</td>".
                        "<td>".$row["especialidad"]."</td>".
                    "</tr>";
                
                }
                    $bandera = !$bandera;
            }
        } else {
            echo "0 results";
        }
        $conn->close();
	}

    function recoger_centros(){
        $servername = "localhost";
        $username = "eusa15";
        $password = "eusa15";
        $dbname = "eusa15_bdphp";
  
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
           echo "Error!";
        }
        
        $sql="SELECT centros.nombre as nombre, centros.telefono as tel, centros.direccion as dir FROM centros";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<h2>".$row["nombre"]."</h2>"."<br/>".
                        "<p>Telefono: ".$row["tel"]."</p>"."<br/>".
                        "<p>Direccion: ".$row["dir"]."</p>"."<br/>";
            }
        } else {
            echo "0 results";
        }
        $conn->close();
    }

    function listar_Todo(){
        $servername = "localhost";
        $username = "eusa15";
        $password = "eusa15";
        $dbname = "eusa15_bdphp";
  
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
           echo "Error!";
        }
        
        if (!mysqli_set_charset($conn, "utf8")) {
            mysqli_error($conn);
        } else {
            mysqli_character_set_name($conn);
        }
        
        $sql="SELECT centros.nombre as nombre, centros.id as idC, centros.direccion as dir, centros.localidad as loc, centros.telefono as tel FROM centros";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {

                echo "<h2>".$row["nombre"]."</h2>".
"<p>Localidad: ".$row["loc"]."</p>".
                    "<p>Direccion: ".$row["dir"]."</p>".
                    "<p>Telefono: ".$row["tel"]."</p><br/>";
                
                $n = $row["idC"];
                $sql2= "SELECT MEDICOS.NOMBRE as nombre, MEDICOS.APELLIDOS as apellidos, especialidades.nombre as especialidad, HORARIOS.DIA as dias, HORARIOS.HORARIO as horario from MEDICOS, HORARIOS, especialidades where MEDICOS.ID_ESPECIALIDAD = especialidades.id and MEDICOS.ID_MEDICO=HORARIOS.ID_MEDICO and HORARIOS.ID_CENTRO=".$n."";
                $result2 = $conn->query($sql2);
                if($result2->num_rows > 0){

                    echo "<table><thead><tr><th>Apellidos</th><th>Nombre</th><th>Especialidad</th><th>Dias</th><th>Horario</th></tr></thead><tbody>";
                    $bandera = true;
                    while($row2 = $result2->fetch_assoc()){
                        if ($bandera) {
                            echo "<tr class='alt'>".
                                "<td>".$row2["apellidos"]."</td>".
                                "<td>".$row2["nombre"]."</td>".
                                "<td>".$row2["especialidad"]."</td>".
                                "<td>".$row2["dias"]."</td>".
                                "<td>".$row2["horario"]."</td>".
                            "</tr>";
                        }else{
                            echo "<tr>".
                                "<td>".$row2["apellidos"]."</td>".
                                "<td>".$row2["nombre"]."</td>".
                                "<td>".$row2["especialidad"]."</td>".
                                "<td>".$row2["dias"]."</td>".
                                "<td>".$row2["horario"]."</td>".
                            "</tr>";
                        }
                        $bandera = !$bandera;
                    }
                    echo "</tbody></table><br/><br/>";
                }
                
            }
        } else {
            echo "0 results";
        }
        $conn->close();
    }
?>






















