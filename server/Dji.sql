SET NAMES UTF8;
DROP DATABASE IF EXISTS dji;
CREATE DATABASE djiApp CHARSET=UTF8;
USE djiApp;

CREATE TABLE dji_user(
  user_id INT PRIMARY KEY AUTO_INCREMENT comment '用户的id',
  reg_way VARCHAR(16) comment '用户注册方式',
  user_phone CHAR(11) comment '用户手机号',
  user_email VARCHAR(64) comment '用户邮箱',
  user_pwd VARCHAR(128) comment '用户密码'
);
INSERT INTO dji_user VALUES
(NULL,"phone",17682819515,"2585351891@qq.com","yangwei123");

CREATE TABLE dji_product(
  product_id INT  PRIMARY KEY AUTO_INCREMENT comment '商品的id',
  product_ify VARCHAR(28) comment '商品的分类',
  product_title VARCHAR(128) comment '商品的介绍',
  product_Oprice DECIMAL(8,2) comment '商品的本来的价格',
  product_Nprice DECIMAL(8,2) comment '商品的打折后的价格'
);
INSERT INTO dji_product VALUES
(NULL,'Mavic','灵眸 Osmo 口袋云台相机',2499,0);

CREATE TABLE dji_img(
  img_id INT  PRIMARY KEY AUTO_INCREMENT comment '图片的id',
  relevancy_id INT comment '图片关联的商品id',
  img_url VARCHAR(128) comment '图片的地址'
);
INSERT INTO dji_img VALUES
(NULL,"1","http://127.0.0.1:3000/static/images/Osmo_one.jpg"),
(NULL,"1","http://127.0.0.1:3000/static/images/Osmo_two.jpg"),
(NULL,"1","http://127.0.0.1:3000/static/images/Osmo_three.jpg");
CREATE TABLE dji_mate(
  mate_id INT  PRIMARY KEY AUTO_INCREMENT comment '必备商品id',
  mate_Pid INT comment '绑定的商品id',
)