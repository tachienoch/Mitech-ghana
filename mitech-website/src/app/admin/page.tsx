'use client';

import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  ShoppingBagIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Appointments',
    value: '24',
    change: '+12%',
    changeType: 'positive',
    icon: CalendarIcon,
  },
  {
    name: 'New Inquiries',
    value: '18',
    change: '+8%',
    changeType: 'positive',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Active Services',
    value: '12',
    change: '0%',
    changeType: 'neutral',
    icon: CogIcon,
  },
  {
    name: 'Products Listed',
    value: '8',
    change: '+2',
    changeType: 'positive',
    icon: ShoppingBagIcon,
  },
];

const recentAppointments = [
  {
    id: 1,
    clientName: 'John Doe',
    service: 'Custom Software Development',
    date: '2024-01-15',
    time: '10:00 AM',
    status: 'confirmed',
  },
  {
    id: 2,
    clientName: 'Jane Smith',
    service: 'Website Development',
    date: '2024-01-15',
    time: '2:00 PM',
    status: 'pending',
  },
  {
    id: 3,
    clientName: 'Mike Johnson',
    service: 'Digital Marketing',
    date: '2024-01-16',
    time: '11:00 AM',
    status: 'confirmed',
  },
];

const recentInquiries = [
  {
    id: 1,
    clientName: 'Sarah Wilson',
    subject: 'POS System for Restaurant',
    date: '2024-01-14',
    status: 'new',
  },
  {
    id: 2,
    clientName: 'David Brown',
    subject: 'Hospital Management System',
    date: '2024-01-14',
    status: 'in-progress',
  },
  {
    id: 3,
    clientName: 'Lisa Davis',
    subject: 'School Management Platform',
    date: '2024-01-13',
    status: 'quoted',
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Appointments */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Recent Appointments</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700">View all</button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentAppointments.map((appointment) => (
              <div key={appointment.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{appointment.clientName}</p>
                    <p className="text-sm text-gray-500">{appointment.service}</p>
                    <p className="text-xs text-gray-400">{appointment.date} at {appointment.time}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Inquiries */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg shadow"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Recent Inquiries</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700">View all</button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentInquiries.map((inquiry) => (
              <div key={inquiry.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{inquiry.clientName}</p>
                    <p className="text-sm text-gray-500">{inquiry.subject}</p>
                    <p className="text-xs text-gray-400">{inquiry.date}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    inquiry.status === 'new' 
                      ? 'bg-blue-100 text-blue-800'
                      : inquiry.status === 'in-progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {inquiry.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg shadow p-6"
      >
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <CogIcon className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Service</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ShoppingBagIcon className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Product</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <DocumentTextIcon className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">New Blog Post</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <UsersIcon className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Team Member</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
