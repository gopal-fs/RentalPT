import { Link, useLocation } from 'react-router-dom';
import { Clock, Sparkles, Heart, GitCompare, Bell } from 'lucide-react';

const tabs = [
  { name: 'Recent Listings', path: '/dashboard', icon: Clock },
  { name: 'Recommended', path: '/recommended', icon: Sparkles },
  { name: 'Saved Properties', path: '/saved', icon: Heart },
  { name: 'Compare', path: '/compare', icon: GitCompare },
  { name: 'Notifications', path: '/notifications', icon: Bell },
];

export default function SecondaryNav() {
  const location = useLocation();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = location.pathname === tab.path;

            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{tab.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
