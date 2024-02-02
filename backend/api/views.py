from rest_framework import generics, viewsets
from .models import Category, Product, Order, WomenProduct
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer, WomenProductSerializer
from .models import WomenProduct
from .serializers import WomenProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from .models import Order, Product


from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.contrib.auth.models import User
from .models import UserProfile
from .serializers import UserProfileSerializer, UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        UserProfile.objects.create(user=user, email=request.data['email'])
        refresh = RefreshToken.for_user(user)
        return Response({'token': str(refresh.access_token)}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = User.objects.filter(username=username).first()

    if user is None or not user.check_password(password):
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    refresh = RefreshToken.for_user(user)
    return Response({'token': str(refresh.access_token)}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_info(request):
    serializer = UserProfileSerializer(request.user.userprofile)
    return Response(serializer.data, status=status.HTTP_200_OK)



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


@require_POST
def place_order(request):
    try:
        # Get order details from the request JSON data
        order_data = request.json()
        cart = order_data.get('cart', [])
        delivery_info = order_data.get('deliveryInfo', {})

        # Save the order in the database
        order = Order.objects.create(cart=cart, **delivery_info)

        # Update product quantities in the inventory based on the order
        for item in cart:
            product_id = item.get('id')
            quantity_ordered = item.get('quantity', 0)

            # Retrieve the product from the database
            product = Product.objects.get(id=product_id)

            # Update the product quantity in the inventory
            if product.quantity >= quantity_ordered:
                product.quantity -= quantity_ordered
                product.save()
            else:
                # Handle insufficient inventory (raise an exception, return an error response, etc.)
                raise ValueError(f'Insufficient inventory for product with ID {product_id}')

        return JsonResponse({'success': True, 'order_id': order.id})
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)})