-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2020 at 03:26 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boardgame`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `ID` int(11) NOT NULL,
  `Image` text CHARACTER SET utf8 NOT NULL,
  `Link` text CHARACTER SET utf8 NOT NULL,
  `Position` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`ID`, `Image`, `Link`, `Position`) VALUES
(1, 'offer-banner-7.jpg', '#', 'Offer-Section'),
(2, 'offer-banner-8.jpg', '#', 'Offer-Section'),
(3, 'offer-banner-9.jpg', '#', 'Offer-Section'),
(4, 'slider1.jpg', '#', 'Slider-Section'),
(5, 'slider2.jpg', '#', 'Slider-Section'),
(6, 'slider3.jpg', '#', 'Slider-Section'),
(7, 'slider4.jpg', '#', 'Slider-Section'),
(8, 'offer-banner-4.jpg', '#', 'Slider-Deals-Section'),
(9, 'offer-banner-5.jpg', '#', 'Slider-Deals-Section'),
(10, 'offer-banner-6.jpg', '#', 'Slider-Deals-Section'),
(11, 'offer-banner-10.jpg', '#', 'Slider-Deals-Section');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `ID` int(11) NOT NULL,
  `ProductID` int(20) NOT NULL,
  `Image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `menu_first`
--

CREATE TABLE `menu_first` (
  `ID` int(11) NOT NULL,
  `Ten` text NOT NULL,
  `Link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu_first`
--

INSERT INTO `menu_first` (`ID`, `Ten`, `Link`) VALUES
(1, 'Board Game', 'product.php?code=BG'),
(2, 'Rubik', 'product.php?code=RB'),
(3, 'Các loại cờ', 'product.php?code=CO');

-- --------------------------------------------------------

--
-- Table structure for table `menu_second`
--

CREATE TABLE `menu_second` (
  `ID` int(11) NOT NULL,
  `MenuIDFirst` int(11) NOT NULL,
  `Ten` text NOT NULL,
  `Link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu_second`
--

INSERT INTO `menu_second` (`ID`, `MenuIDFirst`, `Ten`, `Link`) VALUES
(1, 1, 'Board Game 1', 'product.php?code=BG'),
(2, 1, 'Board Game 2', 'product.php?code=BG'),
(3, 1, 'Board Game 3', 'product.php?code=BG'),
(4, 1, 'Board Game 4', 'product.php?code=BG'),
(5, 2, 'Rubik 2x2', 'product.php?code=RB'),
(6, 2, 'Rubik 3x3', 'product.php?code=RB'),
(7, 2, 'Rubik 4x4', 'product.php?code=RB');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ID` int(10) NOT NULL,
  `Name` text NOT NULL,
  `Price` int(10) NOT NULL,
  `NoP` varchar(10) NOT NULL,
  `NoPsg` varchar(10) NOT NULL,
  `Time` varchar(10) NOT NULL,
  `Age` varchar(5) NOT NULL,
  `Description` text NOT NULL,
  `Type` varchar(5) NOT NULL,
  `Pic` varchar(255) NOT NULL,
  `Status` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `Name`, `Price`, `NoP`, `NoPsg`, `Time`, `Age`, `Description`, `Type`, `Pic`, `Status`) VALUES
(1, 'Ma Sói Mini', 60000, '8-22', '11-15', '30', '10+', 'đây là mô tả', 'BG', 'sp00.jpg', 0),
(2, 'Dozen War - Tử Chiến Đế Đô', 650000, '2', '2', '10-40', '3+', 'đây là mô tả', 'BG', 'sp01.jpg', 0),
(3, 'Board game là gì?', 310000, '2-10', '2-10', '15-30', '6+', 'đây là mô tả', 'BG', 'sp02.jpg', 0),
(4, 'Lớp Học Mật Ngữ - Cuộc đua sao chổi', 380000, '2-6', '4', '30', '10+', 'đây là mô tả', 'BG', 'sp03.png', 0),
(5, 'Blood Rage (US)', 2000000, '2-4', '3-4', '60-90', '14+', 'đây là mô tả', 'BG', 'sp04.jpg', 0),
(6, 'Codenames Words (US)', 590000, '2-8', '6', '15', '14+', 'đây là mô tả', 'BG', 'sp05.jpg', 0),
(7, 'Arcadia Quest (US)', 2350000, '2-4', '2-4', '60', '13+', 'đây là mô tả', 'BG', 'sp06.jpg', 0),
(8, 'Terra Mystica (US)', 2335000, '2-5', '4', '60-120', '12+', 'đây là mô tả', 'BG', 'sp07.jpg', 0),
(9, 'Bài UNO Đại Chiến', 80000, '2-10', '4-6', '30', '6+', 'đây là mô tả', 'BG', 'sp08.JPG', 0),
(10, 'Ma Sói Ultimate Deluxe (Việt Hoá)', 240000, '5-75', '11-15', '30-90', '8+', 'đây là mô tả', 'BG', 'sp09.JPG', 0),
(11, 'Mèo Nổ - Exploding Kittens', 200000, '2-5', '4-5', '15', '7+', 'đây là mô tả', 'BG', 'sp10.jpg', 0),
(12, 'Odd - Phiên bản tiếng Việt', 400000, '4-30', '6-8', '30', '18+', 'đây là mô tả', 'BG', 'sp11.jpg', 0),
(13, 'Rubik 3x3 Speed Cube ShengShou', 120000, '1', '1', '15', '4+', 'đây là mô tả', 'RB', 'sp12.jpg', 0),
(14, 'Rubik 2x2 Speed Cube ShengShou', 140000, '1', '1', '15', '4+', 'đây là mô tả', 'RB', 'sp13.jpg', 0),
(15, 'Rubik Megaminx ShengShou', 250000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 'sp14.jpg', 0),
(16, 'Rubik Mirror 3x3 Silver ShengShou', 190000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 'sp15.jpg', 0),
(17, 'Rubik Ghost 2x2 FangCun', 450000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 'sp16.jpg', 0),
(18, 'Rubik Mirror Gold 2x2 ShengShou', 180000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 'sp17.jpg', 0),
(19, 'Rubik Cylinder 3x3', 130000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 'sp18.jpg', 0),
(20, 'Rubik Kim Tự Tháp Pyraminx - ShengShou', 250000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 'sp19.jpg', 0),
(21, 'Rubik Rhombohedron LanLan', 350000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 'sp20.jpg', 0),
(22, 'Rubik Rex Cube LanLan', 220000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 'sp21.jpg', 0),
(23, 'Cờ Checkers Nam Châm (Cờ Đam)', 240000, '2', '2', '60', '8+', 'đây là mô tả', 'CO', 'sp22.jpg', 0),
(24, 'Cờ Tướng Nam Châm bỏ túi', 100000, '2', '2', '60', '8+', 'đây là mô tả', 'CO', 'sp23.jpg', 0),
(25, 'Cờ Vua Nam Châm Chất Lượng Cao', 240000, '2', '2', '60', '8+', 'đây là mô tả', 'CO', 'sp24.jpg', 0),
(26, 'Cờ Domino đen cao cấp', 65000, '2-10', '4', '60', '5+', 'đây là mô tả', 'CO', 'sp25.jpg', 0),
(27, 'Connect 4 - Cờ Thả', 180000, '2', '2', '15', '6+', 'đây là mô tả', 'CO', 'sp26.jpg', 0),
(28, 'Cờ Shogi', 220000, '2', '2', '60', '8+', 'đây là mô tả', 'CO', 'sp27.JPG', 0),
(29, 'Cờ Tỷ Phú Việt Nam', 530000, '2-6', '4', '60-120', '6+', 'đây là mô tả', 'CO', 'sp28.jpg', 0),
(30, 'Cờ Vây To Nam Châm', 240000, '2', '2', '30-45', '8+', 'đây là mô tả', 'CO', 'sp29.jpg', 0),
(31, 'Yêu Nhầm F.A', 200000, '3-8', '5-8', '10-20', '13+', 'đây là mô tả', 'BG', 'sp30.jpg', 0),
(32, 'Ma Sói Pikalong', 150000, '8-40', '11-15', '30-60', '10+', 'đây là mô tả', 'BG', 'sp31.jpg', 0),
(33, 'Harry Potter - Hogwarts Battle (ENG)', 750000, '2-4', '4', '30-60', '11+', 'đây là mô tả', 'BG', 'sp32.jpg', 0),
(34, 'Betrayal At House On The Hill (ENG)', 550000, '3-6', '5-6', '60', '14+', 'đây là mô tả', 'BG', 'sp33.jpeg', 0),
(35, 'Unstable Unicorns', 350000, '2-8', '4-5', '30-45', '14+', 'đây là mô tả', 'BG', 'sp34.jpg', 0),
(36, 'King of Tokyo (US)', 1150000, '2-6', '4-5', '30', '8+', 'đây là mô tả', 'BG', 'sp35.jpg', 0),
(37, 'Bài UNO Mini', 45000, '2-10', '2-8', '20-30', '6+', 'đây là mô tả', 'BG', 'sp36.png', 0),
(38, 'Tam Quốc Sát - Quốc Chiến - Yokagames', 440000, '4-12', '6-8', '30-60', '10+', 'đây là mô tả', 'BG', 'sp37.jpg', 0),
(39, 'Scythe (US)', 2500000, '1-5', '4', '90-115', '14+', 'đây là mô tả', 'BG', 'sp38.png', 0),
(40, 'Cry Havoc (US)', 1700000, '2-4', '4', '90', '10+', 'đây là mô tả', 'BG', 'sp39.jpg', 0),
(41, 'Century - Spice Road (US)', 1150000, '2-5', '3-4', '30', '8+', 'đây là mô tả', 'BG', 'sp40.jpg', 0),
(42, 'Monopoly Game of Thrones (ENG)', 750000, '2-6', '4-6 ', '60', '18+', 'đây là mô tả', 'BG', 'sp41.jpg', 0),
(43, 'Bài Tỷ Phú', 150000, '2-5', '3-5', '15', '8+', 'đây là mô tả', 'BG', 'sp42.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `TypeID` varchar(10) NOT NULL,
  `TypeName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`TypeID`, `TypeName`) VALUES
('BG', 'Board Game'),
('CO', 'Các loại cờ'),
('RB', 'Rubik');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`ID`,`ProductID`),
  ADD KEY `MaSP` (`ProductID`);

--
-- Indexes for table `menu_first`
--
ALTER TABLE `menu_first`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `menu_second`
--
ALTER TABLE `menu_second`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `menuIDFirst` (`MenuIDFirst`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `MaSP` (`ID`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`TypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `menu_first`
--
ALTER TABLE `menu_first`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu_second`
--
ALTER TABLE `menu_second`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
