const mediaQueryPx = {
  mobile: '767px',
  tablet: '1199px',
  desktop: '1200px',
  landscape: '(orientation: landscape)',
  portrait: '(orientation: portrait)',
};

const mediaQuery = {
  mobile: `all and (max-width: ${mediaQueryPx.mobile})`,
  tablet: `all and (max-width: ${mediaQueryPx.tablet})`,
  desktop: `all and (min-width: ${mediaQueryPx.desktop})`,
  landscape: `all and ${mediaQueryPx.landscape}`,
  portrait: `all and ${mediaQueryPx.portrait}`,
};

export default mediaQuery;
