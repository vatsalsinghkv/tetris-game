import { cn } from '@/lib/utils/helper';
import { LandPlot } from 'lucide-react';

const Header = () => {
  return (
    <header
      className={cn(
        'flex items-center justify-between bg-bg-primary',
        'px-8 py-4 h-16 md:px-6 xl:px-12'
      )}
    >
      {/* Logo */}
      <h1 className='uppercase font-mono text-lg'>Tetris</h1>

      <div className='capitalize text-text-secondary'>
        next word: <span className='text-accent-primary'>AND</span>
      </div>

      <div className='text-accent-primary flex items-center gap-2 justify-center'>
        <LandPlot />
        Score: 0
      </div>
    </header>
  );
};

export default Header;
