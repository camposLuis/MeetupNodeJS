
delete from users;

insert into users (name, email, password_hash, created_at, updated_at)
values ('Pedro Henrique', 'pedro@gmail.com', '$2b$08$y32pJkvpmWtSwle9OTEOXeqpxEAuVZdCXmY6w105mCoQFcm6ODvrO', now(), now());

insert into users (name, email, password_hash, created_at, updated_at)
values ('Ana Luiza', 'analuiza@gmail.com', '$2b$08$y32pJkvpmWtSwle9OTEOXeqpxEAuVZdCXmY6w105mCoQFcm6ODvrO', now(), now());

insert into users (name, email, password_hash, created_at, updated_at)
values ('José Gomes', 'josegomes@gmail.com', '$2b$08$y32pJkvpmWtSwle9OTEOXeqpxEAuVZdCXmY6w105mCoQFcm6ODvrO', now(), now());

insert into users (name, email, password_hash, created_at, updated_at)
values ('Gabriela Aparecida', 'gabriela@gmail.com', '$2b$08$y32pJkvpmWtSwle9OTEOXeqpxEAuVZdCXmY6w105mCoQFcm6ODvrO', now(), now());

delete from meetups;

insert into meetups (title, description, location, date, organizer_id, banner_id, created_at, updated_at)
values ('Meetup React Native', 'Descrição do Evento', 'Logo ali', '2019-10-20 20:00:00', (select id from users where email = 'gabriela@gmail.com'), 2, now(), now())
