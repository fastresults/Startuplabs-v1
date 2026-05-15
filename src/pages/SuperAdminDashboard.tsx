import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  ShieldCheck, Users, Package, Rocket, TrendingUp,
  BarChart2, Settings, LogOut, FileText, Star
} from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }: {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}) => (
  <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 flex items-center gap-4">
    <div className={`p-3 rounded-lg ${color}`}>
      <Icon size={22} className="text-white" />
    </div>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white text-xl font-bold">{value}</p>
    </div>
  </div>
);

const QuickLink = ({ to, icon: Icon, label, description }: {
  to: string;
  icon: React.ElementType;
  label: string;
  description: string;
}) => (
  <Link
    to={to}
    className="bg-gray-800/60 border border-gray-700 hover:border-indigo-500 rounded-xl p-5 transition-all group"
  >
    <div className="flex items-center gap-3 mb-2">
      <Icon size={18} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
      <span className="text-white font-medium">{label}</span>
    </div>
    <p className="text-gray-400 text-sm">{description}</p>
  </Link>
);

const SuperAdminDashboard: React.FC = () => {
  const { currentUser, isSuperAdmin, signOut } = useAuth();

  if (!currentUser || !isSuperAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#1b2029] text-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <ShieldCheck size={28} className="text-indigo-400" />
            <div>
              <h1 className="text-2xl font-bold text-white">Super Admin Dashboard</h1>
              <p className="text-gray-400 text-sm mt-0.5">Logged in as {currentUser.email}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <LogOut size={15} />
            Sign Out
          </button>
        </div>

        {/* Stats */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={Users} label="Total Users" value="—" color="bg-blue-600" />
            <StatCard icon={Package} label="Packages Sold" value="—" color="bg-purple-600" />
            <StatCard icon={Rocket} label="Startups Launched" value="—" color="bg-green-600" />
            <StatCard icon={TrendingUp} label="Monthly Revenue" value="—" color="bg-orange-600" />
          </div>
        </section>

        {/* Quick Access */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <QuickLink
              to="/turkeystartups"
              icon={Star}
              label="Turnkey Startups"
              description="Manage and review available turnkey startup listings."
            />
            <QuickLink
              to="/packages"
              icon={Package}
              label="Packages"
              description="View and edit service packages and pricing."
            />
            <QuickLink
              to="/startup-advisor"
              icon={BarChart2}
              label="Startup Advisor"
              description="Review AI advisor usage and conversation analytics."
            />
            <QuickLink
              to="/ideation"
              icon={FileText}
              label="Ideation"
              description="Monitor ideation tool activity and submissions."
            />
            <QuickLink
              to="/growth"
              icon={TrendingUp}
              label="Growth Tools"
              description="Track ROI calculator usage and lead captures."
            />
            <QuickLink
              to="/"
              icon={Settings}
              label="Site Settings"
              description="Return to the main site to review public-facing content."
            />
          </div>
        </section>

        {/* Admin Note */}
        <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-xl p-5 text-sm text-indigo-200">
          <p className="font-semibold text-indigo-300 mb-1">Admin Access Active</p>
          <p>
            You are authenticated as the super administrator. Live data integrations (user counts, revenue, analytics)
            can be connected via Firebase or your preferred backend. Update{' '}
            <code className="bg-black/30 px-1.5 py-0.5 rounded text-xs font-mono">VITE_SUPER_ADMIN_EMAIL</code>{' '}
            in your <code className="bg-black/30 px-1.5 py-0.5 rounded text-xs font-mono">.env</code> file to control who has admin access.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SuperAdminDashboard;
