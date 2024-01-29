# api/models.py
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', default='default_image.jpg')
    # Add more fields as needed

    # Add other fields as needed
class Order(models.Model):
    products = models.ManyToManyField(Product)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    # Add other fields as needed
class WomenProduct(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')  # Provide a default value
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='women_products/')  # Manually define a default value
    
    