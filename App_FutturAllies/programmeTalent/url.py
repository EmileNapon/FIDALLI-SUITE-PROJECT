from django.urls import path
from . import views

urlpatterns = [
    path('formation/create/', views.create_Formation, name='create_formation'),
    path('formation/list-formations/', views.list_formations, name='list_formation'),
    path('formation/<int:formation_id>/', views.list_formations, name='detail_formation'),

    ################################################################################
    path('inscrit/create/', views.create_Inscrit, name='create_inscrit'),



    ################################################################################
    
    path('ModuleFormation/create/', views.create_ModuleFormation, name='ModuleFormation'),
     path('ModuleFormation/listes-module-formation/', views.liste_ModuleFormation, name='ModuleFormation'),

      ################################################################################
    path('seance/create/', views.create_Seance, name='create_seance'),
    path('group/create/', views.create_Group, name='create_group'),
    path('affectationStage/create/', views.create_AffectationStage, name='AffectationStage'),
]
