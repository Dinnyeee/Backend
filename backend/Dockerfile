FROM openjdk:17-jdk-alpine
LABEL authors="nemet"

ARG JAR_FILE=build/libs/*.jar

COPY ../build/libs/backend-0.0.1-SNAPSHOT.jar backend.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/backend.jar"]