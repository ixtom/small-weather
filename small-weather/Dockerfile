FROM maven:3.9-eclipse-temurin-25 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:25-jdk
COPY --from=build /target/small-weather-0.0.1-SNAPSHOT.jar small-weather.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","small-weather.jar"]