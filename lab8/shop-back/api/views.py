from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer

# Главная страница
def index(request):
    return HttpResponse("Home page")

# Список товаров и создание нового товара
class ProductListCreateView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Получение, обновление, удаление конкретного товара
class ProductDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Список категорий и создание новой категории
class CategoryListCreateView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Получение, обновление, удаление конкретной категории
class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Получение товаров по категории
class ProductsByCategoryView(APIView):
    def get(self, request, id):
        category = get_object_or_404(Category, pk=id)
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
