# React App from Django Root Directory

Create Django Project: django-admin startproject appname

Create React app: npx create-react-app appname

Drag the React app into root directory of Django project

Configure TEMPLATES > DIRS to add the BUILD file path in settings.py

In urls.py Add import and add to urlpatterns to find the React index.html template

Configure STATICFILES_DIRS in settings.py to find all React HTML, CSS and JS files

cd into react app and run npm run build

cd into manage.py location and run python manage.py runserver

based on tutoria by @divanov11, Dennis Ivy 
