# Add another area to look for templates
from django.contrib import admin
from django.urls import path
# MOD: Class based View that allows render of a template without calling a View
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # MOD: Base URL to be Django app with ''
    path('', TemplateView.as_view(template_name='index.html')),
]
