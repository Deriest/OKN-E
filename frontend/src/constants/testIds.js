// Centralised data-testid registry. Use these constants in JSX (data-testid={X.y}).
export const NAV = {
  root: 'nav-root',
  logoLink: 'nav-logo-link',
  link: (slug) => `nav-link-${slug}`,
  partnerBtn: 'nav-partner-btn',
  mobileToggle: 'nav-mobile-toggle',
  mobilePanel: 'nav-mobile-panel',
};

export const HERO = {
  partnerBtn: 'hero-partner-btn',
  proofBtn: 'hero-proof-btn',
  scrollCue: 'hero-scroll-cue',
};

export const HOME = {
  emergentLink: 'home-emergent-link',
  storyLink: 'home-story-link',
  solutionLink: 'home-solution-link',
  proofLink: 'home-proof-link',
  opportunityLink: 'home-opportunity-link',
};

export const CLOSING = {
  partnerBtn: 'closing-partner-btn',
};

export const PARTNER = {
  buyerBtn: 'partner-buyer-btn',
  investorBtn: 'partner-investor-btn',
  governmentBtn: 'partner-government-btn',
  generalBtn: 'partner-general-btn',
  form: 'partner-form',
  formName: 'partner-form-name',
  formEmail: 'partner-form-email',
  formOrg: 'partner-form-org',
  formAudience: 'partner-form-audience',
  formSubject: 'partner-form-subject',
  formMessage: 'partner-form-message',
  formSubmit: 'partner-form-submit',
  formSuccess: 'partner-form-success',
  formError: 'partner-form-error',
};

export const FOOTER = {
  root: 'footer-root',
  partnerBtn: 'footer-partner-btn',
};
