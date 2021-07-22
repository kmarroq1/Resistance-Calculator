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
            sh 'docker run -d -v ${PWD}:/app -p 4200:4200 --name testcontainer cs6261/server:testimage'
            sleep 30
            sh './node_modules/protractor/bin/webdriver-manager update'
            sh 'ng e2e --devServerTarget='
          }
        }
        stage('Deploy') {
          steps {
            sh 'docker build -t cs6261/server:productimage .'
            sh 'docker run -d -v ${PWD}:/app -p 5000:4200 --name productcontainer cs6261/server:testimage'
            sleep 30
            sh './node_modules/protractor/bin/webdriver-manager update'
            sh 'ng e2e --devServerTarget='
          }
        }
    }
    post {
        always {
          sh 'docker rmi -f cs6261/server:testimage || true'
          sh 'docker rm -f testcontainer || true'
        }
    }
}
