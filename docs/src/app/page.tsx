'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [domains, setDomains] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/sang765/ReBypass/main/bypass-vip.user.js')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const domainList = lines
          .filter(line => line.startsWith('// @match'))
          .map(line => {
            try {
              const url = new URL(line.split(' ')[2].replace('*://', 'https://').replace('/*', ''));
              return url.hostname;
            } catch (e) {
              return null;
            }
          })
          .filter((domain): domain is string => domain !== null);
        setDomains([...new Set(domainList)]);
      });
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">BYPASS.VIP Userscript</h1>
          <a
            href="https://raw.githubusercontent.com/sang765/ReBypass/main/bypass-vip.user.js"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Install Now
          </a>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <section className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
            Supported Domains
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            The userscript automatically bypasses ad-links on the following domains:
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {domains.map(domain => (
            <div key={domain} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <p className="text-gray-900 dark:text-white font-semibold">{domain}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 py-6 mt-12">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>Created by <a href="https://github.com/sang765" className="text-blue-600 dark:text-blue-400 hover:underline">sang765</a></p>
          <p>Licensed under the MIT License.</p>
        </div>
      </footer>
    </div>
  );
}
