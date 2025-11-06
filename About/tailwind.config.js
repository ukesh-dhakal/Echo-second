
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'body-18-font-family': "Urbanist-Regular, sans-serif",
'text-32-font-family': "Urbanist-SemiBold, sans-serif",
'section-heading-font-family': "Urbanist-SemiBold, sans-serif",
'button-text-18-font-family': "Urbanist-Medium, sans-serif",
'body-16-font-family': "Urbanist-Medium, sans-serif",
'banner-heading-font-family': "Urbanist-SemiBold, sans-serif",
'semibold-18-font-family': "Urbanist-SemiBold, sans-serif",
          },
          fontSize: {
            'body-18-font-size': "18px",
'text-32-font-size': "32px",
'section-heading-font-size': "40px",
'button-text-18-font-size': "18px",
'body-16-font-size': "16px",
'banner-heading-font-size': "52px",
'semibold-18-font-size': "18px",
          },
          fontWeight: {
            'body-18-font-weight': "400",
'text-32-font-weight': "600",
'section-heading-font-weight': "600",
'button-text-18-font-weight': "500",
'body-16-font-weight': "500",
'banner-heading-font-weight': "600",
'semibold-18-font-weight': "600",
          },
          lineHeight: {
            'body-18-line-height': "28px",
'text-32-line-height': "normal",
'section-heading-line-height': "56px",
'button-text-18-line-height': "normal",
'body-16-line-height': "24px",
'banner-heading-line-height': "56px",
'semibold-18-line-height': "normal", 
          },
          letterSpacing: {
             
          },
          borderRadius: {
              
          },
          colors: {
            
            'primary-bg': '#111013',
'secondary': '#a6abb4',
'button-fill': '#565960',
'bg-2': '#1c1b1e',
          },
          spacing: {
              
          },
          width: {
             
          },
          minWidth: {
             
          },
          maxWidth: {
             
          },
          height: {
             
          },
          minHeight: {
             
          },
          maxHeight: {
             
          }
        }
      }
    }

          