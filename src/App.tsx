/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-bg-gray text-text-dark flex flex-col font-sans">
      <header className="bg-msu-blue text-white px-10 h-20 flex items-center justify-between border-b-4 border-msu-orange shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-msu-orange flex items-center justify-center font-black text-xl rounded">
            M
          </div>
          <div>
            <h1 className="text-[18px] tracking-[1px] uppercase font-bold">SRIE Research Lab</h1>
            <p className="text-xs opacity-80">Morgan State University • Secure Research & Innovation Environment</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-success-green rounded-full"></div>
          <span>MSU Student Database Connected</span>
        </div>
      </header>

      <main className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 overflow-hidden">
        {/* Verification Terminal Panel */}
        <section className="bg-card-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
          <div className="p-5 border-b border-border-color font-bold uppercase text-[13px] tracking-[0.05em] text-msu-blue">
            Verification Terminal
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
            <div className="w-[240px] h-[320px] bg-[#F8FAFC] border-2 border-dashed border-border-color rounded-2xl mb-6 flex flex-col items-center justify-center text-text-muted">
              <div className="w-[140px] h-[180px] bg-[#E2E8F0] rounded-lg mb-4"></div>
              <p>Scan Student ID Card</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Marcus Johnson</h2>
              <p className="text-text-muted text-sm">Graduate Research Assistant</p>
              <p className="text-text-muted text-sm">ID: 00249851 • Dept: Cyber Security</p>
            </div>
            <button className="mt-8 bg-msu-blue text-white border-none px-10 py-[14px] rounded-lg font-semibold cursor-pointer hover:bg-msu-blue/90 transition-colors">
              Confirm Check-In
            </button>
          </div>
        </section>

        {/* Live Lab Activity Panel */}
        <section className="bg-card-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
          <div className="p-5 border-b border-border-color font-bold uppercase text-[13px] tracking-[0.05em] text-msu-blue">
            Live Lab Activity
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-[60px_1fr_120px_100px] px-5 py-4 border-b border-border-color items-center hover:bg-[#FAFAFA]">
              <span className="font-bold text-xs text-msu-blue">09:42</span>
              <span className="font-medium text-sm">Marcus Johnson</span>
              <span className="text-[13px] text-text-muted">#00249851</span>
              <span className="text-[11px] px-2 py-1 rounded text-center font-semibold uppercase bg-[#DCFCE7] text-[#166534]">Entry</span>
            </div>
            <div className="grid grid-cols-[60px_1fr_120px_100px] px-5 py-4 border-b border-border-color items-center bg-[#FAFAFA]">
              <span className="font-bold text-xs text-msu-blue">09:15</span>
              <span className="font-medium text-sm">Sarah Chen</span>
              <span className="text-[13px] text-text-muted">#00245512</span>
              <span className="text-[11px] px-2 py-1 rounded text-center font-semibold uppercase bg-[#DCFCE7] text-[#166534]">Entry</span>
            </div>
            <div className="grid grid-cols-[60px_1fr_120px_100px] px-5 py-4 border-b border-border-color items-center hover:bg-[#FAFAFA]">
              <span className="font-bold text-xs text-msu-blue">08:58</span>
              <span className="font-medium text-sm">Avery Williams</span>
              <span className="text-[13px] text-text-muted">#00231904</span>
              <span className="text-[11px] px-2 py-1 rounded text-center font-semibold uppercase bg-[#FEE2E2] text-[#991B1B]">Exit</span>
            </div>
            <div className="grid grid-cols-[60px_1fr_120px_100px] px-5 py-4 border-b border-border-color items-center bg-[#FAFAFA]">
              <span className="font-bold text-xs text-msu-blue">08:30</span>
              <span className="font-medium text-sm">Jordan Smith</span>
              <span className="text-[13px] text-text-muted">#00248819</span>
              <span className="text-[11px] px-2 py-1 rounded text-center font-semibold uppercase bg-[#DCFCE7] text-[#166534]">Entry</span>
            </div>
            <div className="grid grid-cols-[60px_1fr_120px_100px] px-5 py-4 border-b border-border-color items-center hover:bg-[#FAFAFA]">
              <span className="font-bold text-xs text-msu-blue">08:12</span>
              <span className="font-medium text-sm">Elena Rodriguez</span>
              <span className="text-[13px] text-text-muted">#00250102</span>
              <span className="text-[11px] px-2 py-1 rounded text-center font-semibold uppercase bg-[#DCFCE7] text-[#166534]">Entry</span>
            </div>
            <div className="grid grid-cols-[60px_1fr_120px_100px] px-5 py-4 border-b border-border-color items-center bg-[#FAFAFA]">
              <span className="font-bold text-xs text-msu-blue">07:45</span>
              <span className="font-medium text-sm">Kevin Patel</span>
              <span className="text-[13px] text-text-muted">#00246673</span>
              <span className="text-[11px] px-2 py-1 rounded text-center font-semibold uppercase bg-[#FEE2E2] text-[#991B1B]">Exit</span>
            </div>
            <div className="grid grid-cols-[60px_1fr_120px_100px] px-5 py-4 border-b border-border-color items-center hover:bg-[#FAFAFA]">
              <span className="font-bold text-xs text-msu-blue">07:30</span>
              <span className="font-medium text-sm">Dr. Isaac V.</span>
              <span className="text-[13px] text-text-muted">#FAC-0922</span>
              <span className="text-[11px] px-2 py-1 rounded text-center font-semibold uppercase bg-[#DCFCE7] text-[#166534]">Entry</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 p-5 bg-msu-blue text-white">
            <div className="text-center">
              <span className="block text-2xl font-bold">14</span>
              <span className="text-[10px] uppercase opacity-70 tracking-[1px]">In Lab Now</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold">86%</span>
              <span className="text-[10px] uppercase opacity-70 tracking-[1px]">Capacity</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold">4.2h</span>
              <span className="text-[10px] uppercase opacity-70 tracking-[1px]">Avg Stay</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="h-10 px-10 flex items-center justify-center text-[11px] text-text-muted bg-white border-t border-border-color shrink-0">
        &copy; 2023 Morgan State University - Division of Research & Economic Development. SRIE Access Management System v2.4
      </footer>
    </div>
  );
}
