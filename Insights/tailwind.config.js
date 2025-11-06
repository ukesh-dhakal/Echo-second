
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
'body-16-font-family': "Urbanist-Medium, sans-serif",
'title-24-font-family': "Urbanist-SemiBold, sans-serif",
'section-heading-font-family': "Urbanist-SemiBold, sans-serif",
'body-18-font-family': "Urbanist-Regular, sans-serif",
'button-text-18-font-family': "Urbanist-Medium, sans-serif",
          },
          fontSize: {
            'banner-heading-font-size': "52px",
'banner-subtext-font-size': "20px",
'body-16-font-size': "16px",
'title-24-font-size': "24px",
'section-heading-font-size': "40px",
'body-18-font-size': "18px",
'button-text-18-font-size': "18px",
          },
          fontWeight: {
            'banner-heading-font-weight': "600",
'banner-subtext-font-weight': "400",
'body-16-font-weight': "500",
'title-24-font-weight': "600",
'section-heading-font-weight': "600",
'body-18-font-weight': "400",
'button-text-18-font-weight': "500",
          },
          lineHeight: {
            'banner-heading-line-height': "56px",
'banner-subtext-line-height': "32px",
'body-16-line-height': "24px",
'title-24-line-height': "34px",
'section-heading-line-height': "56px",
'body-18-line-height': "28px",
'button-text-18-line-height': "normal", 
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

          