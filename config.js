const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6312043858";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_06_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg1LFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk1LFxuICAgICAgICA5MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgxLFxuICAgICAgICA2OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRVlWYlQ0czFoMjJUZnBCRFRnd3VpMEhaanBNSkpESTNJY0YrendJRC9YOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNjMxMjA0Mzg1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTBFRkYzNDkwODU4QjRBM0U3QzFGNzExQ0JDNTY3RDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3OTg4NzcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTYzMTIwNDM4NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk1N0NEQkQ0RTVBNzI0NzMxMzVGOTM0N0RERjdFMzcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzk4ODc3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJob3ZTWGhDX1E2U1JxSWVwb0lPTDdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVjNzY1N2Q3LTY2MDYtNDIzNy1hMWFiLTU4MjliMjNlOTI1M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAxNTIsXG4gICAgICAzNixcbiAgICAgIDE0MSxcbiAgICAgIDEyNixcbiAgICAgIDE2NCxcbiAgICAgIDE4NSxcbiAgICAgIDI1NCxcbiAgICAgIDE3NyxcbiAgICAgIDExNCxcbiAgICAgIDQ1LFxuICAgICAgMTgzLFxuICAgICAgMTQ3LFxuICAgICAgODEsXG4gICAgICAxMDgsXG4gICAgICA4MixcbiAgICAgIDY5LFxuICAgICAgMjI5LFxuICAgICAgNDgsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMTc5LFxuICAgICAgMjUzLFxuICAgICAgMTk4LFxuICAgICAgMTQ4LFxuICAgICAgNTYsXG4gICAgICAxMDcsXG4gICAgICAxNjgsXG4gICAgICAyNDUsXG4gICAgICAxODEsXG4gICAgICAxMjgsXG4gICAgICA3MixcbiAgICAgIDc2LFxuICAgICAgOTMsXG4gICAgICAyMzgsXG4gICAgICA5NyxcbiAgICAgIDIyMSxcbiAgICAgIDczLFxuICAgICAgMjM0LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlEyQVNQMk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE2MzEyMDQzODU4OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTMzOTM5ODg3Njc5MDc6MThAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pXOGxOc0dFSnZibWJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2UyZ1AwQlp2WVlrenBPRkZna0d4aHZ4UVViYWNsaTRuVEZWZXp4RlpTbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0b2dKTnFlRmVyOUxrb1BSOS96bDBwQldQVWV4VVJsc1V6Q0wyeUJMcTZxQWRwS0dkZU45cmVTRTJrRGRLemluVlVleG80d3VRei9ycmtIaDQrWW1EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZelJqajdzK3FKQkkzWUtua21XeGVNM0pHOTA2SXhxRHFWT3pRWjJUNmNFbzJqcUpaQnMyQXFoUjBlcHl0bTNRSWI0bmlncHBxSnJnUnRIYmxVUjBpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNjMxMjA0Mzg1ODoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3OTg4NzY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkJNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCQk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwTnQva1N4UUp2dkFnMjk4R3pDMUY5UmV4R1BWT1U3dGpqakJkRE43eFJZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MDE3ODg5NDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
