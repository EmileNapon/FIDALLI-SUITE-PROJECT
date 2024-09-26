# serializers.py
from rest_framework import serializers
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'nom', 'prenom', 'phone_number', 'password', 'password2', 'role']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Les mots de passe ne correspondent pas."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        role = validated_data.get('role', 'etudiant')
        if role == 'admin':
            user = CustomUser.objects.create_superuser(**validated_data)
        elif role == 'manager':
            user = CustomUser.objects.create_manager(**validated_data)
        else:
            user = CustomUser.objects.create_user(**validated_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'nom', 'prenom', 'phone_number', 'role', 'is_active', 'is_staff']
