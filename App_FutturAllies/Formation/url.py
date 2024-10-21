from django.urls import path
from . import views

urlpatterns = [
    path('modules/create/', views.create_module, name='create_module'),
    path('domaines/list_domaines', views.list_domaines, name='list_domaines'), 
##########################################################################################
    path('domaines/create/', views.create_domaine, name='create_domaine'),
    path('modules/list_modules', views.list_modules, name='list_modules'), 
##########################################################################################
    path('cours/create/', views.create_cours, name='create_cours'),
    path('cours/list_cours', views.list_cours, name='list_cours'), 
##########################################################################################
    path('chapitre/create/', views.create_chapitre, name='create_chapitre'),
    path('contenu/create/', views.create_contenu, name='create_contenu'),
]
