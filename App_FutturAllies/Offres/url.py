
from django.urls import path
from . import views

urlpatterns = [
    path('offre/create/', views.create_Offre, name='create_offre'),
    path('offres/list_offres', views.list_offres, name='list_offres'),  
]


