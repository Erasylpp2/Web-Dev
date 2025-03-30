from django.db import models
from decimal import Decimal

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

    @staticmethod
    def create_sample_data():
        categories = ["Electronics", "Clothing", "Books", "Home Appliances"]
        Category.objects.bulk_create(
    [Category(name=c) for c in categories if not Category.objects.filter(name=c).exists()]
)


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")

    def __str__(self):
        return self.name

    @staticmethod
    def create_sample_data():
        sample_products = [
            {"name": "Smartphone", "price": Decimal("699.99"), "description": "Latest 5G smartphone", "count": 50, "is_active": True, "category": "Electronics"},
            {"name": "Laptop", "price": Decimal("1299.99"), "description": "Powerful laptop with 16GB RAM", "count": 30, "is_active": True, "category": "Electronics"},
            {"name": "T-shirt", "price": Decimal("19.99"), "description": "Cotton T-shirt", "count": 100, "is_active": True, "category": "Clothing"},
            {"name": "Fiction Book", "price": Decimal("14.99"), "description": "Best-selling novel", "count": 40, "is_active": True, "category": "Books"},
            {"name": "Microwave", "price": Decimal("89.99"), "description": "700W microwave oven", "count": 25, "is_active": True, "category": "Home Appliances"},
        ]
        for product in sample_products:
            category, _ = Category.objects.get_or_create(name=product["category"])
            Product.objects.update_or_create(
                name=product["name"],
                defaults={
                    "price": product["price"],
                    "description": product["description"],
                    "count": product["count"],
                    "is_active": product["is_active"],
                    "category": category
                }
            )
