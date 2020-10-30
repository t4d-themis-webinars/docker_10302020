# Demo Commands

0. Create a `Dockerfile`

```dockerfile
FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
```

1. Build a Docker Image

```bash
cd simple-node-app

docker build -t t4diodemos/simplenodeapp .
```

2. List Docker Images

```bash
docker image ls
```

3. Run the Container

```bash
docker run -d -p 4000:5000 t4diodemos/simplenodeapp
```

4. List Running Containers

```bash
docker ps -a
```

5. Stopping Containers

```bash
docker stop <SOME HASH>

docker ps -a
```

Stop the container, then list the containers again.

6. Removing Containers

```bash
docker rm <SOME HASH>

docker ps -a
```

Remove the container, then list the containers again.

7. Passing environment variables

```bash
docker run -d -p 3050:6000 -e PORT=6000 t4diodemos/simplenodeapp
```

8. Docker Logs

```bash
docker logs <SOME HASH>

docker rm -f <SOME HASH>
```

Review logs then stop the container.

9. Interactive, review file system, notice the Dockerfile

```bash
docker run -i -t t4diodemos/simplenodeapp sh
```

10. Add .dockerignore to the `simple-node-app` folder.

```
Dockerfile
```

11. Rebuild the image, highlight the use of the cache.

```
docker build -t t4diodemos/simplenodeapp .

docker build -t t4diodemos/simplenodeapp .
```

Run build, observe the cache except for the copy command. Run the second time and point out the cache for the copy.

12. Modify the `public/index.html` file. Rebuild the container. Note the caching.

```
docker build -t t4diodemos/simplenodeapp .
```

13. Log into Docker Hub

```
docker login
```

Highlight the connection between Docker desktop and the Docker login from the command line.

14. Push image to Docker Hub

```
docker push t4diodemos/simplenodeapp
```

Go to the web site, and show the pushed image.

15. Docker Hub logout

```bash
docker logout
```

16. Azure Container Registry

Create the container registry in Azure. Then load up the Access Keys.

```bash
docker login <CONTAINER_REGISTRY_URL>
```

Use the admin credentials from Azure Container Registry

17. Tag and push Image

```bash
docker tag t4diodemos/simplenodeapp <CONTAINER_REGISTRY_URL>/simplenodeapp:v1

docker push <CONTAINER_REGISTRY_URL>/simplenodeapp
```

Review container registry in Azure Portal, view the Respositories section.

18. Create App Service using the Azure Container Registry

Create, load web page, while it loads, explore the container settings and log stream.

19. Clean up running containers and images.

```bash
docker ps -a

docker rm -f <CONTAINER HASH>

docker image ls

docker rmi -f <IMAGE HASH>
```
