import React from 'react';
import { Navigation } from './components/Navigation';
import { CONTACT, FLIGHTS, MEETING_INFO, ITINERARY_DATA, LOCATIONS, APP_NAME } from './constants';
import { 
  Phone, Plane, CalendarCheck, CloudSun, DollarSign, Search, MapPin, 
  AlertTriangle, Clock, Luggage, Shirt, Globe, ExternalLink, Sun, ChevronRight
} from 'lucide-react';

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
    <div className="bg-gradient-to-br from-dubai-gold to-yellow-600 p-2.5 rounded-xl text-black shadow-lg shadow-yellow-900/20">
      <Icon className="w-5 h-5" strokeWidth={2.5} />
    </div>
    <div>
      <h2 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h2>
      {subtitle && <p className="text-xs text-dubai-gold font-medium">{subtitle}</p>}
    </div>
  </div>
);

const GoldButton = ({ href, icon: Icon, label, subLabel }: { href: string, icon: any, label: string, subLabel?: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="relative overflow-hidden group bg-slate-800 hover:bg-slate-700 border border-dubai-gold/30 rounded-xl p-3 flex items-center justify-between transition-all duration-300 active:scale-95"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-dubai-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="flex items-center gap-3 z-10">
      <div className="bg-slate-900 p-2 rounded-lg text-dubai-gold border border-dubai-gold/20">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-sm font-bold text-white">{label}</div>
        {subLabel && <div className="text-[10px] text-slate-400">{subLabel}</div>}
      </div>
    </div>
    <div className="bg-dubai-gold/20 p-1.5 rounded-full text-dubai-gold">
      <Search className="w-4 h-4" />
    </div>
  </a>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-24 bg-dubai-bg text-dubai-text">
      {/* --- HERO SECTION / CONTACT (Block 1) --- */}
      <section id="contact" className="relative h-[380px] rounded-b-[3rem] overflow-hidden shadow-2xl shadow-black/50">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1200&auto=format&fit=crop" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-dubai-bg"></div>
        </div>

        <div className="relative z-10 p-6 pt-12 flex flex-col h-full justify-between pb-10">
          <div className="text-center mt-4">
            <span className="inline-block py-1 px-3 rounded-full bg-black/40 backdrop-blur-md border border-dubai-gold/50 text-dubai-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-lg">
              Sổ tay du lịch 2025
            </span>
            <h1 className="text-2xl font-bold leading-snug text-white drop-shadow-md mb-2">
              HÀNH TRÌNH KẾT NỐI<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dubai-gold via-dubai-gold_light to-dubai-gold text-3xl">
                UAE - THỐNG NHẤT
              </span>
            </h1>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
             <div className="flex items-center justify-between mb-3">
                <div>
                   <p className="text-[10px] text-slate-400 uppercase tracking-wide">Đại diện BTC</p>
                   <h3 className="text-lg font-bold text-white">{CONTACT.name}</h3>
                   <p className="text-xs text-dubai-gold italic">{CONTACT.role}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                   <Phone className="w-5 h-5 text-white" />
                </div>
             </div>
            
            <a 
              href={CONTACT.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#0068FF] hover:bg-[#0054cc] text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-900/30"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" className="w-6 h-6 bg-white rounded-full p-0.5" alt="Zalo" />
              <span>Liên hệ Zalo</span>
            </a>
          </div>
        </div>
      </section>

      <div className="px-4 -mt-8 relative z-20 space-y-6">
        
        {/* --- FLIGHT INFO (Block 2) --- */}
        <section id="flights" className="bg-dubai-card rounded-2xl p-5 border border-white/5 shadow-lg scroll-mt-28">
          <SectionHeader icon={Plane} title="Thông tin chuyến bay" subtitle="Emirates Airlines (5 Sao)" />
          
          {/* Meeting Point */}
          <div className="bg-slate-900/50 rounded-xl p-4 mb-5 border-l-2 border-dubai-gold">
            <h3 className="text-sm font-bold text-dubai-gold mb-3 flex items-center gap-2 uppercase tracking-wide">
              <MapPin className="w-4 h-4" /> Điểm tập trung (01/12)
            </h3>
            <div className="space-y-3 relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-slate-700"></div>
              
              <div className="relative pl-5">
                 <div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-slate-700 rounded-full border-2 border-dubai-card"></div>
                 <div className="text-xs text-slate-400 mb-0.5">Tại nhà máy - <span className="text-white font-bold">19h30</span></div>
                 <div className="text-sm text-slate-200">{MEETING_INFO.location1}</div>
              </div>

              <div className="relative pl-5">
                 <div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-dubai-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                 <div className="text-xs text-slate-400 mb-0.5">Tại sân bay - <span className="text-white font-bold">21h00</span></div>
                 <div className="text-sm text-slate-200">{MEETING_INFO.location2}</div>
              </div>
            </div>
          </div>

          {/* Flights */}
          <div className="space-y-4 mb-4">
            {[FLIGHTS.outbound, FLIGHTS.inbound].map((flight, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-3 border border-white/5">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${idx === 0 ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-500/30' : 'bg-blue-900/30 text-blue-400 border border-blue-500/30'}`}>
                    {idx === 0 ? 'Chiều đi' : 'Chiều về'}
                  </span>
                  <span className="font-mono font-bold text-lg text-white tracking-widest">{flight.code}</span>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                   <div className="text-center">
                      <div className="text-2xl font-bold text-white">{flight.time.split(' - ')[0]}</div>
                      <div className="text-[10px] text-slate-400 uppercase">{idx === 0 ? 'HAN' : 'DXB'}</div>
                   </div>
                   <div className="flex-1 px-4 flex flex-col items-center">
                      <div className="text-[10px] text-slate-500 mb-1">{flight.date}</div>
                      <div className="w-full h-[1px] bg-slate-600 relative">
                         <Plane className="w-3 h-3 text-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-slate-800" />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">Direct</div>
                   </div>
                   <div className="text-center">
                      <div className="text-2xl font-bold text-white">{flight.time.split(' - ')[1]}</div>
                      <div className="text-[10px] text-slate-400 uppercase">{idx === 0 ? 'DXB' : 'HAN'}</div>
                   </div>
                </div>

                <a href={flight.checkUrl} target="_blank" rel="noreferrer" className="mt-3 block text-center py-2 w-full bg-slate-700/50 hover:bg-slate-700 rounded-lg text-xs font-bold text-dubai-gold transition-colors border border-white/5 uppercase tracking-wide">
                  Kiểm tra chuyến bay Google
                </a>
              </div>
            ))}
          </div>

          <div className="flex gap-3 items-center text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-dashed border-slate-700">
             <Luggage className="w-5 h-5 text-dubai-gold" />
             <span><b className="text-white">30kg</b> ký gửi + <b className="text-white">7kg</b> xách tay</span>
          </div>
        </section>

        {/* --- NOTES (Block 3) --- */}
        <section id="notes" className="bg-dubai-card rounded-2xl p-5 border border-white/5 shadow-lg scroll-mt-28">
          <SectionHeader icon={AlertTriangle} title="Lưu ý cần thiết" subtitle="Thông tin điểm đến" />
          
          <div className="grid grid-cols-1 gap-3 mb-6">
             <GoldButton 
                href="https://www.google.com/search?q=thoi+tiet+dubai" 
                icon={CloudSun} 
                label="Kiểm tra thời tiết" 
                subLabel="Dự báo thời tiết Dubai 7 ngày tới" 
             />
             <GoldButton 
                href="https://www.google.com/search?q=1+USD+bang+bao+nhieu+AED" 
                icon={DollarSign} 
                label="Tỷ giá hối đoái" 
                subLabel="Quy đổi USD - AED (Dirham)" 
             />
          </div>

          <div className="space-y-4">
             <div className="flex gap-4 items-start p-3 rounded-xl bg-slate-800/30">
                <Shirt className="w-6 h-6 text-dubai-gold shrink-0" />
                <div>
                   <h4 className="font-bold text-sm text-white mb-1">Trang phục</h4>
                   <p className="text-xs text-slate-400 leading-relaxed">
                     Thoáng mát, dễ chịu. <b>Lưu ý bắt buộc:</b> Vào thánh đường nữ phải trùm kín đầu, không mặc váy ngắn, áo sát nách. Nam mặc quần dài.
                   </p>
                </div>
             </div>
             <div className="flex gap-4 items-start p-3 rounded-xl bg-slate-800/30">
                <Globe className="w-6 h-6 text-dubai-gold shrink-0" />
                <div>
                   <h4 className="font-bold text-sm text-white mb-1">Văn hóa & Tiền tệ</h4>
                   <p className="text-xs text-slate-400 leading-relaxed">
                     Không uống rượu bia nơi công cộng. Đổi tiền USD tại VN rồi qua sân bay Dubai đổi sang AED. Giờ Dubai chậm hơn VN 3 tiếng.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* --- ITINERARY (Block 4) --- */}
        <section id="itinerary" className="bg-dubai-card rounded-2xl p-5 border border-white/5 shadow-lg scroll-mt-28">
           <SectionHeader icon={CalendarCheck} title="Lịch trình chi tiết" subtitle="Theo dõi hành trình" />
           
           <div className="relative border-l border-slate-700 ml-4 space-y-10 pl-8 py-2">
              {ITINERARY_DATA.map((day, index) => (
                <div key={index} className="relative group">
                   {/* Dot - Centered on line */}
                   <div className="absolute -left-[38px] top-0 w-3 h-3 rounded-full bg-dubai-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] z-10 group-hover:scale-125 transition-transform border border-slate-900"></div>
                   
                   <div className="mb-4">
                      <span className="inline-block text-[10px] font-bold text-black bg-dubai-gold px-2 py-0.5 rounded mb-1">NGÀY {day.day}</span>
                      <div className="text-xs text-slate-400 font-mono mb-1">{day.date}</div>
                      <h3 className="text-lg font-bold text-white leading-tight">{day.title}</h3>
                   </div>

                   <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                      {day.activities.map((act, actIdx) => (
                        <div key={actIdx} className="mb-4 last:mb-0 relative pl-4">
                           {/* Time line small */}
                           <div className="absolute left-0 top-1.5 w-1 h-1 bg-slate-600 rounded-full"></div>
                           
                           <div className="flex items-baseline gap-2 mb-1">
                              <span className="text-dubai-gold font-bold text-xs whitespace-nowrap min-w-[40px]">{act.time}</span>
                              <span className="text-white font-semibold text-sm">{act.title}</span>
                           </div>
                           
                           {/* Bullet List for Description */}
                           {act.description.includes('\n') ? (
                              <ul className="list-disc list-outside ml-4 mt-1 space-y-1">
                                {act.description.split('\n').map((line, lIdx) => (
                                  <li key={lIdx} className="text-xs text-slate-400 leading-relaxed pl-1 marker:text-slate-600">
                                    {line}
                                  </li>
                                ))}
                              </ul>
                           ) : (
                              <p className="text-xs text-slate-400 leading-relaxed mt-1">{act.description}</p>
                           )}
                        </div>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* --- LOCATIONS (Block 5) --- */}
        <section id="locations" className="space-y-6 scroll-mt-28 pb-10">
           <div className="flex items-center gap-3 px-2">
              <div className="bg-dubai-gold p-2 rounded-lg text-black">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white uppercase">Địa điểm tham quan</h2>
           </div>

           <div className="grid gap-6">
              {LOCATIONS.map((loc, idx) => (
                <div key={idx} className="bg-dubai-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group">
                   <div className="h-40 relative overflow-hidden">
                      <img 
                        src={loc.image} 
                        alt={loc.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dubai-card to-transparent"></div>
                      <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white drop-shadow-md">{loc.name}</h3>
                   </div>
                   
                   <div className="p-4 pt-2">
                      <p className="text-sm text-slate-300 leading-relaxed mb-3">{loc.description}</p>
                      <div className="flex gap-2 items-start bg-amber-900/20 p-3 rounded-lg border border-amber-500/20">
                         <Sun className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                         <p className="text-xs text-amber-200/80 italic">{loc.note}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <div className="text-center pb-8 pt-4 text-slate-600 text-[10px] uppercase tracking-widest">
          <p>© 2025 TechVision Travel App</p>
        </div>

      </div>

      <Navigation />
    </div>
  );
};

export default App;