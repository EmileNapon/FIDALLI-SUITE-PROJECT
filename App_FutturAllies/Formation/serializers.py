


from rest_framework import serializers
from .models import Domaine,Module, Cours, Chapitre, Contenu

class DomaineSerializer(serializers.ModelSerializer):
     class Meta:
        model = Domaine
        fields = ["id_domaine","Nom_domaine"]

class ModuleSerializer(serializers.ModelSerializer):
     class Meta:
        model = Module
        fields = ["id_module","id_domaine","nom_module"]

class CoursSerializer(serializers.ModelSerializer):
     class Meta:
        model = Cours
        fields = ["id_chapitre","id_cours","titre"]

class ChapitreSerializer(serializers.ModelSerializer):
     class Meta:
        model = Chapitre
        fields = ["id_domaine","Nom_domaine", "nom_cours"]

class ContenuSerializer(serializers.ModelSerializer):
     class Meta:
        model = Contenu
        fields = ["id_contenu","id_chapitre","description"]

