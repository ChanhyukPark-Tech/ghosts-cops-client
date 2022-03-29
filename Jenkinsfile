
pipeline {
    agent any

    stages {
        stage('BUILD IMAGE') {
            steps {
                sh '''
                if test ! -z "$(docker ps -af name=ghostscops | grep -w ghostscops$)"; then
                    docker stop ghostscops && docker rm ghostscops
                fi
                docker build -t ghostscops .
                '''
            }
        }
        stage('RUN CONTAINER') {
            steps {
                sh'''
                docker run -itd --name ghostscops -p 80:80 ghostscops:latest
                '''
            }
        }
    }
}