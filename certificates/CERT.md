# 🔒 Certificats SSL

Il est conseillé d'obtenir un certificat SSL auprès d'une autorité de certification. Voici comment obtenir un certificat gratuit avec [Certbot](https://certbot.eff.org/) :

```bash
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com
```