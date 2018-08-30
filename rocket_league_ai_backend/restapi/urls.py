from django.conf.urls import url, include
from rest_framework import routers
from .views import HomePageView, UserViewSet, GroupViewSet, FileView
from rest_framework_swagger.views import get_swagger_view

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
# router.register(r'new_rest_endpoint', views.new_rest_endpoint)
schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    url(r'^$', HomePageView.as_view(), name='home'),
    url(r'^', include(router.urls)),
    url(r'^upload/$', FileView.as_view(), name='file-upload'),
    url(r'^docs/', schema_view)
]

