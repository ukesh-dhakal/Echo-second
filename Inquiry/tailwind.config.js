
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
'section-heading-font-family': "Urbanist-SemiBold, sans-serif",
'body-18-font-family': "Urbanist-Regular, sans-serif",
'button-text-18-font-family': "Urbanist-Medium, sans-serif",
'text-des-20-font-family': "Urbanist-Regular, sans-serif",
'body-16-font-family': "Urbanist-Medium, sans-serif",
          },
          fontSize: {
            'banner-heading-font-size': "52px",
'banner-subtext-font-size': "20px",
'section-heading-font-size': "40px",
'body-18-font-size': "18px",
'button-text-18-font-size': "18px",
'text-des-20-font-size': "20px",
'body-16-font-size': "16px",
          },
          fontWeight: {
            'banner-heading-font-weight': "600",
'banner-subtext-font-weight': "400",
'section-heading-font-weight': "600",
'body-18-font-weight': "400",
'button-text-18-font-weight': "500",
'text-des-20-font-weight': "400",
'body-16-font-weight': "500",
          },
          lineHeight: {
            'banner-heading-line-height': "56px",
'banner-subtext-line-height': "32px",
'section-heading-line-height': "56px",
'body-18-line-height': "28px",
'button-text-18-line-height': "normal",
'text-des-20-line-height': "32px",
'body-16-line-height': "24px", 
          },
          letterSpacing: {
             
          },
          borderRadius: {
              
          },
          colors: {
            
            'primary-bg': '#111013',
'button-fill': '#565960',
'secondary': '#a6abb4',
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

          