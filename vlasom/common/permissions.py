from rest_framework.permissions import IsAuthenticated

class AllowCheckAuthenticated(IsAuthenticated):
    def has_permission(self, request, view):
        if request.path.find('check') > 0:
            return True
        else:
            return request.user and request.user.is_authenticated