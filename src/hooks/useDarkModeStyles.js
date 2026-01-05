import { useEffect } from 'react';

export const useDarkModeStyles = (darkMode) => {
  useEffect(() => {
    if (!darkMode) return;

    // Add a style tag with high specificity rules
    const styleId = 'dark-mode-demo-overrides';
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
      /* Override demo component inline styles in dark mode */
      .dark main [id^="component-"] {
        background-color: transparent !important;
        box-shadow: none !important;
      }
      
      .dark main [id^="component-"] h2,
      .dark main [id^="component-"] h3 {
        color: hsl(var(--foreground)) !important;
      }
      
      /* Override input inline styles - use CSS variables for dynamic colors */
      main input[style*="background-color: #fff"],
      main input[style*="backgroundColor"],
      main input[style*="border:"]:not([style*="background-color"]),
      main textarea[style*="background-color: #fff"],
      main textarea[style*="backgroundColor"],
      main select[style*="background-color: #fff"],
      main select[style*="backgroundColor"] {
        background-color: hsl(var(--input)) !important;
        color: hsl(var(--foreground)) !important;
        border-color: hsl(var(--border)) !important;
      }
      
      /* Autocomplete and dropdown menus */
      main ul[style*="backgroundColor: '#fff'"],
      main ul[style*="background-color: #fff"],
      main ul[style*="background-color:#fff"],
      main div[style*="backgroundColor: '#fff'"],
      main div[style*="background-color: #fff"],
      main div[style*="background-color:#fff"] {
        background-color: hsl(var(--card)) !important;
        color: hsl(var(--foreground)) !important;
        border-color: hsl(var(--border)) !important;
      }
      
      /* Dropdown list items */
      main li[style*="backgroundColor: '#f0f0f0'"],
      main li[style*="background-color: #f0f0f0"],
      main li[style*="background-color:#f0f0f0"] {
        background-color: hsl(var(--accent)) !important;
        color: hsl(var(--foreground)) !important;
      }
      
      main li[style*="backgroundColor"] {
        color: hsl(var(--foreground)) !important;
      }
      
      main input[style*="background-color: #f5f5f5"],
      main input[style*="backgroundColor: '#f5f5f5'"],
      main textarea[style*="background-color: #f5f5f5"],
      main textarea[style*="backgroundColor: '#f5f5f5'"] {
        background-color: hsl(var(--muted)) !important;
      }
      
      /* Override text colors in inline styles */
      main [style*="color: #333"],
      main [style*="color:#333"],
      main [style*="color: '#333'"],
      main [style*="color: \"#333\""] {
        color: hsl(var(--foreground)) !important;
      }
      
      main [style*="color: #495057"],
      main [style*="color:#495057"],
      main [style*="color: '#495057'"],
      main [style*="color: \"#495057\""] {
        color: hsl(var(--foreground)) !important;
      }
      
      main [style*="color: #6c757d"],
      main [style*="color:#6c757d"],
      main [style*="color: '#6c757d'"],
      main [style*="color: \"#6c757d\""] {
        color: hsl(var(--muted-foreground)) !important;
      }
      
      main [style*="color: #666"],
      main [style*="color:#666"],
      main [style*="color: '#666'"],
      main [style*="color: \"#666\""] {
        color: hsl(var(--muted-foreground)) !important;
      }
      
      /* Card component dark mode */
      main [style*="backgroundColor: '#fff'"],
      main [style*="background-color: #fff"],
      main [style*="background-color:#fff"] {
        background-color: hsl(var(--card)) !important;
        color: hsl(var(--foreground)) !important;
        border-color: hsl(var(--border)) !important;
      }
      
      main [style*="backgroundColor: '#f8f9fa'"],
      main [style*="background-color: #f8f9fa"],
      main [style*="background-color:#f8f9fa"] {
        background-color: hsl(var(--muted)) !important;
        color: hsl(var(--foreground)) !important;
      }
      
      /* Modal component dark mode */
      main [style*="backgroundColor: 'white'"],
      main [style*="background-color: white"],
      main [style*="background-color:white"] {
        background-color: hsl(var(--card)) !important;
        color: hsl(var(--foreground)) !important;
      }
      
      main [style*="backgroundColor: 'white'"] h2,
      main [style*="background-color: white"] h2,
      main [style*="background-color:white"] h2 {
        color: hsl(var(--foreground)) !important;
      }
      
      /* Accordion component dark mode */
      main button[style*="backgroundColor: '#f9f9f9'"],
      main button[style*="background-color: #f9f9f9"],
      main button[style*="background-color:#f9f9f9"] {
        background-color: hsl(var(--muted)) !important;
        color: hsl(var(--foreground)) !important;
        border-color: hsl(var(--border)) !important;
      }
      
      main button[style*="backgroundColor: '#f0f0f0'"],
      main button[style*="background-color: #f0f0f0"],
      main button[style*="background-color:#f0f0f0"] {
        background-color: hsl(var(--accent)) !important;
      }
      
      main .accordion-content,
      main [style*="backgroundColor: '#fff'"]:has(+ .accordion-content) {
        background-color: hsl(var(--card)) !important;
        color: hsl(var(--foreground)) !important;
        border-color: hsl(var(--border)) !important;
      }
      
      /* Override borders */
      main [style*="border: 1px solid #e0e0e0"],
      main [style*="border:1px solid #e0e0e0"],
      main [style*="borderBottom: '1px solid #e0e0e0'"],
      main [style*="borderTop: '1px solid #e0e0e0'"] {
        border-color: hsl(var(--border)) !important;
      }
    `;

    return () => {
      // Don't remove on unmount, keep it for dark mode
    };
  }, [darkMode]);
};
