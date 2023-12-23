from django.contrib import admin
from .models import SignIn


# Register your models here.

@admin.register(SignIn)
class JobVacancyAdmin(admin.ModelAdmin):
    ordering = ['-id']
    list_display = ['username', 'password']
