import { cn } from '@/lib/utils/helper';
import { Lightbulb, RotateCcw, Timer } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className={cn(
        'flex items-center justify-between bg-bg-primary',
        'px-8 py-4 h-16 md:px-6 xl:px-12'
      )}
    >
      {/* Reset Button */}
      <button
        className={cn(
          'text-sm bg-bg-secondary rounded-lg',
          'h-8 w-8 flex justify-center items-center'
        )}
      >
        <RotateCcw className='w-4' />
      </button>

      <div className='flex items-center justify-center gap-5'>
        <button
          className={cn(
            'p-2 h-8 text-sm flex gap-1 items-center px-3',
            'text-sm bg-bg-secondary rounded-lg'
          )}
        >
          <Lightbulb className='w-4' />
          Hint
        </button>

        {/* Timer */}
        <div className='flex gap-2 text-accent-secondary items-center'>
          <Timer />
          <div>4:16:42</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
