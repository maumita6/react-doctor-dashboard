import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate, Outlet } from 'react-router-dom';


export default function AppointmentForm() {

  const { name} = useParams(); // Grabs "DOC004" from the URL


  // 1. Unified form field state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    date: '',
    timeSlot: ''
  });

  // Form validation error state
  const [errors, setErrors] = useState({});

  // Form submission tracking status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available slots 
  const timeSlots = ['09:00', '10:30', '13:00', '14:30', '16:00'];

  // Handle all textual, select, and input field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,         // Copy all existing form data name: "username",
      [name]: value,       // Dynamically update ONLY the field that changed value: "john_doe",
    });

    // Clear errors inline as the user fixes them
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Run comprehensive form validation rules
  const validateForm = () => {
    let localErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      localErrors.fullName = 'Full name is required.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      localErrors.email = 'Email address is required.';
      isValid = false;

    } else if (!emailRegex.test(formData.email)) {
      localErrors.email = 'Please entry a valid email address.';
      isValid = false;
    }

    if (!formData.service) {
      localErrors.service = 'Please select a service.';
      isValid = false;
    }

    if (!formData.date) {
      localErrors.date = 'Appointment date is required.';
      isValid = false;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        localErrors.date = 'Date cannot be in the past.';
        isValid = false;
      }
    }

    if (!formData.timeSlot) {
      localErrors.timeSlot = 'Please pick a time slot.';
      isValid = false;
    }

    setErrors(localErrors);
    return isValid;
  };

  // Form submission handler logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (validateForm()) {
      console.log('Appointment Confirmed safely:', formData);
      setIsSubmitted(true);
      // Reset form on success
      setFormData({ fullName: '', email: '', service: '', date: '', timeSlot: '', notes: '' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <Link to="/dashboard" className="text-xs font-semibold text-indigo-600 hover:underline mb-6 block">
        &larr; Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Book an Appointment for  <span className="text-orange-700">{name}</span></h2>
      <p className="text-sm text-gray-500 mb-6 text-center">Fill out the form below to secure your session.</p>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg text-center font-medium animate-fade-in">
          🎉 Appointment requested successfully! Check your inbox soon.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className=
  {`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 transition-all ${errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'}`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'
              }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
        </div>

        {/* Service Selector Selection */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Select Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 bg-white transition-all ${errors.service ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'
              }`}
          >
            <option value="">-- Choose a Service --</option>
            <option value="consultation">General Consultation</option>
            <option value="followup">Follow-up Visit</option>
            <option value="technical">Technical Support Session</option>
          </select>
          {errors.service && <p className="text-xs text-red-500 mt-1 font-medium">{errors.service}</p>}
        </div>

        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 transition-all ${errors.date ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'
              }`}
          />
          {errors.date && <p className="text-xs text-red-500 mt-1 font-medium">{errors.date}</p>}
        </div>

        {/* Custom Radio Group for Available Time Slots */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Available Times</label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <label
                key={slot}
                className={`border rounded-lg py-2 text-center text-sm font-medium cursor-pointer transition-all ${formData.timeSlot === slot
                    ? 'bg-green-400 text-white border-green-600 shadow-sm'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
              >
                <input
                  type="radio"
                  name="timeSlot"
                  value={slot}
                  checked={formData.timeSlot === slot}
                  onChange={handleChange}
                  className="sr-only" // Hidden visually, fully accessible, sr-only (Screen Reader Only)
                />
                {slot}
              </label>
            ))}
          </div>
          {errors.timeSlot && <p className="text-xs text-red-500 mt-1 font-medium">{errors.timeSlot}</p>}
        </div>



        {/* Submit Action */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}
