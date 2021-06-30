# myWebApp
side project web app for using docker

(WIP) Add build instructions:

```sh
docker build -t aspnetapp .
docker run -d -p 8080:80 --name myapp aspnetapp

# or for testing 
docker run -it --rm -p 8080:80 --name myapp aspnetapp
```

TODO: Set up docker
