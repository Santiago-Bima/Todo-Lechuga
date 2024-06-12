-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2021 a las 23:32:41
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `todo-lechuga`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `cuerpo`) VALUES
(1, 'Nuevos platos del dia', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque rerum excepturi\r\n                            tempore enim! Autem.'),
(2, 'Novedades', 'Le damos la bienvenida a las nuevas notificaciones del sitio.\r\n                            \r\n\r\n                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas.'),
(3, 'Nuevo Sitio 2.0', 'Bienvenido a Todo Lechuga!! este es nuestro nuevo local vegetariano/vegano, explora las distintas\r\n                            opciones del menú y avisanos si necesitas algo.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cuerpo` text NOT NULL,
  `tipo_de_producto` varchar(100) NOT NULL,
  `imagen` varchar(250) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `destacado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `cuerpo`, `tipo_de_producto`, `imagen`, `precio`, `destacado`) VALUES
(12, 'Lasagna', 'rica', 'Pastas', 'ujnalqdp3r4ultr3sgrb', '340', 1),
(14, 'Hamburguesas de Legumbre', 'triples', 'Hamburguesas', 'uxtxgmeoibdw3erqsb9z', '500', 0),
(15, 'Otros 1', '...', 'Otros', 'aavei50wcjm7p8nmow8t', '420', 1),
(16, 'Otro 2', '...', 'Otros', 'aemi6bs6qg35hzlnmq87', '350', 0),
(17, 'Pizza de 4 quesos', '4', 'Pizzas', 'cro6h2ki5zvhnonf9er8', '520', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_de_productos`
--

CREATE TABLE `tipos_de_productos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipos_de_productos`
--

INSERT INTO `tipos_de_productos` (`id`, `tipo`) VALUES
(1, 'Pastas'),
(2, 'Hamburguesas'),
(3, 'Pizzas'),
(4, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `user` varchar(250) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `email`, `password`) VALUES
(8, 'e1', 'e1@gmail.com', 'e64b78fc3bc91bcbc7dc232ba8ec59e0'),
(9, 'c1', 'c1@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(10, 'c2', 'c2@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(11, 'c3', 'c3@gmail.com', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipos_de_productos`
--
ALTER TABLE `tipos_de_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tipos_de_productos`
--
ALTER TABLE `tipos_de_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
