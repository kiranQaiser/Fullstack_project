from rest_framework import generics, viewsets
from .models import Category, Product, Order, WomenProduct
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer, WomenProductSerializer

from .models import WomenProduct
from .serializers import WomenProductSerializer




class WomenProductList(generics.ListAPIView):
    queryset = WomenProduct.objects.all()
    serializer_class = WomenProductSerializer

class WomenProductDetail(generics.RetrieveAPIView):
    queryset = WomenProduct.objects.all()
    serializer_class = WomenProductSerializer
class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class WomenProductViewSet(viewsets.ModelViewSet):
    queryset = WomenProduct.objects.all()
    serializer_class = WomenProductSerializer
