from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from programmeTalent.models import Formation, Inscrit, ModuleFormation


from .serializers import AffectationStageSerializer, FormationSerializer, GroupSerializer, InscritSerializer, ModuleFormationSerializer, SeanceStageSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
def create_Formation(request):
    if request.method == 'POST':
        serializer = FormationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_formations(request):
    domaines = Formation.objects.all()  # Récupérer toutes les offres
    serializer = FormationSerializer(domaines, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def detail_formation(request, formation_id):
    try:
        formation = Formation.objects.get(id=formation_id)
        serializer = FormationSerializer(formation)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Formation.DoesNotExist:
        return Response({"error": "Formation not found."}, status=status.HTTP_404_NOT_FOUND)


##################################################################################################################

@api_view(['POST'])
def create_Inscrit(request):
    if request.method == 'POST':
        serializer = InscritSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def liste_Inscrits(request):
    inscrit = Inscrit.objects.all()  # Récupérer toutes les offres
    serializer = InscritSerializer(inscrit, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)

##################################################################################################################

@api_view(['POST'])
def create_ModuleFormation(request):
    if request.method == 'POST':
        serializer = ModuleFormationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def liste_ModuleFormation(request):
    moduleFormation = ModuleFormation.objects.all()  # Récupérer toutes les offres
    serializer = FormationSerializer(moduleFormation, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)
##################################################################################################################


@api_view(['POST'])
def create_Seance(request):
    if request.method == 'POST':
        serializer = SeanceStageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_Group(request):
    if request.method == 'POST':
        serializer = GroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_AffectationStage(request):
    if request.method == 'POST':
        serializer = AffectationStageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

