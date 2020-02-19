$env:Path += ";C:\Program Files\nodejs\"
npm run build:ssr
pause
winscp.exe renehavis /keepuptodate "C:\Users\Janna\Desktop\renehavis\dist" /var/www/html/dist /defaults 
pause 
plink -ssh root@91.210.168.136 -pw o5EBnhNC "sudo service nginx restart"