# Generated by Django 4.2 on 2024-11-18 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Offres', '0007_remove_offerapplication_candidat_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='offerapplication',
            name='submitted_documents_ids',
            field=models.JSONField(null=True),
        ),
    ]