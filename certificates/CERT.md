# 🔒 Certificats SSL

Il est conseillé d'obtenir un certificat SSL auprès d'une autorité de certification. Voici comment obtenir un certificat gratuit avec [Certbot](https://certbot.eff.org/) :

```bash
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com
```

Vous pouvez alors ajouter les chemins vers les fichiers `privkey.pem` et `fullchain.pem` dans les clés `key` et `cert` du fichier `config.json`.

> 💡 Pour plus de simplicité, vous pouvez copier ces fichiers dans le dossier `certificates/`.

`privkey.pem` est généralement accessible uniquement par l'utilisateur root. Vous pouvez changer les permissions avec la commande suivante :

```bash
sudo chmod 644 privkey.pem
```
