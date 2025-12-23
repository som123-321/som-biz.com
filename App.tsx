import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowRight, Phone, Mail, MapPin, ChevronRight,
  Target, ShoppingCart, Crown, FlaskConical, Lock, Sun, Car, Factory,
  History, Award, HeartHandshake, ChevronDown, Building2, CheckCircle2,
  ShieldCheck, Zap, Users
} from 'lucide-react';
import { COMPANY_DATA, SERVICES, SomSymbolLogo } from './constants';

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, any> = {
    Target, Phone, ShoppingCart, Crown, FlaskConical, Lock, Sun, Car, Factory,
    History, Award, HeartHandshake
  };
  const IconComponent = icons[name] || Target;
  return <IconComponent className={className} />;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'ホーム', path: '/' },
    { name: '事業内容', path: '/services' },
    { name: '会社概要', path: '/about' },
    { name: 'お問い合わせ', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          <Link to="/" className="flex items-center group space-x-3">
            <SomSymbolLogo className="h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-slate-900 group-hover:text-orange-500 transition-colors">
                株式会社SOM
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">
                Sales & Life Innovation
              </span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors relative py-1 ${
                  location.pathname === link.path ? 'text-orange-600' : 'text-slate-600 hover:text-orange-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-900 transition-all shadow-md">
              お問い合わせ
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute top-full left-0 w-full shadow-2xl">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-base font-bold rounded-xl ${location.pathname === link.path ? 'bg-orange-50 text-orange-600' : 'text-slate-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <SomSymbolLogo className="h-10 w-10 brightness-0 invert" />
              <span className="text-2xl font-bold tracking-tight text-white !text-white" style={{ color: '#ffffff' }}>
                株式会社SOM
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              「人」と「社会」を最適化する。セールス、フィットネス、再生エネルギー。3つの柱で未来を切り拓きます。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-white !text-white" style={{ color: '#ffffff' }}>SERVICES</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services" className="hover:text-orange-400 font-bold">セールス・マーケティング</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 font-bold">パーソナルジム事業</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 font-bold">再生エネルギー事業</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-white !text-white" style={{ color: '#ffffff' }}>COMPANY</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                <span className="text-white !text-white font-bold" style={{ color: '#ffffff' }}>{COMPANY_DATA.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-orange-500 shrink-0" />
                <span className="text-white !text-white font-bold" style={{ color: '#ffffff' }}>代表：{COMPANY_DATA.representative}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-white !text-white" style={{ color: '#ffffff' }}>CONTACT</h3>
            <div className="space-y-4">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Mail Address</p>
              <p className="text-sm font-bold underline underline-offset-4 decoration-orange-500 text-white !text-white" style={{ color: '#ffffff' }}>info@som-biz.com</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          <p className="text-white !text-white" style={{ color: '#ffffff' }}>© {new Date().getFullYear()} 株式会社SOM All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => (
  <div className="animate-in fade-in duration-1000">
    <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-40 hero-mesh overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <div className="max-w-4xl mx-auto sm:mx-0">
          <div className="inline-flex items-center space-x-2 bg-orange-100/50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black mb-8 border border-orange-200">
             <span className="uppercase tracking-[0.1em]">Innovation for 2025</span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.05] mb-8">
            可能性を、<br />
            <span className="gradient-text">仕組みにする。</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium mx-auto sm:mx-0">
            セールス、フィットネス、再生エネルギー。<br className="hidden sm:block" />すべて「より良い明日」へと繋がっています。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
            <Link to="/services" className="inline-flex items-center justify-center bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl text-lg group">
              事業内容を見る <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-orange-600 tracking-[0.3em] uppercase mb-4">OUR STRENGTHS</h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900">SOMが選ばれる理由</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "確かな専門性", desc: "各分野のスペシャリストが、データと経験に基づいた確実な成果をお約束します。" },
            { icon: Zap, title: "圧倒的な実行スピード", desc: "戦略立案から実働まで一貫してサポート。変化の激しい市場に即座に対応します。" },
            { icon: Users, title: "人に寄り添うパートナーシップ", desc: "アットホームな熱量を持ちながら、プロフェッショナルとして伴走し続けます。" },
          ].map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <s.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="bg-orange-500 p-16 sm:p-24 rounded-[4rem] shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight">
            あなたのビジネスの可能性を、<br />共に見つけ出しましょう。
          </h2>
          <Link to="/contact" className="inline-flex items-center justify-center bg-white text-orange-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-900 hover:text-white transition-all shadow-xl group">
            無料相談を申し込む <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="bg-slate-50 py-32 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <h1 className="text-sm font-black text-orange-600 tracking-[0.5em] uppercase mb-6">ABOUT SOM</h1>
        <p className="text-5xl sm:text-7xl font-bold text-slate-900 leading-tight">会社概要・代表紹介</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48 items-center">
        <div className="lg:col-span-5">
           <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4 border border-slate-100">
              <img src="https://images.unsplash.com/photo-1519085185971-7ad0bb2fd27d?auto=format&fit=crop&q=80&w=1000" alt="CEO" className="rounded-[2.5rem] w-full aspect-[3/4] object-cover" />
              <div className="mt-8 px-6 pb-6 text-center lg:text-left">
                <p className="text-xs font-black text-orange-500 tracking-widest uppercase mb-1">Representative Director</p>
                <h3 className="text-4xl font-bold text-slate-900">{COMPANY_DATA.representative}</h3>
              </div>
           </div>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-snug">「人」の可能性を最大化し、<br />社会の最適解を導き出す。</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              2016年の設立当初から変わらない想いがあります。セールスでクライアントの可能性を広げ、ジムで個人の活力を最大化し、再生エネルギーで社会の持続可能性を支える。これらはすべて一つの「明日への仕組み」として繋がっています。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-3xl">
              <p className="text-2xl font-bold text-orange-500 mb-1 tracking-tighter">Established</p>
              <p className="text-slate-900 font-bold">2016.08.16</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl">
              <p className="text-2xl font-bold text-orange-500 mb-1 tracking-tighter">Location</p>
              <p className="text-slate-900 font-bold">Tokyo, Ikebukuro</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
        {[
          { label: "会社名", value: COMPANY_DATA.name },
          { label: "代表取締役", value: COMPANY_DATA.representative },
          { label: "所在地", value: COMPANY_DATA.address },
          { label: "設立", value: COMPANY_DATA.established },
          { label: "事業内容", value: (
            <ul className="space-y-4 py-2">
              {COMPANY_DATA.businessDetails.map(d => (
                <li key={d} className="flex items-start font-bold text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 mt-1 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          )},
        ].map((row, idx) => (
          <div key={idx} className="flex flex-col md:flex-row py-12 px-10 border-b border-slate-50 last:border-0">
            <div className="md:w-1/3 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 md:mb-0">{row.label}</div>
            <div className="md:w-2/3 text-xl sm:text-2xl text-slate-900 font-bold leading-tight">{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ServicesPage = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  return (
    <div className="pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-sm font-black text-orange-600 tracking-[0.5em] uppercase mb-6">WHAT WE DO</h1>
        <p className="text-5xl sm:text-7xl font-bold text-slate-900 mb-10 leading-tight">事業内容</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40 space-y-48">
        {SERVICES.map((service, idx) => (
          <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-1/2 rounded-[3.5rem] overflow-hidden shadow-2xl group">
              <img src={service.imageUrl} alt={service.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <span className="text-orange-500 font-black text-xs uppercase tracking-widest">Service 0{idx + 1}</span>
                <h2 className="text-4xl sm:text-6xl font-bold text-slate-900 leading-tight">{service.title}</h2>
              </div>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">{service.description}</p>
              <div className="space-y-4">
                {service.features.map(f => (
                  <div key={f.label} className="border border-slate-100 rounded-[2rem] bg-slate-50 overflow-hidden transition-all">
                    <button 
                      onClick={() => setExpandedFeature(expandedFeature === f.label ? null : f.label)} 
                      className={`w-full flex items-center justify-between p-6 transition-colors ${expandedFeature === f.label ? 'bg-orange-50' : 'hover:bg-slate-100'}`}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-5 transition-all ${expandedFeature === f.label ? 'bg-orange-500 text-white shadow-lg' : 'bg-white text-slate-400'}`}>
                          <DynamicIcon name={f.iconName} className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-bold text-slate-700 text-left">{f.label}</span>
                      </div>
                      <ChevronDown className={`w-6 h-6 text-slate-300 transition-transform duration-500 ${expandedFeature === f.label ? 'rotate-180 text-orange-500' : ''}`} />
                    </button>
                    {expandedFeature === f.label && (
                      <div className="p-8 pt-0 bg-white text-slate-600 font-bold leading-relaxed animate-in slide-in-from-top-2 duration-300">
                        {f.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (
    <div className="pt-32 pb-40 text-center px-4 animate-in zoom-in duration-500">
      <div className="bg-orange-100 text-orange-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-12 shadow-inner"><CheckCircle2 className="w-16 h-16" /></div>
      <h1 className="text-4xl font-bold mb-8">送信完了いたしました</h1>
      <p className="text-slate-500 mb-12 font-medium">お問い合わせありがとうございます。担当者より追ってご連絡いたします。</p>
      <Link to="/" className="inline-block bg-slate-900 text-white px-14 py-6 rounded-full font-bold shadow-lg hover:bg-slate-800 transition-all">トップへ戻る</Link>
    </div>
  );
  return (
    <div className="pt-32 pb-40 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto bg-white p-10 sm:p-20 rounded-[4rem] border border-slate-100 shadow-2xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">お問い合わせ</h1>
          <p className="text-slate-500 font-medium">各種サービスに関するご相談やご質問を承っております。</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
            <input type="text" required placeholder="お名前" className="w-full px-8 py-6 bg-slate-50 rounded-3xl outline-none border border-transparent focus:border-orange-500 focus:bg-white transition-all font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
            <input type="email" required placeholder="メールアドレス" className="w-full px-8 py-6 bg-slate-50 rounded-3xl outline-none border border-transparent focus:border-orange-500 focus:bg-white transition-all font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Message</label>
            <textarea rows={6} required placeholder="ご相談内容をご記入ください" className="w-full px-8 py-6 bg-slate-50 rounded-3xl outline-none border border-transparent focus:border-orange-500 focus:bg-white transition-all font-bold resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white py-7 rounded-3xl font-bold text-2xl hover:bg-slate-900 transition-all shadow-xl shadow-orange-500/20 active:scale-95">送信する</button>
        </form>
      </div>
    </div>
  );
};

const App = () => (
  <HashRouter>
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
}
