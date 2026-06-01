import React, { useState, useEffect } from 'react';
import { reservationService } from '../services/api';
import { Calendar, Trash2, Utensils } from 'lucide-react';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyReservations = async () => {
      try {
        // In a real app, we'd pass a customer ID from auth context
        const response = await reservationService.getAll();
        setReservations(response.data);
      } catch (err) {
        console.error('Failed to fetch your reservations', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyReservations();
  }, []);

  const handleCancel = async (id) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      try {
        await reservationService.cancel(id);
        setReservations(reservations.filter(res => res._id !== id));
      } catch (err) {
        alert('Failed to cancel reservation. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="pb-5 border-b border-gray-200 mb-8">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">My Reservations</h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Manage your upcoming dining experiences.
        </p>
      </div>

      <div className="space-y-4">
        {loading ? (
          <p className="text-center text-gray-500 py-12">Loading your reservations...</p>
        ) : reservations.length > 0 ? (
          reservations.map((res) => (
            <div key={res._id} className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Utensils className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{res.restaurantName || 'Restaurant Name'}</h4>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(res.date).toLocaleDateString()} at {res.time || '18:00'}
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <button
                  onClick={() => handleCancel(res._id)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Cancel Booking
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500 mb-4">You don't have any reservations yet.</p>
            <button className="text-indigo-600 font-medium hover:text-indigo-500">
              Browse restaurants and book now &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReservations;
