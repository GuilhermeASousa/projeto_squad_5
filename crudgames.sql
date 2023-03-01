-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/02/2023 às 21:22
-- Versão do servidor: 10.4.27-MariaDB
-- Versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crudgames`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `developers` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `category` varchar(50) NOT NULL,
  `repository` varchar(500) NOT NULL,
  `view` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `games`
--

INSERT INTO `games` (`id`, `name`, `developers`, `description`, `category`, `repository`, `view`) VALUES
(25, 'AvaliaE', 'Alessandra, Guilherme, Matheus,Thamires,Tallyson', 'Site de avaliações individuais em html | css |js', 'Web', 'https://github.com/GuilhermeASousa/avaliae', 'https://guilhermeasousa.github.io/avaliae/'),
(26, 'Projeto Encode', 'Matheus Heringer', 'Aplicação que permite codificar mensagens', 'Mobile', 'https://github.com/MatheusHeringer/Projeto-encode', 'https://matheusheringer.github.io/Projeto-encode/'),
(27, 'Fox Five Logistica', 'Tallyson ....', 'Um site de logistica', 'Web', 'www.git...', 'git.io...');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
