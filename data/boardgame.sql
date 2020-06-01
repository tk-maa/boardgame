-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2020 at 04:56 AM
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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `Password`, `Role`) VALUES
('admin', 'admin', 'Admin'),
('manager', 'manager', 'Manager');

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
(1, 'offer-banner-7.jpg', '#1', 'Slider-Section'),
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

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`ID`, `ProductID`, `Image`) VALUES
(35, 31, 'f295f6e48ad6e6bf9d8e9e4f7ea4f9b5.jpg'),
(36, 31, 'eeb2e577ffaec441aeabe37364e0ca0d.jpg'),
(37, 31, '60f9ad1e60d2f8a27ea41382ce048786.jpg'),
(38, 31, 'dafdb4306a712e8a4d13eee9a8388cb9.jpg'),
(39, 31, '517f5a03eb520c64674b2257768cec26.jpg'),
(40, 31, 'ffbf6ce202ad039ffd166dfc3944a4c4.jpg'),
(41, 31, '2030bdb4c0bfb90eee09126a62ce4106.jpg'),
(42, 31, '22cd3ee140203b31f4fb3b2c2f56bb43.jpg');

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
  `Quantity` int(11) DEFAULT NULL,
  `Pic` varchar(255) NOT NULL,
  `Status` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `Name`, `Price`, `NoP`, `NoPsg`, `Time`, `Age`, `Description`, `Type`, `Quantity`, `Pic`, `Status`) VALUES
(1, 'Ma Sói Mini', 60000, '8-22', '11-15', '30', '10+', 'đây là mô tả', 'BG', 15, 'sp00.jpg', 0),
(2, 'Dozen War - Tử Chiến Đế Đô', 650000, '2', '2', '10-40', '3+', 'đây là mô tả', 'BG', 0, 'sp01.jpg', 0),
(3, 'Board game là gì?', 310000, '2-10', '2-10', '15-30', '6+', 'đây là mô tả', 'BG', 15, 'sp02.jpg', 0),
(4, 'Lớp Học Mật Ngữ - Cuộc đua sao chổi', 380000, '2-6', '4', '30', '10+', 'đây là mô tả', 'BG', 15, 'sp03.png', 0),
(5, 'Blood Rage (US)', 2000000, '2-4', '3-4', '60-90', '14+', 'đây là mô tả', 'BG', 15, 'sp04.jpg', 0),
(6, 'Codenames Words (US)', 590000, '2-8', '6', '15', '14+', 'đây là mô tả', 'BG', 15, 'sp05.jpg', 0),
(7, 'Arcadia Quest (US)', 2350000, '2-4', '2-4', '60', '13+', 'đây là mô tả', 'BG', 15, 'sp06.jpg', 0),
(8, 'Terra Mystica (US)', 2335000, '2-5', '4', '60-120', '12+', 'đây là mô tả', 'BG', 15, 'sp07.jpg', 0),
(9, 'Bài UNO Đại Chiến', 80000, '2-10', '4-6', '30', '6+', 'đây là mô tả', 'BG', 15, 'sp08.JPG', 0),
(10, 'Ma Sói Ultimate Deluxe (Việt Hoá)', 240000, '5-75', '11-15', '30-90', '8+', 'đây là mô tả', 'BG', 15, 'sp09.JPG', 0),
(11, 'Mèo Nổ - Exploding Kittens', 200000, '2-5', '4-5', '15', '7+', 'đây là mô tả', 'BG', 15, 'sp10.jpg', 0),
(12, 'Odd - Phiên bản tiếng Việt', 400000, '4-30', '6-8', '30', '18+', 'đây là mô tả', 'BG', 15, 'sp11.jpg', 0),
(13, 'Rubik 3x3 Speed Cube ShengShou', 120000, '1', '1', '15', '4+', 'đây là mô tả', 'RB', 15, 'sp12.jpg', 0),
(14, 'Rubik 2x2 Speed Cube ShengShou', 140000, '1', '1', '15', '4+', 'đây là mô tả', 'RB', 15, 'sp13.jpg', 0),
(15, 'Rubik Megaminx ShengShou', 250000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 15, 'sp14.jpg', 0),
(16, 'Rubik Mirror 3x3 Silver ShengShou', 190000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 15, 'sp15.jpg', 0),
(17, 'Rubik Ghost 2x2 FangCun', 450000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 15, 'sp16.jpg', 0),
(18, 'Rubik Mirror Gold 2x2 ShengShou', 180000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 15, 'sp17.jpg', 0),
(19, 'Rubik Cylinder 3x3', 130000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 15, 'sp18.jpg', 0),
(20, 'Rubik Pyraminx - ShengShou', 250000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 15, 'sp19.jpg', 0),
(21, 'Rubik Rhombohedron', 350000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 15, 'sp20.jpg', 0),
(22, 'Rubik Rex Cube', 220000, '1', '1', '...', '4+', 'đây là mô tả', 'RB', 15, 'sp21.jpg', 0),
(23, 'Cờ Checkers Nam Châm (Cờ Đam)', 240000, '2', '2', '60', '8+', 'đây là mô tả', 'CO', 15, 'sp22.jpg', 0),
(24, 'Cờ Tướng Nam Châm bỏ túi', 100000, '2', '2', '60', '8+', 'đây là mô tả', 'CO', 15, 'sp23.jpg', 0),
(25, 'Cờ Vua Nam Châm Chất Lượng Cao', 240000, '2', '2', '60', '8+', 'đây là mô tả', 'CO', 15, 'sp24.jpg', 0),
(26, 'Cờ Domino đen cao cấp', 65000, '2-10', '4', '60', '5+', 'đây là mô tả', 'CO', 15, 'sp25.jpg', 0),
(27, 'Connect 4 - Cờ Thả', 180000, '2', '2', '15', '6+', 'đây là mô tả', 'CO', 15, 'sp26.jpg', 0),
(28, 'Cờ Shogi', 220000, '2', '2', '60', '8+', 'đây là mô tả', 'CO', 15, 'sp27.JPG', 0),
(29, 'Cờ Tỷ Phú Việt Nam', 530000, '2-6', '4', '60-120', '6+', 'đây là mô tả', 'CO', 15, 'sp28.jpg', 0),
(30, 'Cờ Vây To Nam Châm', 240000, '2', '2', '30-45', '8+', 'đây là mô tả', 'CO', 15, 'sp29.jpg', 0),
(31, 'Yêu Nhầm F.A', 200000, '3-8', '5-8', '10-20', '13+', 'Yêu nhầm FA - Board game tình yêu đầu tiên mà FA là TRÙM cuối!\r\n \r\n \r\nYêu Nhầm F.A là  board game nhập vai, người chơi sẽ là những người đang yêu, phải cùng nhau vượt qua các Thử Thách trên con đường tình yêu. \r\nTuy nhiên Thử thách không phải là điều duy nhất cản trở các cặp đôi, mà đó chính là F.A. Ai bắt cặp với F.A, người đó cũng sẽ có số phận hẩm hiu như họ. Vậy, ai là F.A? \r\nCùng đoán xem..!\r\n \r\nThành phần game:\r\n- 85 Card Tài nguyên\r\n- 18 card action \r\n- 36 card thử thách\r\n- 8 card nhân vật\r\n- 104 token tim (Mỗi màu có 13 tim)\r\n- Sách hướng dẫn\r\n \r\nTrong game, người chơi sẽ cùng nhau giải quyết các lá bài thử thách  từ khó đến dễ dựa trên những lá bài tài nguyên của mình và của đồng đội. Game kết thúc khi người chơi giải quyết được lá bài ở  giữa của cột thử thách cuối cùng hoặc người chơi hết lá bài tài nguyên. \r\n \r\nDự trên điểm chơi để tính ra người thắng cuộc và phe thắng cuộc. Nếu bàn chơi có ít nhất 2 người đủ hoặc nhiều hơn số điểm yêu cầu thì phe người đang yêu thắng, nếu không FA thắng.\r\n \r\nNhiệm vụ của FA là ngăn cản người chơi vượt qua thử thách cuối cùng do hết tài nguyên để bốc hoặc hết cả tài nguyên trên tay hoặc người thường giải quyết được thử thách cuối cùng như không có ai đủ điểm yêu cầu để chiến thắng. \r\nFA được tham gia tối đa 7 thử thách, nếu tham gia quá 7 thử thác thì từ thử thách thứ 8  thì phe người đang yêu vẫn được tính điểm bình thường. Trong 7 thử thách đầu, phe người đang yêu sẽ bị mất điểm khi đi chung cùng FA\r\n \r\nCó 3 Mode chơi:\r\n- Mode tính điểm\r\n- Mode tình thân\r\n- Mode đối kháng\r\n \r\nCùng trải nhiệm ngay board game mới nhất siêu hot này!', 'BG', 15, 'sp30.jpg', 0),
(32, 'Ma Sói Pikalong', 150000, '8-40', '11-15', '30-60', '10+', 'đây là mô tả', 'BG', 15, 'sp31.jpg', 0),
(33, 'Harry Potter - Hogwarts Battle (ENG)', 750000, '2-4', '4', '30-60', '11+', 'đây là mô tả', 'BG', 15, 'sp32.jpg', 0),
(34, 'Betrayal At House On The Hill (ENG)', 550000, '3-6', '5-6', '60', '14+', 'đây là mô tả', 'BG', 15, 'sp33.jpeg', 0),
(35, 'Unstable Unicorns', 350000, '2-8', '4-5', '30-45', '14+', 'đây là mô tả', 'BG', 15, 'sp34.jpg', 0),
(36, 'King of Tokyo (US)', 1150000, '2-6', '4-5', '30', '8+', 'đây là mô tả', 'BG', 15, 'sp35.jpg', 0),
(37, 'Bài UNO Mini', 45000, '2-10', '2-8', '20-30', '6+', 'đây là mô tả', 'BG', 15, 'sp36.png', 0),
(38, 'Tam Quốc Sát - Quốc Chiến - Yokagames', 440000, '4-12', '6-8', '30-60', '10+', 'đây là mô tả', 'BG', 15, 'sp37.jpg', 0),
(39, 'Scythe (US)', 2500000, '1-5', '4', '90-115', '14+', 'đây là mô tả', 'BG', 15, 'sp38.png', 0),
(40, 'Cry Havoc (US)', 1700000, '2-4', '4', '90', '10+', 'đây là mô tả', 'BG', 15, 'sp39.jpg', 0),
(41, 'Century - Spice Road (US)', 1150000, '2-5', '3-4', '30', '8+', 'đây là mô tả', 'BG', 15, 'sp40.jpg', 0),
(42, 'Monopoly Game of Thrones (ENG)', 750000, '2-6', '4-6 ', '60', '18+', 'đây là mô tả', 'BG', 15, 'sp41.jpg', 0),
(43, 'Bài Tỷ Phú', 150000, '2-5', '3-5', '15', '8+', 'đây là mô tả', 'BG', 15, 'sp42.jpg', 0);

--
-- Triggers `product`
--
DELIMITER $$
CREATE TRIGGER `delete_all_image_before_delete_product` BEFORE DELETE ON `product` FOR EACH ROW BEGIN
    DELETE FROM images WHERE ProductID = OLD.ID;
END
$$
DELIMITER ;

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
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

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
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
