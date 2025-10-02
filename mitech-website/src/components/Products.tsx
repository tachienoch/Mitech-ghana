'use client';

import { motion } from 'framer-motion';
import { 
  ShoppingCartIcon, 
  HeartIcon, 
  AcademicCapIcon, 
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  EyeIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    icon: ShoppingCartIcon,
    title: 'Point of Sale (POS) System',
    description: 'Complete retail management solution with inventory tracking, sales analytics, and customer management.',
    image: '/pos-demo.jpg',
    features: ['Inventory Management', 'Sales Reporting', 'Customer Database', 'Multi-location Support'],
    price: 'Starting from $299',
    category: 'Retail',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: HeartIcon,
    title: 'Hospital Management System',
    description: 'Comprehensive healthcare management platform for hospitals, clinics, and medical facilities.',
    image: '/hms-demo.jpg',
    features: ['Patient Records', 'Appointment Scheduling', 'Billing System', 'Staff Management'],
    price: 'Starting from $599',
    category: 'Healthcare',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: AcademicCapIcon,
    title: 'School Management System',
    description: 'All-in-one education management platform for schools, colleges, and educational institutions.',
    image: '/sms-demo.jpg',
    features: ['Student Information', 'Grade Management', 'Parent Portal', 'Fee Management'],
    price: 'Starting from $399',
    category: 'Education',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'SMS & Communication Platform',
    description: 'Bulk SMS and communication solution for marketing campaigns and customer engagement.',
    image: '/sms-platform-demo.jpg',
    features: ['Bulk SMS', 'Email Marketing', 'Contact Management', 'Campaign Analytics'],
    price: 'Starting from $199',
    category: 'Communication',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready-Made <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pre-built management systems that can be quickly deployed and customized for your business needs
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <product.icon className={`w-16 h-16 text-gray-400`} />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${product.color}`}>
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </div>
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      <EyeIcon className="w-4 h-4 mr-2" />
                      Demo
                    </button>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${product.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We can customize any of our ready-made systems or build a completely new solution tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              View All Products
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Custom Quote
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
