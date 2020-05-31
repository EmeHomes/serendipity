-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2020 a las 17:37:08
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `serendipityh2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(55),
(55),
(55),
(55);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`id`, `role`) VALUES
(1, 'Usuario'),
(2, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'Pendiente'),
(2, 'Comenzada'),
(3, 'Finalizada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `finish_date` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `task`
--

INSERT INTO `task` (`id`, `description`, `finish_date`, `name`, `start_date`, `user_id`, `status_id`) VALUES
(9, 'Ut sed libero ipsum. Nullam ante nibh, convallis non aliquam ac, accumsan ut urna. Fusce maximus pretium augue, ut bibendum ipsum venenatis eget. ', '', 'Comprensión casuística', '', 1, 2),
(10, 'Cras in varius dui. Curabitur molestie ante vitae molestie sodales. Etiam tincidunt tellus eget magna lobortis, nec eleifend erat euismod. Nulla non turpis non ipsum tempor tempor.', '', 'Comprensión logística', '', 1, 1),
(11, 'Maecenas vel consequat magna. Etiam ut feugiat nisi. Integer euismod rhoncus facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', '', 'Razonamiento logístico', '', 1, 2),
(12, 'Praesent maximus sagittis bibendum. Nullam et metus condimentum, pharetra turpis vitae, consequat velit. Aliquam hendrerit nisi nec rutrum finibus.', '', 'Razonamiento logística', '', 1, 2),
(13, 'Praesent maximus sagittis bibendum. Nullam et metus condimentum, pharetra turpis vitae, consequat velit. Aliquam hendrerit nisi nec rutrum finibus.', '', 'Mapa genético ARN', '', 2, 1),
(14, 'Pharetra turpis vitae, consequat velit. Aliquam hendrerit nisi nec rutrum finibus.', '', 'Mapa genético ADN', '', 2, 1),
(15, 'Aliquam hendrerit nisi nec rutrum finibus.', '', 'Epigenética', '', 2, 2),
(16, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget orci posuere, accumsan dui eu, tincidunt purus. ', '', 'Epigenética y ejemplos sociales', '', 2, 2),
(17, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget orci posuere, accumsan dui eu, tincidunt purus. ', '', 'Hormonas y efectos en el comportamiento', '', 3, 1),
(18, 'Donec scelerisque, nulla eget sollicitudin accumsan, diam ex gravida dolor, at sollicitudin leo erat non sapien. In non malesuada justo, vitae accumsan nibh. ', '', 'Hormonas y la amigdala', '', 3, 1),
(19, 'Donec scelerisque, nulla eget sollicitudin accumsan, diam ex gravida dolor, at sollicitudin leo erat non sapien. In non malesuada justo, vitae accumsan nibh. ', '', 'Amígdala e hipotálamo', '', 3, 2),
(20, 'Diam ex gravida dolor, at sollicitudin leo erat non sapien. In non malesuada justo, vitae accumsan nibh. ', '', 'Lóbulo frontal y control de la ansiedad', '', 3, 2),
(21, 'Diam ex gravida dolor, at sollicitudin leo erat non sapien. In non malesuada justo, vitae accumsan nibh. ', '', 'Evolución de los homínidos', '', 4, 1),
(22, 'Diam ex gravida dolor, at sollicitudin leo erat non sapien. In non malesuada justo, vitae accumsan nibh. ', '', 'la anámnesis en la filosofía', '', 4, 1),
(23, 'Suspendisse potenti. Sed congue nulla leo, sit amet imperdiet ante sollicitudin malesuada. Donec sollicitudin lacus at consectetur faucibus. Sed et blandit justo, ut mattis orci. ', '', 'Filogénesis', '', 4, 2),
(24, 'Sed congue nulla leo, sit amet imperdiet ante sollicitudin malesuada. Donec sollicitudin lacus at consectetur faucibus. Sed et blandit justo, ut mattis orci. ', '', 'Ontogénesis', '', 4, 2),
(25, 'Sed congue nulla leo, sit amet imperdiet ante sollicitudin malesuada. Donec sollicitudin lacus at consectetur faucibus. Sed et blandit justo, ut mattis orci. ', '', 'Clasificar y organizar', '', 5, 1),
(26, 'Donec sollicitudin lacus at consectetur faucibus. Sed et blandit justo, ut mattis orci. ', '', 'Repartir tareas', '', 5, 2),
(27, 'Donec sollicitudin lacus at consectetur faucibus. Sed et blandit justo, ut mattis orci. ', '', 'Distribución de nichos', '', 6, 2),
(28, 'Fusce maximus pretium augue, ut bibendum ipsum venenatis eget. Suspendisse congue, nisl ut rutrum efficitur, dui lacus vehicula dolor, imperdiet faucibus eros dolor eget quam. Maecenas vel consequat magna.', '', 'Comprensión y mantenimiento del entorno', '', 6, 1),
(29, 'Maecenas massa erat, scelerisque et mi ut, dignissim tristique dui. Nunc mollis lacus vitae dui euismod convallis. Cras eleifend suscipit ligula, et aliquet ligula auctor in.', '', 'Búsqueda de sujetos de estudio', '', 6, 1),
(30, 'Maecenas massa erat, scelerisque et mi ut, dignissim tristique dui. Nunc mollis lacus vitae dui euismod convallis. Cras eleifend suscipit ligula, et aliquet ligula auctor in.', '', 'Búsqueda de sujetos de estudio', '', 7, 1),
(31, 'Dignissim tristique dui. Nunc mollis lacus vitae dui euismod convallis. Cras eleifend suscipit ligula, et aliquet ligula auctor in.', '', 'Estudio de doble ciego', '', 7, 1),
(32, 'lass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget orci posuere, accumsan dui eu, tincidunt purus.', '', 'Análisis de estudio', '', 7, 2),
(33, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget orci posuere, accumsan dui eu, tincidunt purus.', '', 'Epigenética y Lamarck', '', 8, 2),
(36, 'Per conubia nostra, per inceptos himenaeos. Sed eget orci posuere, accumsan dui eu, tincidunt purus.', '', 'Darwinismo', '', 8, 1),
(37, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales risus quis ultricies placerat. Suspendisse laoreet finibus mi, quis placerat dolor eleifend eu. Ut a nisi nec urna finibus ornare. Etiam mollis nibh in arcu faucibus molestie. Duis ve', '', 'Administración test', '', 5, 1),
(54, 'Nulla aliquet dignissim ipsum, non viverra mi eleifend vitae. Etiam aliquam eu est a blandit. Nullam ex neque, tincidunt ac placerat eget, pellentesque et orci. Aliquam laoreet ligula vitae mattis posuere. Nam ac vehicula tortor. Mauris ac purus lacus.', '', 'probandoooooooo!', '', 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `surname1` varchar(255) DEFAULT NULL,
  `surname2` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `image`, `mail`, `name`, `password`, `surname1`, `surname2`, `username`, `role_id`) VALUES
(1, '', 'MarBR@gmail.com', 'Maria', '24c9e15e52afc47c225b757e7bee1f9d', 'Barco', 'Del Rio', 'user1', 1),
(2, '', 'SandalioBD@gmail.com', 'Sandalio', '7e58d63b60197ceb55a1c487989a3720', 'Botín', 'Descalzo', 'user2', 1),
(3, '', 'MiguelMG@gmail.com', 'Miguel', '92877af70a45fd6a2ed7fe81e1236b78', 'Marco', 'Gol', 'user3', 1),
(4, '', 'RomanCC@gmail.com', 'Román', '3f02ebe3d7929b091e3d8ccfde2f3bc6', 'Calavera', 'Calva', 'user4', 1),
(5, '', 'RitaFC@gmail.com', 'Margarita', '0a791842f52a0acfbb3a783378c066b8', 'Flores', 'del Campo', 'user5', 1),
(6, '', 'EvaFS@gmail.com', 'Eva', 'e00cf25ad42683b3df678c61f42c6bda', 'Fina', 'Segura', 'admin1', 2),
(7, '', 'PedroTC@gmail.com', 'Pedro', 'c84258e9c39059a89ab77d846ddab909', 'Trabajo', 'Cumplido', 'admin2', 2),
(8, '', 'SusanaHN@gmail.com', 'Susana', '32cacb2f994f6b42183a1300d9a3e8d6', 'Horia', 'Naranja', 'admin3', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9amdidv53i0hvjvnxkrup18t4` (`status_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `FK9amdidv53i0hvjvnxkrup18t4` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
