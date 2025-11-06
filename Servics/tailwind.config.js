
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'section-heading-font-family': "Urbanist-SemiBold, sans-serif",
'body-18-font-family': "Urbanist-Regular, sans-serif",
'button-text-18-font-family': "Urbanist-Medium, sans-serif",
'body-16-font-family': "Urbanist-Medium, sans-serif",
'title-24-font-family': "Urbanist-SemiBold, sans-serif",
'text-des-20-font-family': "Urbanist-Regular, sans-serif",
'banner-heading-font-family': "Urbanist-SemiBold, sans-serif",
'semibold-18-font-family': "Urbanist-SemiBold, sans-serif",
          },
          fontSize: {
            'section-heading-font-size': "40px",
'body-18-font-size': "18px",
'button-text-18-font-size': "18px",
'body-16-font-size': "16px",
'title-24-font-size': "24px",
'text-des-20-font-size': "20px",
'banner-heading-font-size': "52px",
'semibold-18-font-size': "18px",
          },
          fontWeight: {
            'section-heading-font-weight': "600",
'body-18-font-weight': "400",
'button-text-18-font-weight': "500",
'body-16-font-weight': "500",
'title-24-font-weight': "600",
'text-des-20-font-weight': "400",
'banner-heading-font-weight': "600",
'semibold-18-font-weight': "600",
          },
          lineHeight: {
            'section-heading-line-height': "56px",
'body-18-line-height': "28px",
'button-text-18-line-height': "normal",
'body-16-line-height': "24px",
'title-24-line-height': "34px",
'text-des-20-line-height': "32px",
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

          