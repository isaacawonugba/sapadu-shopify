# Sapadu Test
Sapadu Shopify Test

# SETUP
Download ThemeKit and put it in the "C:\Program Files" on your windows machine. Add the same to Path in the Environment Variables.

# SHOPIFY 
1. Get a Shopify Developer's account
2. Setup API credentials by creating a private app in your Shopify admin.
3. From the API Credentials, copy and keep your Password. 
4. Navigate to Online store and Click on theme, you will see your store URL and Theme ID in the address bar(you store is the url ending with .com while your theme Id is the numbers ending the url)
5. Create config.yml file in the root directory of the theme and put the following information:
  
  password: copied_API_credential_password
  theme_id: "Theme ID"
  store: YOUR_STORE_URL

6. Your theme is now fully setup for local development.
7. You can then use the theme command on the CLI e.g theme deploy, theme download

# UPLOAD

1. Login to your shopify admin
2. click on Online Store
3. Click on Themes
4. Click on Upload theme
5. Browse and Select your theme (zipped)
6. Click on Upload File
7. Then Activate your theme

You are now ready to test your theme - only you have to now create a product and preview it

# Pendings
There are still some things to fix though
I was going to add a metafields plugin on shopify admin to enable me extend the fields of the product to accomodate all other fileds not catered for by Shopify. 

I would have also look for and install a plugin to manage the reviews and then create a section to display that.
 

