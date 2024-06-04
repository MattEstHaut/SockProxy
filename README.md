# 📨 SockProxy

**SockProxy** est un proxy léger qui permet de faire transiter des données entre un client WebSocket et un serveur TCP.

## ⚙️ Configuration

Copiez le fichier `default.config.json` en `config.json` et modifiez les valeurs selon vos besoins.

```json
{
    "wsPort": <port du serveur WebSocket>,
    "tcpHost": <adresse du serveur TCP>,
    "tcpPort": <port du serveur TCP>
}
```

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

Puis, lancez le conteneur avec la commande :

```bash
docker run -d -p 80:80 sockproxy
```

> 💡 Il est inutile d'installer les dépendances
