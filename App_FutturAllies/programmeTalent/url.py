from django.urls import path
from . import views

urlpatterns = [
    path('formation/create/', views.create_Formation, name='create_formation'),
    path('inscrit/create/', views.create_Inscrit, name='create_inscrit'),
    path('create_ModuleFormation/create/', views.create_ModuleFormation, name='create_create_ModuleFormation'),
    path('seance/create/', views.create_Seance, name='create_seance'),
    path('group/create/', views.create_Group, name='create_group'),
    path('affectationStageSerializer/create/', views.create_AffectationStage, name='create_create_AffectationStage'),
]
