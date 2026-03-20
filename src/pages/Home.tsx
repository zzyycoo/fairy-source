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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

interface HomeProps {
  onSelectService: (id: string) => void;
}

export default function Home({ onSelectService }: HomeProps) {
  const todayQuote = getTodayQuote();

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col relative overflow-hidden font-sans">
      {/* 动态流动背景 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 主光球 - 缓慢移动 */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: ['-20%', '10%', '-20%'],
            y: ['-10%', '20%', '-10%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* 次光球 */}
        <motion.div 
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: ['10%', '-20%', '10%'],
            y: ['10%', '-10%', '10%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        {/* 装饰性网格 */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,91,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,91,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* 顶部导航 - 玻璃态 */}
      <nav className="w-full px-6 py-4 flex justify-between items-center shrink-0 relative z-10">
        <motion.div 
          className="flex items-center gap-2.5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/25">
            <Sparkles size={16} />
          </div>
          <span className="font-bold text-slate-800 text-lg tracking-tight">Fairy</span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-slate-500 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/60 shadow-sm">2.1.01</span>
        </motion.div>
      </nav>

      {/* 主要内容 */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* 标题区 */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-violet-600 mb-5 border border-violet-200/50 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            <ShieldCheck size={13} className="text-violet-500" />
            <span>Simple email generator</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            A KANG <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">TOOLS</span>
          </h1>
          <motion.p 
            className="text-slate-500 text-sm italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "{todayQuote.text}" <span className="text-xs opacity-50 not-italic ml-1">— {todayQuote.movie}</span>
          </motion.p>
        </motion.div>

        {/* 服务卡片 - 玻璃态 + Staggered 动画 */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((s) => (
            <motion.button
              key={s.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectService(s.id)}
              className="group relative bg-white/60 backdrop-blur-xl px-6 py-5 rounded-2xl border border-white/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-200/60 flex items-center gap-4 min-w-[160px] transition-all duration-300 overflow-hidden"
            >
              {/* 悬停时的背景光效 */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center ${s.bg} ${s.color} group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-indigo-600 group-hover:text-white shrink-0 transition-all duration-300 shadow-sm`}>
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <s.icon size={22} />
                </motion.div>
              </div>
              <div className="relative text-left">
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{s.title}</h3>
                <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors">{s.desc}</p>
              </div>
              <ArrowRight size={16} className="relative ml-auto text-slate-400 group-hover:text-violet-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </motion.button>
          ))}
        </motion.div>

        {/* 快捷操作区 - 玻璃态 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex items-center gap-4 text-xs"
        >
          <span className="flex items-center gap-2 bg-white/50 backdrop-blur px-3 py-1.5 rounded-full border border-white/60 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            System online
          </span>
          <span className="text-slate-300">|</span>
          <button className="text-slate-500 hover:text-violet-600 transition-colors px-2 py-1 rounded-lg hover:bg-white/50">View records</button>
          <span className="text-slate-300">|</span>
          <button className="text-slate-500 hover:text-violet-600 transition-colors px-2 py-1 rounded-lg hover:bg-white/50">Settings</button>
        </motion.div>
      </main>

      {/* 底部 */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full py-5 text-center text-slate-400 text-xs relative z-10"
      >
        <p>© 2026 Fairy Booking System</p>
      </motion.footer>
    </div>
  );
}
