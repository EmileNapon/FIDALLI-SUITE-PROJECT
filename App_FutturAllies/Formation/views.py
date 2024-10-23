
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from Formation.models import Domaine, Module, Cours, Chapitre,Contenu
from .serializers import ChapitreSerializer, ContenuSerializer, CoursSerializer, DomaineSerializer, ModuleSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


###################################################################################################
@api_view(['POST'])
def create_domaine(request):
    if request.method == 'POST':
        serializer = DomaineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_domaines(request):
    domaines = Domaine.objects.all()  # Récupérer toutes les offres
    serializer = DomaineSerializer(domaines, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)


###################################################################################################
@api_view(['POST'])
def create_module(request):
    if request.method == 'POST':
        serializer = ModuleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   
@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_modules(request):
    modules = Module.objects.all()  # Récupérer toutes les offres
    serializer = ModuleSerializer(modules, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)

###################################################################################################

@api_view(['POST'])
def create_cours(request):
    if request.method == 'POST':
        serializer = CoursSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_cours(request):
    cours= Cours.objects.all()  # Récupérer toutes les offres
    serializer = CoursSerializer(cours, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)

###################################################################################################
@api_view(['POST'])
def create_chapitre(request):
    if request.method == 'POST':
        serializer = ChapitreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_chapitres(request):
    chapitre= Chapitre.objects.all()  # Récupérer toutes les offres
    serializer = ChapitreSerializer(chapitre, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)
    
###################################################################################################


@api_view(['POST'])
def create_contenu(request):
    if request.method == 'POST':
        serializer = ContenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_contenus(request):
    contenu= Contenu.objects.all()  # Récupérer toutes les offres
    serializer = ContenuSerializer(contenu, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)
###################################################################################################




