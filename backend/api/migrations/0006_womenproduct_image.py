# Generated by Django 5.0.1 on 2024-01-28 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_womenproduct'),
    ]

    operations = [
        migrations.AddField(
            model_name='womenproduct',
            name='image',
            field=models.ImageField(default='default_image.jpg', upload_to='product_images/'),
        ),
    ]
