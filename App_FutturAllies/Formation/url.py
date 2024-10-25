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
    path('chapitre/list_chapitres', views.list_chapitres, name='list_chapitres'), 
##########################################################################################
    path('contenu/create/', views.create_contenu, name='create_contenu'),
    path('contenus/list_contenus', views.list_contenus, name='list_contenus'),
#########################################################################################
 path('contenu/<int:contenu_id>/', views.ContentView.as_view(), name='detail_contenu'), 
#########################################################################################
 path('chapitre/<int:chapitre_id>/', views.ChapitreView.as_view(), name='detail_chapitre'), 

]
