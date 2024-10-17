from django.urls import path
from . import views

urlpatterns = [
    path('modules/create/', views.create_module, name='create_module'),
    path('domaines/create/', views.create_domaine, name='create_domaine'),
    path('cours/create/', views.create_cours, name='create_cours'),
    path('chapitre/create/', views.create_chapitre, name='create_chapitre'),
    path('contenu/create/', views.create_contenu, name='create_contenu'),
]
