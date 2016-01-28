<!DOCTYPE html>
<html>
    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <title>Payroll Corporate category Flat Bootstrap responsive Website Template| Contact :: w3layouts</title>
        <link href="../../css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="js/jquery.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="Payroll Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template,
              Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
        <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
        <link rel="stylesheet" href="../../css/flexslider.css" type="text/css" media="screen" />
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
                    <a href="index.html"><img src="images/logo.png" alt=""/></a>
                </div>
                <div class="top-menu">
                    <span class="menu"></span>
                    <ul>
                        <li><a href="index.html">home</a></li>
                        <li><a href="portfolio.html">portfolio</a></li>
                        <li><a href="about.html">about</a></li>
                        <li><a class="active" href="contact.html">contact<lable><img src="images/line.png"></lable></a></li>
                        <li><a class="last" href="blog.html">blog</a></li>
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
			$diagnosticonombre = $_POST["nombreDiagnostico"];
		$diagnosticodescripcion = $_POST["descripcionDiagnostico"];
		echo	"<h3>Diagnostico</h3>
			<table>
				<tr>
				<th>Enfermedad</th><th>Descripcion</th>
				</tr>
				<tr>
				<td>".diagnosticonombre."</td>
				<td>".diagnosticodescripcion."</td>
				</tr>
			</table>"
		
		?>
            <h3>medicamentos</h3>
        </div>
    </div>
    <div class="content">
        <div class="contact-text">
            <div class="container">
                <h3>Medicación</h3>
                <table border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Tipo</th>
                    </tr>
                    <?php
                    // Conectando, seleccionando la base de datos
                    $link = mysql_connect('localhost', 'eusa15', 'eusa15')
                            or die('No se pudo conectar: ' . mysql_error());
                    mysql_select_db('eusa15_bdphp') or die('No se pudo seleccionar la base de datos');
                    $iddiagnostico = $_POST["diagnostico"];
					if($iddiagnostico == 0){
						echo "<h1>NO SABEMOS QUE TIENE USTED CONTACTE CON EL MEDICO</h1>";
						echo "<a href='../Medicos/medicos.php'>Medicos</a>"
					}else{
					
					
					
                    $query = "SELECT NOMBRE, DESCRIPCION,TIPO FROM MEDICAMENTOS WHERE ID_MEDICAMENTO IN (SELECT ID_MEDICAMENTO FROM RECETAS WHERE ID_DIAGNOSTICO = ".$iddiagnostico.")";
                    $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
                    while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
                        echo "<tr>";
                        foreach ($line as $col_value) {
                            echo "<td>$col_value</td>";
                        }
                        echo "</tr>";
                    }


                    // Liberar resultados
                    mysql_free_result($result);
					}
                    mysql_close($link);
                    ?>
                </table>
                <br/>
                <br/>
            </div>
        </div>
        <div class="contact-details">
            <div class="container">
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
