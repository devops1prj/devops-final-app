pipeline {
    agent any
    stages {
        stage('Deploy with Docker Compose') {
            steps {
                echo 'Building and deploying application...'
                
                // --- MODIFICATION STARTS HERE ---

                // Step 1: Force a clean rebuild of the backend image, ignoring the cache.
                // The frontend will still build normally (using the cache if possible).
                echo 'Forcing a no-cache build for the backend...'
                sh 'docker-compose build --no-cache backend'
                
                // Step 2: Build any other services (like frontend) if they have changed.
                echo 'Building other services if needed...'
                sh 'docker-compose build frontend'
                
                // Step 3: Start all services in the background from the newly built images.
                echo 'Starting all containers...'
                sh 'docker-compose up -d'

                // --- MODIFICATION ENDS HERE ---
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