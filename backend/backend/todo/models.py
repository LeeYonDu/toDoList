from django.db import models
#데이터베이스스

class Todo(models.Model):
    title = models.CharField(max_length=255)

    def _str_(self):
        return self.title
