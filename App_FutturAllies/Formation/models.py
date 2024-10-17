from django.db import models
from datetime import date
class Domaine(models.Model):
    id_domaine=models.IntegerField()
    Nom_domaine=models.CharField(max_length=800)
    
class Module(models.Model):
    id_module=models.IntegerField()
    id_domaine=models.IntegerField()
    nom_module=models.TextField(max_length=800)
    id_user=models.IntegerField()

class Cours(models.Model):
    id_cours=models.IntegerField()
    id_module=models.IntegerField()
    nom_cours=models.TextField(max_length=800)
    
class Chapitre(models.Model):
    id_chapitre=models.IntegerField()
    id_cours=models.IntegerField()
    titre=models.TextField(max_length=800)

class Contenu(models.Model):
    id_contenu=models.IntegerField()
    id_chapitre=models.IntegerField()
    description=models.TextField(max_length=800)



class ModuleFormation(models.Model):
    id_module=models.IntegerField()
    id_formation=models.IntegerField()

class Formation(models.Model):
    id_formation=models.IntegerField()
    id_module=models.IntegerField()
    type=models.TextField()
    niveau=models.TextField(max_length=800)
    prix=models.TextField(max_length=10)
    duree = models.DateField(default=date(2024, 1, 20))
    nombre=models.IntegerField()
    location=models.TextField(max_length=200)

class Inscrit(models.Model):
    id_inscrit=models.IntegerField()
    id_formation=models.IntegerField()
    date = models.DateField(default=date.today)
    id_group=models.IntegerField()

class AffectationStage(models.Model):
    id_inscrit=models.IntegerField()
    id_offre=models.IntegerField()
    date_affectaion = models.DateField(default=date.today)

class Group(models.Model):
    id_group=models.IntegerField()


class Offre(models.Model):
    id_offre=models.IntegerField()
    id_User=models.IntegerField()
    description=models.TextField(max_length=1000)
    nom_beneficiere=models.TextField(max_length=500)
    date_debut=models.DateField(default=date(2024, 1, 20))
    date_limite=models.DateField(default=date(2024, 1, 20))
    duration=models.TextField(max_length=60)
    niveau=models.TextField(max_length=100)
    secteur_activite=models.TextField(max_length=200)

class Seance(models.Model):
    id_seance=models.IntegerField()
    lieu=models.IntegerField()
    date_formation=models.DateField(default=date(2024, 1, 20))
    heure_debut=models.TextField(max_length=10)
    heure_debut=models.TextField(max_length=10)
    statut=models.TextField(choices =(('confirmé','Confirmé'),('annulé', 'Annulé'),('attente', 'attente')))



