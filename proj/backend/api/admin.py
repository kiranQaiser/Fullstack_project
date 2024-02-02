# api/admin.py
from django.contrib import admin
from .models import Category, Product, Order,WomenProduct

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(WomenProduct)