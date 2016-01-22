-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2+deb7u2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 22, 2016 at 12:44 PM
-- Server version: 5.5.46
-- PHP Version: 5.3.29-1~dotdeb.0

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `eusa15_bdphp`
--

-- --------------------------------------------------------

--
-- Table structure for table `centros`
--

CREATE TABLE IF NOT EXISTS `centros` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(15) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `localidad` varchar(25) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `diagnosticos`
--

CREATE TABLE IF NOT EXISTS `diagnosticos` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=123337 ;

--
-- Dumping data for table `diagnosticos`
--

INSERT INTO `diagnosticos` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Faringitis', 'Inflamación de la faringe que puede provocar dolor de garganta, sequedad, enrojecimiento de la mucosa y, en ocasiones, fiebre.'),
(123334, 'Meningitis', 'Inflamación de las meninges debida a una infección vírica o bacteriana.');

-- --------------------------------------------------------

--
-- Table structure for table `especialidades`
--

CREATE TABLE IF NOT EXISTS `especialidades` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `HORARIOS`
--

CREATE TABLE IF NOT EXISTS `HORARIOS` (
  `ID_MEDICO` int(2) NOT NULL DEFAULT '0',
  `ID_CENTRO` int(2) NOT NULL DEFAULT '0',
  `DIA` varchar(10) DEFAULT NULL,
  `HORARIO` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_MEDICO`,`ID_CENTRO`),
  KEY `FK_CEN_HOR` (`ID_CENTRO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `MEDICAMENTOS`
--

CREATE TABLE IF NOT EXISTS `MEDICAMENTOS` (
  `ID_MEDICAMENTO` int(7) NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(30) NOT NULL,
  `TIPO` varchar(15) NOT NULL,
  `DESCRIPCION` varchar(150) NOT NULL,
  PRIMARY KEY (`ID_MEDICAMENTO`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `MEDICAMENTOS`
--

INSERT INTO `MEDICAMENTOS` (`ID_MEDICAMENTO`, `NOMBRE`, `TIPO`, `DESCRIPCION`) VALUES
(1, 'Ibuprofeno', 'Automedicación', 'Usado para el alivio sintomático del dolor de cabeza (cefalea), dolor dental (odontalgia), dolor muscular o mialgia, molestias de la menstruación (dis'),
(2, 'Paracetamol', 'Automedicación', 'Usado para el alivio sintomático del dolor de cabeza (cefalea), dolor dental (odontalgia), dolor muscular o mialgia, molestias de la menstruación (dis'),
(3, 'Diasepán', 'Homeopatía', 'El diazepam se utiliza para tratar estados de ansiedad y está considerada como la benzodiazepina más efectiva para el tratamiento de espasmos muscular'),
(4, 'Marihuana', 'Homeopatía', 'El cannabis es empleado, en su forma natural, para el tratamiento del glaucoma, asma, cáncer, migraña, insomnio, náuseas y vómitos asociados a la quim');

-- --------------------------------------------------------

--
-- Table structure for table `MEDICOS`
--

CREATE TABLE IF NOT EXISTS `MEDICOS` (
  `ID_MEDICO` int(3) NOT NULL DEFAULT '0',
  `APELLIDOS` varchar(40) NOT NULL,
  `NOMBRE` varchar(20) DEFAULT NULL,
  `ID_ESPECIALIDAD` int(2) NOT NULL,
  PRIMARY KEY (`ID_MEDICO`),
  KEY `FK_MED_ESP` (`ID_ESPECIALIDAD`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `RECETAS`
--

CREATE TABLE IF NOT EXISTS `RECETAS` (
  `ID_DIAGNOSTICO` int(4) NOT NULL DEFAULT '0',
  `ID_MEDICAMENTO` int(7) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID_DIAGNOSTICO`,`ID_MEDICAMENTO`),
  KEY `FK_MED` (`ID_MEDICAMENTO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `RECETAS`
--

INSERT INTO `RECETAS` (`ID_DIAGNOSTICO`, `ID_MEDICAMENTO`) VALUES
(1, 1),
(123334, 1),
(1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `relacion-diagnostico`
--

CREATE TABLE IF NOT EXISTS `relacion-diagnostico` (
  `idSexo` int(1) NOT NULL,
  `idParte` int(3) NOT NULL,
  `idPreg1` int(2) NOT NULL,
  `idPreg2` int(2) NOT NULL,
  `idEdad` int(1) NOT NULL,
  `idDiagnostico` int(4) NOT NULL,
  PRIMARY KEY (`idSexo`,`idParte`,`idPreg1`,`idPreg2`,`idEdad`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `HORARIOS`
--
ALTER TABLE `HORARIOS`
  ADD CONSTRAINT `FK_MED_HOR` FOREIGN KEY (`ID_MEDICO`) REFERENCES `MEDICOS` (`ID_MEDICO`),
  ADD CONSTRAINT `FK_CEN_HOR` FOREIGN KEY (`ID_CENTRO`) REFERENCES `centros` (`id`);

--
-- Constraints for table `MEDICOS`
--
ALTER TABLE `MEDICOS`
  ADD CONSTRAINT `FK_MED_ESP` FOREIGN KEY (`ID_ESPECIALIDAD`) REFERENCES `especialidades` (`id`);

--
-- Constraints for table `RECETAS`
--
ALTER TABLE `RECETAS`
  ADD CONSTRAINT `FK_DIAG` FOREIGN KEY (`ID_DIAGNOSTICO`) REFERENCES `diagnosticos` (`id`),
  ADD CONSTRAINT `FK_MED` FOREIGN KEY (`ID_MEDICAMENTO`) REFERENCES `MEDICAMENTOS` (`ID_MEDICAMENTO`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
