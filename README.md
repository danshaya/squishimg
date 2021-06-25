# squishimg
Image compression web application built with Angular 12 and Java spring boot using MySQLdatabase.

## Requirements
1. Java 11
2. Angular CLI
3. MySql
4. NPM

## How to run
### Check angular application has been compiled
The compiled frontend app has been included in the repo. Should any changes need to be made, it can be found in the directory 
```
src/main/resources/static/frontend
```

For a development build, run
```bash
ng build --configuration development
```
For production build, run 
```bash
ng build
```

### Setup database credentials
Rename application.sample.properties to application.properties. The file can be found at
```
src/main/resources
```

### Execute!
If you're running on linux,
```bash
./mvnw spring-boot:run
```
If you're on Windows,
```bash
mvnw spring-boot:run
```

The web application will run on port 8080 by default. Navigate to ```http://localhost:8080``` on your browser.
