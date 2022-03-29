
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
                docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
                '''
            }
        }
        stage('RUN CONTAINER') {
            steps {
                sh'''
                docker run -itd --name ghostscops -e VIRTUAL_HOST=ghostscops ghostscops:latest
                '''
            }
        }
    }
}