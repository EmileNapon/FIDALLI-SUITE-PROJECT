from django.db import models
from datetime import date

class Offre(models.Model):
    description = models.TextField(max_length=1000 )
    nom_beneficiaire = models.CharField(max_length=500)
    date_debut = models.DateField(default=date(2024, 1, 20))
    date_limite = models.DateField(default=date(2024, 1, 20))
    duration = models.CharField(max_length=60)
    niveau = models.CharField(max_length=100)
    secteur_activite = models.CharField(max_length=200)