# Generated by Django 4.2 on 2024-11-06 15:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('programmeTalent', '0016_remove_seance_moduleformation_seance_formation_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='seance',
            name='ModuleFormation',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='programmeTalent.moduleformation'),
        ),
    ]