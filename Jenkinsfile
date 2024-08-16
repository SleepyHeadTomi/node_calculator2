pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo "Building application"
                sh "npm install"
            }
        }

        stage("Unit Tests") {
            steps {
                echo "Performing Unit Tests"
                sh "npm run unit-test"
            }
        }

        stage("Integration Tests") {
            steps {
                echo "Performing Integration Tests"
                sh "npm run integration-test"
            }
        }
    }
}