import React, { useState, useEffect } from 'react';
import { reservationService } from '../services/api';
import { LayoutDashboard, Calendar, Clock, User } from 'lucide-react';

const Dashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await reservationService.getAll();
        setReservations(response.data);
      } catch (err) {
        console.error('Failed to fetch reservations', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <div className="pb-5 border-b border-gray-200 mb-8">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Restaurant Dashboard</h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Manage your restaurant's bookings and table availability.
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {loading ? (
            <li className="px-4 py-4 sm:px-6 text-center text-gray-500">Loading bookings...</li>
          ) : reservations.length > 0 ? (
            reservations.map((res) => (
              <li key={res._id}>
                <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {res.customerName || 'Guest'}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Confirmed
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {new Date(res.date).toLocaleDateString()}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {res.time || '18:00'}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <User className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      Table {res.tableNumber || res.tableId}
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="px-4 py-8 sm:px-6 text-center text-gray-500">
              No active reservations found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
