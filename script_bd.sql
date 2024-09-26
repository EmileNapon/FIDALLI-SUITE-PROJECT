--****************************** GESTION DES UTILISATEURS *********************************************
CREATE TABLE actors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    actorname VARCHAR(255) NOT NULL UNIQUE,       -- Nom d'utilisateur, unique pour chaque utilisateur
    email VARCHAR(255) NOT NULL UNIQUE,           -- Adresse email unique pour chaque utilisateur
    phone_number VARCHAR(50),                     -- Numéro de téléphone (optionnel)
    address TEXT,                                 -- Adresse de l'acteur (optionnel)
    country VARCHAR(100),                         -- Pays de l'acteur (optionnel)
    password_hash VARCHAR(255) NOT NULL,          -- Mot de passe haché pour la sécurité
    type ENUM('user', 'partenaire') NOT NULL,     -- Définit si l'acteur est un utilisateur ou un partenaire
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création automatique
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP -- Date de mise à jour automatique
)ENGINE=InnoDB;


CREATE TABLE users (
    actor_id INT PRIMARY KEY,                     -- Fait référence à l'acteur
    full_name VARCHAR(255) NOT NULL,              -- Nom complet de l'utilisateur
    role ENUM('student', 'trainer', 'admin') NOT NULL, -- Le rôle de l'utilisateur
    FOREIGN KEY (actor_id) REFERENCES actors(id) ON DELETE CASCADE -- Suppression en cascade si l'acteur est supprimé
)ENGINE=InnoDB;


CREATE TABLE partenaires (
    actor_id INT PRIMARY KEY,                     -- Fait référence à l'acteur
    partenaire_type ENUM('company', 'school') NOT NULL, -- Type de partenaire (entreprise ou école)
    organization_name VARCHAR(255),               -- Nom de l'organisation si applicable
    industry VARCHAR(255),                        -- Secteur d'activité de l'organisation si applicable
    FOREIGN KEY (actor_id) REFERENCES actors(id) ON DELETE CASCADE -- Suppression en cascade si l'acteur est supprimé
)ENGINE=InnoDB;


--****************************** GESTION DES CCOURS LIBRES EN LIGNE *********************************************
-- Table 'domains' : stocke les catégories de cours
CREATE TABLE domains (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL UNIQUE,
    picture_url VARCHAR(255) NULL, -- URL de l'icône du domaine (optionnel)
    description TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
) ENGINE=InnoDB;

-- Table 'learning_paths' : stocke les parcours de formation offerts
CREATE TABLE learning_paths (
    id INT PRIMARY KEY AUTO_INCREMENT,
    domain_id INT, -- Référence au domaine du parcours
    title VARCHAR(255) NOT NULL, -- Titre du parcours
    picture_url VARCHAR(255) NULL, -- URL de l'icône du parcours (optionnel)
    description TEXT NOT NULL, -- Description du parcours
    duration VARCHAR(50) NOT NULL, -- Durée du parcours (ex: "6mois", "9mois")
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création du parcours
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Date de dernière mise à jour
    is_certifiable BOOLEAN DEFAULT FALSE, -- Indique si le parcours est certifiable
    is_online BOOLEAN DEFAULT TRUE, -- Indique si le parcours est toujours en ligne
    -- is_archived  BOOLEAN DEFAULT TRUE, -- Indique si le parcours est toujours en valable ou archivé
    -- certification_type ENUM('free', 'paid') DEFAULT 'free', -- Type de certification (gratuite ou payante)
    FOREIGN KEY (domain_id) REFERENCES domains(id) -- Clé étrangère vers la table 'domains'
) ENGINE=InnoDB;


-- Table 'courses' : stocke les cours offerts sur la plateforme
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL, -- Titre du cours
    picture_url VARCHAR(255) NULL, -- URL de l'icon de la formation (optionnel)
    description TEXT NOT NULL, -- Description du cours
    learning_path_id INT, -- Référence au parcours de formation
    level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner', -- Niveau de difficulté du cours
    duration VARCHAR(50) NOT NULL, -- Durée du cours
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création du cours
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour du cours
    is_certifiable BOOLEAN DEFAULT FALSE, -- Indique si le cours est certifiable
    is_online BOOLEAN DEFAULT TRUE, -- Indique si le cours est en ligne
    is_archived  BOOLEAN DEFAULT TRUE, -- Indique si le est toujours en valable ou archivé
    certification_type ENUM('free', 'paid') DEFAULT 'free', -- Type de certification (gratuite ou payante)
    FOREIGN KEY (learning_path_id) REFERENCES learning_paths(id) -- Clé étrangère vers la table 'formations'
) ENGINE=InnoDB;

-- Table 'course_chapters' : divise un cours en plusieurs modules
CREATE TABLE course_chapters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT, -- Référence au cours auquel appartient le module
    title VARCHAR(255) NOT NULL, -- Titre du chapitre
    description TEXT NULL, -- Description du chapitre
    order INT NOT NULL, -- Ordre du chapitre dans le cours
    nb_lessons INT NOT NULL, -- Nombre de leçons dans le chapitre
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création du chapitre
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour du chapitre
    FOREIGN KEY (course_id) REFERENCES courses(id) -- Clé étrangère vers la table 'courses'
) ENGINE=InnoDB;

-- Table 'lessons' : chaque module de cours contient plusieurs leçons
CREATE TABLE lessons (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chapter_id INT, -- Référence au module auquel appartient la leçon
    title VARCHAR(255) NOT NULL, -- Titre de la leçon
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création de la leçon
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour de la leçon
    FOREIGN KEY (chapter_id) REFERENCES course_chapters(id) -- Clé étrangère vers la table 'course_chapters'
) ENGINE=InnoDB;

-- Table 'lesson_contents' : stocke les types de contenus d'une leçon
CREATE TABLE lesson_contents(
    id INT PRIMARY KEY AUTO_INCREMENT,
    lesson_id INT NOT NULL, -- Référence à la leçon
    type ENUM('text', 'video') NOT NULL, -- Type du contenu de la leçon
    FOREIGN KEY (lesson_id) REFERENCES lessons(id) -- Clé étrangère vers la table 'lessons'
) ENGINE=InnoDB;

-- Table 'content_texts' : contient les textes des leçons
CREATE TABLE content_texts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    content_id INT NOT NULL, -- Référence au contenu de la leçon
    content TEXT NOT NULL, -- Texte du contenu
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création du contenu
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour du contenu
    FOREIGN KEY (content_id) REFERENCES lesson_contents(id) -- Clé étrangère vers la table 'lesson_contents'
) ENGINE=InnoDB;

-- Table 'content_videos' : contient les vidéos des leçons
CREATE TABLE content_videos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    content_id INT NOT NULL, -- Référence au contenu de la leçon
    content_url VARCHAR(255) NULL, -- URL du contenu vidéo (optionnel)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création de la vidéo
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour de la vidéo
    FOREIGN KEY (content_id) REFERENCES lesson_contents(id) -- Clé étrangère vers la table 'lesson_contents'
) ENGINE=InnoDB;

-- Table 'quizzes' : associe un quiz à un chapitre spécifique
CREATE TABLE quizzes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chapter_id INT, -- Référence au module auquel le quiz est associé
    title VARCHAR(255) NOT NULL, -- Titre du quiz
    competency_assessed VARCHAR(255) NOT NULL, -- Compétence évaluée par le quiz : C'est le titre du chapitre concerné
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création du quiz
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour du quiz
    FOREIGN KEY (chapter_id) REFERENCES course_chapters(id) -- Clé étrangère vers la table 'course_chapters'
) ENGINE=InnoDB;

-- Table 'questions' : stocke les questions des quiz
CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order INT NOT NULL, -- Ordre de la question dans le quiz
    quiz_id INT, -- Référence au quiz auquel la question appartient
    title TEXT NOT NULL, -- Texte de la question
    question_type ENUM('multiple_choice', 'one_choice') NOT NULL, -- Type de la question
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création de la question
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour de la question
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id) -- Clé étrangère vers la table 'quizzes'
) ENGINE=InnoDB;

-- Table 'answers' : stocke les réponses possibles pour chaque question
CREATE TABLE answers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question_id INT, -- Référence à la question associée
    answer_text TEXT NOT NULL, -- Texte de la réponse
    is_correct BOOLEAN DEFAULT FALSE, -- Indique si la réponse est correcte
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création de la réponse
    FOREIGN KEY (question_id) REFERENCES questions(id) -- Clé étrangère vers la table 'questions'
) ENGINE=InnoDB;

-- Table 'cour_suivis' : enregistre les cours suivis par les utilisateurs
CREATE TABLE cour_suivis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT, -- Référence à l'utilisateur
    course_id INT, -- Référence au cours
    progress DECIMAL(5, 2) NOT NULL DEFAULT 0.00, -- Progression du cours en pourcentage
    completed_at DATETIME NULL, -- Date de fin du cours
    started_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de début du cours
    ended_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour
    FOREIGN KEY (user_id) REFERENCES users(id), -- Clé étrangère vers la table 'users'
    FOREIGN KEY (course_id) REFERENCES courses(id) -- Clé étrangère vers la table 'courses'
) ENGINE=InnoDB;

-- Table 'certification_pathway' : stocke les parcours de certification
CREATE TABLE certification_pathway (
    id INT PRIMARY KEY AUTO_INCREMENT,
    learning_path_id INT NOT NULL,
    title VARCHAR(255) NOT NULL, -- Titre du parcours de certification
    price DECIMAL(5, 2) NULL,
    type ENUM('COURSE', 'LEARNING_PATH') NOT NULL, -- Niveau de certification
    description TEXT NOT NULL, -- Description du parcours
    duration VARCHAR(50) NOT NULL, -- Durée estimée du parcours
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création du parcours
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour
    certification_level ENUM('beginner', 'intermediate', 'advanced') NOT NULL, -- Niveau de certification
    FOREIGN KEY (learning_path_id) REFERENCES learning_paths(id) -- Clé étrangère vers la table 'formations'
) ENGINE=InnoDB;

-- Table 'certification_givens' : stocke les certifications attribuées aux utilisateurs
CREATE TABLE certification_givens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL, -- Référence à l'utilisateur ayant reçu la certification
    certification_issue_id INT NOT NULL, -- Référence au parcours ou au cours de certification complété
    certification_date DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date d'attribution de la certification
    certificate_url VARCHAR(255) NULL, -- URL du certificat délivré (optionnel)
    score DECIMAL(5, 2) NULL, -- Score final obtenu lors de la certification
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création de l'enregistrement
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Dernière date de mise à jour de l'enregistrement
    FOREIGN KEY (user_id) REFERENCES users(id), -- Clé étrangère vers la table 'users'
    FOREIGN KEY (certification_issue_id) REFERENCES certification_pathway(id) -- Clé étrangère vers la table 'certification_pathway'
) ENGINE=InnoDB;

--****************************** GESTION DES FORMATIONS *********************************************
-- Table 'trainings' : stocke les formations offertes
CREATE TABLE trainings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    domain_id INT, -- Référence au domaine du parcours
    title VARCHAR(255) NOT NULL, -- Titre de la formation
    type VARCHAR(255) NOT NULL, -- Type de la formation (ex: en ligne, présentiel)
    picture_url VARCHAR(255) NULL, -- URL de l'icône de la formation (optionnel)
    description TEXT NOT NULL, -- Description de la formation
    duration VARCHAR(50) NOT NULL, -- Durée de la formation 
    nb_modules INT NOT NULL, -- Nombre de modules de la formation
    location VARCHAR(255) NOT NULL, -- Lieu de la formation
    price DECIMAL(10,2) DEFAULT 0.00, -- Prix de la formation
    language VARCHAR(50) NOT NULL DEFAULT 'French', -- Langue de la formation
    level ENUM('beginner', 'intermediate', 'advanced') NOT NULL, -- Niveau de la formation
    max_participants INT NULL, -- Nombre maximum de participants
    start_date DATE NULL, -- Date de début de la formation
    end_date DATE NULL, -- Date de fin de la formation
    enrollment_deadline DATE NULL, -- Date limite d'inscription
    prerequisites TEXT NULL, -- Prérequis pour la formation
    organizer_id INT, -- Référence au partenaire qui organise la formation
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    is_certifiable BOOLEAN DEFAULT FALSE,
    certification_type ENUM('free', 'paid') DEFAULT 'free',
    is_closed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (domain_id) REFERENCES domains(id)
) ENGINE=InnoDB;

-- -- Cette table stocke les acteurs de la formation.
-- CREATE TABLE training_actors (
--     training_id INT, -- Référence à la formation
--     actor_id INT, -- Référence à l'acteur (étudiant, formateur ou organisateur)
--     actor_type ENUM('trainer', 'organizer'), -- Type d'acteur
--     enrollment_date DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date d'inscription
--     role_description TEXT NULL, -- Description du rôle (pour les formateurs/organisateurs)
--     PRIMARY KEY (training_id, actor_id, actor_type),
--     FOREIGN KEY (training_id) REFERENCES trainings(id) ON DELETE CASCADE,
--     FOREIGN KEY (actor_id) REFERENCES actors(id) ON DELETE CASCADE
-- ) ENGINE=InnoDB;

-- Cette table stocke les inscrits à la formation.
CREATE TABLE training_enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    training_id INT NOT NULL, -- Référence à la formation
    student_id INT NOT NULL, -- Référence à l'étudiant
    enrollment_date DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date d'inscription
    grade DECIMAL(4,2) NULL, -- Note obtenue (si applicable)
    FOREIGN KEY (training_id) REFERENCES trainings(id) ON DELETE CASCADE, -- Lien vers la formation
    FOREIGN KEY (student_id) REFERENCES actors(id) ON DELETE CASCADE, -- Lien vers l'étudiant
    UNIQUE (training_id, student_id) -- Assure qu'un étudiant ne peut s'inscrire qu'une fois à une formation
) ENGINE=InnoDB;

-- Cette table stocke l'evaluation des inscrits à l'issue de la formations
CREATE TABLE training_evaluations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    training_id INT NOT NULL, -- Référence à la formation
    method ENUM('quiz', 'project', 'exam') NOT NULL, -- Méthode d'évaluation
    description TEXT NULL, -- Description de la méthode d'évaluation (optionnelle)
    FOREIGN KEY (training_id) REFERENCES trainings(id) ON DELETE CASCADE -- Lien vers la formation
) ENGINE=InnoDB;

-- Cette table stocke les appreciations faites sur la formation.
CREATE TABLE training_feedbacks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    training_id INT NOT NULL, -- Référence à la formation
    feedbacker_id INT NOT NULL, -- Référence à l'acteur qui laisse le feedback (doit être un étudiant inscrit)
    feedback_for ENUM('for_training', 'for_trainer') NOT NULL, -- Type de feedback (pour la formation ou pour le formateur)
    rating INT CHECK (rating >= 1 AND rating <= 5), -- Note de la formation ou du formateur (par exemple de 1 à 5)
    feedback TEXT, -- Le texte du feedback
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date à laquelle le feedback a été laissé
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Date de dernière mise à jour
    FOREIGN KEY (training_id) REFERENCES trainings(id) ON DELETE CASCADE, -- Lien vers la formation
    FOREIGN KEY (feedbacker_id) REFERENCES actors(id) ON DELETE CASCADE -- Lien vers l'acteur qui laisse le feedback
) ENGINE=InnoDB;


--****************************** GESTION DES OFFRES *********************************************
-- Cette table stocke les informations communes à toutes les offres.
CREATE TABLE offres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL, -- Titre de l'offre
    description TEXT NOT NULL, -- Description de l'offre
    requirements TEXT NOT NULL, -- Exigences de l'offre
    location VARCHAR(255) NOT NULL, -- Lieu de l'offre
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de création de l'offre
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Date de mise à jour de l'offre
    organizer_id INT, -- Référence à l'organisateur (partenaire)
    is_active BOOLEAN DEFAULT TRUE, -- Indique si l'offre est active
    type ENUM('job', 'internship') NOT NULL, -- Type d'offre (emploi ou stage)
    FOREIGN KEY (organizer_id) REFERENCES partenaires(actor_id) ON DELETE SET NULL -- Lien vers l'organisateur
) ENGINE=InnoDB;

-- Cette table stocke les offres d'emplois.
CREATE TABLE jobs (
    id INT PRIMARY KEY, -- Doit être le même que l'ID dans la table `offres`
    salary_range VARCHAR(100), -- Plage salariale (si applicable)
    type ENUM('full_time', 'part_time') NOT NULL, -- Type de contrat
    FOREIGN KEY (id) REFERENCES offres(id) ON DELETE CASCADE -- Lien vers l'offre
) ENGINE=InnoDB;

-- Cette table stocke les offres de stages.
CREATE TABLE internships (
    id INT PRIMARY KEY, -- Doit être le même que l'ID dans la table `offres`
    duration VARCHAR(100), -- Durée du stage
    compensation BOOLEAN DEFAULT FALSE, -- Indique si le stage est rémunéré
    FOREIGN KEY (id) REFERENCES offres(id) ON DELETE CASCADE -- Lien vers l'offre
) ENGINE=InnoDB;

-- Cette table stocke les candidatures.
CREATE TABLE offer_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    offre_id INT NOT NULL, -- Référence à l'offre (emploi ou stage)
    applicant_id INT NOT NULL, -- Référence à l'utilisateur qui postule
    application_date DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date de la candidature
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending', -- Statut de la candidature
    FOREIGN KEY (offre_id) REFERENCES offres(id) ON DELETE CASCADE, -- Lien vers l'offre
    FOREIGN KEY (applicant_id) REFERENCES actors(id) ON DELETE CASCADE -- Lien vers l'acteur
) ENGINE=InnoDB;