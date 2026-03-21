import MainLayout from "../layout/MainLayout";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <MainLayout>
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We're here to help you with any questions about our tutoring services.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14 text-sm">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <Phone className="w-6 h-6 text-blue-600 mx-auto mb-4" />
            <p className="font-medium text-gray-800">Phone</p>
            <p className="mt-2 text-gray-600">+91 98765 43210</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <Mail className="w-6 h-6 text-blue-600 mx-auto mb-4" />
            <p className="font-medium text-gray-800">Email</p>
            <p className="mt-2 text-gray-600">support@hometuitions.com</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-4" />
            <p className="font-medium text-gray-800">Location</p>
            <p className="mt-2 text-gray-600">Hyderabad, Telangana</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
