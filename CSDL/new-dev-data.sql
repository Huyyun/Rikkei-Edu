-- MySQL dump 10.13  Distrib 8.0.40, for macos14 (arm64)
--
-- Host: localhost    Database: dev_data
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL,
  `street` varchar(45) DEFAULT NULL,
  `suite` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  CONSTRAINT `fk_constraints_user` FOREIGN KEY (`address_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Kulas Light','Apt. 556','Gwenborough','92998-3874'),(2,'Victor Plains','Suite 879','Wisokyburgh','90566-7771'),(3,'Douglas Extension','Suite 847','McKenziehaven','59590-4157'),(4,'Hoeger Mall','Apt. 692','South Elvis','53919-4257'),(5,'Skiles Walks','Suite 351','Roscoeview','33263'),(6,'Norberto Crossing','Apt. 950','South Christy','23505-1337'),(7,'Rex Trail','Suite 280','Howemouth','58804-1099'),(8,'Ellsworth Summit','Suite 729','Aliyaview','45169'),(9,'Dayna Park','Suite 449','Bartholomebury','76495-3109'),(10,'Kattie Turnpike','Suite 198','Lebsackbury','31428-2261');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album` (
  `id` int NOT NULL,
  `userId` int DEFAULT NULL,
  `title` text,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `album_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (1,1,'quidem molestiae enim'),(2,1,'sunt qui excepturi placeat culpa'),(3,1,'omnis laborum odio'),(4,1,'non esse culpa molestiae omnis sed optio'),(5,1,'eaque aut omnis a'),(6,1,'natus impedit quibusdam illo est'),(7,1,'quibusdam autem aliquid et et quia'),(8,1,'qui fuga est a eum'),(9,1,'saepe unde necessitatibus rem'),(10,1,'distinctio laborum qui'),(11,2,'quam nostrum impedit mollitia quod et dolor'),(12,2,'consequatur autem doloribus natus consectetur'),(13,2,'ab rerum non rerum consequatur ut ea unde'),(14,2,'ducimus molestias eos animi atque nihil'),(15,2,'ut pariatur rerum ipsum natus repellendus praesentium'),(16,2,'voluptatem aut maxime inventore autem magnam atque repellat'),(17,2,'aut minima voluptatem ut velit'),(18,2,'nesciunt quia et doloremque'),(19,2,'velit pariatur quaerat similique libero omnis quia'),(20,2,'voluptas rerum iure ut enim'),(21,3,'repudiandae voluptatem optio est consequatur rem in temporibus et'),(22,3,'et rem non provident vel ut'),(23,3,'incidunt quisquam hic adipisci sequi'),(24,3,'dolores ut et facere placeat'),(25,3,'vero maxime id possimus sunt neque et consequatur'),(26,3,'quibusdam saepe ipsa vel harum'),(27,3,'id non nostrum expedita'),(28,3,'omnis neque exercitationem sed dolor atque maxime aut cum'),(29,3,'inventore ut quasi magnam itaque est fugit'),(30,3,'tempora assumenda et similique odit distinctio error'),(31,4,'adipisci laborum fuga laboriosam'),(32,4,'reiciendis dolores a ut qui debitis non quo labore'),(33,4,'iste eos nostrum'),(34,4,'cumque voluptatibus rerum architecto blanditiis'),(35,4,'et impedit nisi quae magni necessitatibus sed aut pariatur'),(36,4,'nihil cupiditate voluptate neque'),(37,4,'est placeat dicta ut nisi rerum iste'),(38,4,'unde a sequi id'),(39,4,'ratione porro illum labore eum aperiam sed'),(40,4,'voluptas neque et sint aut quo odit'),(41,5,'ea voluptates maiores eos accusantium officiis tempore mollitia consequatur'),(42,5,'tenetur explicabo ea'),(43,5,'aperiam doloremque nihil'),(44,5,'sapiente cum numquam officia consequatur vel natus quos suscipit'),(45,5,'tenetur quos ea unde est enim corrupti qui'),(46,5,'molestiae voluptate non'),(47,5,'temporibus molestiae aut'),(48,5,'modi consequatur culpa aut quam soluta alias perspiciatis laudantium'),(49,5,'ut aut vero repudiandae voluptas ullam voluptas at consequatur'),(50,5,'sed qui sed quas sit ducimus dolor'),(51,6,'odit laboriosam sint quia cupiditate animi quis'),(52,6,'necessitatibus quas et sunt at voluptatem'),(53,6,'est vel sequi voluptatem nemo quam molestiae modi enim'),(54,6,'aut non illo amet perferendis'),(55,6,'qui culpa itaque omnis in nesciunt architecto error'),(56,6,'omnis qui maiores tempora officiis omnis rerum sed repellat'),(57,6,'libero excepturi voluptatem est architecto quae voluptatum officia tempora'),(58,6,'nulla illo consequatur aspernatur veritatis aut error delectus et'),(59,6,'eligendi similique provident nihil'),(60,6,'omnis mollitia sunt aliquid eum consequatur fugit minus laudantium'),(61,7,'delectus iusto et'),(62,7,'eos ea non recusandae iste ut quasi'),(63,7,'velit est quam'),(64,7,'autem voluptatem amet iure quae'),(65,7,'voluptates delectus iure iste qui'),(66,7,'velit sed quia dolor dolores delectus'),(67,7,'ad voluptas nostrum et nihil'),(68,7,'qui quasi nihil aut voluptatum sit dolore minima'),(69,7,'qui aut est'),(70,7,'et deleniti unde'),(71,8,'et vel corporis'),(72,8,'unde exercitationem ut'),(73,8,'quos omnis officia'),(74,8,'quia est eius vitae dolor'),(75,8,'aut quia expedita non'),(76,8,'dolorem magnam facere itaque ut reprehenderit tenetur corrupti'),(77,8,'cupiditate sapiente maiores iusto ducimus cum excepturi veritatis quia'),(78,8,'est minima eius possimus ea ratione velit et'),(79,8,'ipsa quae voluptas natus ut suscipit soluta quia quidem'),(80,8,'id nihil reprehenderit'),(81,9,'quibusdam sapiente et'),(82,9,'recusandae consequatur vel amet unde'),(83,9,'aperiam odio fugiat'),(84,9,'est et at eos expedita'),(85,9,'qui voluptatem consequatur aut ab quis temporibus praesentium'),(86,9,'eligendi mollitia alias aspernatur vel ut iusto'),(87,9,'aut aut architecto'),(88,9,'quas perspiciatis optio'),(89,9,'sit optio id voluptatem est eum et'),(90,9,'est vel dignissimos'),(91,10,'repellendus praesentium debitis officiis'),(92,10,'incidunt et et eligendi assumenda soluta quia recusandae'),(93,10,'nisi qui dolores perspiciatis'),(94,10,'quisquam a dolores et earum vitae'),(95,10,'consectetur vel rerum qui aperiam modi eos aspernatur ipsa'),(96,10,'unde et ut molestiae est molestias voluptatem sint'),(97,10,'est quod aut'),(98,10,'omnis quia possimus nesciunt deleniti assumenda sed autem'),(99,10,'consectetur ut id impedit dolores sit ad ex aut'),(100,10,'enim repellat iste');
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `albumId` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(500) NOT NULL,
  `thumbnailUrl` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `albumId` (`albumId`),
  CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`albumId`) REFERENCES `album` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,1,'accusamus beatae ad facilis cum similique qui sunt','https://via.placeholder.com/600/92c952','https://via.placeholder.com/150/92c952'),(2,1,'reprehenderit est deserunt velit ipsam','https://via.placeholder.com/600/771796','https://via.placeholder.com/150/771796'),(3,1,'officia porro iure quia iusto qui ipsa ut modi','https://via.placeholder.com/600/24f355','https://via.placeholder.com/150/24f355'),(4,1,'culpa odio esse rerum omnis laboriosam voluptate repudiandae','https://via.placeholder.com/600/d32776','https://via.placeholder.com/150/d32776'),(5,1,'natus nisi omnis corporis facere molestiae rerum in','https://via.placeholder.com/600/f66b97','https://via.placeholder.com/150/f66b97'),(6,1,'accusamus ea aliquid et amet sequi nemo','https://via.placeholder.com/600/56a8c2','https://via.placeholder.com/150/56a8c2'),(7,1,'officia delectus consequatur vero aut veniam explicabo molestias','https://via.placeholder.com/600/b0f7cc','https://via.placeholder.com/150/b0f7cc'),(8,1,'aut porro officiis laborum odit ea laudantium corporis','https://via.placeholder.com/600/54176f','https://via.placeholder.com/150/54176f'),(9,1,'qui eius qui autem sed','https://via.placeholder.com/600/51aa97','https://via.placeholder.com/150/51aa97'),(10,1,'beatae et provident et ut vel','https://via.placeholder.com/600/810b14','https://via.placeholder.com/150/810b14'),(11,1,'nihil at amet non hic quia qui','https://via.placeholder.com/600/1ee8a4','https://via.placeholder.com/150/1ee8a4'),(12,1,'mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores','https://via.placeholder.com/600/66b7d2','https://via.placeholder.com/150/66b7d2'),(13,1,'repudiandae iusto deleniti rerum','https://via.placeholder.com/600/197d29','https://via.placeholder.com/150/197d29'),(14,1,'est necessitatibus architecto ut laborum','https://via.placeholder.com/600/61a65','https://via.placeholder.com/150/61a65'),(15,1,'harum dicta similique quis dolore earum ex qui','https://via.placeholder.com/600/f9cee5','https://via.placeholder.com/150/f9cee5'),(16,1,'iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt','https://via.placeholder.com/600/fdf73e','https://via.placeholder.com/150/fdf73e'),(17,1,'natus doloribus necessitatibus ipsa','https://via.placeholder.com/600/9c184f','https://via.placeholder.com/150/9c184f'),(18,1,'laboriosam odit nam necessitatibus et illum dolores reiciendis','https://via.placeholder.com/600/1fe46f','https://via.placeholder.com/150/1fe46f'),(19,1,'perferendis nesciunt eveniet et optio a','https://via.placeholder.com/600/56acb2','https://via.placeholder.com/150/56acb2'),(20,1,'assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error','https://via.placeholder.com/600/8985dc','https://via.placeholder.com/150/8985dc'),(51,2,'non sunt voluptatem placeat consequuntur rem incidunt','https://via.placeholder.com/600/8e973b','https://via.placeholder.com/150/8e973b'),(52,2,'eveniet pariatur quia nobis reiciendis laboriosam ea','https://via.placeholder.com/600/121fa4','https://via.placeholder.com/150/121fa4'),(53,2,'soluta et harum aliquid officiis ab omnis consequatur','https://via.placeholder.com/600/6efc5f','https://via.placeholder.com/150/6efc5f'),(54,2,'ut ex quibusdam dolore mollitia','https://via.placeholder.com/600/aa8f2e','https://via.placeholder.com/150/aa8f2e'),(55,2,'voluptatem consequatur totam qui aut iure est vel','https://via.placeholder.com/600/5e04a4','https://via.placeholder.com/150/5e04a4'),(56,2,'vel voluptatem esse consequuntur est officia quo aut quisquam','https://via.placeholder.com/600/f9f067','https://via.placeholder.com/150/f9f067'),(57,2,'vero est optio expedita quis ut molestiae','https://via.placeholder.com/600/95acce','https://via.placeholder.com/150/95acce'),(58,2,'rem pariatur facere eaque','https://via.placeholder.com/600/cde4c1','https://via.placeholder.com/150/cde4c1'),(59,2,'modi totam dolor eaque et ipsum est cupiditate','https://via.placeholder.com/600/a46a91','https://via.placeholder.com/150/a46a91'),(60,2,'ea enim temporibus asperiores placeat consectetur commodi ullam','https://via.placeholder.com/600/323599','https://via.placeholder.com/150/323599'),(61,3,'quia minus sed eveniet accusantium incidunt beatae odio','https://via.placeholder.com/600/e403d1','https://via.placeholder.com/150/e403d1'),(62,3,'dolorem cumque quo nihil inventore enim','https://via.placeholder.com/600/65ad4f','https://via.placeholder.com/150/65ad4f'),(63,3,'facere animi autem quod dolor','https://via.placeholder.com/600/4e557c','https://via.placeholder.com/150/4e557c'),(64,3,'doloremque culpa quia','https://via.placeholder.com/600/cd5a92','https://via.placeholder.com/150/cd5a92'),(65,3,'sed voluptatum enim eaque cumque qui sunt','https://via.placeholder.com/600/149540','https://via.placeholder.com/150/149540'),(66,3,'provident rerum voluptatem illo asperiores qui maiores','https://via.placeholder.com/600/ee0a7e','https://via.placeholder.com/150/ee0a7e'),(67,3,'veritatis labore ipsum unde aut quam dolores','https://via.placeholder.com/600/1279e9','https://via.placeholder.com/150/1279e9'),(68,3,'architecto aut quod qui ullam vitae expedita delectus','https://via.placeholder.com/600/e9603b','https://via.placeholder.com/150/e9603b'),(69,3,'et autem dolores aut porro est qui','https://via.placeholder.com/600/46e3b1','https://via.placeholder.com/150/46e3b1'),(70,3,'quam quos dolor eum ea in','https://via.placeholder.com/600/7375af','https://via.placeholder.com/150/7375af'),(71,4,'illo qui vel laboriosam vel fugit deserunt','https://via.placeholder.com/600/363789','https://via.placeholder.com/150/363789'),(72,4,'iusto sint enim nesciunt facilis exercitationem','https://via.placeholder.com/600/45935c','https://via.placeholder.com/150/45935c'),(73,4,'rerum exercitationem libero dolor','https://via.placeholder.com/600/1224bd','https://via.placeholder.com/150/1224bd'),(74,4,'eligendi quas consequatur aut consequuntur','https://via.placeholder.com/600/65ac19','https://via.placeholder.com/150/65ac19'),(75,4,'aut magni quibusdam cupiditate ea','https://via.placeholder.com/600/a9ef52','https://via.placeholder.com/150/a9ef52'),(76,5,'magni nulla et dolores','https://via.placeholder.com/600/7644fe','https://via.placeholder.com/150/7644fe'),(77,5,'ipsum consequatur vel omnis mollitia repellat dolores quasi','https://via.placeholder.com/600/36d137','https://via.placeholder.com/150/36d137'),(78,5,'aperiam aut est amet tenetur et dolorem','https://via.placeholder.com/600/637984','https://via.placeholder.com/150/637984'),(79,5,'est vel et laboriosam quo aspernatur distinctio molestiae','https://via.placeholder.com/600/c611a9','https://via.placeholder.com/150/c611a9'),(80,5,'et corrupti nihil cumque','https://via.placeholder.com/600/a0c998','https://via.placeholder.com/150/a0c998'),(81,6,'error magni fugiat dolorem impedit molestiae illo ullam debitis','https://via.placeholder.com/600/31a74c','https://via.placeholder.com/150/31a74c'),(82,6,'voluptate voluptas molestias vitae illo iusto','https://via.placeholder.com/600/88b703','https://via.placeholder.com/150/88b703'),(83,6,'quia quasi enim voluptatem repellat sit sint','https://via.placeholder.com/600/a19891','https://via.placeholder.com/150/a19891'),(84,6,'voluptatibus tempore quos amet quasi velit','https://via.placeholder.com/600/7645a2','https://via.placeholder.com/150/7645a2'),(85,6,'doloribus tempora quo nisi voluptatibus','https://via.placeholder.com/600/8d234f','https://via.placeholder.com/150/8d234f');
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(40) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Leanne Graham','Bret','Sincere@april.biz','1-770-736-8031 x56442','hildegard.org'),(2,'Ervin Howell','Antonette','Shanna@melissa.tv','010-692-6593 x09125','anastasia.net'),(3,'Clementine Bauch','Samantha','Nathan@yesenia.net','1-463-123-4447','ramiro.info'),(4,'Patricia Lebsack','Karianne','Julianne.OConner@kory.org','493-170-9623 x156','kale.biz'),(5,'Chelsey Dietrich','Kamren','Lucio_Hettinger@annie.ca','(254)954-1289','demarco.info'),(6,'Mrs. Dennis Schulist','Leopoldo_Corkery','Karley_Dach@jasper.info','1-477-935-8478 x6430','ola.org'),(7,'Kurtis Weissnat','Elwyn.Skiles','Telly.Hoeger@billy.biz','210.067.6132','elvis.io'),(8,'Nicholas Runolfsdottir V','Maxime_Nienow','Sherwood@rosamond.me','586.493.6943 x140','jacynthe.com'),(9,'Glenna Reichert','Delphine','Chaim_McDermott@dana.io','(775)976-6794 x41206','conrad.com'),(10,'Clementina DuBuque','Moriah.Stanton','Rey.Padberg@karina.biz','024-648-3804','ambrose.net');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-25 19:11:36
