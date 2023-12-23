from django.db import models


# Create your models here.


class SignIn(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    confirmation_code = models.BigIntegerField(null=True, blank=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
