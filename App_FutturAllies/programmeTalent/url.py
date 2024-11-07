from django.urls import path
from . import views

urlpatterns = [
    path('formation/create/', views.create_Formation, name='create_formation'),
    path('formation/list-formations/', views.list_formations, name='list_formation'),
    path('formation/<int:formation_id>/', views.detail_formation, name='detail_formation'), 

    ################################################################################
    path('inscrit/create/', views.create_Inscrit, name='create_inscrit'),
    path('inscrit/listes_inscrits/', views.liste_Inscrits, name='liste_Inscrits'),


    ################################################################################
    
    path('ModuleFormation/create/', views.create_ModuleFormation, name='ModuleFormation'),
     path('ModuleFormation/list_moduleFormation/', views.list_ModuleFormation, name='ModuleFormation'),

      ################################################################################
    path('seance/create/', views.create_Seance, name='create_seance'),
    path('seance/list_seances/', views.list_Seance, name='list_seances'),
        ################################################################################
    path('group/create/', views.create_Group, name='create_group'),
    path('affectationStage/create/', views.create_AffectationStage, name='AffectationStage'),
    ######################################################################################

    path('annonces/', views.annonce_list_create, name='annonce_list_create'),
    path('annonces/<int:annonce_id>/', views.annonce_detail, name='annonce_detail'),
    
]
