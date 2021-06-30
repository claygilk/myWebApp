# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/aspnet:5.0

# You must run "dotnet publish -c Release"
# in order for the following COPY to work
COPY ./bin/Release/net5.0/publish/ App/

WORKDIR /App
CMD ["dotnet", "myWebApp.dll"]