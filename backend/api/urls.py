# api/urls.py
from django.conf import settings  # Add this line at the top
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from .views import ProductViewSet
from rest_framework.routers import DefaultRouter
from .views import WomenProductViewSet
from django.urls import path
from .views import place_order

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'women-products', WomenProductViewSet, basename='women-products')



urlpatterns = [
    path('', include(router.urls)),
    path('place-order/', place_order, name='place_order')
    
]
# Add the following lines to serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

