from django.contrib import admin
from django.urls import path, include
from api.views import WomenProductList, WomenProductDetail
from api.views import register, login, user_info

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/women-products/', WomenProductList.as_view(), name='women-product-list'),
    path('api/women-products/<int:pk>/', WomenProductDetail.as_view(), name='women-product-detail'),
    path('api/register/', register),
    path('api/login/', login),
    path('api/user-info/', user_info),
]
