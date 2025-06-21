'use client';

import { useEffect } from 'react';
import { Analytics } from '@/utils/analytics';

interface PageViewTrackerProps {
  path: string;
}

export default function PageViewTracker({ path }: PageViewTrackerProps) {
  useEffect(() => {
    // Track page view on the client side
    Analytics.pageView(path);
  }, [path]);

  return null; // This component doesn't render anything
}