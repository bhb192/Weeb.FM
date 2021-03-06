from django.db import models

from artists.models import Artist

ALBUM_CDN_PATH = 'cdn/images/albums/'

class Album(models.Model):
    title = models.CharField(max_length=72, unique=True)
    artist = models.ForeignKey(Artist)
    release_year = models.IntegerField(null=True, blank=True)
    cover = models.ImageField(upload_to=ALBUM_CDN_PATH)
    scrobble_count = models.IntegerField(default=0)

    def __str__(self):
        # This formatting is kinda meh?
        if self.release_year is not None:
            return '{} - {} - {}'.format(self.artist.name,
                                         self.title,
                                         self.release_year)
        else:
            return '{} - {}'.format(self.artist.name, self.title)
