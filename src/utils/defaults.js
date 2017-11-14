
export const themeStyles = {
  // wrapper: null,
  verticalDivider: { borderLeft: '1px solid #dadada' },
  // header: null,
  // headerTitle: null,
  // headerArrows: null,
  // headerVerticalDivider: null,
  // headerHorizontalDivider: null,
  // weekdays: null,
  // weekdaysVerticalDivider: null,
  // weekdaysHorizontalDivider: null,
  // weeks: null,
  // weeksVerticalDivider: null,
  // dayCell: null,
  // dayCellNotInMonth: null,
  // dayContent: null,
  // dayContentHover: null,
  // dots: null,
  // bars: null,
};
export const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export const titlePosition = 'center';
export const titleTransition = 'slide-h';
export const weeksTransition = 'slide-h';
export const maxSwipeTimeMs = 300;
export const minHorizontalSwipeDistance = 60;
export const maxVerticalSwipeDistance = 80;
export const maxTapTolerance = 0;
export const maxTapDuration = 200; // ms
export const getHighlight = uh => ({
  animated: uh.animated || true,
  height: uh.height || '1.8rem',
  backgroundColor: uh.backgroundColor || '#65999a',
  borderColor: uh.borderColor,
  borderWidth: uh.borderWidth || '0',
  borderStyle: uh.borderStyle || 'solid',
  borderRadius: uh.borderRadius || uh.height || '1.8rem',
});
export const dot = {
  diameter: '5px',
  backgroundColor: '#65999a',
  borderWidth: '0',
  borderStyle: 'solid',
  borderRadius: '50%',
};
export const bar = {
  height: '3px',
  backgroundColor: '#65999a',
  borderWidth: '0',
  borderStyle: 'solid',
};
