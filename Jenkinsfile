pipeline {
    // Telling Jenkins to run the pipeline on any available agent.
    agent any
    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Siddhartha-Sunkara/new.git'
            }
        }
        
        // This stage is telling Jenkins to run in the frontend directory and backend directory.
        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm.cmd install'
                }
            }
        }
        
        // This stage is telling Jenkins to build the images for the frontend.
        stage('Build Frontend and Backend Images') {
            steps {
                script {
                    bat 'docker build -t shivank07/travel-guru:frontend frontend'
                }
            }
        }
        // This stage is pushing images to dockerhub.
        stage('Push Images to Hub') {
            steps {
                withDockerRegistry([ credentialsId: "shivank-dockerhub", url: "" ]) {
                    bat 'docker push shivank07/travel-guru:frontend'
                }
            }
        }
    }
    post {
        always {
            // This block will always be executed, regardless of the build result
            bat 'docker logout'
        }

    }
}