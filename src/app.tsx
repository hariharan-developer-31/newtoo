import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'
import { SiteLayout } from './components/site-layout'
const Home = lazy(() => import('./pages/home'))
const Booking = lazy(() => import('./pages/booking'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const Admin = lazy(() => import('./pages/admin'))
const Legal = lazy(() => import('./pages/legal'))
const Listing = lazy(() => import('./pages/listing'))
const Loading = () => <div className="grid min-h-screen place-items-center"><LoaderCircle className="animate-spin text-gold" /></div>
export function App() { return <Suspense fallback={<Loading />}><Routes><Route element={<SiteLayout />}><Route index element={<Home />} /><Route path="/experiences" element={<Listing title="Experiences" />} /><Route path="/packages" element={<Listing title="Packages" />} /><Route path="/gallery" element={<Listing title="Gallery" />} /><Route path="/about" element={<Listing title="Our story" />} /><Route path="/contact" element={<Listing title="Let's create a moment" />} /><Route path="/faq" element={<Listing title="Questions, beautifully answered" />} /><Route path="/privacy" element={<Legal title="Privacy policy" />} /><Route path="/refunds" element={<Legal title="Refund policy" />} /><Route path="/terms" element={<Legal title="Terms & conditions" />} /></Route><Route path="/book" element={<Booking />} /><Route path="/account/*" element={<Dashboard />} /><Route path="/admin/*" element={<Admin />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></Suspense> }
