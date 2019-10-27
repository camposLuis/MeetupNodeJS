
delete from subscriptions;
delete from meetups;
delete from files;
delete from users;

insert into users (name, email, password_hash, created_at, updated_at)
values ('Pedro Henrique', 'pedro@gmail.com', '$2b$08$y32pJkvpmWtSwle9OTEOXeqpxEAuVZdCXmY6w105mCoQFcm6ODvrO', now(), now());
insert into users (name, email, password_hash, created_at, updated_at)
values ('Ana Luiza', 'ana@gmail.com', '$2b$08$y32pJkvpmWtSwle9OTEOXeqpxEAuVZdCXmY6w105mCoQFcm6ODvrO', now(), now());
insert into users (name, email, password_hash, created_at, updated_at)
values ('José Gomes', 'jose@gmail.com', '$2b$08$y32pJkvpmWtSwle9OTEOXeqpxEAuVZdCXmY6w105mCoQFcm6ODvrO', now(), now());
insert into users (name, email, password_hash, created_at, updated_at)
values ('Gabriela Aparecida', 'gabriela@gmail.com', '$2b$08$y32pJkvpmWtSwle9OTEOXeqpxEAuVZdCXmY6w105mCoQFcm6ODvrO', now(), now());


insert into files (name, path, created_at, updated_at)
values ('angular1.jpg',	'8c9dc6da1f5a3af72bd8c5051f101efb.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('angular2.jpg',	'9004a0a5b0e47384bcf1381b5e72361f.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('angular3.jpg',	'2fbb2812683febf67b25c8d91115eadf.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('angular4.jpg',	'ee9e7d7611c9604dc72812f027055584.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('aspnet1.png',	'f15c5e8267f1d18e42c383a4d2366bef.png',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('aspnet2.png',	'3985f28a4d4389d23d96703d08679144.png',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('aspnet3.png',	'69b7d9fa4f2eedaf95a021ff2cce9b7d.png',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('aspnet4.png',	'1baee131cf6f8c44eeb0ccc59b34d8d7.png',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('native1.png',	'e80969cf64d1efc07c3ad735bb9bc609.png',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('native2.jpg',	'6b839cda3ab6be2cb69bd6c730324c7e.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('native3.jpg',	'80599145094717263d8615ea7a392b7c.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('native4.png',	'c99db5ba19bfc6d0024b69e3bb07f252.png',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('node1.png',	'66d484a1d96b7dbaf19015ea74441f54.png',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('node2.png',	'f1492cabaa78989fd08a681b128f8135.png',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('node3.jpg',	'dc96cef7d5d9039c7d9828214f98788a.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('node4.jpg',	'969b3a768d1b17dc064d7dc1ed55999d.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('react1.jpg',	'cc22be777c80b979bd1728282a21311c.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('react2.jpg',	'5e94a0d75cd46678a2701ec825a9c88e.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('react3.jpg',	'580c0fd21a5911f75e9812cb28ed737c.jpg',	now(), now());
insert into files (name, path, created_at, updated_at)
values ('react4.jpg',	'95d2ec9cec621abd0366d530ca854c75.jpg',	now(), now());


insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Angular', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 15:00:00', (select id from users where email = 'pedro@gmail.com'), (select id from files where name = 'angular1.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Angular', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 16:00:00', (select id from users where email = 'ana@gmail.com'), (select id from files where name = 'angular3.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Angular', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 17:00:00', (select id from users where email = 'jose@gmail.com'), (select id from files where name = 'angular2.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Angular', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 18:00:00', (select id from users where email = 'gabriela@gmail.com'), (select id from files where name = 'angular4.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Asp .Net', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 15:00:00', (select id from users where email = 'pedro@gmail.com'), (select id from files where name = 'aspnet1.png'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Asp .Net', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 16:00:00', (select id from users where email = 'ana@gmail.com'), (select id from files where name = 'aspnet2.png'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Asp .Net', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 17:00:00', (select id from users where email = 'jose@gmail.com'), (select id from files where name = 'aspnet3.png'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Asp .Net', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 18:00:00', (select id from users where email = 'gabriela@gmail.com'), (select id from files where name = 'aspnet4.png'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React JS', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 15:00:00', (select id from users where email = 'pedro@gmail.com'), (select id from files where name = 'react1.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React JS', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 16:00:00', (select id from users where email = 'ana@gmail.com'), (select id from files where name = 'react2.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React JS', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 17:00:00', (select id from users where email = 'jose@gmail.com'), (select id from files where name = 'react3.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React JS', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-25 18:00:00', (select id from users where email = 'gabriela@gmail.com'), (select id from files where name = 'react4.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React Native', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-26 15:00:00', (select id from users where email = 'pedro@gmail.com'), (select id from files where name = 'native1.png'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React Native', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-26 16:00:00', (select id from users where email = 'ana@gmail.com'), (select id from files where name = 'native2.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React Native', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-26 17:00:00', (select id from users where email = 'jose@gmail.com'), (select id from files where name = 'native3.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React Native', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-26 18:00:00', (select id from users where email = 'gabriela@gmail.com'), (select id from files where name = 'native4.png'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Node JS', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-26 15:00:00', (select id from users where email = 'pedro@gmail.com'), (select id from files where name = 'node1.png'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Node JS', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-26 16:00:00', (select id from users where email = 'ana@gmail.com'), (select id from files where name = 'node2.png'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Node JS', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-26 17:00:00', (select id from users where email = 'jose@gmail.com'), (select id from files where name = 'node3.jpg'), now(), now());

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup Node JS', 'O Meetup é um evento que reúne a comunidade de desenvolvimento a fim de compartilhar conhecimento'
, 'São Paulo Expô', '2019-11-26 18:00:00', (select id from users where email = 'gabriela@gmail.com'), (select id from files where name = 'node4.jpg'), now(), now());
