
-- MySQL dump 10.13  Distrib 8.0.40, for macos14 (arm64)
--
-- Host: localhost    Database: shopee_fake
-- ------------------------------------------------------
-- Server version	8.0.40
CREATE DATABASE `shopeeFake`;
USE shopeeFake;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `cartId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(userId),
  `quantityCart` int NOT NULL,
  `productId` varchar(255) NOT NULL,
  FOREIGN KEY (productId) REFERENCES products(productId),
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES ('76844632-9a93-4ecf-8b83-8d4ae967c593','b0635d0d-249b-4319-8282-bd2e832dc82f',1,'7948a281-92b6-4187-b9d9-5a2055ae3b49'),('840da145-2592-49dc-9318-7dc58f696a13','b0635d0d-249b-4319-8282-bd2e832dc82f',5,'59710246-1cc5-47b9-b922-c6a042871119'),('ed3ae457-07b4-44b4-9db9-e9e36867be45','a18bb214-e313-457c-8699-29117ecac6ed',2,'cf811010-dff1-4bfb-ae2f-884529f73063');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `categoryName` varchar(255) NOT NULL,
  `categoryId` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('Thời Trang Nam',1),('Phụ Kiện & Điện Thoại',2),('Thời Trang Nữ',3),('Đồ chơi',4),('Máy Tính & Laptop',5),('Giày Dép Nam',6),('Giày Dép Nữ',7);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `imageId` varchar(255) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `productId` varchar(255) NOT NULL,
  FOREIGN KEY (productId) REFERENCES products(productId),
  PRIMARY KEY (`imageId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES ('00395a46-7c32-4c43-92c4-129a88c0d541','https://res.cloudinary.com/dqirycujn/image/upload/v1691568397/xgiul96vljrqi3qkqbtu.jpg','1e1eb0f3-0ce1-4868-9220-980beeab872a'),('00beb645-855b-4e2f-a3bc-5001393cf14e','https://res.cloudinary.com/dqirycujn/image/upload/v1691738598/zy1uuyphkhdmovsejtmq.jpg','017257f9-a58e-4f4b-a126-02fec07a65fb'),('079e352a-e460-4289-9506-8e2fdf795552','https://res.cloudinary.com/dqirycujn/image/upload/v1692073740/tf56ealuuywmglo7dbgz.jpg','2d1598c7-5a44-4901-89a8-8c4f7750d70b'),('09c167c1-d62c-450a-81a5-a31e7e2d410f','https://res.cloudinary.com/dqirycujn/image/upload/v1691636044/wec3yeugtizzq7rdmupv.jpg','2e7f9f14-11dc-4c2a-9359-54275dcda9b0'),('0cba8f6d-6f88-4881-9edc-b2748bee706d','https://res.cloudinary.com/dqirycujn/image/upload/v1691738416/vpumdlzivndvpjtz69nq.jpg','7948a281-92b6-4187-b9d9-5a2055ae3b49'),('130a6756-cdf3-42d8-8293-8e8b36793d3f','https://res.cloudinary.com/dqirycujn/image/upload/v1691567912/l2gwijlvxd2hznemr9zl.jpg','a4109699-97cb-46b5-a1aa-23d457c0d20a'),('1a4f2f06-ecf4-4c57-87c9-c05f61fe4956','https://res.cloudinary.com/dqirycujn/image/upload/v1691116935/ha6umteglm0cqvhiwgzb.jpg','55993b97-7314-493f-b0d9-6d6125c47003'),('1b98105a-b14b-4681-9b79-c18e9e724906','https://res.cloudinary.com/dqirycujn/image/upload/v1691738598/pqmctrh1cghad8ri5nsm.jpg','017257f9-a58e-4f4b-a126-02fec07a65fb'),('1d9321a7-243c-4231-a237-87c462cace10','https://res.cloudinary.com/dqirycujn/image/upload/v1691738596/ndwif8645epwofatmnc1.jpg','017257f9-a58e-4f4b-a126-02fec07a65fb'),('23090c8c-e97b-438b-bebd-915dda964db3','https://res.cloudinary.com/dqirycujn/image/upload/v1691638923/dsvrdpxkqtpyagazmvbb.jpg','d1d7f568-31a3-4c85-9620-5f742a0de72e'),('23363dc6-df1a-4bd4-b8e5-b79f3a4bf148','https://res.cloudinary.com/dqirycujn/image/upload/v1691636505/qilijshzvxzsd4w0mmmx.jpg','d6ec62cb-1484-4dd2-98d3-0ae257af5929'),('24ffe65c-b595-4323-b7f8-07bf7d76212c','https://res.cloudinary.com/dqirycujn/image/upload/v1691638774/cqxvhqkive3pmjwii3zt.png','59710246-1cc5-47b9-b922-c6a042871119'),('277307d3-4129-4cf7-a01e-1bf580a51c5a','https://res.cloudinary.com/dqirycujn/image/upload/v1691738415/o4akfjg1cj4rkpehx0dl.jpg','7948a281-92b6-4187-b9d9-5a2055ae3b49'),('28f5c352-973f-44c6-a919-3b835f077392','https://res.cloudinary.com/dqirycujn/image/upload/v1691638822/ckuz8plgaw4vlwkhs7m4.jpg','48aec1ac-72b7-4646-88af-5fc0dc9565f5'),('2a2c112a-b4f1-41d7-83c9-1e5afdc3ab43','https://res.cloudinary.com/dqirycujn/image/upload/v1691738413/aazawa1uncffowqvtcty.jpg','7948a281-92b6-4187-b9d9-5a2055ae3b49'),('2eb60ce5-7c96-43e5-a4dd-917ee01c04b5','https://res.cloudinary.com/dqirycujn/image/upload/v1691639083/qeuak7cgehy46odvpkma.jpg','96a3a427-378a-46fa-88bc-a8c38e217021'),('302d8b90-6fd5-400c-a884-b1de4f4cba25','https://res.cloudinary.com/dqirycujn/image/upload/v1706753684/f8nhoueo9yazqojfiykd.jpg','e2eeed2d-e9a1-40ce-9a6b-32b82a43cc51'),('3043c6b4-9cad-41a4-acbb-d34ecd537b29','https://res.cloudinary.com/dqirycujn/image/upload/v1691635209/o19otqqoqn6trktyci1v.jpg','47a6795e-4bba-4b4d-a139-74b350b5185d'),('415b88c3-3f83-42a7-a2c0-7787ffed4563','https://res.cloudinary.com/dqirycujn/image/upload/v1691114317/fmjejes9ierfsahmxuly.jpg','cf811010-dff1-4bfb-ae2f-884529f73063'),('462b064e-4129-4a8d-8ec1-d01db3317c12','https://res.cloudinary.com/dqirycujn/image/upload/v1691635206/ty4thefpwmohqggydjgs.jpg','47a6795e-4bba-4b4d-a139-74b350b5185d'),('4ce683d7-ecb1-4832-b9e2-74946baa5d70','https://res.cloudinary.com/dqirycujn/image/upload/v1691638772/uid3rht5gxryqnahjpdb.png','59710246-1cc5-47b9-b922-c6a042871119'),('4f20da6e-e62f-4d49-99a9-60672e52902c','https://res.cloudinary.com/dqirycujn/image/upload/v1691638925/bd6xravvz8yk24tkzudj.jpg','d1d7f568-31a3-4c85-9620-5f742a0de72e'),('4f82c459-896d-43b4-b41b-0ce78ff057e2','https://res.cloudinary.com/dqirycujn/image/upload/v1691139983/djynnsyzbjc4xt6neuto.jpg','a34035b3-8b80-4db4-8333-d50b6d7d226c'),('50ffe812-f867-422e-8d9d-69836ff7d3c1','https://res.cloudinary.com/dqirycujn/image/upload/v1691568400/isexayxzkf9jyfibc045.jpg','1e1eb0f3-0ce1-4868-9220-980beeab872a'),('51829cf5-ff55-4478-b210-93f93ea90511','https://res.cloudinary.com/dqirycujn/image/upload/v1691738317/hnnz57ae747ysww5n6lw.jpg','d754929d-3bde-42d3-ba86-85026cec41c2'),('520bfb2d-af34-4f0a-ac95-e6aba229d40f','https://res.cloudinary.com/dqirycujn/image/upload/v1691567911/hiewadvqrdcjipzq4xys.jpg','a4109699-97cb-46b5-a1aa-23d457c0d20a'),('54e3e042-b1ac-4152-a10c-6e7b99195c07','https://res.cloudinary.com/dqirycujn/image/upload/v1692073740/b2dznappt2nitmqp2kco.jpg','2d1598c7-5a44-4901-89a8-8c4f7750d70b'),('5549956a-27ef-4d41-b16e-5fa9b7224146','https://res.cloudinary.com/dqirycujn/image/upload/v1691636504/bokvggppwheuh2pknj6l.jpg','d6ec62cb-1484-4dd2-98d3-0ae257af5929'),('5b95e2af-ab40-4ddb-9247-665d18eebe04','https://res.cloudinary.com/dqirycujn/image/upload/v1691636045/eqi38hnl0sei6tm9dnsf.jpg','2e7f9f14-11dc-4c2a-9359-54275dcda9b0'),('5df1b112-770f-4a51-8da9-c228912d479f','https://res.cloudinary.com/dqirycujn/image/upload/v1691636046/vob4dswiueh1vrfxaazo.jpg','2e7f9f14-11dc-4c2a-9359-54275dcda9b0'),('5f4509d6-1b55-4d82-ac65-abbd95465c1c','https://res.cloudinary.com/dqirycujn/image/upload/v1691638923/g3ggsyumojrqoy0qumem.jpg','d1d7f568-31a3-4c85-9620-5f742a0de72e'),('614dc323-1a45-4e52-b530-2ec7ecd2edac','https://res.cloudinary.com/dqirycujn/image/upload/v1691738596/yg1f4n37lzru3mzt6p3n.jpg','017257f9-a58e-4f4b-a126-02fec07a65fb'),('6305c527-e117-4ef0-8af5-dbdbf2d9adf0','https://res.cloudinary.com/dqirycujn/image/upload/v1691568399/dhfjrh4k7asbgz4jm7gt.jpg','1e1eb0f3-0ce1-4868-9220-980beeab872a'),('683bb252-f022-4ecf-b83b-d9293a922b2a','https://res.cloudinary.com/dqirycujn/image/upload/v1691638924/qc5jwyuscernkfewbr78.jpg','d1d7f568-31a3-4c85-9620-5f742a0de72e'),('6945b94f-eed1-41d3-93d9-4e9ccdd8b389','https://res.cloudinary.com/dqirycujn/image/upload/v1692073738/r6o8leudwhxq51q0vg5h.jpg','2d1598c7-5a44-4901-89a8-8c4f7750d70b'),('6bf432d3-fabe-4eb9-b7d8-758078a675a7','https://res.cloudinary.com/dqirycujn/image/upload/v1691638925/jzhcqnveykfjxdtvqrnp.jpg','d1d7f568-31a3-4c85-9620-5f742a0de72e'),('6e81e02c-75d6-42d4-9de5-19ffe92defda','https://res.cloudinary.com/dqirycujn/image/upload/v1691139983/bwmvxvio9hcdjlaqrsyo.jpg','a34035b3-8b80-4db4-8333-d50b6d7d226c'),('6f014ab4-0807-4b1a-afbd-812facc102e9','https://res.cloudinary.com/dqirycujn/image/upload/v1691738650/bikv0w2zebrxmxyinhkb.png','b1ac8058-c29e-4a2e-be62-8e8dfdc4eb27'),('6fbb882c-38dd-4580-b5ee-8d85c180b47c','https://res.cloudinary.com/dqirycujn/image/upload/v1691568399/itiiyjasomjvguhvqmps.jpg','1e1eb0f3-0ce1-4868-9220-980beeab872a'),('6fe27ee9-5b27-4f93-bfb6-f29792e74efc','https://res.cloudinary.com/dqirycujn/image/upload/v1691738646/cf0p10oze2y5x8u4hpe8.png','b1ac8058-c29e-4a2e-be62-8e8dfdc4eb27'),('6ff4f2b2-9577-409a-9252-373bf8115f41','https://res.cloudinary.com/dqirycujn/image/upload/v1691568398/q9x39hwgdsxkzqrnwlqp.jpg','1e1eb0f3-0ce1-4868-9220-980beeab872a'),('73e8dee2-9376-4f0e-8803-a334b147ee70','https://res.cloudinary.com/dqirycujn/image/upload/v1691738648/mg3esfxeb1jcoau9rlju.png','b1ac8058-c29e-4a2e-be62-8e8dfdc4eb27'),('868d580b-2daa-44dd-ad8f-bb47ac9461f0','https://res.cloudinary.com/dqirycujn/image/upload/v1691139981/ghsavkt5ml0soghw3adm.jpg','a34035b3-8b80-4db4-8333-d50b6d7d226c'),('88320c1b-37d5-468f-961d-5c768026d23b','https://res.cloudinary.com/dqirycujn/image/upload/v1691738649/pl8lfltlpwtcky0nr2gx.png','b1ac8058-c29e-4a2e-be62-8e8dfdc4eb27'),('898eb924-4cd2-410c-b3f8-09e5f382e728','https://res.cloudinary.com/dqirycujn/image/upload/v1691636047/cbvsiwwlpi4kxq3lifzp.jpg','2e7f9f14-11dc-4c2a-9359-54275dcda9b0'),('922851d1-687f-4c40-8e60-09cc3d6c4084','https://res.cloudinary.com/dqirycujn/image/upload/v1691567911/fs0ypnrafqnlb7ktzdys.jpg','a4109699-97cb-46b5-a1aa-23d457c0d20a'),('93b865bc-f006-4868-aeae-abc02df3e024','https://res.cloudinary.com/dqirycujn/image/upload/v1691636192/ui5qqqoke09gyaqlzsqj.jpg','34512a27-ff9d-40e4-8373-c6566d3bd106'),('943c8773-9fb5-4879-9bf1-b7d7a8aa7c49','https://res.cloudinary.com/dqirycujn/image/upload/v1691116933/lipuoy19ocrifn9s26nh.jpg','55993b97-7314-493f-b0d9-6d6125c47003'),('98bada9b-e1e5-4d5b-b2e4-41e40ff70cd2','https://res.cloudinary.com/dqirycujn/image/upload/v1691738321/iwfvblqd6fb84idszwoh.jpg','d754929d-3bde-42d3-ba86-85026cec41c2'),('9a94e6fb-17d2-464f-ad09-215853047252','https://res.cloudinary.com/dqirycujn/image/upload/v1691114317/dvonmwf2cvq9m6s4mg5x.jpg','cf811010-dff1-4bfb-ae2f-884529f73063'),('9c0bdba6-5af4-4bb4-9394-9d977e1d8a71','https://res.cloudinary.com/dqirycujn/image/upload/v1691636046/sezcrb0dlzwqedsxwtnf.jpg','2e7f9f14-11dc-4c2a-9359-54275dcda9b0'),('9c67ac98-c87e-450e-80ec-e17694c1f015','https://res.cloudinary.com/dqirycujn/image/upload/v1691635207/eslwic2zucdvf3itph9u.jpg','47a6795e-4bba-4b4d-a139-74b350b5185d'),('9d13e13c-5ba2-49ea-815a-b22238700816','https://res.cloudinary.com/dqirycujn/image/upload/v1691738414/jarkdadi430uw26x3ncu.jpg','7948a281-92b6-4187-b9d9-5a2055ae3b49'),('a28d19e1-ec29-4b1c-86d0-e44689e28449','https://res.cloudinary.com/dqirycujn/image/upload/v1691636504/wkpmeuxgrccjui37fcp9.jpg','d6ec62cb-1484-4dd2-98d3-0ae257af5929'),('ac1d0ad3-4703-4361-9100-110d5576409f','https://res.cloudinary.com/dqirycujn/image/upload/v1691738416/vvmmyqdxpigmj3darhet.jpg','7948a281-92b6-4187-b9d9-5a2055ae3b49'),('af6402cc-1760-458e-8850-2de12928680e','https://res.cloudinary.com/dqirycujn/image/upload/v1691639084/lwio65jo38apa04eapam.jpg','96a3a427-378a-46fa-88bc-a8c38e217021'),('b4e724a7-cdd1-449f-9306-2176701a2156','https://res.cloudinary.com/dqirycujn/image/upload/v1691638775/y6irryemp0i1j5g0nal1.png','59710246-1cc5-47b9-b922-c6a042871119'),('bc9dc62a-9e4f-4de4-9698-1eaeb01f5ae8','https://res.cloudinary.com/dqirycujn/image/upload/v1691639081/vy5qkm4c7tbhcjkthlsw.jpg','96a3a427-378a-46fa-88bc-a8c38e217021'),('bfea15cf-2e67-43b5-8a40-8bac0dc55c70','https://res.cloudinary.com/dqirycujn/image/upload/v1691567909/vnzpmb9ohipnteun9bna.jpg','a4109699-97cb-46b5-a1aa-23d457c0d20a'),('c0dd598e-ae14-48f0-86f1-ece917041883','https://res.cloudinary.com/dqirycujn/image/upload/v1691636503/p8qqommtmycbadaizmfu.jpg','d6ec62cb-1484-4dd2-98d3-0ae257af5929'),('c17c277c-0029-4495-8ab2-7a42ecd1627e','https://res.cloudinary.com/dqirycujn/image/upload/v1691738320/exzgb6wsiqktubpf8iew.jpg','d754929d-3bde-42d3-ba86-85026cec41c2'),('c4251716-0f8f-44b6-a71c-dedd1af4b0eb','https://res.cloudinary.com/dqirycujn/image/upload/v1691738319/tnx42ein5dxluit5ubzn.jpg','d754929d-3bde-42d3-ba86-85026cec41c2'),('c495cdee-690b-4ac3-9fc8-28f50763cd4d','https://res.cloudinary.com/dqirycujn/image/upload/v1691114315/vcbvthmddyirllyxrnha.jpg','cf811010-dff1-4bfb-ae2f-884529f73063'),('c53b9085-02be-40d8-a5c2-014d9b3d062a','https://res.cloudinary.com/dqirycujn/image/upload/v1691114316/hy8vj6p2bmabyinijm1x.jpg','cf811010-dff1-4bfb-ae2f-884529f73063'),('c6ce7404-0c5b-406f-ac26-5a13710da614','https://res.cloudinary.com/dqirycujn/image/upload/v1691738513/elmab4fle3vjbf45hswo.jpg','932d46bf-b27e-43d0-a6e0-f2f155050255'),('c82613ad-f620-45ed-86fa-0ba4e69ae151','https://res.cloudinary.com/dqirycujn/image/upload/v1691738318/u0cbt4ke3a02ci9au13u.jpg','d754929d-3bde-42d3-ba86-85026cec41c2'),('d13c839f-bed2-4c51-b507-63b819d8058f','https://res.cloudinary.com/dqirycujn/image/upload/v1692073739/nxl650thpm1ahc8ggazz.jpg','2d1598c7-5a44-4901-89a8-8c4f7750d70b'),('d2a42d1e-4847-4d33-889d-3e2588561bec','https://res.cloudinary.com/dqirycujn/image/upload/v1691116932/n1ac0rqgfmy4zzcz7ogv.jpg','55993b97-7314-493f-b0d9-6d6125c47003'),('d5280450-dbd6-4e08-98d2-02d5e6b1c762','https://res.cloudinary.com/dqirycujn/image/upload/v1691636506/cys8cbeysiyji77jg8kd.jpg','d6ec62cb-1484-4dd2-98d3-0ae257af5929'),('d797f3da-8c77-4dfb-8223-f1c3a11a3ee0','https://res.cloudinary.com/dqirycujn/image/upload/v1691738595/k4w6khkejwo5qunmiszj.jpg','017257f9-a58e-4f4b-a126-02fec07a65fb'),('dc7e0d7b-f9d4-4936-8690-3f999aa45766','https://res.cloudinary.com/dqirycujn/image/upload/v1691139981/t59wsjonff9ha4onisia.jpg','a34035b3-8b80-4db4-8333-d50b6d7d226c'),('dd48da92-ca38-4b0a-aba9-51cff3e50d41','https://res.cloudinary.com/dqirycujn/image/upload/v1691738648/ep5ctvhs7stsgdrkewsv.png','b1ac8058-c29e-4a2e-be62-8e8dfdc4eb27'),('dee3b3f4-39eb-403f-bd56-fd0b244f090d','https://res.cloudinary.com/dqirycujn/image/upload/v1691638776/mgg7zzkaff8kbwzkgrkb.png','59710246-1cc5-47b9-b922-c6a042871119'),('e27b11b1-6c67-4a8c-94f4-a239d21e3398','https://res.cloudinary.com/dqirycujn/image/upload/v1691139982/djclprrruurojmfgceqr.jpg','a34035b3-8b80-4db4-8333-d50b6d7d226c'),('e38bdbe7-f6ac-45e8-9c11-c8f527c671d6','https://res.cloudinary.com/dqirycujn/image/upload/v1691567910/qeehdfvvkovy0ys3rqrv.jpg','a4109699-97cb-46b5-a1aa-23d457c0d20a'),('e6ae82da-f639-447e-bb7a-9987e11aa6c6','https://res.cloudinary.com/dqirycujn/image/upload/v1691639082/jqerkcokg5jjxjrmblls.jpg','96a3a427-378a-46fa-88bc-a8c38e217021'),('ea62368d-233e-499d-a9d6-4f1034b44523','https://res.cloudinary.com/dqirycujn/image/upload/v1691114316/tzylewyybzn3uvzxzmsp.jpg','cf811010-dff1-4bfb-ae2f-884529f73063'),('edc59e0d-293e-4e07-a2ff-b9b2a12c0c33','https://res.cloudinary.com/dqirycujn/image/upload/v1691636191/eyzio2lwtakihfklhhbn.jpg','34512a27-ff9d-40e4-8373-c6566d3bd106'),('edf2a6f7-cf83-4595-86c5-b4f039aa9afa','https://res.cloudinary.com/dqirycujn/image/upload/v1691635207/jpur0cu7czsib5r8jhri.jpg','47a6795e-4bba-4b4d-a139-74b350b5185d'),('f15b0728-fbfa-437a-a8f9-cbdb636142d8','https://res.cloudinary.com/dqirycujn/image/upload/v1691635208/hqaix8gwvuhcv5oroef2.jpg','47a6795e-4bba-4b4d-a139-74b350b5185d'),('f2552f4a-d56e-4ef0-bf98-3d64eea3d44e','https://res.cloudinary.com/dqirycujn/image/upload/v1691638823/bxhwwx0rlbr21osavcd3.jpg','48aec1ac-72b7-4646-88af-5fc0dc9565f5'),('f458f68c-ba15-4c02-877f-abad1d016833','https://res.cloudinary.com/dqirycujn/image/upload/v1691116934/hl6dmctbepqwnd9m0soh.jpg','55993b97-7314-493f-b0d9-6d6125c47003'),('f595d004-ca11-4e4a-99fb-543e1f28540b','https://res.cloudinary.com/dqirycujn/image/upload/v1691639082/kxmwagzoit8o2styiz5l.jpg','96a3a427-378a-46fa-88bc-a8c38e217021'),('f79e3fea-7f6e-4b3d-bbce-bad6e8cc06ca','https://res.cloudinary.com/dqirycujn/image/upload/v1691635866/pfkrelutlokufqfwc8ni.jpg','f3d6250d-8ad1-4e31-9bfb-44d3a0388e93'),('f85c9946-b3b2-49fa-b519-169414405f32','https://res.cloudinary.com/dqirycujn/image/upload/v1691116933/ojtnznofo3y4nkrwsr93.jpg','55993b97-7314-493f-b0d9-6d6125c47003'),('ff490bb3-810d-4b9f-948b-119dbe2c19a5','https://res.cloudinary.com/dqirycujn/image/upload/v1692073738/ma7z8mnue5iderfenskt.jpg','2d1598c7-5a44-4901-89a8-8c4f7750d70b'),('ff549399-8e24-4165-a197-62a45d929769','https://res.cloudinary.com/dqirycujn/image/upload/v1691638773/fahkkqdhbkiv63i2max1.png','59710246-1cc5-47b9-b922-c6a042871119');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `orderDetailId` varchar(255) NOT NULL,
  `productId` varchar(255) NOT NULL,
  FOREIGN KEY (productId) REFERENCES products(productId),
  `orderId` varchar(255) NOT NULL,
  FOREIGN KEY (orderId) REFERENCES orders(orderId),
  `quantityOrder` int NOT NULL,
  `priceOrder` int NOT NULL,
  PRIMARY KEY (`orderDetailId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES ('1e78f971-85b6-455c-a268-5073423562aa','a4109699-97cb-46b5-a1aa-23d457c0d20a','c0c5c360-63c7-4695-99ba-0c013e135691',4,35000),('2d2b68a1-bb72-4cdf-b184-bd8df5e1c2df','a34035b3-8b80-4db4-8333-d50b6d7d226c','a5f2c003-4bbf-4f23-a2a0-c6ae7498d3db',10,10000),('2eb19b42-1fcb-467a-9d01-a271d1f6f8aa','55993b97-7314-493f-b0d9-6d6125c47003','e9c869b7-4c6b-4873-9877-29d2f09cc72d',2,150000),('4cbe22f3-3679-4be7-ad38-e49cc4ec05bb','d754929d-3bde-42d3-ba86-85026cec41c2','2afea63b-7d8c-433c-a7ed-37861c7d6c01',2,60000),('4f250d49-1884-44cb-bb53-6ecb2a6eb6ef','7948a281-92b6-4187-b9d9-5a2055ae3b49','76c4a27e-192f-4979-8fd3-acb89f6c073e',2,100000),('562e0c48-b07b-4192-a623-0082e5e000f1','a4109699-97cb-46b5-a1aa-23d457c0d20a','552fafd7-a592-475d-ae8b-0d5f2d99c4e3',4,35000),('7c39f4ca-3920-456e-872f-2ef1f5a6b652','8ec3f7ff-ef02-4a9c-9889-d93094775990','3232192f-6508-4c2b-890b-a75e483ae343',5,50000),('8567b241-22a6-47ee-9a3f-4bf77d562963','96a3a427-378a-46fa-88bc-a8c38e217021','d0da653e-e422-421c-b610-e0c54dc5467a',5,138000),('9954c976-23e1-4217-84a7-fe78521e8608','cf811010-dff1-4bfb-ae2f-884529f73063','b47aca41-9137-479a-9592-1ee255b3df3b',1,23200),('b7151817-5a3e-474d-89d4-49c95f62089a','a4109699-97cb-46b5-a1aa-23d457c0d20a','3f929545-280c-4409-9194-3391ff8c34d3',1,35000),('c3886106-a4ed-4e99-8c9c-d8b88297c98c','cf811010-dff1-4bfb-ae2f-884529f73063','3ce0a995-91c1-403e-a953-5034fbb22287',2,70000),('ce0c68af-0a1d-4385-b066-3cd31072d2d3','d1d7f568-31a3-4c85-9620-5f742a0de72e','1b793d80-8eb0-49d4-916a-befe76cd2274',1,90000),('d2421351-690e-4acd-baed-378807d40902','017257f9-a58e-4f4b-a126-02fec07a65fb','3bebaf47-f797-4561-91f4-36ed5d258ed1',1,70000),('dbadfcfc-88f8-46cb-b3d7-479ee940ef32','cf811010-dff1-4bfb-ae2f-884529f73063','d104ee48-f3e0-42d1-8548-07dd98827cbc',1,23200),('de368dbe-0523-4bfa-8641-a13ddf1717e0','1e1eb0f3-0ce1-4868-9220-980beeab872a','2138fb41-3094-4136-ba54-7ee3f9eb8ca1',5,3000);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderId` varchar(255) NOT NULL,
  `addressOrder` varchar(255) NOT NULL,
  `nameOrder` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(userId),
  `storeId` varchar(255) NOT NULL,
  FOREIGN KEY (storeId) REFERENCES stores(storeId),
  `createDateOrder` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statusOrder` varchar(255) NOT NULL DEFAULT 'pending',
  `totalPrice` int NOT NULL,
  `phoneOrder` varchar(255) NOT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('1b793d80-8eb0-49d4-916a-befe76cd2274','ha noi','Duong','46566d72-0e0b-49db-b416-74353c9e58d2','9b795ab6-f175-46de-9eb5-0eecb409b0bc','2024-02-01 02:14:08','pending',160000,'0123456789'),('2138fb41-3094-4136-ba54-7ee3f9eb8ca1','Yên Hòa','Minh Dương','74b6a847-eb01-4055-b6ba-57e739200831','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2023-08-15 04:30:45','success',15000,'0975771793'),('2afea63b-7d8c-433c-a7ed-37861c7d6c01','a','Duong','051748aa-45bf-4c54-baa1-4ebb4e947276','a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','2024-04-03 02:55:29','pending',120000,'987654321'),('3232192f-6508-4c2b-890b-a75e483ae343','Láng Hạ - Ba Đình','Lê Thị Hà Trang','051748aa-45bf-4c54-baa1-4ebb4e947276','9b795ab6-f175-46de-9eb5-0eecb409b0bc','2023-08-14 03:44:48','success',250000,'0986135312'),('3bebaf47-f797-4561-91f4-36ed5d258ed1','ha noi','Duong','46566d72-0e0b-49db-b416-74353c9e58d2','a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','2024-02-01 02:14:08','pending',160000,'0123456789'),('3ce0a995-91c1-403e-a953-5034fbb22287','Láng Hạ - Ba Đình','Hà Trang','a18bb214-e313-457c-8699-29117ecac6ed','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2023-08-07 01:54:10','success',2468,'0988999888'),('3f929545-280c-4409-9194-3391ff8c34d3','Ha Noi','Duong','46566d72-0e0b-49db-b416-74353c9e58d2','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2023-12-27 02:27:16','cancel',58200,'0123456789'),('552fafd7-a592-475d-ae8b-0d5f2d99c4e3','Ha Noi','Long','46566d72-0e0b-49db-b416-74353c9e58d2','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2024-03-08 08:10:45','cancel',140000,'0123456789'),('76c4a27e-192f-4979-8fd3-acb89f6c073e','Thanh Xuân - Hà Nội','Đức','051748aa-45bf-4c54-baa1-4ebb4e947276','a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','2023-08-14 04:05:45','pending',200000,'0975771793'),('a5f2c003-4bbf-4f23-a2a0-c6ae7498d3db','Ha Noi','Duong','46566d72-0e0b-49db-b416-74353c9e58d2','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2024-04-28 17:59:14','pending',100000,'0123456789'),('b47aca41-9137-479a-9592-1ee255b3df3b','123','123','051748aa-45bf-4c54-baa1-4ebb4e947276','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2023-08-21 02:59:45','success',23200,'123'),('c0c5c360-63c7-4695-99ba-0c013e135691','Ha Noi','Duong','46566d72-0e0b-49db-b416-74353c9e58d2','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2024-03-26 07:49:24','pending',140000,'0123456789'),('d0da653e-e422-421c-b610-e0c54dc5467a','asdasd','sadasd','46566d72-0e0b-49db-b416-74353c9e58d2','9b795ab6-f175-46de-9eb5-0eecb409b0bc','2024-04-28 18:00:52','pending',690000,'546156465'),('d104ee48-f3e0-42d1-8548-07dd98827cbc','Ha Noi','Duong','46566d72-0e0b-49db-b416-74353c9e58d2','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2023-12-27 02:27:16','pending',58200,'0123456789'),('e9c869b7-4c6b-4873-9877-29d2f09cc72d','Láng Hạ - Ba Đình','Hà Trang','a18bb214-e313-457c-8699-29117ecac6ed','1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','2023-08-07 02:26:05','pending',246,'0988999888');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productId` varchar(255) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `description` longtext NOT NULL,
  `quantity` int NOT NULL,
  `quantitySold` int DEFAULT NULL,
  `statusProduct` int NOT NULL DEFAULT '0',
  `storeId` varchar(255) NOT NULL,
  FOREIGN KEY (storeId) REFERENCES stores(storeId),
  `imageProduct` varchar(255) NOT NULL,
  `categoryId` int NOT NULL,
  FOREIGN KEY (categoryId) REFERENCES categories(categoryId),
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('017257f9-a58e-4f4b-a126-02fec07a65fb','Chuột không dây 2.4ghz 1600 Dpi hình xe hơi độc đáo đẹp mắt',70000,'Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày\n\nThông tin sản phẩm: \nSản phẩm hoàn toàn mới 100%, chất lượng cao\nChuột không dây là cách tiết kiệm chi phí.\nHình dáng chiếc xe sáng tạo rất thích hợp cho bất kỳ người dùng nào.\nChuột của chúng tôi mang đến một giải pháp đủ điều kiện và bền bỉ, vượt quá sự mong đợi về chất lượng.\nKết nối không dây kỹ thuật số 2,4 GHz để mang đến phạm vi hoạt động xa nhất 8 mét \nChuột quang USB không dây\nKiểu theo dõi: Quang học\nThiết kế công thái học, cầm nắm thoải mái\nChức năng mạng thông minh\nChuột có thể dùng được với đầu thu nhỏ đi kèm\nSản phẩm giống như một chiếc Ferrari, với hình dáng chiếc xe thời trang, sản phẩm là một món quà sáng tạo dành cho bạn bè hoặc gia đình của bạn.\nKích thước chuột: 100-120mm\nKết nối với máy tính: không dây\nĐộ phân giải quang điện: 1600dpi (dpi)\nSố phím bấm: 3 phím\nHình dạng: Xe Ferrari\nTần số kết nối không dây cổng cắm USB: 2,4 GHz\nCó hỗ trợ công thái học hay không: hỗ trợ\nKhoảng cách hoạt động: 8 (m)\nMàu sắc: Đen, Xanh dương, Hồng, Vàng\nNguồn điện: 2 x 1.5V pin AAA (Không bao gồm)\n\nMiêu tả sản phẩm: \nKết nối không dây kỹ thuật số 2,4 GHz để mang đến phạm vi hoạt động xa nhất 8 mét \nChuột quang USB không dây\nKiểu theo dõi: Quang học\nThiết kế công thái học, cầm nắm thoải mái\nCác chức năng mạng nội bộ\nChuột có thể dùng được với đầu thu nhỏ đi kèm\n\nGói hàng bao gồm: \n1 x Chuột không dây\nLưu ý: \nDo chênh lệch cài đặt ánh sáng và màn hình, màu sắc sản phẩm có thể hơi khác so với hình ảnh. \nSo sánh kích thước chi tiết với kích thước của bạn, vui lòng cho phép sai số 1-3cm về số đo do cách đo lường thủ công. \nVui lòng để lại tin nhắn trước khi bạn đưa ra phản hồi xấu, nếu sản phẩm có một số vấn đề.',93,7,0,'a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','https://res.cloudinary.com/dqirycujn/image/upload/v1691738594/idbhovgdrlugdld4kg3z.jpg',5),('1e1eb0f3-0ce1-4868-9220-980beeab872a','Miếng PPF dán viền bảo vệ cho Iphone 14 13 Pro Max / 12 Pro Max / 13 Mini',3000,'Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày\n\nMIẾNG PPF DÁN VIỀN IP 12/13 SIÊU THỊNH HÀNH\n\n? Độ mỏng : 0.25mm\n? Độ cứng 9H, cứng gấp chục lần so với các sản phẩm khác\n? Độ trong suốt đạt chuẩn HD, sáng bóng (Điểm chất lượng vượt trội so với phần còn lại)\n? Chống va đập cực mạnh, cào cấu, va chấn, bao trầy\n? Các góc bo tròn với chất liệu PET cực tốt, cảm giác không bị cấn, khó chịu khi sử dụng.\n\n\n?Thông tin sản phẩm:\n- Chất liệu: TPU\n- Thiết kế: Bo khít máy\n- Dòng máy tương thích: 12/12 pro/12 mini/12 pro max/ 12 mini pro promax/13/13 Mini/13 Pro/13 Pro Max\n- Xuất xứ: Việt Nam\n- Công dụng: giữ điện thoại chắc chắn trên tay, an toàn chống trầy xước,  bảo vệ chiếc điện thoại khỏi va đập.\n\n? Gói hàng bao gồm :\n* Miếng hít bụi\n* Miếng lau màn hình\n\n? Hướng dẫn dán.\n* Bước 1: Vệ sinh\n* Vệ sinh sạch màn hình bằng khăn hoặc 2 miếng giấy ướt và khô đánh dấu số 1, 2 kèm theo. Mục đích tránh bụi bẩn bám trên viền.Dùng băng keo lấy sạch bụi, sợi lông bám trên màn hình. Phải lấy sạch bụi\n* Bước 3: Thực hiện\n* Lột bỏ miếng ppf nhẹ nhàng đặt lại lên viền. Sau khi đã khớp và kiểm tra viền có sót bụi bẩn nào không. Nếu sót nhẹ nhàng dùng băng keo giấy lấy hạt bụi ra.  Vuốt như vậy sẽ hạn chế xuất hiện bọt khí.\nChúc các bạn dán được sản phẩm hoàn toàn ưng ý!',89,11,1,'1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','https://res.cloudinary.com/dqirycujn/image/upload/v1691568397/gnds8vbgnujvybntxnyd.jpg',2),('2d1598c7-5a44-4901-89a8-8c4f7750d70b','Loa Máy tính Để Bàn',170000,'Loa Máy Tính để bàn',120,NULL,1,'5ab9dc9f-5d79-4add-8aa0-42aaa69d42b4','https://res.cloudinary.com/dqirycujn/image/upload/v1692073737/zxwfxcu7i70w3y5dtltl.jpg',4),('2e7f9f14-11dc-4c2a-9359-54275dcda9b0','[Video] Dây Nịt Nam - Thắt Lưng Nam Thời Trang Cao Cấp Phong Cách Sang Trọng (DN-006) ?MUA KÈM DEAL SỐC ?',30000,'⚠️ TRONG TRƯỜNG HỢP DÂY RỘNG: mặt và dây có thể tháo rời, từ đó cắt bớt theo kích thước vòng bụng.\n\n✅ Mã sản phẩm: DN-006\n\n✅ Chất liệu: PU\n\n✅ Chiều rộng bản: 3.5 cm\n\n✅ Chiều dài: 120 cm\n\n✅ Hoạ tiết: trơn\n\n✅ Tình trạng: mới\n\n✅ Phù hợp: mọi lứa tuổi\n\n\n\ndây nịt nam thắt lưng nam với kiểu dáng thiết kế sang trọng và tinh tế làm nổi bật phong cách người dùng.\n\nMặt khoá được làm từ hợp kim bọc bởi lớp phủ cực kỳ sang trọng.\n\nĐường vân trên bề mặt sản phẩm trong rất tự nhiên, mềm dẻo và không thấm nước.\n\nSản phẩm có kiểu dáng đơn giản nhưng tinh tế dễ dàng phối hợp với các kiểu quần jeans & kaki v.v...\n\n\n\nVui lòng truy cập vào shop để xem tất cả sản phẩm dây nịt nam thắt lưng nam của shop, và các sản phẩm thời trang nam nữ khác với mẫu mã ĐẸP ĐỘC LẠ.\n\n\n\n❤️ Hãy bấm \"Like\" sản phẩm và \"Theo dõi\" để cập nhật những mẫu sản phẩm mới nhất và khuyến mãi từ shop. \n\n❤️ Quý khách có thể đến trực tiếp shop để mua hàng.\n\n❤️ Tuyển sỉ và công tác viên - Vui lòng gửi tin nhắn cho shop để trao đổi và trở thành đối tác của nhau.\n\n? Rất hân hạnh được phục vụ ! ?',120,NULL,0,'ce880717-8a6c-4f5c-a105-47f5dd957303','https://res.cloudinary.com/dqirycujn/image/upload/v1691636044/j6y4belxlmueqr4ikfyu.jpg',1),('34512a27-ff9d-40e4-8373-c6566d3bd106','Áo thun trơn Kirkland Unisex Oversize [Nam,Nữ] - Áo phông - Màu',99000,'❌THÔNG BÁO:\n\nHiện tại Toàn Quốc đặc biệt HCM vẫn đang thực hiện giãn cách xã hội nghiêm ngặt nên lấy và giao hàng có thể lâu dự kiến do đơn vị vận chuyển bị kiểm tra rất nhiều. Mong khách hàng thông cảm cho shop vì shop khi nào cũng muốn đơn hàng tới tay khách hàng sớm nhất ạ . Cảm ơn mọi người nhiều .\n\n❗️?Ư? Ý ❗️\n\n❗Á? ???????? ??Ệ? ?Ạ? ?Ủ? ???? ?À Á? ??Ấ? ?Ư ?Ê? ĐỘ ?À? ?Ủ? Á? ?Ẽ ?Ó ĐỢ? ?À?, ?Ó ĐỢ? ?Ỏ?? ?Ơ? ?Í? ?Ẽ ??Ụ ???Ộ? ?À? ?ƯỞ?? ?Ì ??? ???? ??Ờ? ??Ế? ??Ư?? ?Ẫ? ĐẢ? ?Ả? ??Ấ? ?ƯỢ?? ???% ?????? ❗️\n\n❣️???? ??Á?? ??Ể? ??? ???? ?Ì ???? ??Ô? ??Ố? ??Ậ? ĐƯỢ? Á? ?Ả? ?À? ??Ư?? ??Ả? ??Ụ ???Ộ? ?Ê? ?ƯỞ?? ?È❣️\n\n❗️ÁO IN NHẦM MẠC : Ví dụ : Áo có số đo size L nhưng in nhầm mác trên áo là size M. Chứ áo không có lủng hay bị lỗi gì nhé. ❗️\n\n\n?Mọi người nhớ ?Ử ?Ụ?? ???????? (??ễ? ??í ?ậ? ????ể?) trong phần ?Ã ??Ả? ??Á khi ????? ??Á? ĐƠ? ?À?? nhé?\n\n❌Hãy chọn mã \"??ễ? ??í ?ậ? ????ể?\" mà có chữ ÁP DỤNG \"?ấ? ?ả ?ì?? ??ứ? ????? ??á?\" để được ???????? nha❌\n\n?Nếu hàng bị LỖI hay SAI SIZE thì hãy inbox trực tiếp shop để shop giải quyết nhanh gọn lẹ nha. Chứ đừng đánh giá 1 sao cho shop nha vì nhiều đơn nên có thể shop không cẩn thận đó ạ. ?..\n\nLí do chính để bạn phải sở hữu ngay Áo thun KIRKLAND :\n?Hàng xuất Châu Âu , Nhật...Cotton 100% thấm hút mồ hôi cực tốt\n?Đặc biệt thì item này phối được với tất cả quần, váy,... trên thế giới.\n?Vải mềm mịn không quá dày cũng không quá mỏng phù hợp với thời tiết miền Nam\n\n?️?️?️ Size áo : S M L XL XXL (Size XL dành cho ae nào trên 95kg nha ) \n\n⛔️???? á? ?ướ? đâ? ?à ?à?? ??? ??ữ?? ?? ??í?? ?ặ? ?ộ?? ???ả? ?á? ??é. ?? ??ố? ?ặ? ?ừ? ??ì ?? ??ự? ??ế? ???? ?ư ?ấ? ??? ?ì ?ò? ??ụ ???ộ? ?à? ???ề? ???⛔️\n\n❌ ?Ư? Ý: CÁC ÁO MÀU CÙNG SIZE CÓ THỂ LỆCH NHAU 2-3cm NHÉ ❌',99,NULL,0,'ce880717-8a6c-4f5c-a105-47f5dd957303','https://res.cloudinary.com/dqirycujn/image/upload/v1691636190/lmidjmpzb39thujf4gdg.jpg',1),('47a6795e-4bba-4b4d-a139-74b350b5185d','Áo 3 lỗ nam Cotton trắng trơn mặc lót trong sơ mi trung niên LEDATEX dệt kim đông xuân cao cấp DOLOTDAY',128000,'  MÔ TẢ SẢN PHẨM\n⭐ Tên sản phẩm : Áo sơ mi kaki basic cao cấp\n⭐ Chất Liệu: Chất kaki xuất hàn xịn \n⭐ Màu sắc: Đen – Be - Trắng - Cam - Xám\n⭐ Đặc Tính:  Chất vải áo là chất kaki cao cấp dày dặn, dễ phối hợp đồ, nam nữ mặc đều đẹp ạ \n\nBảng size bên shop các bạn tham khảo ạ:\nSize M: Dành cho người nặng từ  42kg - 50kg 1m55-1m60\nSize L : Dành cho người nặng từ  51kg - 58kg 1m60-1m65\nSize XL: Dành cho người nặng từ  59kg  - 67kg 1m65-1m70\nSize 2XL: Dành cho người nặng từ  68kg  - 75kg 1m70-1m75\nSize 3XL: Dành cho người nặng từ  76kg  - 85kg 1m75-1m80\n\n? Bảng size mang tính chất tham khảo bạn có thể lấy size to hơn hoặc nhỏ theo yêu cầu của bạn!\nMàu sắc: Đen – Be - Trắng - Cam - Xám\nLưu ý: Các bạn hãy nhắn tin cho shop để tư vấn size chính xác',100,NULL,0,'ce880717-8a6c-4f5c-a105-47f5dd957303','https://res.cloudinary.com/dqirycujn/image/upload/v1691635205/kenya3fheua5rvvz72vn.jpg',1),('48aec1ac-72b7-4646-88af-5fc0dc9565f5','Áo Khoác Cardigan Dệt Kim Len + Yếm Hoa Mặc Trong Cả Set ( Có bigsize) (SET001)',89000,'Áo Khoác Cardigan Dệt Kim Len + Yếm Hoa Mặc Trong Cả Set ( Có bigsize) (SET001)\nÁo khoác Cardigan Len : set bao gồm áo cardigan + yếm mặc trong Siêu xinh ( có thể mua lẻ)\nsize s : dưới 45kg\nsize M : 46-55kg\nsize L:55-60kg\nsize xl 61-68kg\nBảo quản :\n+ không giặt máy 10 ngày đầu\n+ không sử dụng thuốc tẩy khi giặt\n+ lộn trái áo/quần để giặt và phơi ngang dây phơi. \n——————————\nĐiều kiện đổi trả \n+ Sản phẩm sai size, màu, loại hàng\n+ Sản phẩm lỗi do nhà sản xuất hoặc do vận chuyển\n+ Tem mác còn nguyên vẹn \n+ Cung cấp video mở hàng rõ nét quay 6 cạnh bưu phẩm. \n? Nếu khách đặt nhầm size Hoặc không mặc vừa, sẽ được hỗ trợ đổi trong 3 ngày kể từ khi nhận hàng ( yêu cầu: giữ nguyên đồ chưa qua sử dụng, tem mac, hộp , túi )--> liên hệ za.l0 032.57.98.436 \n——————————\n❎ Lưu ý : nếu muốn đổi size vui lòng ib cho shop nhé ! tránh ấn trả hàng ạ !\nshop luôn hỗ trợ đổi size cho các bạn nào đặt nhầm size, tuy nhiên chi phí vận chuyển shop ko có thanh toán nha ^^',93,7,0,'9b795ab6-f175-46de-9eb5-0eecb409b0bc','https://res.cloudinary.com/dqirycujn/image/upload/v1691638822/gszupm9arukvt5fonezo.jpg',3),('55993b97-7314-493f-b0d9-6d6125c47003','Ốp Điện Thoại Cho iphone 14 Pro Max i14 plus 13 Pro Max i13 13pro 11 Pro Max i11 X XR Xs Max 7 plus 8 plus 12Pro 12 Pro Max',18000,'- Chào Mừng đến với cửa hàng của chúng tôi -\n\nTôi rất vui vì bạn có thể duyệt qua cửa hàng của chúng tôi vì chúng tôi là một cửa hàng mới. Nhưng hãy tin rằng chúng tôi sẽ mang đến cho bạn những sản phẩm chất lượng cao với giá thành thấp nhất. Chúng tôi có một nhà máy lớn ở Trung Quốc.\n\n\n\nVề thời gian vận chuyển\n\n1. Sau khi thanh toán, chúng tôi sẽ gửi gói trong vòng 1-3 ngày.\n\n2. Sẽ mất khoảng 10-15 ngày để gói hàng được vận chuyển, xin vui lòng kiên nhẫn, cảm ơn bạn.\n\n\nGhi âm!\n\nVui lòng xác nhận chi tiết màu sắc và kích thước và địa chỉ giao hàng của bạn trước khi đặt hàng.\n\nMỗi sản phẩm có một biểu đồ kích thước. Vui lòng tham khảo bảng kích thước để biết các sản phẩm phù hợp.\n\nNếu bạn là khách hàng mua buôn, xin vui lòng liên hệ với chúng tôi.\n\nTôi sẽ cung cấp cho bạn một mức giá tốt hơn! Bạn cũng có thể lấy mẫu cho bạn. \"',99,5,0,'1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','https://res.cloudinary.com/dqirycujn/image/upload/v1691116931/kzees2rwa0jefj61smpk.jpg',2),('59710246-1cc5-47b9-b922-c6a042871119','[RẺ VÔ ĐỊCH] Áo Thun Tổ Ong Logo Chant Unisex [FREESHIP] Phông form rộng tay lỡ kiểu dáng 3158 đường phố vintage',49000,'Áo Thun Tổ Ong Logo Chant PEONYB Unisex\n\n✔️ Áo thun tổ ong logo basic, nam nữ mặc đẹp\n\n? Freesize 38- 65kg đẹp ( tuỳ chiều cao du di giúp em )\n\n? Nhanh tay đặt hàng để nhận nhiều ưu đãi của Peonyb các nàng ơiii <3\n\n#thoi #trang #nu #ao #thun #to #ong #phong #coc #tay #ngan #form #rong #logo #chant #hoanxu #freeship #ulzzang\n\n?LUỐN ĐẶT UY TÍN  LÊN HÀNG ĐẦU\n\n?GIÁ RẺ ĐẾN TẬN TAY KHÁCH HÀNG\n\n❤️Shop chuyên sỉ, lẻ quần áo giá tận xưởng không qua trung gian ...\n\n❤️Cập nhập mẫu mã liên tục giá tốt nhất\n\n❤️ Liên tục tuyển sỉ CTV toàn quốc - LẤY CÀNG NHIỀU • GIÁ CÀNG YÊU\n\n❤️ Shop up ảnh thật tự chụp \n\n =>> Lưu ý:\n\n+ Khách đặt hàng online sẽ nhận được hàng sau khoảng 1-3 ngày làm việc tùy theo khoảng cách và đơn vị vận chuyển. \n\n+ Mọi thắc mắc, góp ý về sản phẩm, giao hàng vui lòng liên hệ với Hotline để được hỗ trợ trực tiếp và nhanh nhất. \n\n+ Đối với các mặt hàng đổi trả bảo hành, vui lòng liên hệ và cung cấp hình ảnh cũng như chi tiết lỗi để chuyên viên bên shop đánh giá, khắc phục đảm bảo quyền lợi cho quý khách.\n\n♥ Xem thêm các sản phẩm của Shop vui lòng Click\n\n♥ Xin chân thành cảm ơn các bác\n\n? ? Nhận THU HỘ ( ship COD ) toàn quốc \n\n? Hình Shop chụp, đảm bảo mặc lên form đẹp như ảnh\n\n? Vải đẹp , không xù , không co rút , mềm mịn dày dặn , hút mồ hôi cực nhanh, mặc siêu mát . \n\n? Kemshop1908',99,1,0,'9b795ab6-f175-46de-9eb5-0eecb409b0bc','https://res.cloudinary.com/dqirycujn/image/upload/v1691638771/vc6n5mvmernj0n9fcbbv.png',3),('7948a281-92b6-4187-b9d9-5a2055ae3b49','Loa bluetooth đồng hồ G5, loa mini không dây nghe nhạc làm đèn ngủ màn hình soi gương',100000,'Loa bluetooth đồng hồ G5, loa mini không dây Clock seaker D88 nghe nhạc\nChú ý: loa có công suất 3w 1 bên là loa còn một bên là màng chắn âm bass, mặt kính có giấy bóng bọc bên ngoài, khi sử dụng quý khách nên bóc giấy bóng ra. Sản phẩm có 2 phiên bản - phiên bản G5 nội địa và phiên bản Clock Speaker D88 Châu âu (tiếng anh)\n1. Loa bluetooth mini không dây đồng hồ có Màn hình LED hiển thị lớn: LED hiển thị đồng hồ , báo thức, trạng thái chế độ, và nhiệt độ theo độ C . Bạn cũng có thể sử dụng nó như một chiếc gương soi. Và có thể điều chỉnh độ sáng 3 mức độ (BRIGHTEST, MIDDLE & LOWEST).\n2. Loa bluetooth mini không dây đồng hồ có công nghệ Bluetooth mới nhất: Bluetooth 5.2 cho phép smartphone kết nối tới với khoảng cách lên tới 10M. Có microphone để nghe điện thoại ở chế độ rảnh tay.\n3. Loa bluetooth mini không dây đồng hồ có chất lượng âm thanh cao chống ồn và tăng cường âm Bass.\n4.  Loa bluetooth mini không dây đồng hồ có dung lượng pin lớn 1400mAh cho phép chơi nhạc 8 giờ liên tiếp (tùy âm lượng). Chơi nhạc từ TF card, AUX, nó có thể đáp ứng nhu cầu của bạn bất cứ khi nào, nghe đài FM, tự động tìm kiếm, sạc trong 3h và sử dụng được trong 8h, nếu sử dụng đồng hồ thời gian sử dụng lên tới 72h. \nBạn hoàn toàn có thể thưởng thức âm nhạc một cách nhẹ nhàng.\n5.  Loa bluetooth mini không dây phong cách & di động: Loa bluetooth có thiết kế gọn gàng và thẩm mỹ với các nút bấm đơn giản trên đỉnh giúp loa trông thời trang và dễ sử dụng.\n6.  Loa bluetooth mini không dây đồng hồ có thể làm quà tặng: Loa bluetooth thuận tiện cho bạn để mang lại và chơi nhạc bất cứ nơi nào bạn đi. Món quà hoàn hảo cho gia đình, bạn bè và người yêu của bạn trong Giáng sinh, sinh nhật, ngày Valentine hoặc kỷ niệm.\nĐặc điểm kỹ thuật của loa bluetooth mini không dây đồng hồ:\n+Thông tin sản phẩm bluetooth mini không dây có \nLoa bluetooth mini không dây có kết nối : Bluetooth 5.0, Aux, thẻ\nLoa bluetooth mini không dây sử dụng nguồn điện: Sạc pin\nLoa bluetooth mini không dây có dung lượng pin: 1400 mAH Màn hình gương dạng led.\nLoa bluetooth mini không dây có chức năng : Loa bluetooth , báo thức, nhiệt độ, gương soi...\nLoa bluetooth mini không dây kèm đồng hồ sang trọng. Loa Bluetooth kèm đồng hồ cực đẹp. Giúp cho căn phòng sang trọng và thanh lịch hơn.\n+Tính năng nổi bật của loa bluetooth mini không dây: Âm thanh từ loa to rõ, chắc âm, bass lớn. Khi sở hữu sản phẩm này vừa có một chiếc loa nhỏ gọn, một chiếc đồng hồ hiển thị thời gian, nhiệt độ và cả một chiếc gương để trang điểm.\nTên sản phẩm: Loa bluetooth G5\nXuất xứ: Trung Quốc\nNSX: 2021\nCông ty sản xuất: Wuhan Huazhong YOUPIN Trading Co.,Ltd \nĐịa chỉ: F3-4, Hankou North Central China enterprise City, Huangpi District, Wuhan, China\nNhà nhập khẩu và phân phối: Công ty TNHH TMDV Phú Lương\nĐịa chỉ: 404/9 TCH10, Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh, Việt Nam\nBộ sản phẩm gồm: \n- 01 x Cáp sạc\n- 01 x Loa\n- 01 x sách HDSD',98,2,0,'a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','https://res.cloudinary.com/dqirycujn/image/upload/v1691738413/cefbfnket9cfs3dy9x2t.jpg',5),('8ec3f7ff-ef02-4a9c-9889-d93094775990','Váy ngủ hai dây đầm ngủ thun mềm mịn có đệm ngực đuôi xếp li ( tặng kèm bịt mắt ) P3-D3',50000,'Váy ngủ hai dây đầm ngủ thun mềm mịn có đệm ngực đuôi xếp li ( tặng kèm bịt mắt )\n\n Sản phẩm BEST SELLER tại TIPI SHOP\n\n- Chất liệu : Cotton\n\n- Size :  \n\n  + Size M: chiều dài váy 78cm ( cao từ 1m5-1m6) & cân nặng từ 40-50kg\n\n  + Size L : chiều dài váy 82cm ( cao từ 1m6-1m7) & cân nặng từ 50-60kg\n\n- Đặc điểm nổi bật :\n\n + Váy được đóng góp túi zip và được tặng kèm 1 bịt mắt ngủ cùng màu\n\n + Dây áo có thể điều chỉnh, áo còn có thêm đệm mút ngực đi kèm, tha hồ thả rông mà không lo bị lộ nha\n\n + Váy dạng xuông hình chữ A, dưới chân váy có dập li đuôi cá tạo cảm giác bồng bềnh, dễ thương\n\n + Váy rất dễ mặc phù hợp cho cả bà bầu, phụ nữ mang thai, thiết kế dấu bụng hoàn hảo cho các bạn mi nhon\n\n \n\n? Quý khách lưu ý\n\n - Khi nhận hàng vui lòng quay lại video bóc hàng thể hiện được gói hàng còn nguyên vẹn và số lượng sản phẩm trong gói hàng để làm bằng chứng trong trường hợp có khiếu nại .\n\n - Khi đặt hàng vui lòng nhắn tin nếu có ghi chú về màu sắc, số lượng.. hoặc cần tư vấn về sản phẩm.\n\n - Shop luôn che tên tất cả sản phẩm trên gói hàng để không ai biết được nội dung sản phẩm bên trong.\n\n - Shop có giao hàng hỏa tốc ( tại Hà Nội ).\n\n\n\n?TIPI SHOP đảm bảo\n\n- Hình ảnh sản phẩm giống 100%.\n\n- Chất lượng sản phẩm tốt 100%.\n\n- Sản phẩm được kiểm tra nghiêm ngặt trước khi giao hàng.\n\n- Sản phẩm được đóng gói kĩ càng bao gồm 1 lớp túi nilông kính và 1 lớp túi niêm phong.\n\n- Tất cả sản phẩm đều có sẵn tại kho hàng.\n\n- Hỗ trợ đổi trả theo quy định.',95,5,0,'9b795ab6-f175-46de-9eb5-0eecb409b0bc','https://res.cloudinary.com/dqirycujn/image/upload/v1691639026/owjbm4ac0kgoz8clv72u.jpg',3),('932d46bf-b27e-43d0-a6e0-f2f155050255','Bàn phím giả cơ gaming kèm chuột có dây chế độ led 7 màu tiện lợi dành cho máy tính,game thủ,văn phòng',31000,'5TECH STORE :\n\n• Bật / Tắt đèn LED: Bấm phím Scroll Lock trên bàn phím\n\n• Đèn LED bàn phím KHÔNG nhấp nháy, chỉ có chế độ bật LED hoặc không LED.\n\n• Chuột LED đổi màu, không tắt được đèn LED chuột.\n\n• Tivi, điện thoại, Macbook không sử dụng được đèn LED  \n\n\n\nĐẶC ĐIỂM NỔI BẬT:\n\n•  Phím nhạy và rất dễ sử dụng\n\n•  Thiết kế hiện đại, kiểu dáng thời trang KHÔNG cục mịch xấu xí như loại cổ điển.\n\n•  Có LED nhiều màu ấn tượng, ban đêm tắt điện vẫn sử dụng bàn phím bình thường.\n\n•  Nhẹ gọn không nặng nề, trọng lượng: 0.8kg\n\n•  Chuột cầm vừa tay chống mỏi, có độ nhạy cao\n\n•  Chuột có thể tự động đổi led\n\n•  Cổng kết nối: USB \n\n•  Loại kết nối: Có dây\n\n•  Chất liệu vỏ: Nhựa ABS bền\n\n•  Kích thước bàn phím: 44 x 12.7 x 3 (cm)\n\n•  Kích thước chuột: 12.6 x 7 x 3.4 (cm)\n\n\n\n\n\nCHÚNG TÔI CAM KẾT:\n\n✅  Hình sao hàng vậy, đảm bảo chất lượng sản phẩm như cam kết.\n\n✅  Sau khi nhận hàng NẾU SẢN PHẨM CÓ LỖI quý khách có quyền yêu cầu ĐỔI TRẢ - BẢO HÀNH 1 ĐỔI 1 hoặc HOÀN TIỀN thông qua tính năng trên SHOPEE. \n\n✅  Hoặc liên hệ INBOX Shop vào khung giờ từ 8h - 17h từ thứ 2 – thứ 7 để được hỗ trợ nhanh nhất (Shop nghỉ buổi tối và ngày CN ạ) \n\n\n\n?? Với bề dày nhiều năm phục vụ hơn 100 nghìn khách hàng đã hài lòng với các sản phẩm Bàn phím, Chuột, Linh phụ kiện công nghệ chất lượng đảm bảo nên QUÝ KHÁCH HOÀN TOÀN YÊN TÂM KHI MUA SẮM TẠI PHỤ KIỆN SỐ HÀ THÀNH.\n\n\n? ĐẶC BIỆT: Siêu giảm giá trong tuần này:\n\n\n\n? ĐẰNG NÀO QUÝ KHÁCH CŨNG MUA, MUA NGAY HÔM NAY THÌ GIÁ RẺ HƠN.',100,NULL,0,'a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','https://res.cloudinary.com/dqirycujn/image/upload/v1691738512/nc2d5awjvphdjydh3uev.jpg',5),('96a3a427-378a-46fa-88bc-a8c38e217021','Áo Khoác Hoodies Nữ form rộng Ulzzang Safairia Unisex, Áo nỉ thời thượng chữ C, khóa cài thời trang nữ giới mới nhất_A11',138000,'Áo Khoác Hoodies Nữ form rộng Ulzzang Safairia Unisex, Áo nỉ cao cấp chữ C, khóa kéo Thời Trang Nữ Hot Nhất 2022 KN86\n\n\n?Áo Hoodie của Shop mang tính độc đáo, thiết kế thời thượng, xu hướng hiện đại. Dáng áo thoải mái dễ mặc dễ phối lại mang vẻ đẹp trẻ trung, năng động.\n\n?Sản phẩm dành cho cả nam và nữ?\n\n?Thông tin sản phẩm:\n-Tên sản phẩm: Áo khoác Hoodie Cardigan có khóa nữ chữ C form rộng\n-Chất liệu: nỉ cotton lót bông mềm mịn, co dãn 2 chiều\n-Màu sắc: Xanh, Be, Hồng\n-Thiết kế: áo khoác hoodie cardigan với thân áo rộng rãi, tay áo dài và rộng, bo cổ tay. Đường chỉ may chắc chắn, túi áo phía trước cực tiện dụng. Màu sắc kết hợp với hoạ tiết trang trí trên ngực bắt mắt và mang tính thẩm mỹ cao. Bạn có thể phối áo với quần bò, quần short, váy... đều rất phù hợp.\n-Size: FREESIZE 40 - 65KG\n\n\n?Chính sách bán hàng:\n-Đảm bảo hàng chất lượng, giá cạnh tranh\n-Shop có voucher giảm giá và freeship vào những dịp đặc biệt, theo dõi shop ngay để không bị bỏ lỡ.\n-Đổi trả hàng nếu bị thiếu, sai mẫu, sai size\n-Đặc biệt tặng voucher giảm 10% cho khách mua hàng lần tiếp theo và có đánh giá cao nha.\n\n?Sản phẩm áo hoodie nữ form rộng đôi khi sẽ bị sót vài chỗ có chỉ thừa, bạn cắt đi giúp shop nhé, cắt chỉ thừa không ảnh hưởng đến sản phẩm. Lỗi có thể xảy ra khi xếp, đóng gói hàng, nếu hàng giao đến có vấn đề, mong khách vui lòng nhắn tin trước với shop để shop có thể hỗ trợ kịp thời, đừng đánh giá kém tội shop~~. \n\n----------------------------------------------------------------------------\n\nCảm ơn bạn đã mua hàng của shop, Shop chúc bạn thật nhiều sức khoẻ và hạnh phúc trong cuộc sống!!!??',95,5,0,'9b795ab6-f175-46de-9eb5-0eecb409b0bc','https://res.cloudinary.com/dqirycujn/image/upload/v1691639080/ko2ucao147q3nmtuncjx.jpg',3),('a34035b3-8b80-4db4-8333-d50b6d7d226c','Mèo thần tài mạ vàng 24k cầu may mắn tiền tài',10000,'ƯU ĐIỂM NỔI BẬT\n?VẬT PHẨM HỘ MỆNH CHO MỌI NGƯỜI?\nCó thể để ốp đt + Ví tiền + Bàn thờ Thần tài + Quà tặng ý nghĩa ❤️\n? MÈO THẦN TÀI - TRÂU MAY MẮN MẠ VÀNG?\n- Thu hút khách hàng\n- Vẫy tài lộc\n- Công việc kinh doanh thuận lợi\n- Cuộc sống gặp nhiều may mắn\n- Gia đình viên mãn\n- sp không dán đc\n\nSHOP CAM KẾT\n✅ Mang lại cho quý khách những sản phẩm tốt nhất, đẹp nhất.\n✅ Nếu hàng bị lỗi do sản xuất, Shop cam đoan sẽ hoàn tiền hoặc gửi lại sản mới thay thế cho quý khách.\n✅ Thương hiệu tạo niềm tin!\n✅ Mong bạn bớt chút thời gian để vote 5* cho shop',86,14,0,'1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','https://res.cloudinary.com/dqirycujn/image/upload/v1691139983/bwmvxvio9hcdjlaqrsyo.jpg',2),('a4109699-97cb-46b5-a1aa-23d457c0d20a','Ốp lưng trong suốt Cao Cấp bảo vệ cam chống xước tuyệt đối Iphone 13 promax 12 12pro 12promax,11 14 pro max 7plus 8 6cam',35000,'Ốp lưng iphone Freeship - Thương hiệu ốp lưng số 1\nỐp TPU cạnh vuông\n\nỐp lưng đủ mã cho iPhone 5/5s/6/6plus/6s/6splus/6 plus/6s plus/7/7plus/7 plus /8/8plus/8 plus/x/xr/xs/11/11pro/11 pro/11 promax/11 pro max/12/12pro/12 pro/12 promax/12 pro max/mini/pro/max/plus /mini\n\nFreeship cam kết:\n- Với sự uy tín nhiều năm hoạt động. Ốp lưng iPhone Freeship mang lại cho quý khách trải nghiệm và dịch vụ tuyệt vời nhất!\n- Thương hiệu tạo niềm tin!\nFreeship đảm bảo:\n- Hình ảnh sản phẩm giống 100%.\n- Chất lượng sản phẩm tốt 100%.\n- Sản phẩm được kiểm tra kĩ càng, nghiêm ngặt trước khi giao hàng.\n- Sản phẩm luôn có sẵn trong kho hàng\n- Giao hàng ngay khi nhận được đơn hàng.\n- Hoàn tiền ngay nếu sản phẩm không giống với mô tả.\n- Đổi trả ngay nếu bất kì lí do gì khiến quý khách không hài lòng.\n- Giao hàng toàn quốc, nhận hàng thanh toán\n- Hỗ trợ đổi trả theo quy định.\n\nThông tin sản phẩm:\n- Chất liệu: Nhựa dẻo\n- Màu sắc: Nhiều Màu.\n- Hình ảnh chất lượng cao,sắc nét, không phai màu.\n- Hình ảnh thiết kế đẹp, phong cách, trẻ trung, hottrend, phù hợp các độ tuổi\n\n\nCác cặp dòng máy sử dụng chung ốp lưng:\n- ốp lưng 5/5s\n- ốp lưng 6/6s\n- ốp lưng 6plus/6 plus/6s plus/6splus\n- ốp lưng 7/8/se2020\n- ốp lưng 7 plus /7plus /8 plus /8plus\n- ốp lưng x /xs\n- ốp lưng xs max /xsmax\n- ốp lưng 11\n- ốp lưng 11 pro /11pro\n- ốp lưng 11 pro max /11 promax\n- ốp lưng 12 12pro 12 pro ; 12 promax ; 12 pro max\n- ốp lưng 13 13pro 13 pro ; 13 promax ; 13 pro max\n\nQuý khách lưu ý:\n- Khi nhận được hàng Quý khách vui lòng bỏ chút thời gian để đánh giá cho shop, để shop có chiều hướng phục vụ tốt hơn cho Quý khách.',91,9,0,'1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','https://res.cloudinary.com/dqirycujn/image/upload/v1691567908/kdd5lqj2kf7rcapge9i6.jpg',2),('b1ac8058-c29e-4a2e-be62-8e8dfdc4eb27',' Usb 2.0 Dung Lượng 1tb 128gb 64gb 32gb 16gb 8gb 1gb Chất Lượng Cao',130000,'Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày\n  \n  Chào mừng bạn đến với cửa hàng của chúng tôi, chúng tôi có thể cung cấp cho bạn những sản phẩm chất lượng cao và giá cả phải chăng!\n  Nếu cần các sản phẩm khác, bạn có thể ghé thăm trang chủ của cửa hàng!\n  \n  Hỗ trợ in logo laze!\n  \n  Mô tả sản phẩm\n  \n  1. Kết nối USB, chỉ cần cắm và sử dụng\n  2. Không cần nguồn điện bên ngoài.\n  3. Hỗ trợ các hệ điều hành khác nhau\n  4. Lưu trữ trạng thái ổ cứng, chống sốc và bức xạ điện từ.\n  5. Lưu trữ dữ liệu lâu bền\n  6. Phù hợp cho: Máy tính có kết nối USB, Notebook, MAC\n  7. Tuổi thọ: > 1 triệu giờ\n  \n  1. Có một số dữ liệu không thể lưu trữ được\n  2. Mức độ lưu trữ: Dung lượng lưu trữ sẽ khác nhau dựa trên kích thước tệp, độ phân giải, độ nén, tốc độ bit, nội dung, thiết bị lưu trữ, tệp tải trước và các yếu tố khác.\n  3. Dung lượng thực\n  1GB Xấp xỉ 950-970MB.\n  8GB Xấp xỉ 7.3-7.6GB.\n  16GB Xấp xỉ 14GB-15GB.\n  32GB Xấp xỉ 28GB-30GB.\n  64GB Xấp xỉ 56GB-59GB\n  128GB Xấp xỉ 119GB-125GB\n  256GB Xấp xỉ 245-250GB.\n  512GB Xấp xỉ 498-504GB.\n  1TB Xấp xỉ 960-975GB.\n  \n  Khách hàng thân mến, mọi thắc mắc vui lòng liên hệ với chúng tôi,\n  Nhân viên chăm sóc khách hàng của chúng tôi sẽ trả lời bạn ngay khi nhận được tin nhắn\n  Chúng tôi sẽ giải quyết mọi vấn đề thỏa đáng cho bạn.',100,NULL,0,'a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','https://res.cloudinary.com/dqirycujn/image/upload/v1691738646/sqc7nfpopys0bhme4omm.png',5),('cf811010-dff1-4bfb-ae2f-884529f73063','Ốp lưng iPhone Adidas Chống sốc cạnh viền vuông Silicon trong suốt mềm dẻo cho 6/6s/7/8/X/XS/11/12/13/14 Pro Plus Max',23200,'Ốp lưng iPhone Adidas Chống sốc cạnh viền vuông Silicon trong suốt mềm dẻo cho 6/6s/7/8/X/XS/11/12/13 Pro Plus Max\n\n☞ Ốp lưng chống sốc cạnh vuông sử dụng cho: IPhone 13 / 13 mini / 13 Pro / 13 Pro Max / 12 / 12 Pro / 12 Pro Max / 11 / 11 Pro / 11 Pro Max / XS MAX / XR / Xs / X / 7 Plus / 8 Plus / 7 / 8 / SE 2020 / 6 Plus / 6s Plus / 6 / 6s☜\n\n☑️ Phong cách: in hình Adidas\n\n♡ Màu sắc: Trong suốt\n\n♡ Chất liệu: Silicon mềm chất lượng cao\n\n♡ Chức năng:\n✔ Chống sốc, Chống va đập, Chống trượt, Chống xước\n✔ Chống bụi bẩn, Dễ dàng vệ sinh bằng khăn lau\n✔ Bảo vệ camera. Bảo vệ mặt sau điện thoại, chất liệu mềm dẻo dễ dàng tháo lắp\n\n♡ Đặc điểm chính:\n✔ Mềm mại khi cầm nắm, cảm giác rất thích\n✔ Vị trí lỗ camera chính xác, bảo vệ hiệu quả kính camera điện thoại\n✔ Có độ đàn hồi và khả năng hấp thụ sốc\n✔ Chống xước\n✔ Trọng lượng nhẹ\n\n♡ Tất cả các model sản phẩm đều đang có sẵn hàng!!! Nếu muốn, bạn có thể liên hệ với dịch vụ chăm sóc khách hàng trực tuyến để cung cấp cho bạn.\n\n♡ Dịch vụ của chúng tôi:\n✔ Vận chuyển nhanh, Trả lời nồng nhiệt kịp thời, Thái độ tích cực\n✔ Giải quyết nhanh chóng vấn đề cho mọi khách hàng\n\n♡ Do sự khác biệt của màn hình và ánh sáng, màu sắc có thể hơi khác một chút, mong các bạn thông cảm.\n\n♡ Nếu có vấn đề về chất lượng hoặc vấn đề khác với sản phẩm bạn nhận được, trước hết xin vui lòng liên hệ với chúng tôi. Chúng tôi sẽ giải quyết sớm nhất có thể.\n\n♡ Nếu bạn thích sản phẩm này, xin vui lòng cho chúng tôi đánh giá năm sao, cảm ơn bạn rất nhiều!!!',97,9,0,'1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','https://res.cloudinary.com/dqirycujn/image/upload/v1691114314/lgrfzwzk5njtmbkwzwic.jpg',2),('d1d7f568-31a3-4c85-9620-5f742a0de72e','Áo Thun Cộc Tay, Áo Len Cộc Tay LI VAI Cổ 3 Phân Siêu Xinh ( Có BigSize) 150',90000,'Áo Thun Cộc Tay, Áo Len Cộc Tay LI VAI Cổ 3 Phân Siêu Xinh ( Có BigSize) 150\nÁo len díp li vai\nKia e trả\nGom gom gấp bác ơi\nHàng xịn về đây đẹp rẻ mê luôn\nE sẵn nhé ạ !\nKo đến 99k/ chiếc sắm liền ba chiếc mặc riêng hoặc mix mới blazer đi pà kon ơi\n? ÁO LEN DÍP LI VAI CHÉO 3M?\nChanh xả gọi tên e nó, mix đủ thứ đều đc nè, mầu sắc nhã nhặn, basic ko tuổi, mùa đông mùa thu mùa hè mùa xuân đều okla\n? Chất díp len giữ nhiệt tốt, co giãn thoải mái tạo cảm giác dễ chịu cho ng sd\n☘️ Hàng đủ size SML giá bé như cái kẹo ! ',99,1,0,'9b795ab6-f175-46de-9eb5-0eecb409b0bc','https://res.cloudinary.com/dqirycujn/image/upload/v1691638922/ctsm4oar0gt8kcmzjbcd.jpg',3),('d6ec62cb-1484-4dd2-98d3-0ae257af5929','Áo khoác ngoài, áo gió chống nước chống gió 2 lớp mỏng form rộng phong cách Hàn Quốc',127000,'? Bạn ơi, bạn bấm vào phần miêu tả này để xem thêm ảnh sản phẩm do shop chụp nha ??\n\n\n\n☆ THÔNG TIN SẢN PHẨM:\n\n - Áo Khoác Dù với Chất liệu Dù 2 lớp cực mát giúp bạn có thể chống nắng chống tia UV cực tốt và chống mưa (nhẹ), rất tiện lợi nhé! \n\n+ Đường may kỹ, tinh tế, sắc xảo. \n\n+ Giao hàng tận nơi. Nhận hàng thanh toán.\n\n- ➡ Màu: màu và sản phẩm có thể khác biệt ~ 5%.\n\nBẢO QUẢN:\n\n-Áo gió là một loại áo đặc thù được cấu tạo phần lớn bằng sợi polyester nhân tạo và thường được nhà sản xuất thêm tính năng chống nước bằng việc phù lên một lớp hóa chất đặc biệt. Để bảo quản chiếc áo này thật đúng cách, bạn nên tham khảo những bước dưới đây của chúng tôi:\n\nCách giặt áo khoác gió (vải dù) sao cho đúng cách\n\nVề cơ bản chiếc áo này đều có thể giặt bằng máy hoặc bằng tay. Tuy nhiên, để hạn chế việc làm xù mặt vải thì giặt tay được khuyến khích trong trường hợp này, bởi dù bạn có đặt chế độ vắt nhẹ nhàng tới đâu thì lực ly tâm vẫn là khá lớn đủ để tác động không tốt đề bề mặt vải.\n\nNên giặt bằng nước ấm (khoảng 20-30 độ C), với xà phòng nhẹ để tẩy vết bẩn nếu có. Tránh dùng với nước nóng có thể gây rúm vải và phai màu.\n\nLưu ý: Khi giặt bạn nên lộn trái chiếc áo để tránh mặt vải bị lực vò làm tổn thương.\n\nBạn nên treo trên móc trong tủ quần áo, để nơi thoáng khí tránh ẩm mốc. Đặc biệt,  hạn chế gấp áo gió\n\nVệ sinh tủ quần áo thường xuyên để tránh bụi bẩn, tránh ánh nắng trực tiếp.',100,NULL,0,'ce880717-8a6c-4f5c-a105-47f5dd957303','https://res.cloudinary.com/dqirycujn/image/upload/v1691636502/ddmtzy7jfpvlvuxiruhy.jpg',1),('d754929d-3bde-42d3-ba86-85026cec41c2','Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH',60000,'Lớp vỏ ngoài của Loa Bluetooth bằng nhựa chống trơn trượt\nThiết kế tinh tế, công nghệ đột phá, sử dụng đơn giản, kiểu đóng gói độc đáo.\nPhát nhạc qua bluetooth của các thiết bị có chức năng phát nhạc qua bluetooth.\nChiếc loa bluetooth có âm thanh bass khá tốt, chuyên bass trầm mạnh.\nHình ảnh sản phẩm khi lên hình có thể có sự khác biệt màu sắc do hiệu ứng khi chụp ảnh, góc nhìn.\n\n?THÔNG SỐ KỸ THUẬT\n-  Loa Output: 5w\n- Tần số đáp ứng: 60HZ - 20KHz\n- Signal-to-noise: ≥ 90dB\n- Distortion: ≤ 0,5% @ (1KHz)\n- Pin điện áp / công suất: 350mAh\n- Pin sạc điện áp: 5V ± 0.5V\n- Thời gian sạc pin: 2 giờ\n- Bluetooth phiên bản: V2.1 (tần số 2402-2480MHz)\n- Phạm vi làm việc lên tới: 10m\n- Thời gian làm việc lên tới: 1 - 3 giờ\n- Kích thước: 60mm x 50mm\n\n\n?Bộ sản phẩm loa bluetooth bao gồm:\n\n- 1 loa bluetooth  mini\n- 1 dây sạc micro\n- 1 sách hướng dẫn sử dụng\n\n?Hướng dẫn sử dụng:\n\nBước 1: Lấy loa ra khỏi hộp, bấm giữ nút nguồn 2-3s để đèn trên loa sáng phát ra âm thanh\nBước 2: Mở Bluetooth điện thoại tìm thiết bị\nBước 3:  Bấm connect là ok, mở nghe nhạc và hưởng thụ\n\n?ĐIÊÙ KIỆN BẢO HÀNH:\n\n- Shop bảo hành khi sản phẩm lỗi còn mới nguyên vẹn (tức là lỗi do nhà sản xuất), và còn hộp ( vì trên hộp có mã xưởng bảo hành). Cũ bẩn mất hộp do lỗi người dùng xưởng không nhận bảo hành.\n\n- Trong trường hợp sản phẩm lỗi, quý khách mang tới shop kiểm tra và bảo hành. Nếu khách ở xa tự gửi về cho shop kiểm tra và đổi bảo hành.\n\n?Quý khách lưu ý:\n\n- Khi đặt hàng Quý khách vui lòng ghi chú vào đơn hàng khi cần có thêm thông tin như : màu sắc, kiểu, dáng thời gian Quý khách có thể nhận hàng.\n\n- Khi nhận được hàng Quý khách vui lòng bỏ chút thời gian để đánh giá cho shop, để shop có chiều hướng phục vụ tốt hơn cho Quý khách.',98,2,0,'a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','https://res.cloudinary.com/dqirycujn/image/upload/v1691738316/litznoyljys6h5clwivc.jpg',5),('e2eeed2d-e9a1-40ce-9a6b-32b82a43cc51','hahahaha',12222,'asdadsad',12222,NULL,0,'913fa2ae-5a17-48dd-a9c5-5e90f84821ba','https://res.cloudinary.com/dqirycujn/image/upload/v1706753683/qza7zb8bscwrreqd23oy.jpg',6),('f3d6250d-8ad1-4e31-9bfb-44d3a0388e93','Quần nam jean đen ống suông rộng, quần baggy nam dáng đứng chất vải bò cao cấp DRSQUARE hottrend 2022',99000,'Quần nam jean đen ống suông rộng, quần baggy nam dáng đứng chất vải bò cao cấp DRSQUARE hottrend 2022\n\n⭐⭐⭐ CAM KẾT HÀNG NHƯ HÌNH CHỤP - HOÀN TIỀN NẾU THẤY KHÔNG HÀI LÒNG. \n⭐⭐⭐ HÃY INBOX CHO SHOP KHI SẢN CÓ VẤN ĐỀ ( ĐỔI SIZE, SP LỖI...)\nQuần Jean Nam Baggy ống Suông Rộng Hottrend hàn quốc 2022 được đặt may riêng theo mẫu thiết kế của DRSQUARE Store tại HN. \n\n✅ Quần Jean Nam đen ống Suông Rộng với thiết kế mới thời trang hơn, mang lại sự tự tin tối đa cho người mặc trước những người xung quanh\n✅ Jean ống rộng nam đen lam từ vải Denim chất bò cao cấp nên rất mềm và thoải mái khi mặc, đảm bảo sẽ không hề cảm thấy gò bó ngay cả khi di chuyển nhiều.\n✅ Dáng quần bò nam đen ống đứng trẻ trung tạo nên form baggy jean nam xuông cho người mặc túi quần lớn rất thuận tiện cho việc đựng smart phone hoặc ví cỡ bự.\n✅ quần bò baggy nam màu sắc chuẩn được nhuộm kỹ đến hai lần giúp hạn chế tối đa việc phai màu khi sử dụng.\n✅ Size: 27 đến 34\n✅ Xuất xứ: quần jean nam đen ống suông rộng cao cấp được thiết kế và gia công bởi DRSQUARE\n\n?  CÁCH CHỌN SIZE\n?Size 27  (Từ 38 - 50kg Cao Dưới 1m71)\n? Size 28  (Từ 50 - 54kg Cao Dưới 1m75)\n? Size 29 (Từ 55 - 58 kg Cao Dưới 1m80) \n? Size 30  ( Từ 59- 63 kg Cao Dưới 1m80) \n? Size 31 (Từ 63 - 68 kg Cao Dưới 1m80)  \n? Size 32  (Từ 68 - 73 kg Cao Dưới 1m80)  \n? Size 33  (Từ 73- 75 kg Cao Dưới 1m80)  \n? Size 34  (Từ 75 - 80 kg Cao Dưới 1m80)  \n? Size 35  (Từ 80 - 85 kg Cao Dưới 1m80) \n? Size 36  (Từ 85 - 95 kg Cao Dưới 1m80) \n LƯU Ý: những bạn có bụng nên lấy lớn hơn 1 size so với bảng trên ạ. inbox trực tiếp cho shop để được tư vấn chính xác nhất',100,NULL,0,'ce880717-8a6c-4f5c-a105-47f5dd957303','https://res.cloudinary.com/dqirycujn/image/upload/v1691635865/ffpgyrszlxxmwdqug7za.jpg',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `reviewId` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `rate` int NOT NULL,
  `userId` varchar(255) NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(userId),
  `productId` varchar(255) NOT NULL,
  FOREIGN KEY (productId) REFERENCES products(productId),
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`reviewId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES ('380b645f-0330-4077-adec-44b57cf1d9c7','Đã nhận hàng, sản phẩm rất đẹp!!!',5,'a18bb214-e313-457c-8699-29117ecac6ed','cf811010-dff1-4bfb-ae2f-884529f73063','2023-08-07 14:42:27'),('523a9281-8229-448b-a266-b96501b7716a','Miếng dán tốt!!!',5,'74b6a847-eb01-4055-b6ba-57e739200831','1e1eb0f3-0ce1-4868-9220-980beeab872a','2023-08-15 04:32:43');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `storeId` varchar(255) NOT NULL,
  `storeName` varchar(255) NOT NULL,
  `addressStore` varchar(255) NOT NULL,
  `statusstore` int NOT NULL DEFAULT '0',
  `createdDateStore` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` varchar(255) NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(userId),
  `phone` varchar(255) NOT NULL,
  `emailStore` varchar(255) NOT NULL,
  PRIMARY KEY (`storeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES ('1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6','Thiết Bị Điện Tử','Thanh Xuân - Hà Nội',1,'2023-08-04 01:57:49','b0635d0d-249b-4319-8282-bd2e832dc82f','0988999888','quangminh@gmail.com'),('5ab9dc9f-5d79-4add-8aa0-42aaa69d42b4','Thiết Bị Điện Tử 1','Cầu Giấy',1,'2023-08-15 04:28:10','74b6a847-eb01-4055-b6ba-57e739200831','0975771793','vanduc1212@gmail.com'),('913fa2ae-5a17-48dd-a9c5-5e90f84821ba','Duong','ha noi',1,'2024-01-31 09:19:33','46566d72-0e0b-49db-b416-74353c9e58d2','0123456789','hehehe@gmail.com'),('9b795ab6-f175-46de-9eb5-0eecb409b0bc','Thời Trang Nữ','Thanh Xuân - Hà Nội',1,'2023-08-10 03:36:46','a18bb214-e313-457c-8699-29117ecac6ed','0986135312','lethihatrang9@gmail.com'),('a5c32ac6-890d-4ab5-9ab6-793fe66aeb4d','Máy Tính - LapTop','Thanh Xuân - Hà Nội',1,'2023-08-11 04:39:05','de63724d-b769-459b-a5be-bb915a1d11ca','0975771793','vanduc1212@gmail.com'),('ab02f632-5aaf-475e-9420-91a6137314ce','Admin','Thanh Xuân - Hà Nội',1,'2023-08-10 09:50:36','051748aa-45bf-4c54-baa1-4ebb4e947276','123456789','vanduc1212@gmail.com'),('ce880717-8a6c-4f5c-a105-47f5dd957303','Thời Trang Nam','Thanh Xuân - Hà Nội',1,'2023-08-09 04:43:34','8762a0c4-6431-4ca1-8b4b-4c04b792d258','0975771793','vanduc1212@gmail.com');
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `avatarUrl` longtext,
  `address` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthDay` varchar(255) DEFAULT NULL,
  `createdDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `statusUser` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('051748aa-45bf-4c54-baa1-4ebb4e947276','admin','Admin','$2b$10$BogpiEakVllGEJLLtxK6U.zhv5aok0ZUJdxWdB6HRNkBsbJYA3mi6','https://res.cloudinary.com/dqirycujn/image/upload/v1691461510/oq7wgwpjujuzu4bvbpnj.jpg','Thanh Xuân - Hà Nội','Nam','12-12-1993','2023-08-08 01:52:40','admin@gmail.com','0975771793',1),('46566d72-0e0b-49db-b416-74353c9e58d2','0981965299','duong','$2b$10$3JQ3zCrqkBiuuxEt80vSP.OeXSYQ84W0KSYjV5XaMXarIq07HKU4q','https://res.cloudinary.com/dqirycujn/image/upload/v1711527254/w6ewpwxtsvaaz3yl0c38.jpg','zzzzz','Nam','15/03/2001','2023-12-27 02:18:14','duong@gmail.com','0981965299',0),('74b6a847-eb01-4055-b6ba-57e739200831','minh_duong','Nguyễn Hữu Minh Dương','$2b$10$QIqfCowtPB/LhemdYwRfIet.ZCWoykdFvoH57igj6AxNf/tC/3Esi','https://res.cloudinary.com/dqirycujn/image/upload/v1692073630/ab9jn33dt8ymrp2mczul.png','Cầu Giấy','Nam','12-12-1993','2023-08-15 04:25:36','vanduc1212@gmail.com','0975771793',0),('8762a0c4-6431-4ca1-8b4b-4c04b792d258','minh_duc','Nguyễn Văn Đức','$2b$10$4Z36qlLMQXa8Kv/3vs4tl.yfZmrfHwiN2aTYeknDVAaBz50yadEBK','https://res.cloudinary.com/dqirycujn/image/upload/v1691545888/z9w32cbvisppss9gcpxn.jpg','Thanh Xuân - Hà Nội','Nam','12-12-1993','2023-08-09 01:51:10','vanduc1212@gmail.com','0975771793',0),('a18bb214-e313-457c-8699-29117ecac6ed','ha_trang','Lê Thị Hà Trang','$2b$10$tYgTwflfYpPBohpg.z2yguwVEOXRlYUcygPm0wdVBa7emoHZ5nCCm','https://res.cloudinary.com/dqirycujn/image/upload/v1691545665/yv0fdrbaobco7oer6i0u.jpg','Thanh Xuân - Hà Nội','Nữ','09-09-1993','2023-08-01 07:56:37','lethihatrang9@gmail.com','0988999888',0),('b0635d0d-249b-4319-8282-bd2e832dc82f','quang_minh','Nguyễn Quang Minh','$2b$10$J/Mk0rYHvPCPH./zIdZTV.W4ebNwbknQd5PBPvu017tw87iWhV6C2','https://res.cloudinary.com/dqirycujn/image/upload/v1691049197/kztafok5gfarjbnn9qxl.jpg','Thanh Xuân - Hà Nội','Nam','02-09-2019','2023-08-01 02:46:15','quangminh@gmail.com','0988999888',0),('de63724d-b769-459b-a5be-bb915a1d11ca','minh_ben','Nguyễn Quang Minh','$2b$10$kYVtPnphWxx.ZGaKjXs.DOG5cilZc.dIkDqPtizw7ffUGCj5vWfKq','https://res.cloudinary.com/dqirycujn/image/upload/v1691728421/mmw4zbx6gumfbcjrivtf.jpg','Thanh Xuân - Hà Nội','Nam','02-09-2019','2023-08-11 04:32:42','vanduc1212@gmail.com','0975771793',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-21 17:58:59
-- DROP DATABASE shopeeFake;

-- Bài 3
-- Liệt kê tất cả các thông tin về sản phẩm (products).
SELECT * FROM products;

-- Tìm tất cả các đơn hàng (orders) có tổng giá trị (totalPrice) lớn hơn 500,000.
SELECT * FROM orders 
WHERE totalPrice > 500000;

-- Liệt kê tên và địa chỉ của tất cả các cửa hàng (stores).
SELECT storeName, addressStore FROM stores;

-- Tìm tất cả người dùng (users) có địa chỉ email kết thúc bằng '@gmail.com'.
SELECT * FROM users
WHERE email LIKE '%@gmail.com';

-- Hiển thị tất cả các đánh giá (reviews) với mức đánh giá (rate) bằng 5.
SELECT * FROM reviews
WHERE rate = 5;

-- Liệt kê tất cả các sản phẩm có số lượng (quantity) dưới 10.
SELECT * FROM products
WHERE quantity < 10;

-- Tìm tất cả các sản phẩm thuộc danh mục categoryId = 1.
SELECT * FROM products 
WHERE categoryId = 1;

-- Đếm số lượng người dùng (users) có trong hệ thống.
SELECT COUNT(userId) FROM users;

-- Tính tổng giá trị của tất cả các đơn hàng (orders).
SELECT SUM(totalPrice) FROM orders;

-- Tìm sản phẩm có giá cao nhất (price).
SELECT * FROM products
WHERE price = (
	SELECT MAX(price) FROM products
);

-- Liệt kê tất cả các cửa hàng đang hoạt động (statusStore = 1).
SELECT * FROM stores
WHERE statusStore = 1;

-- Đếm số lượng sản phẩm theo từng danh mục (categories).
SELECT categoryId, COUNT(productId) FROM products
GROUP BY categoryId;

-- Tìm tất cả các sản phẩm mà chưa từng có đánh giá.
SELECT * FROM products p
INNER JOIN reviews r ON r.productId = p.productId
WHERE p.productId IS NOT NULL;

-- Hiển thị tổng số lượng hàng đã bán (quantityOrder) của từng sản phẩm.
SELECT * FROM products
GROUP BY productId;

-- Tìm các người dùng (users) chưa đặt bất kỳ đơn hàng nào.
SELECT o.userId, o.orderId FROM users u 
LEFT JOIN orders o ON u.userId = o.userId;

-- Hiển thị tên cửa hàng và tổng số đơn hàng được thực hiện tại từng cửa hàng.
SELECT s.storeName, COUNT(o.orderId) FROM orders o
INNER JOIN stores s ON s.storeId = o.storeId
GROUP BY s.storeName;

-- Hiển thị thông tin của sản phẩm, kèm số lượng hình ảnh liên quan.
SELECT *, COUNT(imageProduct) FROM products
GROUP BY productId;

-- Hiển thị các sản phẩm kèm số lượng đánh giá và đánh giá trung bình.
SELECT p.*, COUNT(r.reviewId), CEILING(AVG(r.rate)) FROM reviews r
INNER JOIN products p ON p.productId = r.productId
GROUP BY r.productId;

-- Tìm người dùng có số lượng đánh giá nhiều nhất.
SELECT u.userName, COUNT(r.reviewId) AS `MAX REVIEW` FROM reviews r
INNER JOIN users u ON u.userId = r.userId
GROUP BY u.userId
ORDER BY COUNT(r.reviewId) DESC
LIMIT 1 OFFSET 0;

-- Hiển thị top 3 sản phẩm bán chạy nhất (dựa trên số lượng đã bán).
SELECT * FROM products
ORDER BY quantitySold DESC
LIMIT 3 OFFSET 0;

-- Tìm sản phẩm bán chạy nhất tại cửa hàng có storeId = 'S001'.
SELECT * FROM products
WHERE storeId = '1c930d6e-e5f1-4d01-93e4-e1f2b9825ea6'
ORDER BY quantitySold DESC
LIMIT 1 OFFSET 0;

-- Hiển thị danh sách tất cả các sản phẩm có giá trị tồn kho lớn hơn 1 triệu (giá * số lượng).
SELECT * FROM products
WHERE (price * quantity) > 1000000;

-- Tìm cửa hàng có tổng doanh thu cao nhất.
SELECT s.*, SUM(o.totalPrice) FROM orders o
INNER JOIN stores s ON s.storeId = o.storeId
GROUP BY s.storeId
ORDER BY SUM(o.totalPrice) DESC
LIMIT 1 OFFSET 0;

-- Hiển thị danh sách người dùng và tổng số tiền họ đã chi tiêu.
SELECT u.*, SUM(o.totalPrice) FROM orders o
INNER JOIN users u ON u.userId = o.userId
GROUP BY u.userId;

-- Tìm đơn hàng có tổng giá trị cao nhất và liệt kê thông tin chi tiết.
SELECT *, totalPrice FROM orders
WHERE totalPrice = (
	SELECT MAX(totalPrice) FROM orders
);

-- Tính số lượng sản phẩm trung bình được bán ra trong mỗi đơn hàng.
SELECT o.nameOrder, AVG(od.quantityOrder) FROM order_details od
INNER JOIN orders o ON o.orderId = od.orderId
INNER JOIN products p ON p.productId = od.productId
GROUP BY o.orderId;

-- Hiển thị tên sản phẩm và số lần sản phẩm đó được thêm vào giỏ hàng.
SELECT p.productName, ct.quantityCart FROM carts ct
INNER JOIN products p ON p.productId = ct.productId;

-- Tìm tất cả các sản phẩm đã bán nhưng không còn tồn kho trong kho hàng.
SELECT * FROM products
WHERE quantitySold - quantity = 0;

-- Tìm các đơn hàng được thực hiện bởi người dùng có email là duong@gmail.com'.
SELECT o.*, u.email FROM orders o
INNER JOIN users u ON u.userId = o.userId
WHERE email = 'duong@gmail.com';

-- Hiển thị danh sách các cửa hàng kèm theo tổng số lượng sản phẩm mà họ sở hữu.
SELECT s.*, SUM(p.quantity) FROM products p
INNER JOIN stores s ON s.storeId = p.storeId 
GROUP BY  s.storeId;

-- Bài 4
-- View hiển thị tên sản phẩm (productName) và giá (price) từ bảng products với 
-- giá trị giá (price) lớn hơn 500,000 có tên là expensive_products
CREATE VIEW expensive_products AS
SELECT productName, price
FROM products
WHERE price > 500000
WITH CHECK OPTION;

-- Truy vấn dữ liệu từ view vừa tạo expensive_products
SELECT * FROM expensive_products;

-- Làm thế nào để cập nhật giá trị của view? Ví dụ, cập nhật giá (price) thành 
-- 600,000 cho sản phẩm có tên Product A trong view expensive_products.
SET SQL_SAFE_UPDATES = 0;
UPDATE products
SET price = 600000
WHERE productName = 'Loa Máy tính Để Bàn';
SET SQL_SAFE_UPDATES = 1;

-- Làm thế nào để xóa view expensive_products?
DROP VIEW expensive_products;

-- Tạo một view hiển thị tên sản phẩm (productName), tên danh mục (categoryName) 
-- bằng cách kết hợp bảng products và categories.
CREATE VIEW product_categories AS
SELECT 
    p.productName,
    c.categoryName
FROM products p
INNER JOIN categories c ON p.categoryId = c.categoryId;
SELECT * FROM product_categories;

-- Bài 5
-- Làm thế nào để tạo một index trên cột productName của bảng products?
CREATE INDEX idx_productName ON products(productName);

-- Hiển thị danh sách các index trong cơ sở dữ liệu?
SHOW INDEXES FROM products;

-- Trình bày cách xóa index idx_productName đã tạo trước đó?
DROP INDEX idx_productName ON products;

-- Tạo một procedure tên getProductByPrice để lấy danh sách sản phẩm với giá lớn 
-- hơn một giá trị đầu vào (priceInput)?
DELIMITER $$

CREATE PROCEDURE getProductByPrice(IN priceInput DECIMAL(10, 2))
BEGIN
    SELECT productName, price
    FROM products
    WHERE price > priceInput;
END $$

DELIMITER ;

-- Làm thế nào để gọi procedure getProductByPrice với đầu vào là 500000?
CALL getProductByPrice(500000);

-- Tạo một procedure getOrderDetails trả về thông tin chi tiết đơn hàng với đầu vào là orderId?
DELIMITER $$

CREATE PROCEDURE getOrderDetails(IN orderIdInput VARCHAR(255))
BEGIN
    SELECT 
        o.orderId,
        o.nameOrder,
        u.userName,
        p.productName,
        od.quantityOrder,
        od.priceOrder,
        (od.quantityOrder * od.priceOrder) AS totalPrice
    FROM orders o
    INNER JOIN order_details od ON o.orderId = od.orderId
    INNER JOIN products p ON od.productId = p.productId
    INNER JOIN users u ON o.userId = u.userId
    WHERE o.orderId = orderIdInput;
END $$

DELIMITER ;
CALL getOrderDetails('1b793d80-8eb0-49d4-916a-befe76cd2274');

-- Làm thế nào để xóa procedure getOrderDetails?
DROP PROCEDURE getOrderDetails;

-- Tạo một procedure tên addNewProduct để thêm mới một sản phẩm vào bảng products. 
-- Các tham số gồm productName, price, description, và quantity.
DELIMITER $$

CREATE PROCEDURE addNewProduct(
	IN productIdInput VARCHAR(255),
    IN productNameInput VARCHAR(255),
    IN priceInput DECIMAL(10, 2),
    IN descriptionInput TEXT,
    IN quantityInput INT
)
BEGIN
    INSERT INTO products (productId, productName, price, description, quantity)
    VALUES (productIdInput, productNameInput, priceInput, descriptionInput, quantityInput);
END $$

DELIMITER ;
CALL addNewProduct(
    'P001',
    'Product A',
    500000,
    'This is a description of Product A.',
    100
);
SELECT * FROM products; 

-- Tạo một procedure tên deleteProductById để xóa sản phẩm khỏi bảng products dựa trên tham số productId.
DELIMITER $$

CREATE PROCEDURE deleteProductById(
    IN productIdInput VARCHAR(255)
)
BEGIN
    DELETE FROM products
    WHERE productId = productIdInput;
END $$

DELIMITER ;
CALL deleteProductById('P001');
SELECT * FROM products; 

-- Tạo một procedure tên searchProductByName để tìm kiếm sản phẩm theo tên (tìm kiếm gần đúng) từ bảng products.
DELIMITER $$

CREATE PROCEDURE searchProductByName(
    IN productNameInput VARCHAR(255)
)
BEGIN
    SELECT productId, productName, price, description, quantity
    FROM products
    WHERE productName LIKE CONCAT('%', productNameInput, '%');
END $$

DELIMITER ;
CALL searchProductByName('Loa Máy tính Để Bàn');

-- Tạo một procedure tên filterProductsByPriceRange để lấy danh sách sản 
-- phẩm có giá trong khoảng từ minPrice đến maxPrice.
DELIMITER $$

CREATE PROCEDURE filterProductsByPriceRange(
    IN minPrice DECIMAL(10, 2),
    IN maxPrice DECIMAL(10, 2)
)
BEGIN
    SELECT productId, productName, price, description, quantity
    FROM products
    WHERE price BETWEEN minPrice AND maxPrice;
END $$

DELIMITER ;
CALL filterProductsByPriceRange(100000, 500000);

-- Tạo một procedure tên paginateProducts để phân trang danh sách sản phẩm, 
-- với hai tham số pageNumber và pageSize.
DELIMITER $$

CREATE PROCEDURE paginateProducts(
    IN pageNumber INT,
    IN pageSize INT
)
BEGIN
    DECLARE offsetValue INT;
    SET offsetValue = (pageNumber - 1) * pageSize;
    SELECT productId, productName, price, description, quantity
    FROM products
    LIMIT pageSize
    OFFSET offsetValue;
END $$

DELIMITER ;
CALL paginateProducts(2, 5);