pipeline {
    agent any

    stages 
    {
    	stage('unit Test') {
            steps {
                echo 'unit Testing..'
            }
        }

        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        
        stage('finalBuild') {
            steps {
                echo 'building....'
            }
            post {
                always {
                    archiveArtifacts artifacts: '**/README.md'
                }
            }
        }
        
        
    }
}
