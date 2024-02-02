# api/serializers.py
from rest_framework import serializers
from .models import Category, Product, Order, WomenProduct


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
class WomenProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = WomenProduct
        fields = ('title', 'image')
        fields = '__all__'