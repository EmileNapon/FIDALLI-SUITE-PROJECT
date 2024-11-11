from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from programmeTalent.models import Formation, Inscrit, ModuleFormation, Seance,Annonce


from .serializers import AffectationStageSerializer, FormationSerializer, GroupSerializer, InscritSerializer, ModuleFormationSerializer, SeanceSerializer,AnnonceSerializer

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
@permission_classes([IsAuthenticated]) # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_ModuleFormation(request):
    moduleFormation = ModuleFormation.objects.all()  # Récupérer toutes les offres
    serializer = ModuleFormationSerializer(moduleFormation, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)


##################################################################################################################

@api_view(['POST'])
def create_Seance(request):
    if request.method == 'POST':
        serializer = SeanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_Seance(request):
    seance = Seance.objects.all()  # Récupérer toutes les offres
    serializer = SeanceSerializer(seance, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)   
##################################################################################################################

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





##################################################################################################


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])  # Seulement pour les utilisateurs authentifiés
def annonce(request):
    if request.method == 'GET':
        annonces = Annonce.objects.all()
        serializer = AnnonceSerializer(annonces, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)  
    elif request.method == 'POST':
        serializer = AnnonceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vue pour récupérer, mettre à jour ou supprimer une annonce spécifique
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])  # Seulement pour les utilisateurs authentifiés
def annonce_detail(request, annonce_id):
    try:
        annonce = Annonce.objects.get(id=annonce_id)
    except Annonce.DoesNotExist:
        return Response({'error': 'Annonce non trouvée'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AnnonceSerializer(annonce)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        serializer = AnnonceSerializer(annonce, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        annonce.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)