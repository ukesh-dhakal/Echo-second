
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'semibold-18-font-family': "Urbanist-SemiBold, sans-serif",
'button-text-18-font-family': "Urbanist-Medium, sans-serif",
'body-16-font-family': "Urbanist-Medium, sans-serif",
'title-24-font-family': "Urbanist-SemiBold, sans-serif",
'text-des-20-font-family': "Urbanist-Regular, sans-serif",
'title-20-font-family': "Urbanist-SemiBold, sans-serif",
'section-heading-font-family': "Urbanist-SemiBold, sans-serif",
'text-32-font-family': "Urbanist-SemiBold, sans-serif",
'body-18-font-family': "Urbanist-Regular, sans-serif",
'body-14-font-family': "Urbanist-Regular, sans-serif",
          },
          fontSize: {
            'semibold-18-font-size': "18px",
'button-text-18-font-size': "18px",
'body-16-font-size': "16px",
'title-24-font-size': "24px",
'text-des-20-font-size': "20px",
'title-20-font-size': "20px",
'section-heading-font-size': "40px",
'text-32-font-size': "32px",
'body-18-font-size': "18px",
'body-14-font-size': "14px",
          },
          fontWeight: {
            'semibold-18-font-weight': "600",
'button-text-18-font-weight': "500",
'body-16-font-weight': "500",
'title-24-font-weight': "600",
'text-des-20-font-weight': "400",
'title-20-font-weight': "600",
'section-heading-font-weight': "600",
'text-32-font-weight': "600",
'body-18-font-weight': "400",
'body-14-font-weight': "400",
          },
          lineHeight: {
            'semibold-18-line-height': "normal",
'button-text-18-line-height': "normal",
'body-16-line-height': "24px",
'title-24-line-height': "34px",
'text-des-20-line-height': "32px",
'title-20-line-height': "28px",
'section-heading-line-height': "56px",
'text-32-line-height': "normal",
'body-18-line-height': "28px",
'body-14-line-height': "20px", 
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

          