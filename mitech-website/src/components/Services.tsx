'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  GlobeAltIcon, 
  MegaphoneIcon, 
  CogIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built to meet your specific business requirements and scale with your growth.',
    features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GlobeAltIcon,
    title: 'Website Development',
    description: 'Modern, responsive websites that deliver exceptional user experiences and drive business results.',
    features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MegaphoneIcon,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and reach your target audience.',
    features: ['Social Media Management', 'Google Ads', 'SEO Services', 'Content Marketing'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CogIcon,
    title: 'Ready-Made Systems',
    description: 'Pre-built management systems that can be quickly deployed and customized for your business needs.',
    features: ['POS Systems', 'Hospital Management', 'School Management', 'SMS Solutions'],
    color: 'from-orange-500 to-red-500',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
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
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Learn More
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get a Free Consultation
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
