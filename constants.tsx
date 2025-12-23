import React from 'react';
import { CompanyInfo, ServiceInfo } from './types';

export const SomSymbolLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="som-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ed1c24" />
        <stop offset="50%" stopColor="#f7941d" />
        <stop offset="100%" stopColor="#fff200" />
      </linearGradient>
    </defs>
    {/* 外周リング */}
    <path 
      d="M78,22 C 95,40 95,75 70,90 C 45,105 5,85 5,55 C 5,25 35,5 62,12" 
      stroke="url(#som-logo-grad)" 
      strokeWidth="7" 
      strokeLinecap="round" 
    />
    {/* 中央のS字曲線 */}
    <path 
      d="M55,25 C 40,25 32,45 50,65 C 68,85 62,95 42,95 C 28,95 15,85 12,80" 
      stroke="url(#som-logo-grad)" 
      strokeWidth="9" 
      strokeLinecap="round" 
    />
    {/* 右側の三本目のハネ */}
    <path 
      d="M68,55 C 75,65 75,80 65,90" 
      stroke="url(#som-logo-grad)" 
      strokeWidth="5" 
      strokeLinecap="round" 
    />
    {/* S字の起点のドット */}
    <circle cx="55" cy="25" r="7.5" fill="url(#som-logo-grad)" />
  </svg>
);

export const COMPANY_DATA: CompanyInfo = {
  name: "株式会社SOM",
  representative: "重野 裕介",
  address: "東京都豊島区東池袋1-34-5 6階",
  established: "2016年8月16日",
  businessDetails: [
    "セールス・マーケティング事業",
    "パーソナルジム事業",
    "再生エネルギー設備販売事業（産業用・住宅用・V2H・蓄電池）"
  ]
};

export const SERVICES: ServiceInfo[] = [
  {
    id: "sales",
    title: "セールス・マーケティング事業",
    description: "営業代行の枠を超え、クライアント独自の『売れる仕組み』を構築。営業スキームの構築から実働まで、再現性の高いソリューションを提供します。",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    features: [
      {
        label: "営業スキーム構築（営業代行会社様向け）",
        iconName: "Target",
        description: "属人化した営業を組織の武器へ。成約率を最大化するトークスクリプト、KPI管理、SFA運用フローをゼロから設計し、持続可能な成長を実現します。"
      },
      {
        label: "インサイドセールス代行",
        iconName: "Phone",
        description: "質の高いリード（商談機会）を安定的にお届け。ターゲット選定から架電、ナーチャリングまで一貫して行い、商談の成約率を大幅に向上させます。"
      },
      {
        label: "リテールマーケティング支援",
        iconName: "ShoppingCart",
        description: "現場の課題をデータで解き明かす。店舗の購買動線分析から販促キャンペーンの立案まで、売上に直結するマーケティング活動を強力に支援します。"
      }
    ]
  },
  {
    id: "gym",
    title: "パーソナルジム事業",
    description: "多忙なビジネスエグゼクティブに特化した、高効率なボディマネジメント。最高のビジネスパフォーマンスは、最高の身体から。",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
    features: [
      {
        label: "エグゼクティブ特化プログラム",
        iconName: "Crown",
        description: "会食や出張の多いビジネスマンに合わせた柔軟な食事指導と、短時間で効果を出す科学的トレーニング。"
      },
      {
        label: "バイオメトリクス分析",
        iconName: "FlaskConical",
        description: "体組成計による詳細データと、日々の体調ログを分析。主観を排除し、数値に基づいた確実な肉体改造を約束します。"
      },
      {
        label: "完全プライベート空間",
        iconName: "Lock",
        description: "都会の喧騒を忘れ、自分自身のポテンシャルと向き合うためのラグジュアリーな空間。徹底したプライバシーを確保します。"
      }
    ]
  },
  {
    id: "energy",
    title: "再生エネルギー設備販売事業",
    description: "産業用メガソーラーから、住宅用太陽光・蓄電池・V2Hまで。設計から施工、保守まで一貫して提供します。",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?auto=format&fit=crop&q=80&w=1600",
    features: [
      {
        label: "住宅用太陽光・蓄電池・V2H",
        iconName: "Sun",
        description: "EV車を家庭用電源として活用するV2Hシステムなど、家全体のエネルギーマネジメントを最適化。"
      },
      {
        label: "産業用メガソーラー",
        iconName: "Factory",
        description: "企業の脱炭素経営・ESG投資を強力に支援。遊休地や工場屋根を活用した高効率な発電設備を構築します。"
      },
      {
        label: "次世代スマートインフラ",
        iconName: "Car",
        description: "IoTを活用したエネルギーの可視化。電気を買わない暮らし、環境に優しい次世代のインフラを支えます。"
      }
    ]
  }
];
