SET NAMES UTF8;
DROP DATABASE IF EXISTS xuhuan1;
CREATE DATABASE xuhuan1 CHARSET = UTF8;
USE xuhuan1;
CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO user VALUES (null,'703941822','123456');
#
CREATE TABLE xu_index(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(255),
  i_name VARCHAR(32),
  intrduce VARCHAR(255),
  price INT
);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png','魅族X8','准旗舰游戏拍照手机',1598);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0VujaMyAYB76AATj19tgy08068.png','魅族 V8 高配版','1200万+500万高清双摄',1098);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png','魅族 15','2000万暗光双摄 AI智能美颜',1998);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png','魅蓝 E3','骁龙636处理器 全系6G大运存',1598);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0FtqgkWALkhxAAkE5Uiy2no917.png','魅族 16th Plus','AI双摄光学防抖',3198);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0VujMsWAPxkuAApLWdu_EMM708.png','魅族 V8 标配版','5.7 英寸 HD + 全面屏',799);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0Vsx5FmABcbVAAOfr1Ktzm4058.png','魅族 M15','2000 万 AI 智能美颜',1398);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png','魅族 15 Plus','双摄全面屏 游戏长续航',2498);
INSERT INTO xu_index VALUES(null,'img/index/89d0ea78-27bd-4e9d-8a50-db02395d7ee4.jpg', '大图',null,null);
INSERT INTO xu_index VALUES(null,'img/index/6192b514-c9e8-4d4d-81d2-a952afb43976.jpg','单图',null,null);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png','魅族EP-31耳机','舒适均衡 精致优雅',99);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0Vn2f8mAcov7AAHUhmjUdk0958.png','魅蓝 EP52 蓝牙耳机','新品到货 限量抢购',249);
INSERT INTO xu_index VALUES(null,'img/index/1459849377-64075.png','魅族 EP51 蓝牙运动耳机','臻享音质 自在运动',169);
INSERT INTO xu_index VALUES(null,'img/index/092fe22f-bc33-4b57-87e7-55168d56d9b3.jpg','单图',null,null);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png','魅族 Flow Bass 三单元耳机','用得惬意 听得尽兴',499);
INSERT INTO xu_index VALUES(null,'img/index/Cix_s1gcVpeAOmoaAAGh-ubroNg891.png','魅族 EP2X 耳机','契合声音的流动之美',69);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0FrcX6iAfZfmAARPvQUH0FM087.png','魅族 HALO 激光蓝牙耳机','6期免息',499);
INSERT INTO xu_index VALUES(null,'img/index/b1d2eafb-e472-4a4d-b166-063fb30ebd3f.jpg','单图',null,null);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png','魅族 Flow 三单元耳机','用得惬意 听得尽兴',499);
INSERT INTO xu_index VALUES(null,'img/index/Cix_s1ij7KeAdy0cAAbboUvsAC4250.png','魅族蓝牙小音箱','好音感 直达心灵',99);
INSERT INTO xu_index VALUES(null,'img/index/Cgbj0FttMKWAPWDyAAFoG4YEzpI936.png','魅族 Gravity 悬浮音响','魅族声学15年集大成之作',1099);
#
CREATE TABLE xu_products(
  id INT PRIMARY KEY AUTO_INCREMENT,
  ty VARCHAR(32),
  img VARCHAR(255),
  i_name VARCHAR(32),
  intrduce VARCHAR(255),
  price INT
);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png@240x240.png','魅族 Note8','国民拍照全面屏手机 全像素双核对焦 大电池长续航',1298);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png@240x240.png','魅族 X8','骁龙710处理器 人脸指纹双解锁 旗舰双摄',1598);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png@240x240.png','魅族 16 X',' 高通骁龙710 屏下指纹 旗舰双摄',2098);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0VujaMOAFzUFAARRWnHvM84529.png@240x240.png','魅族 V8 高配版',' 高清双摄 指纹+人脸双解锁',1098);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0FujMs-AZDb5AA14vDzyhPE669.png@240x240.png','魅族 V8 标配版','5.7英寸HD+全面屏 AI智能美颜',798);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png@240x240.png','魅族 16th Plus','骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖',3198);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@240x240.png','魅族 16th',' 骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖',2698);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png@240x240.png','魅族 15','雕刻时光，重塑经典',1998);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0VrcbrCANJBMAAxI8Fi80MA520.png@240x240.png','魅族 15 Plus','雕刻时光，重塑经典',2498);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0VsM-iyAAgTIAAbXIwKFVL4647.png@240x240.png','魅蓝 6T','双摄全面屏，游戏长续航',798);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0Vsx5FmABcbVAAOfr1Ktzm4058.png@240x240.png','魅族 M15','雕刻时光，重塑经典',1398);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0Vq9-m2AJr_PAAp1B7CA5GY057.png@240x240.png','魅蓝 E3','骁龙636处理器 全系6G大运存',1798);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0Fpe-_yAFtuLAAw27mVWra0383.png@240x240.png','魅蓝 S6','国民拍照全面屏手机 全像素双核对焦 大电池长续航',998);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png@240x240.png','魅蓝 S6','国民拍照全面屏手机 全像素双核对焦 大电池长续航',598);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0VmtGa6AThj0AA1hVmco7-o197.png@240x240.png','魅蓝 Note6','国民拍照全面屏手机 全像素双核对焦 大电池长续航',898);
INSERT INTO xu_products VALUES(null,'phone','img/products/Cgbj0Fl4OduAN6lZAAoYW04sCAc119.png@240x240.png','魅族 PRO 7 Plus','双瞳如小窗 佳景观历历',1798);
INSERT INTO xu_products VALUES(null,'headset','img/products/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@240x240.png','魅族 HALO 激光蓝牙耳机','夜跑神器 随性张扬',998);
INSERT INTO xu_products VALUES(null,'headset','img/products/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png@240x240.png','POP 真无线蓝牙耳机','六期免息 双无线 零设限',498);
INSERT INTO xu_products VALUES(null,'headset','img/products/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png@240x240.png','魅蓝 EP52 蓝牙耳机','轻盈悦耳 动无拘束',298);
INSERT INTO xu_products VALUES(null,'headset','img/products/Cix_s1gcTHCANftiAAErzSizI8c299.png@240x240.png',' 魅族 EP2X 耳机','契合声音的流动之美',98);
INSERT INTO xu_products VALUES(null,'headset','img/products/1459849377-64075.png@240x240.png','魅族 EP51 蓝牙运动耳机','臻享音质 自在运动',198);
INSERT INTO xu_products VALUES(null,'headset','img/products/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png@240x240.png','魅族 EP52 Lite 蓝牙耳机','超高性价比创造无线新声代',129);
INSERT INTO xu_products VALUES(null,'headset','img/products/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png@240x240 (1).png','【砍价】魅族 EP52 Lite 蓝牙耳机','超高性价比创造无线新声代',128);
INSERT INTO xu_products VALUES(null,'headset','img/products/Cgbj0FoBV0OAVO4FAAHWxio0Reo515.png@240x240.png','JBL T120A立体声入耳式耳机','Pure Bass声音 随时随地置身演唱会之中',98);
