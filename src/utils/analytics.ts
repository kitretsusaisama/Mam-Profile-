import { ANALYTICS_CONFIG, GAEventParams, trackingEvents } from '@/config/analyticsConfig';

// Fix the any types
interface GtagFunction {
  (command: string, ...args: unknown[]): void; // Change from any[] to unknown[]
}

declare global {
  interface Window {
    gtag: GtagFunction;
    dataLayer: unknown[]; 
  }
}

export class Analytics {
  private static isInitialized = false;

  static init() {
    if (this.isInitialized) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) { // Change from any[] to unknown[]
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', ANALYTICS_CONFIG.GA4_ID, {
      debug_mode: ANALYTICS_CONFIG.ENABLE_DEBUG,
      send_page_view: ANALYTICS_CONFIG.PAGE_VIEW_TRACKING
    });

    this.isInitialized = true;
  }


  static pageView(url: string) {
    if (!window.gtag) return;
    window.gtag('event', 'page_view', {
      page_location: url,
      page_title: document.title
    });
  }

  static event(eventName: string, params: GAEventParams = {}) {
    if (!window.gtag) return;
    window.gtag('event', eventName, {
      ...params,
      timestamp: new Date().toISOString()
    });
  }

  static trackError(error: Error, context?: string) {
    this.event(trackingEvents.ERROR, {
      error_message: error.message,
      error_stack: error.stack,
      error_context: context
    });
  }

  static trackPerformance(metric: string, value: number) {
    this.event(trackingEvents.PERFORMANCE, {
      metric_name: metric,
      metric_value: value
    });
  }

  static setUserProperties(properties: Record<string, unknown>) {
    if (!window.gtag) return;
    window.gtag('set', 'user_properties', properties);
  }
}