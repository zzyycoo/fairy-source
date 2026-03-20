import { motion } from 'framer-motion';
import { Bed, Car, Bus, Flag, ArrowRight, ShieldCheck } from 'lucide-react';

const services = [
  { id: 'room', title: 'Room', icon: Bed, color: 'text-stripe-purple', bg: 'bg-stripe-purple/10', desc: 'Hotel booking' },
  { id: 'car', title: 'Car', icon: Car, color: 'text-blue-500', bg: 'bg-blue-500/10', desc: 'Rental service' },
  { id: 'golf', title: 'Golf', icon: Flag, color: 'text-green-600', bg: 'bg-green-600/10', desc: 'Course access' },
  { id: 'bus', title: 'Bus', icon: Bus, color: 'text-orange-500', bg: 'bg-orange-500/10', desc: 'Group transfer' },
];

interface HomeProps {
  onSelectService: (id: string) => void;
}

export default function Home({ onSelectService }: HomeProps) {
  return (
    <div className="h-screen bg-stripe-bg flex flex-col relative overflow-hidden font-sans">
      {/* 背景装饰 - 缩小 */}
      <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-stripe-purple/8 rounded-full blur-3xl opacity-50" />
      
      {/* 顶部导航 - 紧凑 */}
      <nav className="w-full px-6 py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-stripe-purple rounded-lg flex items-center justify-center text-white font-bold text-sm">F</div>
          <span className="font-bold text-stripe-text text-lg">Fairy</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-stripe-gray bg-white px-2.5 py-1 rounded-full border border-stripe-lightGray">v2.1</span>
        </div>
      </nav>

      {/* 主要内容 - 垂直居中紧凑布局 */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 -mt-4">
        {/* 标题区 - 紧凑 */}
        <motion.div 
          initial={{ opacity: 0, y: -8 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8"
        >
          <motion.div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full text-xs font-medium text-stripe-purple mb-4 border border-stripe-purple/20">
            <ShieldCheck size={12} />
            <span>Professional booking tool</span>
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-stripe-text mb-2 tracking-tight">
            Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-stripe-purple to-stripe-blue">Booking Hub</span>
          </h1>
          <p className="text-stripe-gray text-sm">
            Vietnam premium travel services — simple & fast
          </p>
        </motion.div>

        {/* 服务卡片 - 单行紧凑网格 */}
        <div className="flex flex-wrap justify-center gap-3 w-full max-w-4xl">
          {services.map((s) => (
            <motion.button
              key={s.id}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectService(s.id)}
              className="group bg-white px-5 py-4 rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex items-center gap-3 min-w-[140px] transition-all"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.bg} ${s.color} group-hover:bg-stripe-purple group-hover:text-white shrink-0 transition-colors`}>
                <s.icon size={20} />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-stripe-text">{s.title}</h3>
                <p className="text-xs text-stripe-gray">{s.desc}</p>
              </div>
              <ArrowRight size={14} className="ml-auto text-stripe-purple opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>

        {/* 快捷操作区 */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center gap-4 text-xs text-stripe-gray"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            System online
          </span>
          <span className="text-gray-300">|</span>
          <button className="hover:text-stripe-purple transition-colors">View records</button>
          <span className="text-gray-300">|</span>
          <button className="hover:text-stripe-purple transition-colors">Settings</button>
        </motion.div>
      </main>

      {/* 底部 - 极简 */}
      <footer className="w-full py-4 text-center text-stripe-gray text-xs shrink-0">
        <p>© 2026 Fairy Booking System</p>
      </footer>
    </div>
  );
}
