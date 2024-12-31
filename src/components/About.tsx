import React from 'react';
import { Target, Users, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become a leading sustainable agribusiness company that creates economic opportunities,
                empowers farmers, and enriches life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Briefcase className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower smallholder farmers and enrich lives through sustainable agribusiness.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Operational Focus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Farmers</h3>
              <p className="text-gray-600">
                Collaborating closely with farmers to promote sustainable agricultural practices and
                providing access to markets and resources.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Clients</h3>
              <p className="text-gray-600">
                Delivering high-quality produce that meets and exceeds customer expectations.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Partners</h3>
              <p className="text-gray-600">
                Engaging with government agencies, NGOs, research institutions, and private sector
                companies to create a sustainable ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}