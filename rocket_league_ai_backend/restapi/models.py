from django.db import models

# Create your models here.
from django.db import models


class University(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = "University"
        verbose_name_plural = "Universities"

    def __unicode__(self):
        return self.name


class File(models.Model):
    file = models.FileField(blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

