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
        sh 'docker run -d -v ${PWD}:/app -v/app/node_modules -p 4200:4200 --rm cs6261/server:testimage --name testcontainer'
        sh './node_modules/protractor/bin/webdriver-manager update'
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
      sh 'docker rmi -f testimage || true'
      sh 'docker rm -f testcontainer || true'
        }
    }
}
