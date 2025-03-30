from rest_framework import serializers
from api.models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        models = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        models = Product
        fields = '__all__'
