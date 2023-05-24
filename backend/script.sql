CREATE USER 'oficina'@'%' IDENTIFIED BY 'oficina@123';
GRANT CREATE, SELECT, ALTER, INSERT, UPDATE, DELETE on *.* TO 'oficina'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;

DROP DATABASE netflix;

CREATE DATABASE netflix;
USE netflix;

CREATE TABLE filmes (
    id INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(60) NOT NULL,
    imagem VARCHAR(300) NOT NULL DEFAULT('https://marketplace.canva.com/EAE_E8rjFrI/1/0/1131w/canva-minimal-mystery-of-forest-movie-poster-ggHwd_WiPcI.jpg'),
    diretor VARCHAR(100),
    categoria ENUM ('Ação', 'Aventura', 'Drama', 'Comedia', 'Ficção científica', 'Suspense'),
    ano INT NOT NULL,
    duracao_min INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO filmes (nome, imagem, diretor, categoria, ano, duracao_min) 
VALUES (
'Interestelar',
'https://marketplace.canva.com/EAE_E8rjFrI/1/0/1131w/canva-minimal-mystery-of-forest-movie-poster-ggHwd_WiPcI.jpg',
'Lucas Vieira',
'Ficção Científica',
2014,
20
)


