	<!DOCTYPE html>
	<html>
	<head>
		<!--<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />-->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<link rel="shortcut icon" type="image/x-icon" href="../images/logoeusa.png" />
		<title>Payroll Corporate category Flat Bootstrap responsive Website Template| Contact :: w3layouts</title>
		<link href="../../css/bootstrap.css" rel="stylesheet" type="text/css"/>
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="js/jquery.min.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="keywords" content="Payroll Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template,
		Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
		<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
		<link rel="stylesheet" href="../../css/flexslider.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="medicamentos.css" type="text/css" media="screen" />
		<link href="../../css/style.css" rel="stylesheet" type="text/css" media="all" />
		<link href='//fonts.googleapis.com/css?family=Ubuntu:300,400,500,700,300italic,400italic,500italic,700italic' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Bree+Serif' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Anton' rel='stylesheet' type='text/css'>
		<!---- start-smoth-scrolling---->
		<script type="text/javascript" src="js/move-top.js"></script>
		<script type="text/javascript" src="js/easing.js"></script>
		<script type="text/javascript">
			jQuery(document).ready(function ($) {
				$(".scroll").click(function (event) {
					event.preventDefault();
					$('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
				});
			});
		</script>
		<script src="js/jquery.easydropdown.js"></script>
		<script src="js/cbpViewModeSwitch.js" type="text/javascript"></script>


	</head>
	<body>

		<div class="header">
			<div class="container">	
				<div class="logo">
					<a href="../index.html"><img src="../images/logo.png" alt=""/></a>
				</div>
				<div class="top-menu">
					<span class="menu"> </span>
					<ul>
						<li><a  href="../index.html">Inicio</a></li>
						<li><a href="../Triaje/triaje.php">Triaje</a></li>
						<li><a href="../Medicos/Medicos.php">Médicos</a></li>
						<li><a href="../Contacto/contactos.html">Contactos</a></li>
					</ul>
				</div>
				<script>
					$("span.menu").click(function () {
						$(".top-menu ul").slideToggle("slow", function () {
						});
					});
				</script>
				<!-- script-for-menu -->
				<!-- start search-->
				<div class="search-box">
					<div id="sb-search" class="sb-search">
						<form>
							<input class="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search">
							<input class="sb-search-submit" type="submit" value="">
							<span class="sb-icon-search"> </span>
						</form>
					</div>
				</div>
				<!-- search-scripts -->
				<script src="js/classie.js"></script>
				<script src="js/uisearch.js"></script>
				<script>
					new UISearch(document.getElementById('sb-search'));
				</script>
				<!-- //search-scripts -->
				<div class="clearfix"></div>
			</div>

			<!-- script-for-nav -->
			<script>
				$(document).ready(function () {
					$("span.menu").click(function () {
						$(".top-nav ul").slideToggle(1000);
					});
				});
			</script>
			<!-- script-for-nav -->
			<!-- /top-nav -->
			<div class="clearfix"></div>
		</div>
	</div>
	<!-- header-section-ends -->
	<div class="banner">
		<div class="container">
			<?php
				// Conectando, seleccionando la base de datos
			$servername = "localhost";
			$username = "eusa15";
			$password = "eusa15";
			$dbname = "eusa15_bdphp";

				// Create connection
			$link = new mysqli($servername, $username, $password, $dbname);
				// Check connection

			if ($link->connect_error) {
				die("Connection failed: " . $link->connect_error);
			}
		
			if (!mysqli_set_charset($link, "utf8")) {
	            mysqli_error($link);
	        } else {
	            mysqli_character_set_name($link);
	        }
			//Coger parametros de respuestas
			if (isset($_POST['sexo']) && isset($_POST['idparte']) && isset($_POST['idpreg1']) 
				&& isset($_POST['idpreg2']) && isset($_POST['edad'])) {
				$sexo=$_POST['sexo'];
			$parte=$_POST['idparte'];
			$preg1=$_POST['idpreg1'];
			$preg2=$_POST['idpreg2'];
			$edad=$_POST['edad'];
					//Realizar una consulta para sacar id diagnostico
			$sql = "SELECT idDiagnostico FROM relaciondiagnostico WHERE idSexo=$sexo and idParte=$parte and idPreg1=$preg1 and idPreg2=$preg2";
			$result = $link->query($sql);

			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					$id=$row["idDiagnostico"];
				}
			} else {
				$id=0;
			}
			echo '<h3>Diagnóstico</h3></div>
		</div>';
				// Realizar una consulta MySQL
		$sql = "SELECT nombre, descripcion FROM diagnosticos WHERE id=$id";
		$result = $link->query($sql);

		if ($result->num_rows > 0) {
					// output data of each row
			while($row = $result->fetch_assoc()) {
				echo "<h4 style='color:#000000'>Nombre: ".$row["nombre"]."</h4><br/><h4 style='color:#000000'>Descripción: ".$row["descripcion"]."</h4>";
			}
		} else {
			echo "0 results";
		}
		if($id == 0){
			echo "<h1>NO SABEMOS QUE TIENE USTED CONTACTE CON EL MEDICO</h1>";
			echo "<a href='../Medicos/Medicos.php'>Medicos</a>";
		}else{
			$query = "SELECT NOMBRE, DESCRIPCION,TIPO FROM MEDICAMENTOS WHERE ID_MEDICAMENTO IN (SELECT ID_MEDICAMENTO FROM RECETAS WHERE ID_DIAGNOSTICO = ".$id.")";
			$result = $link->query($query);
			echo '
		</div>
	</div>

	<div class="content">
		<div class="contact-text">
			<div class="container">
				<h3>Medicaci&oacuten</h3>
				<table><thead>
					<tr class="alt">
						<th>Nombre</th>
						<th>Descripción</th>
						<th>Tipo</th>
					</tr></thead><tbody';
					$band = true;
					while ($line = $result->fetch_assoc()) {
						if($band){
							echo "<tr class='alt'>";
							foreach ($line as $col_value) {
								echo "<td>$col_value</td>";
							}
							echo "</tr>";
						}else{
							echo "<tr>";
							foreach ($line as $col_value) {
								echo "<td>$col_value</td>";
							}
							echo "</tr>";
						}
						$band = !$band;
					}

					echo "</tbody></table><br/><br/>";

							//mysql_free_result($result);

					$sql="SELECT DIAGNOSTICO_ESPECIALIDAD.ID_ESPECIALIDAD AS ids_especialidad FROM DIAGNOSTICO_ESPECIALIDAD WHERE DIAGNOSTICO_ESPECIALIDAD.ID_DIAGNOSTICO = ".$id."";
					$result = $link->query($sql);
					$array = array();
					if ($result->num_rows > 0) {
								// output data of each row
						while($row = $result->fetch_assoc()) {
							$array[] = $row["ids_especialidad"];
						}
					} else {
						echo "0 results";
					}

					$ids_esp = join(',',$array);


					echo "<table><thead><tr><th>Apellidos</th><th>Nombre</th><th>Especialidad</th></thead><tbody>";
					$bandera= true;
					$sql="SELECT MEDICOS.APELLIDOS AS apellidos , MEDICOS.NOMBRE AS nombre , especialidades.nombre AS especialidad FROM MEDICOS, especialidades WHERE MEDICOS.ID_ESPECIALIDAD = especialidades.id AND MEDICOS.ID_ESPECIALIDAD IN (".$ids_esp.")";
					$result = $link->query($sql);
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
					echo "</tbody></table>";
				}
			}else{

				echo "<br/><h1 style='color:#FFFFFF;'>Diagnóstico</h1> </div>
			</div>";
			echo "<div class='contact-details'>
			<div class='container'>
				<p> Lo sentimos, no hemos encontrado ningun diagnostico para usted.<br/> Puede consultar nuestros m?dicos. </p>
				<button> <a href='../Medicos/Medicos.php'>Nuestros M?dicos</a></button>
			</div>
		</div>";
	}
	?>
	<br/>
	<br/>
</div>
</div>

<div class="footer">
	<div class="container">
		<div class="clearfix"></div>
		<div class="footer-bottom">
			<p> Copyright &copy;2015 Payroll.  All rights  Reserved | Template by<a href="http://w3layouts.com" target="target_blank">W3Layouts</a></p>
		</div>
		<script type="text/javascript">
			$(document).ready(function () {
	                        /*
	                         var defaults = {
	                         containerID: 'toTop', // fading element id
	                         containerHoverID: 'toTopHover', // fading element hover id
	                         scrollSpeed: 1200,
	                         easingType: 'linear'
	                         };
	                         */

	                         $().UItoTop({easingType: 'easeOutQuart'});

	                     });
	                 </script>
	                 <a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
	             </div>
	         </div>
	     </body>
	     </html>	