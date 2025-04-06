from django.urls import path
from .views import (
    CompanyListAPIView,CompanyDetailAPIView,CompanyVacanciesAPIView,
    VacancyListAPIView,VacancyDetailAPIView,TopTenVacanciesAPIView,
    company_list,company_detail,vacancy_list
)


urlpatterns = [
    path('fbv/companies/', company_list),
    path('fbv/companies/<int:id>/', company_detail),
    path('fbv/vacancies/', vacancy_list),

    path('api/companies/', CompanyListAPIView.as_view(), name='company-list'),
    path('api/companies/<int:id>/', CompanyDetailAPIView.as_view(), name='company-detail'),
    path('api/companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view(), name='company-vacancies'),
    path('api/vacancies/', VacancyListAPIView.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:id>/', VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('api/vacancies/top_ten/', TopTenVacanciesAPIView.as_view(), name='top-ten-vacancies'),
]
