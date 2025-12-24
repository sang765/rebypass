'use client';

import { useState, useEffect } from 'react';
import domainsData from '../data/domains.json';

interface Domain {
  domain: string;
  description: string;
  status: 'supported' | 'not_supported';
  link: string;
}

const domains: Domain[] = domainsData as Domain[];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'supported' | 'not_supported'>('all');
  const [filteredDomains, setFilteredDomains] = useState<Domain[]>(domains);

  useEffect(() => {
    const filtered = domains.filter(domain => {
      const matchesSearch = domain.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            domain.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || domain.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
    setFilteredDomains(filtered);
  }, [searchTerm, filterStatus]);

  return (
    <div className="container mx-auto p-4">
      <section id="home" className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Danh sách Tên Miền Userscript Hỗ Trợ
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Khám phá các tên miền được hỗ trợ bởi userscript ReBypass.
        </p>
      </section>

      <section id="domains" className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Tìm kiếm tên miền..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as 'all' | 'supported' | 'not_supported')}
            className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="all">Tất cả</option>
            <option value="supported">Hỗ trợ</option>
            <option value="not_supported">Không hỗ trợ</option>
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDomains.map((domain, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {domain.domain}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {domain.description}
              </p>
              <p className={`text-sm font-medium mb-2 ${domain.status === 'supported' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                Trạng thái: {domain.status === 'supported' ? 'Hỗ trợ' : 'Không hỗ trợ'}
              </p>
              {domain.link && (
                <a
                  href={domain.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Tải Userscript
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
