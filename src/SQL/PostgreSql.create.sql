﻿




CREATE TABLE Виды (
 primaryKey UUID NOT NULL,
 МестоОбитания VARCHAR(255) NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ГрафикРаботы (
 primaryKey UUID NOT NULL,
 ВремяНачала VARCHAR(255) NULL,
 ВремяОкончания VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 КодДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Рацион (
 primaryKey UUID NOT NULL,
 ВесКорма VARCHAR(255) NULL,
 НомерРациона INT NULL,
 СоставКорма VARCHAR(255) NULL,
 ТипКорма VARCHAR(14) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Расписание (
 primaryKey UUID NOT NULL,
 ВторойПрием VARCHAR(255) NULL,
 ПервыйПрием VARCHAR(255) NULL,
 ТретийПрием VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 Рацион UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Вольер (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Площадь VARCHAR(255) NULL,
 ТипВольера VARCHAR(20) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Животные (
 primaryKey UUID NOT NULL,
 Кличка VARCHAR(255) NULL,
 КодЖивотного INT NULL,
 Пол VARCHAR(5) NULL,
 Виды UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставВольера (
 primaryKey UUID NOT NULL,
 Животные UUID NOT NULL,
 Вольер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 Имя VARCHAR(255) NULL,
 КодСотрудники INT NULL,
 Отчество VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ГрафикРаботы ADD CONSTRAINT FK119ece9d338ea4acb7640e7e57db193d634eda72 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Index119ece9d338ea4acb7640e7e57db193d634eda72 on ГрафикРаботы (Должность); 

 ALTER TABLE Рацион ADD CONSTRAINT FKc92805f151870c41eaa7d56434f9d6053afca092 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexc92805f151870c41eaa7d56434f9d6053afca092 on Рацион (Сотрудники); 

 ALTER TABLE Расписание ADD CONSTRAINT FKba7f0e65348b79b60dd6fd935078eebd076dea18 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Indexba7f0e65348b79b60dd6fd935078eebd076dea18 on Расписание (Должность); 

 ALTER TABLE Расписание ADD CONSTRAINT FK47d6008b1919e853976d91e04e6b6db7e153bc5f FOREIGN KEY (Рацион) REFERENCES Рацион; 
CREATE INDEX Index47d6008b1919e853976d91e04e6b6db7e153bc5f on Расписание (Рацион); 

 ALTER TABLE Вольер ADD CONSTRAINT FK01b88d657ce7acd4acd28f8ba13e699b5aebcb83 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index01b88d657ce7acd4acd28f8ba13e699b5aebcb83 on Вольер (Сотрудники); 

 ALTER TABLE Животные ADD CONSTRAINT FK9c3d142a29c28cd7b3c620b07cb427193c8679a7 FOREIGN KEY (Виды) REFERENCES Виды; 
CREATE INDEX Index9c3d142a29c28cd7b3c620b07cb427193c8679a7 on Животные (Виды); 

 ALTER TABLE СоставВольера ADD CONSTRAINT FK13e3db782e4b36529faa68db51e54645121410e5 FOREIGN KEY (Животные) REFERENCES Животные; 
CREATE INDEX Index13e3db782e4b36529faa68db51e54645121410e5 on СоставВольера (Животные); 

 ALTER TABLE СоставВольера ADD CONSTRAINT FKdc2e91dbf309e8d9cd02db6dcdf8eb1e3b5af1e9 FOREIGN KEY (Вольер) REFERENCES Вольер; 
CREATE INDEX Indexdc2e91dbf309e8d9cd02db6dcdf8eb1e3b5af1e9 on СоставВольера (Вольер); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Indexdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 on Сотрудники (Должность); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

