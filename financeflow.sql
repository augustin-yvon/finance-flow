-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : lun. 29 jan. 2024 à 08:54
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `financeflow`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categorie` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `categorie`) VALUES
(1, 'Abonnement'),
(2, 'Éducation'),
(3, 'Loisirs'),
(4, 'Logements'),
(5, 'Santé'),
(6, 'Vie quotidienne'),
(7, 'Autres'),
(8, 'Approvisionnement');

-- --------------------------------------------------------

--
-- Structure de la table `solde`
--

DROP TABLE IF EXISTS `solde`;
CREATE TABLE IF NOT EXISTS `solde` (
  `id` int NOT NULL AUTO_INCREMENT,
  `solde` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `solde`
--

INSERT INTO `solde` (`id`, `solde`) VALUES
(1, 1438);

-- --------------------------------------------------------

--
-- Structure de la table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE IF NOT EXISTS `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `value` int NOT NULL,
  `direction` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `categorie` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `transaction`
--

INSERT INTO `transaction` (`id`, `date`, `title`, `description`, `value`, `direction`, `categorie`) VALUES
(1, '2023-11-30', 'Cadeau', 'Cadeau de moi à moi', 15, 'émis', 7),
(2, '2023-11-30', 'Snack', 'Lucas m\'a payé le snack', 10, 'émis', 6),
(3, '2023-11-30', 'RallyJeune', 'RallyJeune', 150, 'émis', 3),
(4, '2023-11-30', 'Approvisionnement', 'Approvisionnement du compte', 150, 'reçu', 8),
(5, '2023-11-30', 'Approvisionnement', 'Approvisionnement du compte', 5, 'reçu', 8),
(6, '2023-11-30', 'Pain', 'Pain', 6, 'émis', 6),
(7, '2023-11-30', 'Approvisionnement', 'Approvisionnement du compte', 6, 'reçu', 8),
(8, '2023-11-30', '', '', 50, 'émis', 0),
(9, '2023-11-30', '', '', 6, 'émis', 0),
(10, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(11, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(12, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(13, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(14, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(15, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(16, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(17, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(18, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 45, 'reçu', 8),
(19, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 55, 'reçu', 8),
(20, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 52, 'reçu', 8),
(21, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(22, '2023-12-01', 'Test', 'Un super test', 72, 'émis', 7),
(23, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 23, 'reçu', 8),
(24, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 85, 'reçu', 8),
(25, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 5, 'reçu', 8),
(26, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 5, 'reçu', 8),
(27, '2023-12-01', 'ff', 'gg', 78, 'émis', 3),
(28, '2023-12-01', 'Approvisionnement', 'Approvisionnement du compte', 8, 'reçu', 8),
(29, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(30, '2023-12-18', 'Fayaganja', 'jgbrzlignjkrldnglkjvnfd', 334, 'émis', 5),
(31, '2023-12-18', 'uillh', 'hj,tgfg', 50, 'émis', 1),
(32, '2023-12-18', 'h', '25', 20, 'émis', 2),
(33, '2023-12-18', 'egeg', 'erg', 20, 'émis', 2),
(34, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 40, 'reçu', 8),
(35, '2023-12-18', '152', '420', 10, 'émis', 6),
(36, '2023-12-18', 'gergerg', 'ergeg', 50, 'émis', 2),
(37, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 200, 'reçu', 8),
(38, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 500, 'reçu', 8),
(39, '2023-12-18', 'sdfsefr', 'efergfer', 50, 'émis', 3),
(40, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 550, 'reçu', 8),
(41, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(42, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(43, '2023-12-18', 'ggff', 'gfgeg', 20, 'émis', 3),
(44, '2023-12-18', 'fzeez', 'fefe', 50, 'émis', 5),
(45, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 540, 'reçu', 8),
(46, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 80, 'reçu', 8),
(47, '2023-12-18', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(48, '2023-12-18', 'jtjtyj', 'tyj(-j(è', 12, 'émis', 4),
(49, '2023-12-18', 'tyjt', 'rhtrzh', 50, 'émis', 3),
(50, '2024-01-08', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(51, '2024-01-08', 'lkgerg', 'un virment cher', 750, 'émis', 4),
(52, '2024-01-29', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(53, '2024-01-29', 'fff', 'fezfe', 850, 'émis', 2),
(54, '2024-01-29', 'Approvisionnement', 'Approvisionnement du compte', 50, 'reçu', 8),
(55, '2024-01-29', 'gegeg', 'efzzef', 50, 'émis', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
