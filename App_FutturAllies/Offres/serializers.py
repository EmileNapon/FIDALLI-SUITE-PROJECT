from rest_framework import serializers

from .models import Offre

class OffreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offre
        fields =  '__all__' 