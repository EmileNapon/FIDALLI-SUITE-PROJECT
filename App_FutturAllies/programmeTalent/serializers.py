
from rest_framework import serializers

from .models import Formation,  Inscrit, ModuleFormation, Group, AffectationStage, Seance

class FormationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formation
        fields =  '__all__' 

class InscritSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscrit
        fields = '__all__'  # Including all necessary fields

class ModuleFormationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuleFormation
        fields =  '__all__'   # Including all necessary fields

class SeanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seance
        fields =  '__all__'   # Including all necessary fields



class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields =  '__all__'  # Including all necessary fields

class AffectationStageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AffectationStage
        fields =  '__all__'   # Including all necessary fields



##############################################
        
