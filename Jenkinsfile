pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test'
            }
        }
        stage('e2e') {
            steps {
                sh 'docker build -t cs6261/server:testimage .'
            }
            steps {
                sh 'docker run --name testcontainer -d -v ${PWD}:/app -v/app/node_modules -p 4200:4200 --rm cs6261/server:testimage'
            }
            steps {
                sh './node_modules/protractor/bin/webdriver-manager update'
            }
            steps {
                sh 'ng e2e --devServerTarget='
            }
        }
        stage('Deploy') {
            steps {
                echo 'Not yet implemented'
            }
        }
    }
    post {
        always {
            sh 'docker rmi testimage || true'
            sh 'docker rm testcontainer || true'
        }
    }
}
