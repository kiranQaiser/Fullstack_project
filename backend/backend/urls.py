# backend/urls.py
from django.contrib import admin
from django.urls import path, include
from api.views import WomenProductList, WomenProductDetail
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/women-products/', WomenProductList.as_view(), name='women-product-list'),
    path('api/women-products/<int:pk>/', WomenProductDetail.as_view(), name='women-product-detail'),
    
    
]
