-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 11, 2024 at 04:47 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-commerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `categoryId` smallint NOT NULL,
  `categoryName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdBy` smallint NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryId`, `categoryName`, `createdBy`, `createdAt`) VALUES
(4, 'TV', 16, '2024-04-06 07:33:59'),
(5, 'Smartphone', 15, '2024-04-06 10:59:45'),
(6, 'Earbuds', 15, '2024-04-06 12:45:35'),
(7, 'Appliances', 16, '2024-04-06 14:38:16'),
(8, 'Lal', 20, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `productId` smallint NOT NULL,
  `productName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `productDesc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `productPrice` int NOT NULL,
  `categoryId` smallint NOT NULL,
  `createdBy` int NOT NULL,
  `productImages` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `productDesc`, `productPrice`, `categoryId`, `createdBy`, `productImages`) VALUES
(2, 'Iphone 14 Pro', 'The iPhone 14 Pro is a smartphone with a 6.1-inch Super Retina XDR OLED display, a 2,000,000:1 contrast ratio, and a refresh rate of 60 Hz. It has a resolution of 2532 × 1170 pixels and a pixel density of about 460 PPI. The iPhone 14 has rounded corners that follow a curved design, and the screen is 6.06 inches diagonally when measured as a standard rectangular shape.', 59000, 5, 15, '[\"26cbebd24cef87b8-psp-pankaj.jpg\"]'),
(3, 'Iphone 15', 'The iPhone 15 is a smartphone with a 6.1-inch Super Retina XDR OLED display, a 2,000,000:1 contrast ratio, and a refresh rate of 60 Hz. It has a resolution of 2532 × 1170 pixels and a pixel density of about 460 PPI. The iPhone 14 has rounded corners that follow a curved design, and the screen is 6.06 inches diagonally when measured as a standard rectangular shape.', 80000, 5, 15, '[\"85a6d37c7cc30858-psp-pankaj.jpg\",\"1e2af405d180b8e6-Screenshot from 2024-03-31 12-02-52.png\"]'),
(4, 'Airpods Pro', 'Apple\'s AirPods Pro are wireless, in-ear headphones that offer premium features like noise cancellation, 3D sound, and an ergonomic design. The second generation AirPods Pro have improved active noise cancellation, battery life, and the ability to adjust volume directly from the earbuds. The H1-powered AirPods Pro also feature Adaptive Audio, which automatically prioritizes sounds that need your attention as you move around. Apple AirPods Pro (2nd generation) The H2-powered AirPods Pro now feature Adaptive Audio, automatically prioritising sounds that need your attention as you move through the world. By seamlessly blending Active Noise Cancellation with Transparency mode when you need it, Adaptive Audio magically delivers the right mix of sound for any environment ... Wikipedia AirPods Pro - Wikipedia AirPods Pro are wireless Bluetooth in-ear headphones designed by Apple, initially introduced on October 30, 2019. They are Apple\'s mid-range wireless headphones, available alongside the base-level AirPods and the highest-end AirPods Max. Apple Inc. apple.com AirPods Pro (2nd generation) - Apple It uses computational algorithms to deliver noise cancellation, superior three-dimensional sound, and efficient battery life — all at once. AirPods Pro will pair with Apple Vision Pro to deliver Lossless Audio with ultra-low latency, for an unprecedented sound experience. The Verge Apple AirPods Pro (second-gen) review: same look, better ... 28 Sept 2022 — The second-gen AirPods Pro sound better. Their active noise cancellation is noticeably improved. You can now adjust the volume directly from the earbuds. And the charging case has gained a built-in speaker and pinpoint location tracking that makes it easier to find. Battery life is also slightly longer than before. For legions of loyal Apple customers, these changes are exciting — even if the outer design is old hat. So the second reaction has been along the lines of “these are what I\'ve been waiting for.” cnn.com 5 things the AirPods Pro do better than any other wireless earbuds - CNN 20 Jul 2023 — Both the original AirPods Pro and AirPods Pro 2 are some of the best true wireless earbuds in existence. They set the standard for premium earbuds, with excellent active noise cancellation (ANC) and striking 3D sound in an ergonomic design. Here are some more features of the AirPods Pro: Spatial Audio: Gyroscopes in the earpieces allow users to move their head around within an audio space Lossless Audio: Pairs with Apple Vision Pro to deliver ultra-low latency Adaptive Audio: Seamlessly blends Active Noise Cancellation with Transparency mode to deliver the right mix of sound for any environment Here are some controls for controlling audio content: Play and pause: Press the Digital Crown Play the next track: Double-click the Digital Crown Play the previous track: Triple-click the Digital Crown Adjust the volume: Turn the Digital Crown Switch between Noise Cancellation and Transparency mode: Press the noise control button What is the physical description of AirPods? What are the hidden features of AirPods Pro? How do I use AirPods Pro features? Ask a follow up', 30000, 6, 15, '[\"c7e972f29021e03f-psp-pankaj.jpg\",\"4df5cc8058f07b7c-Screenshot from 2024-03-31 12-02-52.png\"]'),
(10, 'Airpods Pro', 'Apple\'s AirPods Pro are wireless, in-ear headphones that offer premium features like noise cancellation, 3D sound, and an ergonomic design. The second generation AirPods Pro have improved active noise cancellation, battery life, and the ability to adjust volume directly from the earbuds. The H1-powered AirPods Pro also feature Adaptive Audio, which automatically prioritizes sounds that need your attention as you move around. Apple AirPods Pro (2nd generation) The H2-powered AirPods Pro now feature Adaptive Audio, automatically prioritising sounds that need your attention as you move through the world. By seamlessly blending Active Noise Cancellation with Transparency mode when you need it, Adaptive Audio magically delivers the right mix of sound for any environment ... Wikipedia AirPods Pro - Wikipedia AirPods Pro are wireless Bluetooth in-ear headphones designed by Apple, initially introduced on October 30, 2019. They are Apple\'s mid-range wireless headphones, available alongside the base-level AirPods and the highest-end AirPods Max. Apple Inc. apple.com AirPods Pro (2nd generation) - Apple It uses computational algorithms to deliver noise cancellation, superior three-dimensional sound, and efficient battery life — all at once. AirPods Pro will pair with Apple Vision Pro to deliver Lossless Audio with ultra-low latency, for an unprecedented sound experience. The Verge Apple AirPods Pro (second-gen) review: same look, better ... 28 Sept 2022 — The second-gen AirPods Pro sound better. Their active noise cancellation is noticeably improved. You can now adjust the volume directly from the earbuds. And the charging case has gained a built-in speaker and pinpoint location tracking that makes it easier to find. Battery life is also slightly longer than before. For legions of loyal Apple customers, these changes are exciting — even if the outer design is old hat. So the second reaction has been along the lines of “these are what I\'ve been waiting for.” cnn.com 5 things the AirPods Pro do better than any other wireless earbuds - CNN 20 Jul 2023 — Both the original AirPods Pro and AirPods Pro 2 are some of the best true wireless earbuds in existence. They set the standard for premium earbuds, with excellent active noise cancellation (ANC) and striking 3D sound in an ergonomic design. Here are some more features of the AirPods Pro: Spatial Audio: Gyroscopes in the earpieces allow users to move their head around within an audio space Lossless Audio: Pairs with Apple Vision Pro to deliver ultra-low latency Adaptive Audio: Seamlessly blends Active Noise Cancellation with Transparency mode to deliver the right mix of sound for any environment Here are some controls for controlling audio content: Play and pause: Press the Digital Crown Play the next track: Double-click the Digital Crown Play the previous track: Triple-click the Digital Crown Adjust the volume: Turn the Digital Crown Switch between Noise Cancellation and Transparency mode: Press the noise control button What is the physical description of AirPods? What are the hidden features of AirPods Pro? How do I use AirPods Pro features? Ask a follow up', 30000, 6, 15, '[\"669e547fa7bcbe49-psp-pankaj.jpg\",\"cf13fef55bfe9a0f-Screenshot from 2024-03-31 12-02-52.png\"]');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `roleId` tinyint NOT NULL,
  `roleName` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `userId` smallint NOT NULL,
  PRIMARY KEY (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roleId`, `roleName`, `userId`) VALUES
(12, 'user', 15),
(13, 'admin', 16);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `userId` smallint NOT NULL AUTO_INCREMENT,
  `firstName` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `gender` enum('Male','Female') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `hobbies` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `roleName` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `profilePic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `email`, `password`, `gender`, `hobbies`, `roleName`, `profilePic`, `createdAt`) VALUES
(15, 'Pankaj', 'Thakur', 'pk@gmail.com', '$2b$10$zqYJUmFwJT0uMAdleatdLeLnaLjZJjzj8FfrEMRM3X89eJ7q7OUSa', 'Male', 'Coding, Gaming', 'user', 'ad0fce8916f3ff02-psp-pankaj.jpg', '2024-04-06 05:57:27'),
(16, 'Pankaj', 'Thakur', 'pkt@gmail.com', '$2b$10$ytuohxRUljJ.jPIuxNbF0eiBravJB1KXu0J3w9NgI7VUGqBEDxa6.', 'Male', 'Coding, Gaming', 'admin', '5bc75314f822ac51-psp-pankaj.jpg', '2024-04-06 07:32:25'),
(17, 'Keval', 'Dave', 'kevalsdave@gmail.com', '$2b$10$VmVph6u92AfZH5s/.893seU5xzZ12vY6ZkGVz1cfDWAJ8ydQ/XGV.', 'Male', 'cricket', 'user', 'profilePic-1712633997773-988781356-img.PNG', '2024-04-09 03:39:57'),
(18, 'K', 'D', 'kevalsdave9898@gmail.com', '$2b$10$Sq/4U8QN5fzjX7wUo/Xm1eKgOV.G.kDXTFVdc11rSJqd6U/GkBOr6', 'Male', 'cricket', 'user', 'profilePic-1712634378683-177020751-img.PNG', '2024-04-09 03:46:18'),
(21, 'K', 'D', 'kevalsdave9898@gmail.com', '$2b$10$mALiKz/4hXMJUJJ/Ee4Snu6GsuZhHM3ESoe/GbBKRsDQZv6isfmzq', 'Male', 'cricket', 'user', 'profilePic-1712634434685-379089200-img.PNG', '2024-04-09 03:47:14'),
(22, 'K', 'D', 'kevalsdave989@gmail.com', '$2b$10$m4qyqdEL25WRm25xaQWG1u0hCVd0JpLN8vuXKPDvndv4pNMvInHQ6', 'Male', 'cricket', 'user', 'profilePic-1712634451477-871971199-img.PNG', '2024-04-09 03:47:31');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
