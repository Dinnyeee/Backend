FROM openjdk:17-jdk-alpine
LABEL authors="nemet"

ARG JAR_FILE=build/libs/*.jar

COPY ../build/libs/backend-0.0.1-SNAPSHOT.jar backend.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "-Dspring.datasource.url=jdbc:postgresql://db:5432/nemeth","/backend.jar"]