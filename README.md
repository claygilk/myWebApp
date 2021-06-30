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

## Docker

The Dockerfile in this project is a simplified version of [this](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/docker/building-net-docker-images?view=aspnetcore-5.0)
