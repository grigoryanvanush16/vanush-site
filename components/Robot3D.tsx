'use client';

import dynamic from 'next/dynamic';

const Robot3DScene = dynamic(() => import('./Robot3DScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-accent-cyan/20 border-t-accent-cyan rounded-full animate-spin" />
    </div>
  ),
});

export function Robot3D() {
  return (
    <div className="w-full max-w-[500px] aspect-square mx-auto">
      <Robot3DScene />
    </div>
  );
}
