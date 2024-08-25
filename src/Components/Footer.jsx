import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#00C342] to-[#01b43d] text-white p-8 lg:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold">Diagno Plus</h3>
          <p className="mt-4 text-white">
            Empowering healthcare with AI-driven diagnostics.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-white">About</li>
            <li className="text-white">Testimonials</li>
            <li className="text-white">Find a doctor</li>
            <li className="text-white">Apps</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-bold">Help</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-white">Help center</li>
            <li className="text-white">Instructions</li>
            <li className="text-white">How it works</li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold">Follow Us</h3>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 5.373 16.627 0 10 0S-2 5.373-2 12c0 5.991 4.388 10.954 10 11.925V14.89H7.087v-2.89h2.912V9.53c0-2.88 1.768-4.452 4.346-4.452 1.236 0 2.303.092 2.612.134v3.03h-1.796c-1.409 0-1.798.889-1.798 1.799v2.107h3.556l-.568 2.89h-2.988v9.035C17.612 22.953 22 17.991 22 12z"
              />
            </svg>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 4.557a9.616 9.616 0 01-2.828.775 4.942 4.942 0 002.165-2.724 9.84 9.84 0 01-3.127 1.195 4.935 4.935 0 00-8.406 4.49A13.988 13.988 0 011.671 3.15a4.935 4.935 0 001.53 6.573 4.934 4.934 0 01-2.237-.618v.061a4.936 4.936 0 003.958 4.836 4.934 4.934 0 01-2.229.084 4.936 4.936 0 004.604 3.416A9.876 9.876 0 010 19.54a13.987 13.987 0 007.557 2.215c9.054 0 14.002-7.497 14.002-13.987 0-.214 0-.426-.015-.636A10.005 10.005 0 0023 4.557z"
              />
            </svg>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.97.247 2.422.41.576.197.982.434 1.414.867.432.432.67.838.867 1.414.163.452.353 1.252.41 2.422.058 1.267.07 1.647.07 4.85 0 3.204-.012 3.584-.07 4.85-.057 1.17-.247 1.97-.41 2.422-.197.576-.434.982-.867 1.414-.432.432-.838.67-1.414.867-.452.163-1.252.353-2.422.41-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.247-2.422-.41-.576-.197-.982-.434-1.414-.867-.432-.432-.67-.838-.867-1.414-.163-.452-.353-1.252-.41-2.422C2.175 15.584 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.85.057-1.17.247-1.97.41-2.422.197-.576.434-.982.867-1.414.432-.432.838-.67 1.414-.867.452-.163 1.252-.353 2.422-.41C8.416 2.175 8.796 2.163 12 2.163zm0 5.838a4 4 0 100 8 4 4 0 000-8zm6.406-2.456a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.88 0zM12 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm0 1.35a4.812 4.812 0 100 9.624 4.812 4.812 0 000-9.624z"
              />
            </svg>
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 0h-14C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM7 19H4V9h3v10zM5.5 7.5C4.673 7.5 4 6.827 4 6s.673-1.5 1.5-1.5S7 5.173 7 6s-.673 1.5-1.5 1.5zM20 19h-3v-5c0-2.206-1.794-4-4-4s-4 1.794-4 4v5h-3V9h3v1.516c1.174-1.079 2.7-1.516 4.5-1.516 3.584 0 6.5 2.916 6.5 6.5V19z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
