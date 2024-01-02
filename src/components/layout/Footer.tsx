import { Lightbulb, RotateCcw, Timer } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '../ui';

const Footer = () => {
  return (
    <footer
      className={cn(
        'flex items-center justify-between bg-bg-primary',
        'px-8 py-4 h-16 md:px-6 xl:px-12'
      )}
    >
      {/* Reset Button */}
      <Button variant='default' size='icon'>
        <RotateCcw className='w-4' />
      </Button>

      <div className='flex items-center justify-center gap-5'>
        <Button size='sm' className={cn('flex gap-1 items-center')}>
          <Lightbulb className='w-4' />
          Hint
        </Button>

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
