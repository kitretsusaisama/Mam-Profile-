export const ANALYTICS_CONFIG = {
  GA4_ID: 'G-944BB5BT1J',
  ENABLE_DEBUG: process.env.NODE_ENV === 'development',
  PAGE_VIEW_TRACKING: true,
  USER_TRACKING: true,
  AB_TESTING_SCRIPT: true,
  PERFORMANCE_TRACKING: true,
  CUSTOM_DIMENSIONS: {
    userType: 'user_type',
    sessionId: 'session_id',
    appVersion: 'app_version'
  }
};

export type GAEventParams = {
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
};

export const trackingEvents = {
  PAGE_VIEW: 'page_view',
  USER_LOGIN: 'user_login',
  USER_SIGNUP: 'user_signup',
  BUTTON_CLICK: 'button_click',
  FORM_SUBMIT: 'form_submit',
  ERROR: 'error',
  PERFORMANCE: 'performance'
} as const;
