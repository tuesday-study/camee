export const Footer = 'Footer';

export function RenderFooter(newValue) {
  return {
    type: Footer,
    payload: newValue
  };
}
