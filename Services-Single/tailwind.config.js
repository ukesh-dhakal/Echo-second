
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'banner-heading-font-family': "Urbanist-SemiBold, sans-serif",
'banner-subtext-font-family': "Urbanist-Regular, sans-serif",
'text-32-font-family': "Urbanist-SemiBold, sans-serif",
'body-18-font-family': "Urbanist-Regular, sans-serif",
'button-text-18-font-family': "Urbanist-Medium, sans-serif",
'section-heading-font-family': "Urbanist-SemiBold, sans-serif",
'body-16-font-family': "Urbanist-Medium, sans-serif",
'semibold-18-font-family': "Urbanist-SemiBold, sans-serif",
          },
          fontSize: {
            'banner-heading-font-size': "52px",
'banner-subtext-font-size': "20px",
'text-32-font-size': "32px",
'body-18-font-size': "18px",
'button-text-18-font-size': "18px",
'section-heading-font-size': "40px",
'body-16-font-size': "16px",
'semibold-18-font-size': "18px",
          },
          fontWeight: {
            'banner-heading-font-weight': "600",
'banner-subtext-font-weight': "400",
'text-32-font-weight': "600",
'body-18-font-weight': "400",
'button-text-18-font-weight': "500",
'section-heading-font-weight': "600",
'body-16-font-weight': "500",
'semibold-18-font-weight': "600",
          },
          lineHeight: {
            'banner-heading-line-height': "56px",
'banner-subtext-line-height': "32px",
'text-32-line-height': "normal",
'body-18-line-height': "28px",
'button-text-18-line-height': "normal",
'section-heading-line-height': "56px",
'body-16-line-height': "24px",
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

          