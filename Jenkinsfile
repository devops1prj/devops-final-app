pipeline {
    agent any
    stages {
        stage('Deploy with Docker Compose') {
    steps {
        echo 'Stopping and removing old containers...'
        // This command stops and removes all containers defined in the docker-compose.yml file
        sh 'docker-compose down'
        
        echo 'Building and deploying new application...'
        // This command now builds and starts fresh containers
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