'use client';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
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
            Skip Ads, Not Content
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Experience a seamless browsing experience by automatically bypassing ad-links with the bypass.vip API.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What it is?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is a remake of the official userscript for <a href="https://bypass.vip" className="text-blue-600 dark:text-blue-400 hover:underline">bypass.vip</a>, a service that allows you to bypass ad-links and get directly to your destination without ads. The userscript automates the process by integrating with the bypass.vip API, providing a seamless experience on supported websites.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Note:</strong> This is a fork/remake of the original <a href="https://github.com/bypass-vip/userscript" className="text-blue-600 dark:text-blue-400 hover:underline">bypass.vip/userscript</a>.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Automatic bypass of ad-links</li>
              <li>Countdown timer for hash-based links</li>
              <li>Safe mode for reliable redirects</li>
              <li>Customizable wait time and API key</li>
              <li>Dark-themed overlay interface</li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Easy Installation</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="max-w-sm bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">1. Install a Userscript Manager</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Use <a href="https://www.tampermonkey.net/" className="text-blue-600 dark:text-blue-400 hover:underline">Tampermonkey</a> or other similar extensions for your browser.
              </p>
            </div>
            <div className="max-w-sm bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2. Add the Script</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Click the 'Install Now' button or copy-paste the script from the <a href="https://raw.githubusercontent.com/sang765/ReBypass/main/bypass-vip.user.js" className="text-blue-600 dark:text-blue-400 hover:underline">source</a>.
              </p>
            </div>
            <div className="max-w-sm bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">3. Enjoy!</h4>
              <p className="text-gray-700 dark:text-gray-300">
                The script will work automatically on supported websites.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contribute and Support</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            This project is open source. Contributions and feedback are highly welcome!
          </p>
          <a
            href="https://github.com/sang765/ReBypass"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            View on GitHub
          </a>
        </section>
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
