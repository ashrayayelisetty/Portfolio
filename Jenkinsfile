pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/ashrayayelisetty/Portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t raya-portfolio .'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag raya-portfolio ashrayayelisetty/raya-portfolio:v1'
            }
        }

        stage('Push Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                    sh 'docker push ashrayayelisetty/raya-portfolio:v1'
                }
            }
        }
    }
}
