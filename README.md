# 📨 SockProxy

**SockProxy** est un proxy léger qui permet de faire transiter des données entre un client WebSocket et un serveur TCP.

## ⚙️ Configuration

Copiez le fichier `default.config.json` en `config.json` et modifiez les valeurs selon vos besoins.

```json
{
    "tcp": {
        "host": "localhost",
        "port": 8080
    },

    "ssl": {
        "key": null,
        "cert": null
    }
}
```
> 💡 Les clés `key` et `cert` sont optionnelles et permettent de configurer un serveur WebSocket sécurisé (plus d'information [ici](certificates/CERT.md))

- `wsPort` : port du serveur WebSocket
- `tcpHost` : adresse du serveur TCP
- `tcpPort` : port du serveur TCP

## 🚀 Lancement

Pour installer les dépendances et lancer le serveur, utilisez les commandes suivantes :

```bash
npm install
npm start
```

### 🐋 Avec Docker

Construisez l'image avec la commande :

```bash
docker build -t sockproxy .
```

Puis, lancez le conteneur avec :

```bash
docker run -d -p 80:80 sockproxy # seulement le serveur HTTP
docker run -d -p 443:443 sockproxy # seulement le serveur HTTPS
docker run -d -p 80:80 -p 443:443 sockproxy # les deux serveurs
```

> 💡 Il est inutile d'installer les dépendances
