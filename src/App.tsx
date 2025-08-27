import React, { useState, useEffect } from 'react';
import { Search, FileText, Mail, Linkedin, BookOpen, Microscope, Shield, Eye, Download, ExternalLink } from 'lucide-react';

interface PDFResource {
  id: number;
  title: string;
  filename: string;
  description: string;
  category: string;
}

const pdfResources: PDFResource[] = [
  {
    id: 1,
    title: "Basics of Forensic Science",
    filename: "1 Basics of FS.pdf",
    description: "Fundamental concepts and principles of forensic science, covering the foundation of the field.",
    category: "Fundamentals"
  },
  {
    id: 2,
    title: "Principles of Forensic Science",
    filename: "2 Principles of FS_compressed.pdf",
    description: "Core principles that guide forensic investigations and scientific methodology in crime solving.",
    category: "Fundamentals"
  },
  {
    id: 3,
    title: "Branches of Forensic Science",
    filename: "3. Branches of Forensic science_compressed.pdf",
    description: "Comprehensive overview of different specializations within forensic science.",
    category: "Fundamentals"
  },
  {
    id: 4,
    title: "Crime Scenes",
    filename: "4. Crime Scenes (1).pdf",
    description: "Understanding crime scene dynamics, preservation, and initial response protocols.",
    category: "Crime Scene"
  },
  {
    id: 5,
    title: "7 Steps of Crime Scene Investigation",
    filename: "5. 7 Steps of CSI_compressed.pdf",
    description: "Systematic approach to crime scene investigation following established protocols.",
    category: "Crime Scene"
  },
  {
    id: 6,
    title: "The 7 Questions in Crime Investigation",
    filename: "7. The 7 QuestIons In CrIme InvestIgatIon.pdf",
    description: "Essential investigative framework covering the fundamental questions every forensic investigator must ask.",
    category: "Investigation"
  },
  {
    id: 7,
    title: "Sketching Techniques",
    filename: "8. Sketching (1).pdf",
    description: "Comprehensive guide to crime scene sketching methods and documentation standards.",
    category: "Documentation"
  },
  {
    id: 8,
    title: "Note-Making Strategies",
    filename: "9. Note-Making .pdf",
    description: "Professional note-taking techniques for forensic investigations and court proceedings.",
    category: "Documentation"
  },
  {
    id: 9,
    title: "Search Methods",
    filename: "10. Search Methods .pdf",
    description: "Systematic approaches to crime scene searching and evidence collection methodologies.",
    category: "Investigation"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredResources = pdfResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(pdfResources.map(r => r.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <header className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Shield className="w-12 h-12 text-cyan-400" />
                <Microscope className="w-6 h-6 text-yellow-400 absolute -bottom-1 -right-1" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Sigma Forensic Scholars</h1>
                <p className="text-cyan-300 text-sm">Advanced Forensic Education Hub</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:kaithepalli.sidhvita643@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden md:inline">Contact</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sidhvita-kaithepalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative z-10 py-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Prof. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sidhvita Kaithepalli</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Assistant Professor of Forensic Science
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Welcome to your comprehensive forensic education resource center. Access carefully curated materials, 
              research papers, and educational content designed to enhance your understanding of forensic science 
              and criminal investigation techniques.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Eye className="w-6 h-6" />
                <span className="text-lg font-semibold">Investigate</span>
              </div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <BookOpen className="w-6 h-6" />
                <span className="text-lg font-semibold">Learn</span>
              </div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-6 h-6" />
                <span className="text-lg font-semibold">Excel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className={`relative z-10 py-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search forensic resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className={`relative z-10 py-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Forensic Learning Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredResources.map((resource, index) => (
                <div
                  key={resource.id}
                  className={`group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {resource.title}
                      </h4>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-cyan-400 border border-cyan-500/30">
                          {resource.category}
                        </span>
                        <div className="flex items-center space-x-3">
                          <a
                            href={`/pdfs/${resource.filename}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View</span>
                          </a>
                          <a
                            href={`/pdfs/${resource.filename}`}
                            download={resource.filename}
                            className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 py-12 mt-16 border-t border-slate-700 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h4 className="text-2xl font-bold text-white">Sigma Forensic Scholars</h4>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of forensic scientists through comprehensive education and research.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <a 
                href="mailto:kaithepalli.sidhvita643@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>kaithepalli.sidhvita643@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sidhvita-kaithepalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-gray-500 text-sm">
                © 2025 Prof. Sidhvita Kaithepalli. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;