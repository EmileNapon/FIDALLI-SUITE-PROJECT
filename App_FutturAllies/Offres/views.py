from django.shortcuts import render

from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status


from Offres.models import Offre
from .serializers import OffreSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# Create your views here.
@api_view(['POST'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de créer une offre
def create_Offre(request):
    if request.method == 'POST':
        serializer = OffreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_offres(request):
    offres = Offre.objects.all()  # Récupérer toutes les offres
    serializer = OffreSerializer(offres, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)
