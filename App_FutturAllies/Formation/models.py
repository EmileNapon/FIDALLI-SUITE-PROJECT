from django.db import models

class Domaine(models.Model):
    nom_domaine = models.CharField(max_length=800) 

    def __str__(self):
        return self.nom_domaine

class Module(models.Model):
    domaine = models.ForeignKey(Domaine, null=True, on_delete=models.CASCADE) 
    nom_module = models.CharField(max_length=800, null=True)
   # formateur = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    def __str__(self):
        return self.nom_module

class Cours(models.Model):
    module = models.ForeignKey(Module,null=True, on_delete=models.CASCADE)  # Relation vers Module
    nom_cours = models.CharField(max_length=800, null=True)

    def __str__(self):
        return self.nom_cours

class Chapitre(models.Model):
    cours = models.ForeignKey(Cours,null=True, on_delete=models.CASCADE)  # Relation vers Cours
    titre = models.CharField(max_length=800, null=True)

    def __str__(self):
        return self.titre

class Contenu(models.Model):
    chapitre = models.ForeignKey(Chapitre,null=True, on_delete=models.CASCADE)  # Relation vers Chapitre
    description = models.TextField(max_length=800, null=True)

    def __str__(self):
        return self.description  # Retourne les premiers 50 caractères

