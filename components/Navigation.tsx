import React, { useEffect, useState } from 'react';
import { Phone, Plane, Info, Calendar, MapPin } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('contact');

  const navItems = [
    { id: 'contact', label: 'Liên hệ', icon: Phone },
    { id: 'flights', label: 'Chuyến bay', icon: Plane },
    { id: 'notes', label: 'Lưu ý', icon: Info },
    { id: 'itinerary', label: 'Lịch trình', icon: Calendar },
    { id: 'locations', label: 'Địa điểm', icon: MapPin },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -50% 0px" } 
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0B1120]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-5px_15px_rgba(0,0,0,0.3)] z-50 pb-safe">
      <div className="flex justify-around items-center h-[72px] px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`flex flex-col items-center justify-center transition-all duration-300 rounded-xl px-2 py-1 ${
                isActive 
                  ? 'bg-gradient-to-br from-dubai-gold via-dubai-gold_light to-dubai-gold -translate-y-3 shadow-[0_4px_12px_rgba(212,175,55,0.4)] scale-110' 
                  : 'bg-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon 
                className={`w-5 h-5 mb-1 ${isActive ? 'text-black fill-black/10' : ''}`} 
                strokeWidth={isActive ? 2.5 : 2} 
              />
              <span className={`text-[9px] uppercase tracking-wide ${isActive ? 'text-black font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};