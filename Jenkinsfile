pipeline {
    agent any
    stages {
        stage('Deploy with Docker Compose') {
            steps {
                echo 'Building and deploying application...'
                sh 'docker-compose up --build -d'
            }
        }
        stage('Clean Up') {
            steps {
                echo 'Cleaning up old images...'
                sh 'docker image prune -f'
            }
        }
    }
}
