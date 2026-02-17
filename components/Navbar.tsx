
import React from 'react';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="flex gap-4 md:gap-8">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] text-black/60 hover:text-black transition-all duration-300 relative group py-2"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
