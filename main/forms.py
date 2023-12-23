from django.forms import ModelForm
from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator

from main.models import SignIn


class SignInForm(ModelForm):
    class Meta:
        model = SignIn
        fields = ['username', 'password']

        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'input is-small my-1 py-4',
                'placeholder': 'Телефон, имя пользователя или эл. адрес'
            }),
            'password': forms.PasswordInput(attrs={'class': 'input is-small my-1 py-4', 'placeholder': 'Пароль'}),
        }

        username = forms.CharField(required=True, widget=widgets['username'])
        password = forms.CharField(required=True, widget=widgets['password'], validators=[MinValueValidator(5)])
