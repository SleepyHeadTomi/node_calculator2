pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                sh "echo Building application"
                sh "npm install"
            }
        }

        stage("Unit Tests") {
            steps {
                sh "echo Performing Unit Tests"
                sh "npm run unit-test"
            }
        }

        stage("Integration Tests") {
            steps {
                sh "echo Performing Integration Tests"
                sh "npm run integration-test"
            }
        }
    }
}