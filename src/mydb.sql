-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-12 06:48:36
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- 表的结构 `info1`
--

CREATE TABLE `info1` (
  `sid` int(20) NOT NULL COMMENT '用户编号',
  `username` varchar(11) NOT NULL COMMENT '用户名',
  `password` varchar(16) NOT NULL COMMENT '用户密码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `info1`
--

INSERT INTO `info1` (`sid`, `username`, `password`) VALUES
(1, '', ''),
(2, '18279785654', '8702656847');

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `sid` int(255) NOT NULL COMMENT '商品编号',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `details` varchar(255) NOT NULL COMMENT '商品详情',
  `url` varchar(255) NOT NULL COMMENT '图片路径',
  `price` double(255,0) NOT NULL COMMENT '商品价格',
  `urls` varchar(255) NOT NULL COMMENT '小图路径'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`sid`, `title`, `details`, `url`, `price`, `urls`) VALUES
(1, ' Marmoter Mirco USB数据线 1m ', ' 本款数据线为Marmoter出品，白色线身，长度1米，USB-A接口。天猫楚风数码专营店目前售价2.1元，可领取1元优惠券，实付1.1元包邮到手，安卓白色1米款可选，价格比较不错，尼龙线也能更耐用...', 'https://mercrt-fd.zol-img.com.cn/t_s154x154c4/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png', 1, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，'),
(2, '\r\n                朗客 type-c 数据线 0.25米                                    ', '\r\n            朗客 type-c 数据线 0.25米，天猫精选目前报价7.9元，使用3元优惠券后实付4.9元，持平站内优惠价格，有兴趣的Z友们快去了解吧，也欢迎评论、交流 。...\r\n            ', 'https://mercrt-fd.zol-img.com.cn/t_s154x154c4/g2/M00/0A/0A/ChMlWl0fGyCIdS5HAATMC04FtfwAALkPwOBrNQABMwj918.png', 5, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png'),
(3, '\r\n                                        酷比魔方 X1 8.4英寸十核4G全网通通话小平板电脑安卓阅读前置指纹识别刺激战场吃鸡64G智能游戏联通移动电信                                                                                    ', '\r\n                                    上市时间:2018年01月 产品定位:通话平板电脑，娱乐平板电脑 摄像头:双摄像头（前置：800万像素，后置：1300万像素） 操作系统:Android7.1 ...\r\n                                    ', 'https://article-fd.zol-img.com.cn/t_s154x154/g2/M00/09/0C/ChMlWly4hsCISmCpAAFr3kSk09oAAJg7gOF0uwAAWv2086.jpg', 13, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png'),
(4, '\r\n                                        美的大1.5匹变频空调KFR-35GW/BP3DN1Y-TA201(B2) 舒适星家用挂机                                                                                    ', '\r\n                                    空调类型:壁挂式空调，智能空调 冷暖类型:冷暖电辅 变频/定频:变频 房间类型:卧室宝贝 空调匹数:1.5P 能效等级:二级能效 控制方式:遥控/智能...\r\n                                    ', 'https://article-fd.zol-img.com.cn/t_s154x154/g2/M00/09/0B/ChMlWl0cht-Iepo3AAI0jWXcPQwAALgaAHtlxAAAjSl661.jpg', 899, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png'),
(5, '\r\n                                        Gree/格力空调3匹圆柱柜机变频冷暖I铂 KFR-72LW/(72550)FNhAa-A1                                                                                    ', '\r\n                                    空调类型:立柜式空调，智能空调 冷暖类型:冷暖电辅 变频/定频:变频 房间类型:客厅专享 空调匹数:大3.0P 能效等级:一级能效 控制方式:触控/遥控/智能...\r\n                                    ', 'https://article-fd.zol-img.com.cn/t_s154x154/g2/M00/0D/09/ChMlWV0nVcKID92mAAJChRwb6aIAALvqgOrxUQAAkKd140.jpg', 4199, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png'),
(6, 'Gree/格力空调3匹圆柱柜机变频冷暖I铂 KFR-72LW/(72550)FNhAa-A1                                                                                    ', '\r\n                                    空调类型:立柜式空调，智能空调 冷暖类型:冷暖电辅 变频/定频:变频 房间类型:客厅专享 空调匹数:大3.0P 能效等级:一级能效 控制方式:触控/遥控/智能...\r\n                                    ', 'https://article-fd.zol-img.com.cn/t_s154x154/g2/M00/0D/09/ChMlWV0nVcKID92mAAJChRwb6aIAALvqgOrxUQAAkKd140.jpg', 12199, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png'),
(7, '\r\n                                        Midea/美的 KFR-35GW/BP3DN8Y-FA100(B1)大 1.5匹 冷暖空调挂机                                                                                    ', '\r\n                                    空调类型:智能空调，壁挂式空调 冷暖类型:冷暖型 变频/定频:变频 房间类型:卧室宝贝 空调匹数:大1.5P 能效等级:一级能效 控制方式:智能...\r\n                                    ', 'https://article-fd.zol-img.com.cn/t_s154x154/g2/M00/0D/02/ChMlWl0mLD6IYVf4AAIMEDzpFD4AALuCQBzcdYAAgwo048.jpg', 6199, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，'),
(8, '\r\n                                        美的大1.5匹变频舒适星空调挂机一级KFR-35GW/BP3DN8Y-TA100(B1)                                                                                    ', '\r\n                                    空调类型:壁挂式空调，智能空调 冷暖类型:冷暖电辅 变频/定频:全直流变频 房间类型:卧室宝贝 空调匹数:1.5P 能效等级:一级能效 控制方式:遥控/智能...\r\n                                    ', 'https://article-fd.zol-img.com.cn/t_s154x154/g2/M00/09/00/ChMlWV0bAq-IfyH6AAIAJuPdlxsAALdqAB80ycAAgA-904.jpg', 5199, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png'),
(9, '\r\n                                        Panasonic/松下 AJ-PX280MC 松下摄像机AJ-PX280 手持摄录一体机                                                                                    ', '\r\n                                    产品类型:手持摄照一体机 传感器类型:3MOS 光学变焦:22倍 液晶屏尺寸:3.5英寸 传感器尺寸:（1/2.8）英寸 有效像素:220万 录制格式:MPEG...\r\n                                    ', 'https://article-fd.zol-img.com.cn/t_s154x154/g2/M00/00/0A/ChMlWl0F56iIFRPZAAIaScBoW6cAAK8PQGSOioAAhph589.jpg', 17799, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png'),
(10, '\r\n                                        飞利浦空气净化器家用除甲醛除烟除尘PM2.5室内卧室二手烟AC4374                                                                                    ', '\r\n                                    功率:56W 适用面积:51平方米 净化能力:过滤甲醛：93%（1小时）)/99%（3小时） 噪声:35分贝 额定电压:220V/50Hz 外形设计:控制面板：...\r\n                                    ', 'https://article-fd.zol-img.com.cn/t_s154x154/g2/M00/03/07/ChMlWl0Mo-qIFROsAAIhl2Q4ilYAALHUQE5i0MAAiGv962.jpg', 2399, 'https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png，https://mercrt-fd.zol-img.com.cn/t_s255x255/g2/M00/0A/0A/ChMlWV0fFyiIZidKAAWssFJEEKsAALkNAPLN4MABazI176.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info1`
--
ALTER TABLE `info1`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`sid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `info1`
--
ALTER TABLE `info1`
  MODIFY `sid` int(20) NOT NULL AUTO_INCREMENT COMMENT '用户编号', AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT COMMENT '商品编号', AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
