import React from 'react';

const Footer = () => {
  return (
    <footer className="min-w-screen bg-gray-100">
      {/* Main Footer Links */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Locations</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Help & Support</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Browse with Specialist</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Accessible Banking</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Privacy & Security</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Privacy</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Children’s Privacy</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Security</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Advertising Practices</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Your Privacy Choices</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Agreements</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Online Banking Service Agreement</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Site Map</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Share Your Feedback</a></li>
              <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">View Full Online Banking Site</a></li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <img src={"../public/icons8-facebook.svg"} alt="Facebook" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <img src={"../public/icons8-twitter.svg"} alt="Twitter" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <img src={"../public/icons8-instagram.svg"} alt="Instagram" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <img src={"../public/icons8-youtube.svg"} alt="YouTube" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="bg-gray-200 w-full">
        <div className="px-4 sm:px-6 lg:px-8 text-center py-4">
          <p className="text-gray-600">&copy; 2024 BrightPath Corporation. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-4">
            <li><a href="#" className="text-blue-600 hover:underline">Privacy & Security</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Terms of Use</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Accessibility</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
