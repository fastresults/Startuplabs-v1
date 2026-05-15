import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';

// Eagerly loaded components
import CompleteAgencyLayout from './components/CompleteAgencyLayout';

// Lazy loaded pages
const StartupAdvisor = lazy(() => import('./pages/StartupAdvisor'));
const Ideation = lazy(() => import('./pages/Ideation'));
const Planning = lazy(() => import('./pages/Planning'));
const Funding = lazy(() => import('./pages/Funding'));
const Development = lazy(() => import('./pages/Development'));
const Launch = lazy(() => import('./pages/Launch'));
const Growth = lazy(() => import('./pages/Growth'));
const Packages = lazy(() => import('./pages/Packages'));
const Slingshots = lazy(() => import('./pages/Slingshots'));
const TurnkeyStartups = lazy(() => import('./pages/TurnkeyStartups'));

// Lazy loaded turnkey startup pages
const DigitalMarketingAgency = lazy(() => import('./pages/DigitalMarketingAgency'));
const BoutiqueFitnessStudio = lazy(() => import('./pages/BoutiqueFitnessStudio'));
const ContentWritingAgency = lazy(() => import('./pages/ContentWritingAgency'));
const PetWasteRemoval = lazy(() => import('./pages/PetWasteRemoval'));
const B2BLeadGenAgency = lazy(() => import('./pages/B2BLeadGenAgency'));
const SustainableHome = lazy(() => import('./pages/SustainableHome'));
const SpecializedFoodDelivery = lazy(() => import('./pages/SpecializedFoodDelivery'));
const MobilePetServices = lazy(() => import('./pages/MobilePetServices'));
const TelemedicineSupportServices = lazy(() => import('./pages/TelemedicineSupportServices'));
const SeniorTransitionServices = lazy(() => import('./pages/SeniorTransitionServices'));
const HyperLocalFoodProduction = lazy(() => import('./pages/HyperLocalFoodProduction'));
const NicheSubscriptionBox = lazy(() => import('./pages/NicheSubscriptionBox'));
const PersonalizedNutritionServices = lazy(() => import('./pages/PersonalizedNutritionServices'));
const HomeTechIntegrationServices = lazy(() => import('./pages/HomeTechIntegrationServices'));
const UrbanCompostingService = lazy(() => import('./pages/UrbanCompostingService'));
const SpecializedCoworkingSpaces = lazy(() => import('./pages/SpecializedCoworkingSpaces'));
const DigitalEstatePlanningServices = lazy(() => import('./pages/DigitalEstatePlanningServices'));
const PersonalizedLearningPods = lazy(() => import('./pages/PersonalizedLearningPods'));
const WellnessRealEstateConsultancy = lazy(() => import('./pages/WellnessRealEstateConsultancy'));
const MobilePrivacyDigitalDetox = lazy(() => import('./pages/MobilePrivacyDigitalDetox'));
const LocalExperienceCuration = lazy(() => import('./pages/LocalExperienceCuration'));
const AiContentCreationServices = lazy(() => import('./pages/AiContentCreationServices'));
const NicheOnlineCourses = lazy(() => import('./pages/NicheOnlineCourses'));
const AiIntegrationConsulting = lazy(() => import('./pages/AiIntegrationConsulting'));
const DigitalProductCreation = lazy(() => import('./pages/DigitalProductCreation'));
const PrintOnDemandBusiness = lazy(() => import('./pages/PrintOnDemandBusiness'));
const AiEnhancedVirtualAssistant = lazy(() => import('./pages/AiEnhancedVirtualAssistant'));
const AutomatedSocialMediaManagement = lazy(() => import('./pages/AutomatedSocialMediaManagement'));
const EcommerceDropshipping = lazy(() => import('./pages/EcommerceDropshipping'));
const PodcastProductionMonetization = lazy(() => import('./pages/PodcastProductionMonetization'));
const AiEcommerceOptimization = lazy(() => import('./pages/AiEcommerceOptimization'));
const OnlineResumeCareerCoaching = lazy(() => import('./pages/OnlineResumeCareerCoaching'));
const SuperAdminDashboard = lazy(() => import('./pages/SuperAdminDashboard'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#1b2029]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Error fallback
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#1b2029] p-4">
    <div className="bg-red-900/20 rounded-lg p-6 border border-red-900/50 text-center max-w-md">
      <h3 className="text-xl font-bold text-white mb-2">Something went wrong</h3>
      <p className="text-red-200 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<CompleteAgencyLayout />} />
            <Route path="/startup-advisor" element={<StartupAdvisor />} />
            <Route path="/ideation" element={<Ideation />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/development" element={<Development />} />
            <Route path="/launch" element={<Launch />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/slingshots" element={<Slingshots />} />
            <Route path="/turkeystartups" element={<TurnkeyStartups />} />
            <Route path="/turkeystartups/digital-marketing-agency" element={<DigitalMarketingAgency />} />
            <Route path="/turkeystartups/boutique-fitness" element={<BoutiqueFitnessStudio />} />
            <Route path="/turkeystartups/content-writing-agency" element={<ContentWritingAgency />} />
            <Route path="/turkeystartups/pet-waste-removal" element={<PetWasteRemoval />} />
            <Route path="/turkeystartups/b2b-lead-gen" element={<B2BLeadGenAgency />} />
            <Route path="/turkeystartups/sustainable-home" element={<SustainableHome />} />
            <Route path="/turkeystartups/specialized-food-delivery" element={<SpecializedFoodDelivery />} />
            <Route path="/turkeystartups/mobile-pet-services" element={<MobilePetServices />} />
            <Route path="/turkeystartups/telemedicine-support" element={<TelemedicineSupportServices />} />
            <Route path="/turkeystartups/senior-transition-services" element={<SeniorTransitionServices />} />
            <Route path="/turkeystartups/hyper-local-food-production" element={<HyperLocalFoodProduction />} />
            <Route path="/turkeystartups/niche-subscription-box" element={<NicheSubscriptionBox />} />
            <Route path="/turkeystartups/personalized-nutrition-services" element={<PersonalizedNutritionServices />} />
            <Route path="/turkeystartups/home-tech-integration" element={<HomeTechIntegrationServices />} />
            <Route path="/turkeystartups/urban-composting-service" element={<UrbanCompostingService />} />
            <Route path="/turkeystartups/specialized-coworking-spaces" element={<SpecializedCoworkingSpaces />} />
            <Route path="/turkeystartups/digital-estate-planning" element={<DigitalEstatePlanningServices />} />
            <Route path="/turkeystartups/personalized-learning-pods" element={<PersonalizedLearningPods />} />
            <Route path="/turkeystartups/wellness-real-estate" element={<WellnessRealEstateConsultancy />} />
            <Route path="/turkeystartups/mobile-privacy-digital-detox" element={<MobilePrivacyDigitalDetox />} />
            <Route path="/turkeystartups/local-experience-curation" element={<LocalExperienceCuration />} />
            <Route path="/turkeystartups/ai-content-creation" element={<AiContentCreationServices />} />
            <Route path="/turkeystartups/niche-online-courses" element={<NicheOnlineCourses />} />
            <Route path="/turkeystartups/ai-integration-consulting" element={<AiIntegrationConsulting />} />
            <Route path="/turkeystartups/digital-product-creation" element={<DigitalProductCreation />} />
            <Route path="/turkeystartups/print-on-demand-business" element={<PrintOnDemandBusiness />} />
            <Route path="/turkeystartups/ai-enhanced-virtual-assistant" element={<AiEnhancedVirtualAssistant />} />
            <Route path="/turkeystartups/automated-social-media-management" element={<AutomatedSocialMediaManagement />} />
            <Route path="/turkeystartups/ecommerce-dropshipping" element={<EcommerceDropshipping />} />
            <Route path="/turkeystartups/podcast-production-monetization" element={<PodcastProductionMonetization />} />
            <Route path="/turkeystartups/ai-ecommerce-optimization" element={<AiEcommerceOptimization />} />
            <Route path="/turkeystartups/online-resume-career-coaching" element={<OnlineResumeCareerCoaching />} />
            <Route path="/admin" element={<SuperAdminDashboard />} />
          </Routes>
        </Suspense>
      </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;