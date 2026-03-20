import { motion } from 'framer-motion';
import { Bed, Car, Bus, Flag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const services = [
  { id: 'room', title: 'Room', icon: Bed, color: 'text-violet-500', bg: 'bg-violet-500/10', desc: 'Hotel booking' },
  { id: 'car', title: 'Car', icon: Car, color: 'text-sky-500', bg: 'bg-sky-500/10', desc: 'Rental service' },
  { id: 'golf', title: 'Golf', icon: Flag, color: 'text-emerald-500', bg: 'bg-emerald-500/10', desc: 'Course access' },
  { id: 'bus', title: 'Bus', icon: Bus, color: 'text-amber-500', bg: 'bg-amber-500/10', desc: 'Group transfer' },
];

const movieQuotes = [
  { text: "May the Force be with you.", movie: "Star Wars" },
  { text: "I'll be back.", movie: "The Terminator" },
  { text: "There's no place like home.", movie: "The Wizard of Oz" },
  { text: "Life is like a box of chocolates.", movie: "Forrest Gump" },
  { text: "To infinity and beyond!", movie: "Toy Story" },
  { text: "Keep your friends close, but your enemies closer.", movie: "The Godfather" },
  { text: "You can't handle the truth!", movie: "A Few Good Men" },
  { text: "Here's looking at you, kid.", movie: "Casablanca" },
  { text: "Show me the money!", movie: "Jerry Maguire" },
  { text: "Why so serious?", movie: "The Dark Knight" },
  { text: "I'm the king of the world!", movie: "Titanic" },
  { text: "Hasta la vista, baby.", movie: "Terminator 2" },
  { text: "You talking to me?", movie: "Taxi Driver" },
  { text: "E.T. phone home.", movie: "E.T." },
  { text: "I see dead people.", movie: "The Sixth Sense" },
  { text: "Just keep swimming.", movie: "Finding Nemo" },
  { text: "Houston, we have a problem.", movie: "Apollo 13" },
  { text: "Yippee-ki-yay!", movie: "Die Hard" },
  { text: "Say hello to my little friend!", movie: "Scarface" },
  { text: "I am your father.", movie: "Star Wars" },
  { text: "Bond. James Bond.", movie: "Dr. No" },
  { text: "There's no crying in baseball!", movie: "A League of Their Own" },
  { text: "You're gonna need a bigger boat.", movie: "Jaws" },
  { text: "I love the smell of napalm in the morning.", movie: "Apocalypse Now" },
  { text: "Go ahead, make my day.", movie: "Sudden Impact" },
  { text: "Toto, I've a feeling we're not in Kansas anymore.", movie: "The Wizard of Oz" },
  { text: "I am Groot.", movie: "Guardians of the Galaxy" },
  { text: "My precious.", movie: "The Lord of the Rings" },
  { text: "I feel the need—the need for speed.", movie: "Top Gun" },
  { text: "Carpe diem. Seize the day.", movie: "Dead Poets Society" },
  { text: "Magic Mirror on the wall...", movie: "Snow White" },
];

const getTodayQuote = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  return movieQuotes[dayOfYear % movieQuotes.length];
};

// 检测是否为移动设备
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
};

interface HomeProps {
  onSelectService: (id: string) => void;
}

export default function Home({ onSelectService }: HomeProps) {
  const todayQuote = getTodayQuote();
  const mobile = typeof window !== 'undefined' ? isMobile() : false;

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col relative overflow-hidden font-sans">
      {/* 静态背景 - 移动端优化 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 桌面端：动态光球 / 移动端：静态渐变 */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 md:opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
            filter: mobile ? 'blur(100px)' : 'blur(80px)',
            top: '-10%',
            left: '-5%',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 md:opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
            filter: mobile ? 'blur(100px)' : 'blur(60px)',
            bottom: '-5%',
            right: '-5%',
          }}
        />
        {/* 移动端隐藏网格纹理 */}
        <div 
          className="hidden md:block absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,91,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,91,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* 顶部导航 */}
      <nav className="w-full px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
            <Sparkles size={14} className="md:w-4 md:h-4" />
          </div>
          <span className="font-bold text-slate-800 text-base md:text-lg">Fairy</span>
        </div>
        <span className="text-xs font-semibold text-slate-500 bg-white/80 px-2.5 py-1 rounded-full border border-slate-200/60 shadow-sm">2.1.02</span>
      </nav>

      {/* 主要内容 */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 relative z-10 -mt-4 md:-mt-0">
        {/* 标题区 */}
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-full text-xs font-medium text-violet-600 mb-3 md:mb-5 border border-violet-200/50 shadow-sm">
            <ShieldCheck size={12} />
            <span>Simple email generator</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight">
            A KANG <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">TOOLS</span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm italic px-2">
            "{todayQuote.text}" <span className="opacity-50 not-italic ml-1">— {todayQuote.movie}</span>
          </p>
        </div>

        {/* 服务卡片 - 移动端：2列网格 / 桌面端：横向排列 */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2.5 md:gap-4 w-full max-w-4xl px-2">
          {services.map((s, index) => (
            <motion.button
              key={s.id}
              initial={mobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={mobile ? {} : { delay: index * 0.08, duration: 0.4 }}
              whileHover={mobile ? {} : { scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectService(s.id)}
              className="group bg-white/80 md:bg-white/60 backdrop-blur-sm md:backdrop-blur-xl p-3 md:px-6 md:py-5 rounded-xl md:rounded-2xl border border-white/80 md:border-white/60 shadow-md md:shadow-lg shadow-slate-200/40 hover:shadow-lg md:hover:shadow-xl flex items-center gap-2.5 md:gap-4 md:min-w-[160px] transition-all active:scale-95"
            >
              <div className={`w-9 h-9 md:w-11 md:h-11 rounded-lg flex items-center justify-center ${s.bg} ${s.color} group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-indigo-600 group-hover:text-white shrink-0 transition-colors shadow-sm`}>
                <s.icon size={18} className="md:w-[22px] md:h-[22px]" />
              </div>
              <div className="text-left min-w-0">
                <h3 className="text-xs md:text-sm font-bold text-slate-800 truncate">{s.title}</h3>
                <p className="text-[10px] md:text-xs text-slate-500 hidden md:block">{s.desc}</p>
              </div>
              <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-violet-500 hidden md:block opacity-0 group-hover:opacity-100 transition-all" />
            </motion.button>
          ))}
        </div>

        {/* 快捷操作区 */}
        <div className="mt-6 md:mt-10 flex items-center gap-3 md:gap-4 text-xs">
          <span className="flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-full border border-white/60 text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="hidden md:inline">System online</span>
            <span className="md:hidden">Online</span>
          </span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <button className="text-slate-500 hover:text-violet-600 transition-colors px-2 py-1 rounded-lg hover:bg-white/50 hidden md:block">View records</button>
          <span className="text-slate-300 hidden md:inline">|</span>
          <button className="text-slate-500 hover:text-violet-600 transition-colors px-2 py-1 rounded-lg hover:bg-white/50 hidden md:block">Settings</button>
        </div>
      </main>

      {/* 底部 */}
      <footer className="w-full py-3 md:py-5 text-center text-slate-400 text-xs relative z-10">
        <p>© 2026 Fairy Booking</p>
      </footer>
    </div>
  );
}
