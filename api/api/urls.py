from django.urls import include, path
from rest_framework import routers
from api.views import (
    AppointmentViewSet,
    DoctorViewSet,
    InventoryViewSet,
    NurseViewSet,
    PatientViewSet,
    PrescriptionViewSet,
    StatsView,
    TestingLabViewSet,
    BloodBanksViewSet,
)

router = routers.DefaultRouter()
router.register(r"patients", PatientViewSet)
router.register(r"doctors", DoctorViewSet)
router.register(r"nurses", NurseViewSet)
router.register(r"appointments", AppointmentViewSet)
router.register(r"prescriptions", PrescriptionViewSet)
router.register(r"inventory", InventoryViewSet)
router.register(r"testinglabs", TestingLabViewSet)
router.register(r"bloodbanks", BloodBanksViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("stats", StatsView.as_view(), name="stats"),
]
